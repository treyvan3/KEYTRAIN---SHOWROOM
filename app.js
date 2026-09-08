const products = {
  halo: {number:'01', category:'SYSTEM VISIBILITY', title:'Clarity starts<br>with <em>Halo.</em>', description:'Your team needs to know what deserves attention. Halo brings system health, security insight, and in-app learning into an approachable interface.', features:['System health','Threat insights','Human risk'], takeaway:'Know what needs your attention.<br>Keep your mission in focus.', heading:'KEYTRAIN HALO', label:'ACTUAL PRODUCT IMAGE', caption:'Official website image · Click to inspect', link:'https://keytrainsecure.com/keytrain-halo-%2B-railnet', linkText:'Explore Halo on KeyTrain', step:0},
  railnet: {number:'02', category:'SHARED INTELLIGENCE', title:'One insight.<br><em>Wider protection.</em>', description:'Explore how anonymized threat signals can help organizations learn from one another. RailNet adds shared intelligence to the Halo experience.', features:['Anonymized signals','Threat correlation','Early awareness'], takeaway:'A wider perspective on emerging threats.<br>Built around organizational privacy.', heading:'RAILNET INTELLIGENCE', label:'CONCEPTUAL NETWORK', caption:'Illustrative connections · No live telemetry', link:'https://keytrainsecure.com/keytrain-halo-%2B-railnet', linkText:'Explore RailNet on KeyTrain', step:1},
  learning: {number:'03', category:'PEOPLE & AWARENESS', title:'Knowledge becomes<br><em>confidence.</em>', description:'Give your people the knowledge to recognize risk and respond with confidence. Manage courses, follow progress, and create learning for your organization.', features:['Custom courses','Learning outcomes','Team progress'], takeaway:'Practical knowledge for real situations.<br>Awareness that goes beyond a checkbox.', heading:'KEYTRAIN LEARNING', label:'FROM THE KEYTRAIN WEBSITE', caption:'Official product screenshot · Static preview', link:'https://keytrainsecure.com/keytrain-learning', linkText:'Explore KeyTrain Learning', step:3},
  hooked: {number:'04', category:'PHISHING SIMULATION', title:'A safer place<br>to <em>learn a lesson.</em>', description:'Put awareness into practice with realistic phishing simulations. See where your team needs support and connect those moments to targeted follow-up training.', features:['Custom campaigns','Click-rate insights','Follow-up training'], takeaway:'Measure awareness in action.<br>Make the next decision a better one.', heading:'HOOKeD', label:'FROM THE KEYTRAIN WEBSITE', caption:'Official product screenshot · Static preview', link:'https://keytrainsecure.com/hooked', linkText:'Explore HOOKeD on KeyTrain', step:2}
};
let selected='halo', lastFocus=null;
const $=id=>document.getElementById(id);
function selectProduct(key){
 if(!products[key])return;
 selected=key; const p=products[key];
 $('product-number').textContent=p.number+' / 04'; $('small-index').textContent=p.number;
 $('product-category').textContent=p.category; $('product-title').innerHTML=p.title;
 $('product-description').textContent=p.description;
 $('product-features').replaceChildren(...p.features.map(text=>{const el=document.createElement('span');el.textContent=text;return el}));
 $('product-takeaway').innerHTML=p.takeaway;
 $('scene-heading').textContent=p.heading; $('scene-label').textContent=p.label; $('scene-caption').textContent=p.caption;
 $('product-link').href=p.link; $('product-link').textContent=p.linkText+' ↗';
 document.querySelectorAll('.scene').forEach(el=>{el.hidden=el.id!=='scene-'+key;el.classList.toggle('active',!el.hidden)});
 document.querySelectorAll('.product-tab').forEach(el=>{const active=el.dataset.product===key;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active))});
 history.replaceState(null,'','#'+key);
 renderBuyerDetails(key);
}
document.querySelectorAll('.product-tab').forEach((button,index,buttons)=>{
 button.addEventListener('click',()=>selectProduct(button.dataset.product));
 button.addEventListener('keydown',event=>{let target;if(event.key==='ArrowRight')target=(index+1)%buttons.length;if(event.key==='ArrowLeft')target=(index+buttons.length-1)%buttons.length;if(event.key==='Home')target=0;if(event.key==='End')target=buttons.length-1;if(target!==undefined){event.preventDefault();buttons[target].focus();selectProduct(buttons[target].dataset.product)}})
});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
function setMotion(paused){document.body.classList.toggle('paused',paused);$('motion-toggle').setAttribute('aria-pressed',String(paused));$('motion-toggle').innerHTML=paused?'<span aria-hidden="true">▶</span> Resume motion':'<span aria-hidden="true">Ⅱ</span> Pause motion'}
setMotion(reducedMotion.matches);
$('motion-toggle').addEventListener('click',()=>setMotion(!document.body.classList.contains('paused')));
reducedMotion.addEventListener('change',event=>setMotion(event.matches));
function renderBuyerDetails(key){
 const d=buyerDetails[key];
 $('plan-comparison').hidden=!['halo','railnet'].includes(key);
 for(const [id,value] of Object.entries({'buyer-kicker':d.kicker,'buyer-title':d.title,'buyer-problem':d.problem,'proof-title':d.evidence,'proof-description':d.proof,'buyer-why':d.why,'buyer-fit':d.fit,'buyer-question':d.question}))$(id).textContent=value;
 $('capability-cards').replaceChildren(...d.capabilities.map((item,index)=>{const article=document.createElement('article');const number=document.createElement('span');number.className='capability-number';number.textContent='0'+(index+1);const title=document.createElement('h3');title.textContent=item[0];const body=document.createElement('p');body.textContent=item[1];article.append(number,title,body);return article}));
 $('proof-image').src=d.image;$('proof-image').alt=d.alt;$('proof-open').dataset.image=d.image;$('proof-open').dataset.caption=d.alt+' — published by KeyTrain';$('proof-source').href=d.source;
}
const baseCapabilities=['Anomaly-based intrusion detection','Signature-based intrusion detection','Heuristic-based intrusion detection','Signature-based intrusion prevention','Phishing detection / mailbox alerting','Patch management','Vulnerability management','AI threat detection','Firewall management','System hygiene','Unified risk scoring','Log analysis','Adaptive in-app training','Simplified dashboard','Customer support'];
const railnetCapabilities=['Shared threat intelligence','AI-powered trend analysis','Executive reporting','Compliance documentation generation','Actionable security intelligence'];
$('comparison-rows').replaceChildren(...[...baseCapabilities,...railnetCapabilities].map((name,index)=>{const row=document.createElement('tr');const title=document.createElement('th');title.scope='row';title.textContent=name;const base=document.createElement('td');base.textContent=index<baseCapabilities.length?'Included':'—';const plus=document.createElement('td');plus.textContent='Included';row.append(title,base,plus);return row}));
document.querySelectorAll('[data-halo-view]').forEach(button=>button.addEventListener('click',()=>{const training=button.dataset.haloView==='training';const src=training?'assets/halo-dashboard.png':'assets/halo-overview.png';const caption=training?'Actual Halo in-app training and system-health interface':'Actual Halo security-status interface';const image=document.querySelector('.actual-halo img');image.src=src;image.alt=caption;document.querySelectorAll('#scene-halo .image-open').forEach(el=>{el.dataset.image=src;el.dataset.caption=caption+' — published by KeyTrain'});document.querySelector('.callout-one strong').textContent=training?'Awareness inside the tool':'Review your security status';document.querySelector('.callout-one small').textContent=training?'In-app security training':'The actual Halo status view';document.querySelectorAll('[data-halo-view]').forEach(el=>{const active=el===button;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active))})}));
function openProductImage(src,caption){lastFocus=document.activeElement;$('expanded-image').src=src;$('expanded-image').alt=caption;$('image-title').textContent=caption;$('image-original').href=src;$('image-dialog').showModal();document.body.style.overflow='hidden';$('close-image').focus()}
document.addEventListener('click',event=>{const button=event.target.closest('.image-open');if(button)openProductImage(button.dataset.image,button.dataset.caption)});
$('close-image').addEventListener('click',()=>$('image-dialog').close());
$('image-dialog').addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus()});
$('image-dialog').addEventListener('click',event=>{if(event.target===$('image-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close()}});
let serviceSelected='it';
function selectService(key){
 const d=serviceDetails[key];if(!d)return;serviceSelected=key;
 for(const [id,value] of Object.entries({'service-name':d.name,'service-title':d.title,'service-problem':d.problem,'service-value':d.value,'service-fit':d.fit}))$(id).textContent=value;
 $('service-image').src=d.image;$('service-image').alt='KeyTrain '+d.name+' artwork from the company website';
 $('service-note').hidden=!d.note;$('service-note').textContent=d.note||'';
 $('service-steps').replaceChildren(...d.steps.map((text,index)=>{const el=document.createElement('div');el.innerHTML='<span>0'+(index+1)+'</span>';const body=document.createElement('p');body.textContent=text;el.append(body);return el}));
 document.querySelectorAll('[data-service]').forEach(button=>{const active=button.dataset.service===key;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
}
$('service-nav').replaceChildren(...Object.entries(serviceDetails).map(([key,d])=>{const button=document.createElement('button');button.dataset.service=key;button.textContent=d.name;button.addEventListener('click',()=>selectService(key));return button}));
selectService('it');
$('copy-showroom').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);$('copy-status').textContent='Link copied.'}catch{$('copy-status').textContent='Copy this page’s address from your browser.'}});
// Six chapters, 15 seconds each. Pausing, changing a chapter, or leaving the tab stops progression.
let chapterIndex=0,storyPlaying=false,chapterElapsed=0,storyLast=0,storyFrame=0;
function currentAudience(){return audiences[$('audience-select').value]||audiences.business}
function chapterBody(index){const a=currentAudience();if(index===0)return a.opening;if(index===3)return a.example+' HOOKeD gives the team a controlled way to practice spotting a similar request.';return storyChapters[index].body}
function selectChapter(index,reset=true){
 chapterIndex=Math.max(0,Math.min(storyChapters.length-1,index));if(reset)chapterElapsed=0;const c=storyChapters[chapterIndex];
 $('chapter-label').textContent=c.label;$('chapter-count').textContent='0'+(chapterIndex+1)+' / 06';$('chapter-title').textContent=chapterIndex===0?currentAudience().mission:c.title;$('chapter-body').textContent=chapterBody(chapterIndex);$('chapter-point').textContent=c.point;
 $('chapter-explore').textContent=c.focus==='mission'?'Explore the products ↗':c.focus==='services'?'Explore all services ↗':'Explore '+(c.focus==='learning'?'KeyTrain Learning':c.focus==='hooked'?'HOOKeD':c.focus==='railnet'?'RailNet':'Halo')+' ↗';
 $('story-back').disabled=chapterIndex===0;$('story-next').disabled=chapterIndex===storyChapters.length-1;
 document.querySelectorAll('[data-chapter]').forEach(button=>{const active=Number(button.dataset.chapter)===chapterIndex;button.classList.toggle('active',active);button.setAttribute('aria-current',active?'step':'false')});
 document.querySelectorAll('[data-focus]').forEach(button=>{const active=button.dataset.focus===c.focus;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});
 $('story-progress-fill').style.width=(chapterElapsed/15000*100)+'%';
 window.dispatchEvent(new CustomEvent('keytrain-focus',{detail:c.focus}));
 if(!reducedMotion.matches&&$('chapter-title').animate){for(const id of ['chapter-title','chapter-body','chapter-point'])$(id).animate([{opacity:.2,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:350,easing:'ease-out'})}
}
function setStoryPlaying(playing){
 storyPlaying=playing;$('story-play').setAttribute('aria-pressed',String(playing));$('story-play').textContent=playing?'Ⅱ Pause story':chapterIndex===5&&chapterElapsed>=15000?'↻ Replay story':'▶ Play the story';
 cancelAnimationFrame(storyFrame);storyLast=0;if(playing)storyFrame=requestAnimationFrame(advanceStory);
}
function advanceStory(now){
 if(!storyPlaying)return;if(storyLast)chapterElapsed+=Math.min(now-storyLast,200);storyLast=now;
 if(chapterElapsed>=15000){if(chapterIndex===5){chapterElapsed=15000;$('story-progress-fill').style.width='100%';setStoryPlaying(false);return}selectChapter(chapterIndex+1)}
 $('story-progress-fill').style.width=(chapterElapsed/15000*100)+'%';storyFrame=requestAnimationFrame(advanceStory);
}
function chooseChapter(index){setStoryPlaying(false);selectChapter(index)}
$('chapter-nav').replaceChildren(...storyChapters.map((chapter,index)=>{const button=document.createElement('button');button.dataset.chapter=index;const number=document.createElement('span');number.textContent='0'+(index+1);button.append(number,document.createTextNode(chapter.name));button.addEventListener('click',()=>chooseChapter(index));return button}));
$('story-back').addEventListener('click',()=>chooseChapter(chapterIndex-1));$('story-next').addEventListener('click',()=>chooseChapter(chapterIndex+1));
$('story-play').addEventListener('click',()=>{if(!storyPlaying&&chapterIndex===5&&chapterElapsed>=15000)selectChapter(0);setStoryPlaying(!storyPlaying)});
$('audience-select').addEventListener('change',()=>{setStoryPlaying(false);selectChapter(0);$('conversation-prompt').textContent=currentAudience().takeaway});
document.querySelectorAll('[data-focus]').forEach(button=>button.addEventListener('click',()=>chooseChapter(storyChapters.findIndex(chapter=>chapter.focus===button.dataset.focus))));
window.addEventListener('keytrain-select',event=>{const index=storyChapters.findIndex(c=>c.focus===event.detail);if(index>=0)chooseChapter(index)});
function scrollToSection(id){$(id).scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'start'})}
$('chapter-explore').addEventListener('click',()=>{setStoryPlaying(false);const focus=storyChapters[chapterIndex].focus;if(focus==='services'){scrollToSection('services')}else if(products[focus]){selectProduct(focus);scrollToSection('why-product')}else{scrollToSection('showroom')}});
$('walkthrough').addEventListener('click',()=>{selectChapter(0);scrollToSection('keytrain-story');setStoryPlaying(true)});
document.addEventListener('visibilitychange',()=>{if(document.hidden)setStoryPlaying(false)});
new IntersectionObserver(entries=>{if(!entries[0].isIntersecting&&storyPlaying)setStoryPlaying(false)},{threshold:0}).observe($('keytrain-story'));
selectChapter(0);
const initial=location.hash.slice(1);if(products[initial])selectProduct(initial);else renderBuyerDetails('halo');
window.addEventListener('hashchange',()=>{const key=location.hash.slice(1);if(products[key])selectProduct(key)});
