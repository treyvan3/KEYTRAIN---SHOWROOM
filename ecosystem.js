// Perspective-projected 3D diagram. Nodes represent offerings, not live systems.
(()=>{
const canvas=document.getElementById('ecosystem-canvas'),ctx=canvas.getContext('2d');
if(!ctx){canvas.replaceWith(document.createTextNode('Use the department buttons below to explore KeyTrain.'));return}
const nodes=[
 {id:'mission',label:'YOUR MISSION',sub:'The reason for the work',p:[0,0,0],size:33},
 {id:'halo',label:'HALO',sub:'Understand your systems',p:[-230,-30,-60],size:22},
 {id:'railnet',label:'RAILNET',sub:'See the wider pattern',p:[210,-34,-70],size:22},
 {id:'learning',label:'LEARNING',sub:'Develop your people',p:[195,105,80],size:22},
 {id:'hooked',label:'HOOKeD',sub:'Practice awareness',p:[-165,100,80],size:22},
 {id:'services',label:'SERVICES',sub:'Bring in expertise',p:[0,-155,30],size:22}
];
let width=0,height=0,yaw=.18,pitch=-.16,targetYaw=.18,targetPitch=-.16,focus='mission',visible=false,frame=0,last=0,time=0,drag=null,hitAreas=[];
const motion=()=>!document.body.classList.contains('paused')&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
function transform(p){const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch),x=p[0]*cy+p[2]*sy,z=-p[0]*sy+p[2]*cy,y=p[1]*cp-z*sp;return [x,y,p[1]*sp+z*cp]}
function project(p){const t=transform(p),perspective=850/(850-t[2]),scale=Math.min(width/730,height/430);return {x:width/2+t[0]*perspective*scale,y:height*.47+t[1]*perspective*scale,z:t[2],scale:perspective*scale}}
function path(points,stroke,lineWidth=1){ctx.beginPath();points.forEach((p,i)=>{const q=project(p);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y)});ctx.strokeStyle=stroke;ctx.lineWidth=lineWidth;ctx.stroke()}
function roundedRect(x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r)}
function cube(node,active){
 const [x,y,z]=node.p,s=node.size,verts=[[-s,-s,-s],[s,-s,-s],[s,s,-s],[-s,s,-s],[-s,-s,s],[s,-s,s],[s,s,s],[-s,s,s]].map(v=>[v[0]+x,v[1]+y,v[2]+z]);
 const faces=[[0,1,2,3],[4,7,6,5],[0,4,5,1],[3,2,6,7],[0,3,7,4],[1,5,6,2]].map((v,i)=>({v,i,z:v.reduce((a,j)=>a+transform(verts[j])[2],0)/4})).sort((a,b)=>a.z-b.z);
 const center=project(node.p);
 if(active){const glow=ctx.createRadialGradient(center.x,center.y,0,center.x,center.y,90*center.scale);glow.addColorStop(0,'rgba(185,25,32,.28)');glow.addColorStop(1,'rgba(185,25,32,0)');ctx.fillStyle=glow;ctx.fillRect(center.x-100*center.scale,center.y-100*center.scale,200*center.scale,200*center.scale)}
 faces.forEach(({v,i})=>{const points=v.map(j=>project(verts[j]));ctx.beginPath();points.forEach((q,j)=>j?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y));ctx.closePath();const g=ctx.createLinearGradient(center.x-40,center.y-35,center.x+30,center.y+50);const shades=active?['#7e1116','#bd2029','#e46a6f','#651216','#9a171f','#ce3841']:['#24282c','#565a5d','#929697','#303437','#44494c','#686c6e'];g.addColorStop(0,shades[i]);g.addColorStop(1,active?'#6e1015':'#222629');ctx.fillStyle=g;ctx.fill();ctx.strokeStyle=active?'#ec939577':'#bdc1c340';ctx.lineWidth=.8;ctx.stroke()});
 return center;
}
function draw(now){
 frame=0;if(!visible)return;const dt=last?Math.min((now-last)/1000,.05):0;last=now;if(motion())time+=dt;
 yaw+=(targetYaw-yaw)*.1;pitch+=(targetPitch-pitch)*.1;
 ctx.clearRect(0,0,width,height);
 // Perspective rings describe the shared system around the central mission.
 for(const radius of [150,235,315]){const points=[];for(let a=0;a<=Math.PI*2+.02;a+=.035)points.push([Math.cos(a)*radius,145,Math.sin(a)*radius]);path(points,'rgba(160,168,173,.13)',.8)}
 for(const n of nodes.slice(1)){
   const active=focus==='mission'||focus===n.id;path([[0,0,0],n.p],active?'rgba(204,69,76,.70)':'rgba(171,180,184,.25)',active?1.4:1);
   if(active&&motion()){const t=(time*.22+nodes.indexOf(n)*.18)%1,q=project(n.p.map(v=>v*t));ctx.beginPath();ctx.arc(q.x,q.y,2.6*q.scale,0,Math.PI*2);ctx.fillStyle='#efb8bb';ctx.shadowColor='#ed4651';ctx.shadowBlur=12;ctx.fill();ctx.shadowBlur=0}
 }
 const sorted=[...nodes].sort((a,b)=>transform(a.p)[2]-transform(b.p)[2]);hitAreas=[];
 sorted.forEach(n=>{const active=focus===n.id||(n.id==='mission'&&focus==='mission'),center=cube(n,active);hitAreas.push({node:n,x:center.x,y:center.y,r:Math.max(32,n.size*center.scale*1.8)});});
 // Screen-aligned labels stay readable while the diagram rotates.
 sorted.forEach(n=>{const q=project(n.p),active=focus===n.id,cy=q.y+n.size*q.scale*1.7+14,fontSize=width<450?11:13;ctx.font='600 '+fontSize+'px Karla, sans-serif';const labelWidth=Math.max(ctx.measureText(n.label).width+20,width<450?100:135);roundedRect(q.x-labelWidth/2,cy-12,labelWidth,width<450?38:43,5);ctx.fillStyle='rgba(20,23,25,.87)';ctx.fill();ctx.textAlign='center';ctx.fillStyle=active?'#ffbdc1':'#eee';ctx.fillText(n.label,q.x,cy+1);ctx.font=(width<450?'9':'11')+'px Karla, sans-serif';ctx.fillStyle='#a9afb2';ctx.fillText(n.sub,q.x,cy+18);const hit=hitAreas.find(h=>h.node===n);hit.label={x:q.x-labelWidth/2,y:cy-12,w:labelWidth,h:43}});
 frame=requestAnimationFrame(draw);
}
function resize(){const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);if(visible&&!frame)frame=requestAnimationFrame(draw)}
new ResizeObserver(resize).observe(canvas);
new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){last=0;if(!frame)frame=requestAnimationFrame(draw)}else{cancelAnimationFrame(frame);frame=0}},{rootMargin:'80px'}).observe(canvas);
window.addEventListener('keytrain-focus',event=>{focus=event.detail;});
canvas.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,moved:false};canvas.setPointerCapture(e.pointerId)});
canvas.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>5)drag.moved=true;if(drag.moved){targetYaw+=dx*.004;targetPitch=Math.max(-.65,Math.min(.45,targetPitch+dy*.0025))}drag.x=e.clientX;drag.y=e.clientY});
canvas.addEventListener('pointerup',e=>{if(drag&&!drag.moved){const rect=canvas.getBoundingClientRect(),x=e.clientX-rect.left,y=e.clientY-rect.top;const hit=[...hitAreas].reverse().find(h=>Math.hypot(x-h.x,y-h.y)<h.r||(h.label&&x>=h.label.x&&x<=h.label.x+h.label.w&&y>=h.label.y&&y<=h.label.y+h.label.h));if(hit)window.dispatchEvent(new CustomEvent('keytrain-select',{detail:hit.node.id}))}drag=null});
canvas.addEventListener('pointercancel',()=>{drag=null});
canvas.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')targetYaw-=.18;else if(e.key==='ArrowRight')targetYaw+=.18;else if(e.key==='ArrowUp')targetPitch=Math.max(-.65,targetPitch-.08);else if(e.key==='ArrowDown')targetPitch=Math.min(.45,targetPitch+.08);else if(e.key==='Home'){targetYaw=.18;targetPitch=-.16}else return;e.preventDefault()});
document.getElementById('map-left').addEventListener('click',()=>{targetYaw-=.25});document.getElementById('map-right').addEventListener('click',()=>{targetYaw+=.25});document.getElementById('map-reset').addEventListener('click',()=>{targetYaw=.18;targetPitch=-.16});
document.fonts.ready.then(resize);
})();
