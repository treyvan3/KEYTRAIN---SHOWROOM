// Product facts come from the linked KeyTrain product pages and published images.
// Buyer situations and story examples are editorial illustrations, not customer results.
const buyerDetails = {
 halo: {
   kicker:'WHY HALO', title:'Make security easier to understand—and act on.',
   problem:'When system information lives in different places, the practical question gets lost: what needs our attention?',
   why:'A clear view gives the person responsible for security a better starting point for a conversation, an investigation, or a decision.',
   fit:'Teams that need approachable security visibility and want human awareness considered alongside technical signals.',
   capabilities:[['Find the signal','The published feature list includes intrusion detection, log analysis, and AI threat detection.'],['Manage the basics','Patch, vulnerability, firewall, and system-hygiene management appear in the Halo feature comparison.'],['Include the person','Unified risk scoring and adaptive in-app training connect technical and human factors.']],
   evidence:'Inspect the real interface', image:'assets/halo-dashboard.png', alt:'Actual Halo in-app training and health dashboard',
   proof:'The screen is taken directly from the Halo + RailNet product page. It shows in-app training and system-health gauges.',
   question:'Ask us to demonstrate the signals and controls that matter in your environment.',
   source:'https://keytrainsecure.com/keytrain-halo-%2B-railnet'
 },
 railnet: {
   kicker:'WHY ADD RAILNET',title:'Your organization does not have to learn alone.',
   problem:'A local view tells only part of the story. A pattern that looks isolated may be appearing in other environments.',
   why:'Shared context can help a team ask better questions sooner—and explain priorities to the people making decisions.',
   fit:'Organizations that want the Halo foundation plus shared intelligence and reporting for leadership.',
   capabilities:[['Broaden the context','Shared threat intelligence and AI-powered trend analysis are listed as RailNet additions.'],['Explain the priorities','The upgrade includes executive reporting and actionable security intelligence.'],['Support documentation','Compliance documentation generation is listed in the comparison. Documentation is not a certification or a compliance guarantee.']],
   evidence:'Compare Halo and Halo + RailNet',image:'assets/halo-features.png',alt:'Official comparison of Halo and Halo plus RailNet Intelligence',
   proof:'This comparison is the feature chart currently published by KeyTrain. Confirm plan scope with the team during your demo.',
   question:'Ask what is shared, how it is anonymized, and what your leadership would receive.',
   source:'https://keytrainsecure.com/keytrain-halo-%2B-railnet'
 },
 learning: {
   kicker:'WHY KEYTRAIN LEARNING',title:'Give people a better next decision.',
   problem:'Completing a course is only useful if a person can apply the lesson when a suspicious request arrives.',
   why:'Relevant learning gives managers a practical way to develop awareness, support their people, and see where follow-up is needed.',
   fit:'Organizations that want to manage team learning, tailor course content, and review progress in one place.',
   capabilities:[['Teach what is relevant','Create custom courses for your organization.'],['See learning progress','Manage courses and view results through the KTL dashboard.'],['Follow up with purpose','Pair learning with HOOKeD simulations to direct attention to awareness gaps.']],
   evidence:'Explore the learning workspace',image:'assets/learning-dashboard.png',alt:'Official KeyTrain Learning dashboard screenshot',
   proof:'The published KTL dashboard shows organization, user, course, and assignment views. The screenshot is static.',
   question:'Ask us to walk through a course, assignment, and results view for a team like yours.',
   source:'https://keytrainsecure.com/keytrain-learning'
 },
 hooked: {
   kicker:'WHY HOOKeD',title:'Discover the training need before a real mistake.',
   problem:'A team may know what phishing is and still miss a convincing message during a busy day.',
   why:'A controlled practice opportunity turns an abstract risk into a specific coaching moment—without waiting for a real incident.',
   fit:'Teams ready to evaluate phishing awareness and use the results to guide supportive follow-up.',
   capabilities:[['Make the practice relevant','Build custom phishing campaigns, or have KeyTrain create them.'],['See the response','Review click rates and campaign results.'],['Connect practice to learning','Assign remedial training to people who need additional support.']],
   evidence:'See the campaign workspace',image:'assets/hooked-1.png',alt:'Official HOOKeD campaign dashboard screenshot',
   proof:'The published HOOKeD interface shows a campaign library and campaign creation. This image does not run or send a campaign.',
   question:'Ask how a campaign would be scoped, approved, measured, and followed by training.',
   source:'https://keytrainsecure.com/hooked'
 }
};
const serviceDetails = {
 it:{name:'Cybersecurity & IT',title:'Keep everyday technology working for you.',problem:'When a network issue interrupts work, it also interrupts the mission your team came to carry out.',value:'Get practical help with network security, data protection, risk assessments, and IT support. KeyTrain also lists smart-home setup for residential needs.',fit:'Organizations or households that need help securing, connecting, or supporting their technology.',steps:['Discuss the environment','Identify the immediate need','Agree on the work and support'],ask:'Bring a recent IT problem and the devices or systems involved.',image:'assets/service-it.png'},
 consulting:{name:'Security consulting',title:'Move from uncertainty to an agreed next step.',problem:'You know security matters. Deciding where to begin can be the harder part.',value:'Work with KeyTrain to assess risk and plan practical changes around your environment and goals.',fit:'Leaders who need help prioritizing work or turning a security concern into a defined project.',steps:['Understand your goals','Review the risks','Define practical priorities'],ask:'Bring your top concerns, current tools, and the decisions you need to make.',image:'assets/service-consulting.png'},
 development:{name:'Web & app development',title:'Give customers a better digital experience.',problem:'An awkward website or manual process can make a useful business harder to work with.',value:'KeyTrain develops custom websites and web or mobile applications around business requirements.',fit:'Organizations that need a new website, a better customer journey, or a purpose-built application.',steps:['Map the user’s task','Define the experience','Scope the build'],ask:'Show us where customers or staff get stuck today.',image:'assets/service-web.png'},
 bootcamps:{name:'Cybersecurity bootcamps',title:'Build practical confidence in your team.',problem:'Technical terms alone do not prepare someone to recognize and work through a security problem.',value:'Bootcamps build cybersecurity knowledge and practical skills. Content is informed by the Security+ SY0-701 framework; KeyTrain is an independent provider.',fit:'Individuals or teams seeking structured cybersecurity skill development.',steps:['Discuss current experience','Choose learning priorities','Confirm the course format'],ask:'Tell us your experience level and the skills you want to develop.',note:'Training does not award certification or guarantee an exam result. KeyTrain is not affiliated with or endorsed by CompTIA.',image:'assets/service-bootcamp.png'},
 business:{name:'Business support',title:'See the numbers behind your next decision.',problem:'It is harder to plan when financial information is incomplete, scattered, or out of date.',value:'Support includes bookkeeping, financial reporting, reconciliations, budgets, forecasts, and business planning.',fit:'Organizations that need a stronger financial foundation or help preparing for growth.',steps:['Understand the business','Clarify the reporting need','Agree on the support'],ask:'Bring the business decision or recurring financial task you need help with.',image:'assets/service-business.png'}
};
const audiences = {
 business:{label:'Small business',mission:'Keep the business moving.',opening:'A growing business needs technology that supports its work—and people who know how to use it safely.',example:'A busy team receives an unexpected request to update payment details.',takeaway:'A useful first conversation: which systems support revenue, and who handles sensitive requests?'},
 church:{label:'Church',mission:'Keep your mission in focus.',opening:'Staff and volunteers have a mission to serve. Technology and security should support that work without demanding everyone become an expert.',example:'A volunteer receives a message that appears to come from a church leader asking for an urgent purchase.',takeaway:'A useful first conversation: how do staff and volunteers verify unusual requests?'},
 nonprofit:{label:'Nonprofit',mission:'Protect the work people depend on.',opening:'Your team’s attention belongs on the people you serve. Clear security information and practical learning can support that focus.',example:'A team member receives a request to share donor information through an unfamiliar link.',takeaway:'A useful first conversation: where is sensitive information handled, and what guidance do people receive?'},
 healthcare:{label:'Healthcare',mission:'Support the people behind care.',opening:'Administrative and clinical teams need reliable technology and clear guidance for handling sensitive information.',example:'An employee receives an unexpected request to open a document that appears to concern a patient.',takeaway:'A useful first conversation: which workflows handle sensitive information, and how are unusual requests verified?'}
};
const storyChapters = [
 {name:'Your mission',focus:'mission',title:'Your work comes first.',label:'START WITH THE BUYER',body:'',point:'The goal is a clearer, more practical approach to protecting systems and developing people.'},
 {name:'Understand',focus:'halo',title:'Know what needs attention.',label:'HALO · SYSTEMS',body:'Halo brings security insight, system health, and in-app training into an approachable view. Start with the signals that matter to your environment.',point:'Why it matters: the person responsible for security needs an understandable starting point.'},
 {name:'Connect',focus:'railnet',title:'Add context beyond your walls.',label:'RAILNET · INTELLIGENCE',body:'RailNet adds shared threat intelligence and reporting to Halo. The product is designed to turn anonymized signals into useful context.',point:'Why it matters: local observations become more useful when the wider pattern is understood.'},
 {name:'Practice',focus:'hooked',title:'Make awareness something you can observe.',label:'HOOKeD · PRACTICE',body:'',point:'Why it matters: realistic practice helps reveal where additional support would be useful.'},
 {name:'Learn',focus:'learning',title:'Give the team a better next decision.',label:'KEYTRAIN LEARNING · PEOPLE',body:'KTL supports custom courses and learning progress. Pair it with simulation results to make follow-up relevant to the people who need it.',point:'Why it matters: a result becomes an opportunity to teach, coach, and improve awareness.'},
 {name:'Get support',focus:'services',title:'Bring in the expertise you need.',label:'KEYTRAIN SERVICES · SUPPORT',body:'Combine the right products with scoped consulting, IT support, development, training, or business services. Start with your need, then decide what fits.',point:'The next step is a conversation about your organization—not a one-size-fits-all package.'}
];
