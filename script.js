/* Sahevan Family - main application */

/* ---------------- Navigation / pages ---------------- */
const pages=[...document.querySelectorAll(".page")];
const links=[...document.querySelectorAll("#nav a")];
const nav=document.getElementById("nav");
const mobileMenu=document.getElementById("mobileMenu");
const estateMenu=document.getElementById("estateMenu");
const estateMenuBtn=document.getElementById("estateMenuBtn");

function route(){
  const requested=(location.hash||"#home").slice(1);
  const id=pages.some(p=>p.id===requested)?requested:"home";
  pages.forEach(p=>p.classList.toggle("on",p.id===id));
  links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+id));
  nav.classList.remove("open");
  estateMenu.hidden=true;
  estateMenuBtn.setAttribute("aria-expanded","false");
  window.scrollTo({top:0,behavior:"smooth"});
}
addEventListener("hashchange",route);
route();

mobileMenu.addEventListener("click",()=>{
  nav.classList.toggle("open");
});
estateMenuBtn.addEventListener("click",()=>{
  estateMenu.hidden=!estateMenu.hidden;
  estateMenuBtn.setAttribute("aria-expanded",String(!estateMenu.hidden));
});
document.addEventListener("click",e=>{
  if(!estateMenu.contains(e.target)&&e.target!==estateMenuBtn){
    estateMenu.hidden=true;
    estateMenuBtn.setAttribute("aria-expanded","false");
  }
});

/* Home estate selector */
document.getElementById("estateSelect").addEventListener("change",e=>{
  if(e.target.value){ location.hash=e.target.value; e.target.value=""; }
});

/* ---------------- Theme ---------------- */
const themeButton=document.getElementById("th");
themeButton.addEventListener("click",()=>{
  const root=document.documentElement;
  const current=root.dataset.theme || (matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
  root.dataset.theme=current==="dark"?"light":"dark";
  localStorage.setItem("sahevan-theme",root.dataset.theme);
});
const savedTheme=localStorage.getItem("sahevan-theme");
if(savedTheme) document.documentElement.dataset.theme=savedTheme;

/* ---------------- Kursinama image ---------------- */
const img=document.getElementById("kursinamaImg");
const frame=document.getElementById("fr");
const missing=document.getElementById("imgMissing");
img.addEventListener("error",()=>{img.style.display="none";missing.style.display="block";});
img.addEventListener("click",()=>frame.classList.toggle("z"));

/* ---------------- Family tree ----------------
   Each node: [name, note, flag, children]
   flag: f=female, a=adoption
*/
const D=["Babu Kuar Singh","Born 1801",0,[
  ["Babu Bhauri Singh","Born 1820",0,[
    ["Babu Tek Narayan Singh","Adopted by Bhauri Singh; biological son of Shardha Singh; shifted to Manjhwe","a",[
      ["Babu Ganga Singh alias Babu Meghraj Singh","",0,[
        ["Genand Singh","",0,[["Babu Rameshwar Prasad Singh","",0,[["Vishwanath"],["Paras"]]]]],
        ["Faggu Singh","",0,[["Brij Kumari","m. Kali Prasad Singh, Karnauti","f",[
          ["Jagat Prasad Singh","",0,[["Ajay"],["Vijay"],["Viraj Prayaswama","Settled in Manjhwe"]]]],
          ["Gupteshwar Prasad Singh"],
          ["Harinandan Prasad Singh","Dedicated page available"]]]]],
        ["Jagarnath Singh","",0,[
          ["Ishwari Prasad Singh","",0,[["Avadh Bihari"],["Vake Bihari"],["Brij Bihari"],["Saket Bihari"],["Pramod Bihari"]]],
          ["Triveni Prasad Singh","No children; wife Satyabhama Devi, MP Jehanabad 1957–1967"]
        ]]
      ]]
    ]],
    ["Babu Shivdayal Prasad Singh","Born 1846; branch leading to Harinandan Prasad Singh","",[
      ["Raghunath Singh","",0,[["Yadunandan Prasad Singh","",0,[["Kailash Singh","",0,[["Shivdani Prasad Singh","",0,[["Manoj","",0,[["Saurav Kumar"],["Gaurav Kumar"],["Abhishek Kumar"],["Bittu Anand"]]],["Sanjeev","",0,[["Ayush Kumar"]]],["Mantu Kumar","",0,[["Sreyansh Kumar"]]]]]]]]]]]
    ]],
    ["Ayodhya Singh","",0,[["Sambhu Singh","",0,[["Daughter","m. Koloma","f"]]]],
    ["Sheetal Prasad Singh","Married at Bampur near Chandi-Ramghat",0,[
      ["Banaras Prasad Singh","",0,[
        ["Bhagirath Prasad Singh","Married at Dumrama near Nawada",0,[["Mrityunjay Prasad Singh","",0,[["Prakash Ranjan","Son Darshit; concrete business"],["Vikash Ranjan","Son Gyan; software engineer"]]]]],
        ["Birendra Prasad Singh","Married Panpati Devi of Bandhawa, Aurangabad",0,[["Prabhavati Devi","m. Dr. Bimal Prasad Singh","f"]]]
      ]],
      ["Harinandan Prasad Singh","Married Shiv Jyoti Devi of Jamuwan near Tajpur",0,[
        ["Madan Murari Prasad Singh","Married Hiramani Devi of Bandhwa, Aurangabad",0,[
          ["Arunjay Prasad Singh","Engineer / Managing Director",0,[["Parijat Dhawal","IIT Kharagpur; Michigan MBA"],["Sushnat Nirmal","m. Meneka of Parepur near Bihta","",[["Laddu"]]]]],
          ["Dhananjay Prasad Singh","m. Nirmala Devi of Jehanabad",0,[["Pankaj Kumar","",0,[["Priyanshu"]]]]],
          ["Shashi Ranjan","m. Madhurima Pandey of Sitalpur, Chhapra",0,[["Nishikant","Specialised computer engineer"],["Rishikant"]]],
          ["Shashank Shekhar","m. Nivedita Manju of Rampur Sinday near Sheikhpura",0,[["Nalini Kant","Specialised electronics engineer"]]],
          ["Ravi Ranjan","m. Kanchana of Narauli, Nawada; Director at NXP Semiconductors",0,[["Aarav Ritvik Singh"]]]
        ]],
      ],
      ["Rajdev Narayan Singh","m. Shanti Devi of Balwa, Jehanabad; no issue"]
    ]],
  ]],
  ["Babu Horil Singh","Born 1823; wife Chhet Kuwer; built Shivala, 1270 Fasli",0,[["Mahadev Singh","issueless"]]],
  ["Babu Shardha Singh","Born 1826",0,[
    ["Babu Gopal Singh","Remained at Kajoor",0,[["Hiraman Singh","",0,[["Shahdeo Narayan Singh","",0,[["Rameshwar Prasad Singh","wife Shiv Pyari Kuar; no issue"]]]]]]],
    ["Babu Tek Narayan Singh","Given in adoption to Bhauri Singh; shifted to Manjhwe","a"]
  ]],
  ["Babu Jeet Singh","Born 1830",0,[
    ["Teri Singh","",0,[["Jhamman Singh","",0,[["Dwarika Singh","",0,[["Harihar Singh","",0,[["Jagdish Narayan Singh","",0,[["Chakradhar Prasad Singh alias Jhulan Prasad Singh","",0,[["Ramjanam Singh (Durga)","",0,[["Sudarshan Kumar","",0,[["Vivan"]]]]]]]]]]]]]]]],
    ["Shankar Singh","",0,[["Vanshidhar Singh","",0,[["Rajdev Singh","unmarried"]]],["Kamla Singh","",0,[["Chandeshwar Prasad Singh","",0,[["Shyam Bihari","",0,[["Vaysh","",0,[["Santosh Kumar"],["Second Kumar"]]],["Tiro","issueless"]]],["Brij Bihari","issueless"],["Avadh Bihari","",0,[["Akhilesh Prasad Singh","",0,[["Kamal Nayan"]]],["Mithilesh Prasad Singh","",0,[["Chamcham","2 sons"]]],["Surendra Prasad Singh","",0,[["Manish Kumar"],["Rohit Kumar"]]]]]]]]]],
    ["Ramadhar Prasad Singh","",0,[["Naresh Prasad Singh","",0,[["Saket Bihari","",0,[["Laddu"]]]]],["Umesh Kumar","",0,[["Vikash Kumar","1 son"],["Rakesh Kumar","",0,[["Kahaniya"]]]]],["Janardhan Prasad Singh","",0,[["Abnikant","",0,[["Jayant Raj"]]],["Gopal","",0,[["Gyan"]]]]],["Vinay Prasad Singh","",0,[["Diwakar Kumar","2 sons"],["Anand Kant","2 sons"]]]]]
  ]],
  ["Samman Singh","",0,[["Nem Narayan Singh","",0,[["Bhagwat Singh","",0,[["Govind Prasad Singh","",0,[["Shiv Kumari","m. Mirganj","f",[["Umashankar"],["Shivshankar"],["Gaurishankar"],["Jayshankar"],["Fantush"]]],["Sudan","","f",[["Raghuraj Kishor Prasad Singh","",0,[["Chandan Kumar"]]],["Sri Rajkumar","",0,[["Anand Shankar"]]],["Ravindra Bharti","",0,[["Harsh Kumar"]]]]],["Urmila","","f",[["Krishna Kumar (Tuntun)","issueless"],["Santosh Kumar","",0,[["Manish"]]],["Gayatri Chand Panth","1 son"]]]]]]]]]],
  ["Pheran Singh","",0,[["Lakhpat Singh","shifted to Pipra",0,[["Bharam Dev Singh","",0,[["Rameshwar Singh"]]],["Visho Singh","",0,[["Vano Singh","",0,[["Chandar Singh","shifted to Karishoba"]]],["Kailash Singh"]]]]]]
]]]]]]];

const tr=document.getElementById("tr");

/* ---------------- Family tree renderer ----------------
   The dynasty data above is the source of truth for the interactive tree.
   Every node with children is rendered as an expandable ancestor -> descendant branch.
*/
function makeTreeNode(node){
  const name=node?.[0] ?? "";
  const note=node?.[1] ?? "";
  const flag=node?.[2] ?? 0;
  const children=Array.isArray(node?.[3]) ? node[3] : [];
  const li=document.createElement("li");
  li.className="tree-node";
  li.dataset.name=name.toLowerCase();

  const label=document.createElement("span");
  label.className=(flag==="f"?"f ":"")+(flag==="a"?"ad":"");
  label.textContent=name;
  if(note){
    const sm=document.createElement("small");
    sm.textContent=" — "+note;
    label.appendChild(sm);
  }

  if(children.length){
    const details=document.createElement("details");
    details.className="tree-branch";
    const summary=document.createElement("summary");
    summary.appendChild(label);
    details.appendChild(summary);
    const ul=document.createElement("ul");
    ul.className="tree-children";
    children.forEach(child=>ul.appendChild(makeTreeNode(child)));
    details.appendChild(ul);
    li.appendChild(details);
  }else{
    label.classList.add("leaf");
    li.appendChild(label);
  }
  return li;
}

tr.replaceChildren(makeTreeNode(D));
const rootBranch=tr.querySelector(":scope > li > details");
if(rootBranch) rootBranch.open=true;

function tg(open){
  tr.querySelectorAll("details.tree-branch").forEach(d=>d.open=open);
}
window.tg=tg;

/* Open the complete ancestor path for a searched person. */
function openParents(li){
  let el=li.parentElement;
  while(el && el!==tr){
    if(el.matches("details.tree-branch")) el.open=true;
    el=el.parentElement;
  }
}

const treeSearch=document.getElementById("treeSearch");
const treeCount=document.getElementById("treeCount");
function searchTree(){
  const q=treeSearch.value.trim().toLowerCase();
  const nodes=[...tr.querySelectorAll("li.tree-node")];
  nodes.forEach(n=>{n.hidden=false;n.dataset.hit="0";});
  if(!q){
    treeCount.textContent="";
    return;
  }
  let matches=0;
  nodes.forEach(li=>{
    const text=li.textContent.toLowerCase();
    if(text.includes(q)){
      li.dataset.hit="1";
      matches++;
      openParents(li);
    }
  });
  /* Keep ancestors of matching descendants visible. */
  [...nodes].reverse().forEach(li=>{
    const descendantHit=[...li.querySelectorAll("li.tree-node")].some(x=>x.dataset.hit==="1");
    if(li.dataset.hit!=="1" && !descendantHit) li.hidden=true;
    else openParents(li);
  });
  treeCount.textContent=`${matches} matching ${matches===1?"person/branch":"people/branches"}`;
}
treeSearch.addEventListener("input",searchTree);

/* ---------------- Site-wide enquiry engine ----------------
   It searches:
   1) the complete family tree above;
   2) all visible website page text;
   3) the structured facts below;
   4) the Kursinama image metadata/alt text.
   No network/API is required, so it also works on GitHub Pages offline.
*/
const facts=[
  {names:["babu kuar singh","kuar singh","babu kuer singh"],birth:"1801",father:"not recorded",children:"Babu Bhauri Singh (1820), Babu Horil Singh (1823), Babu Shardha Singh (1826), and Babu Jeet Singh (1830)",role:"ancestor at the beginning of the dynasty chart"},
  {names:["babu bhauri singh","bhauri singh"],birth:"1820",father:"Babu Kuar Singh",children:"Babu Shivdayal Prasad Singh and adopted son Babu Tek Narayan Singh",role:"elder son and purchaser of the zamindari according to the family history"},
  {names:["babu shardha singh","shardha singh","sardha singh"],birth:"1826",father:"Babu Kuar Singh",children:"Babu Gopal Singh and Babu Tek Narayan Singh",role:"biological father of Babu Tek Narayan Singh"},
  {names:["tek narayan singh","teknarayan singh"],father:"Babu Shardha Singh",adoptedBy:"Babu Bhauri Singh",children:"Babu Ganga Singh alias Babu Meghraj Singh",residence:"Manjhwe",role:"founder of the Manjhwe Estate branch"},
  {names:["babu ganga singh","ganga singh","babu meghraj singh","meghraj singh"],father:"Babu Tek Narayan Singh",children:"Genand Singh, Faggu Singh, and Jagarnath Singh"},
  {names:["genand singh"],father:"Babu Ganga Singh alias Babu Meghraj Singh",children:"Babu Rameshwar Prasad Singh"},
  {names:["rameshwar prasad singh"],father:"Genand Singh",children:"Vishwanath and Paras"},
  {names:["faggu singh"],father:"Babu Ganga Singh alias Babu Meghraj Singh",children:"Brij Kumari"},
  {names:["brij kumari"],father:"Faggu Singh",spouse:"Kali Prasad Singh of Karnauti, Muzaffarpur district",children:"Jagat Prasad Singh, Gupteshwar Prasad Singh, and Harinandan Prasad Singh"},
  {names:["jagat prasad singh"],mother:"Brij Kumari",children:"Ajay, Vijay, and Viraj Prayaswama",residence:"Viraj Prayaswama is settled in Manjhwe"},
  {names:["gupteshwar prasad singh"],mother:"Brij Kumari",father:"Kali Prasad Singh (family branch)"},
  {names:["harinandan prasad singh","harinandan singh"],father:"Sheetal Prasad Singh",grandfather:"Shivdayal Prasad Singh (Born 1846)",greatGrandfather:"Babu Bhauri Singh (Born 1820)",greatGreatGrandfather:"Babu Kuar Singh (Born 1801)",spouse:"Shiv Jyoti Devi of Jamuwan near Tajpur",children:"Babu Madan Murari Prasad Singh",branch:"Manjhwe branch"},
  {names:["shivdayal prasad singh","shivdayal singh"],birth:"1846",father:"Babu Bhauri Singh",children:"The branch includes Sheetal Prasad Singh, through whom Harinandan Prasad Singh descends"},
  {names:["sheetal prasad singh"],father:"Shivdayal Prasad Singh",children:"Babu Banaras Prasad Singh, Babu Harinandan Prasad Singh, and Babu Rajdev Narayan Singh",residence:"Bampur near Chandi-Ramghat"},
  {names:["banaras prasad singh","babu banaras prasad singh"],father:"Sheetal Prasad Singh",children:"Bhagirath Prasad Singh and Birendra Prasad Singh"},
  {names:["bhagirath prasad singh"],father:"Babu Banaras Prasad Singh",children:"Mrityunjay Prasad Singh",residence:"Dumrama near Nawada"},
  {names:["mrityunjay prasad singh"],father:"Bhagirath Prasad Singh",children:"Prakash Ranjan and Vikash Ranjan"},
  {names:["vikash ranjan"],father:"Mrityunjay Prasad Singh",child:"Gyan",occupation:"software engineer"},
  {names:["prakash ranjan"],father:"Mrityunjay Prasad Singh",child:"Darshit",occupation:"concrete business"},
  {names:["birendra prasad singh"],father:"Babu Banaras Prasad Singh",children:"Prabhavati Devi"},
  {names:["prabhavati devi"],father:"Birendra Prasad Singh",spouse:"Dr. Bimal Prasad Singh"},
  {names:["madan murari prasad singh","madan murari singh"],father:"Babu Harinandan Prasad Singh",spouse:"Hiramani Devi of Bandhwa, Aurangabad",children:"Arunjay Prasad Singh, Dhananjay Prasad Singh, Shashi Ranjan, Shashank Shekhar, and Ravi Ranjan"},
  {names:["arunjay prasad singh"],father:"Madan Murari Prasad Singh",children:"Parijat Dhawal and Sushnat Nirmal",occupation:"engineer / Managing Director"},
  {names:["parijat dhawal"],father:"Arunjay Prasad Singh",education:"B.Tech and M.Tech from IIT Kharagpur; MBA (Finance) from University of Michigan, USA",occupation:"finance-based entrepreneur"},
  {names:["sushnat nirmal"],father:"Arunjay Prasad Singh",spouse:"Meneka of Parepur near Bihta",child:"Laddu"},
  {names:["dhananjay prasad singh"],father:"Madan Murari Prasad Singh",spouse:"Nirmala Devi of Jehanabad",child:"Pankaj Kumar"},
  {names:["pankaj kumar"],father:"Dhananjay Prasad Singh",child:"Priyanshu"},
  {names:["shashi ranjan"],father:"Madan Murari Prasad Singh",spouse:"Madhurima Pandey of Sitalpur, Chhapra",children:"Nishikant and Rishikant"},
  {names:["nishikant"],father:"Shashi Ranjan",occupation:"specialised computer engineer"},
  {names:["rishikant"],father:"Shashi Ranjan"},
  {names:["shashank shekhar","tunni babu"],father:"Madan Murari Prasad Singh",spouse:"Nivedita Manju of Rampur Sinday near Sheikhpura",child:"Nalini Kant"},
  {names:["nalini kant"],father:"Shashank Shekhar",occupation:"specialised electronics engineer"},
  {names:["ravi ranjan"],father:"Madan Murari Prasad Singh",spouse:"Kanchana of Narauli, Nawada",child:"Aarav Ritvik Singh",occupation:"electronics engineer; currently Director at NXP Semiconductors"},
  {names:["aarav ritvik singh"],father:"Ravi Ranjan"},
  {names:["jagarnath singh"],father:"Babu Ganga Singh alias Babu Meghraj Singh",children:"Ishwari Prasad Singh and Triveni Prasad Singh"},
  {names:["ishwari prasad singh"],father:"Jagarnath Singh",children:"Avadh Bihari, Vake Bihari, Brij Bihari, Saket Bihari, and Pramod Bihari"},
  {names:["triveni prasad singh"],father:"Jagarnath Singh",children:"No children",spouse:"Satyabhama Devi",position:"associated with educational/public welfare initiatives in Hisua; family history associates him with Triveni Satyabhama College (T.S. College)"},
  {names:["satyabhama devi"],spouse:"Triveni Prasad Singh",position:"Member of Parliament from Jehanabad Lok Sabha constituency, 1957–1967"},
  {names:["babu horil singh","horil singh"],birth:"1823",father:"Babu Kuar Singh",spouse:"Chhet Kuwer",child:"Mahadev Singh",note:"family history says he built Shivala, 1270 Fasli"},
  {names:["babu jeet singh","jeet singh"],birth:"1830",father:"Babu Kuar Singh"},
  {names:["gopal singh","babu gopal singh"],father:"Babu Shardha Singh",residence:"Kajoor"},
  {names:["govind prasad singh"],branch:"Estate / zamindar page currently marked Coming Soon"},
  {names:["chakradhar prasad singh","jhulan prasad singh"],branch:"Estate / zamindar page currently marked Coming Soon"},
  {names:["kamla prasad singh"],branch:"Estate / zamindar page currently marked Coming Soon"}
];

function norm(s){
  return String(s||"").toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9\u0900-\u097f ]+/g," ").replace(/\s+/g," ").trim();
}

/* Flatten the actual tree so relationship questions are answered from D itself. */
function flattenTree(node,parent=null,out=[],path=[]){
  if(!Array.isArray(node)) return out;
  const [name="",note="",flag=0,children=[]]=node;
  const item={name,note,flag,parent,children:Array.isArray(children)?children.map(c=>c?.[0]).filter(Boolean):[],path:[...path,name]};
  out.push(item);
  (Array.isArray(children)?children:[]).forEach(c=>flattenTree(c,name,out,item.path));
  return out;
}
const treePeople=flattenTree(D);

function findTreePerson(query){
  const nq=norm(query);
  let best=null,bestLen=0;
  for(const p of treePeople){
    const n=norm(p.name);
    if(n && (nq.includes(n)||n.includes(nq)) && n.length>bestLen){best=p;bestLen=n.length;}
  }
  return best;
}

function findFact(query){
  const nq=norm(query);
  let best=null,bestLen=0;
  for(const f of facts){
    for(const n of f.names){
      const nn=norm(n);
      if(nn && nq.includes(nn) && nn.length>bestLen){best=f;bestLen=nn.length;}
    }
  }
  return best;
}

function siteText(){
  return [...document.querySelectorAll("main .page")].map(p=>p.innerText||p.textContent||"").join("\n");
}

function answerQuestion(question){
  const q=norm(question);
  if(!q) return "Please type a question.";

  const fact=findFact(q);
  const person=findTreePerson(q);
  const subject=fact?.names?.[0] || person?.name || "this person";

  /* Direct relationship answers from the actual tree. */
  if(person){
    if(/\bfather\b|\bparent\b|\bson of\b|\bdaughter of\b/.test(q)){
      return person.parent ? `${person.name}'s recorded father/parent is ${person.parent}.` : `The website does not record a father/parent for ${person.name}.`;
    }
    if(/\bchild\b|\bchildren\b|\bson\b|\bsons\b|\bdaughter\b|\bdaughters\b/.test(q)){
      return person.children.length ? `The recorded descendants directly under ${person.name} are: ${person.children.join(", ")}.` : `${person.name} has no recorded direct descendants in the interactive dynasty data.`;
    }
  }

  if(fact){
    if(/\bwhen\b|\bborn\b|\bbirth\b/.test(q) && fact.birth) return `${subject} was born in ${fact.birth}.`;
    if(/\bfather\b|\bparent\b|\bson of\b|\bdaughter of\b/.test(q) && fact.father) return `${subject}'s recorded father is ${fact.father}.`;
    if(/\bmother\b/.test(q) && fact.mother) return `${subject}'s recorded mother is ${fact.mother}.`;
    if(/\bwife\b|\bmarried\b|\bspouse\b|\bhusband\b/.test(q) && fact.spouse) return `${subject}'s recorded spouse/marriage information is: ${fact.spouse}.`;
    if(/\bchildren\b|\bsons\b|\bdaughters\b|\bchild\b/.test(q) && (fact.children||fact.child)) return `The recorded children of ${subject} are: ${fact.children||fact.child}.`;
    if(/\bjob\b|\bwork\b|\boccupation\b|\bengineer\b|\bposition\b|\brole\b/.test(q) && (fact.occupation||fact.position||fact.role)) return `${subject}: ${fact.occupation||fact.position||fact.role}.`;
    if(/\beducation\b|\bstudied\b|\bdegree\b|\bcollege\b|\biit\b|\bmba\b/.test(q) && fact.education) return `${subject}'s recorded education is: ${fact.education}.`;
  }

  /* General site-wide question: return relevant page text when no structured relation exists. */
  const corpus=siteText();
  const terms=q.split(" ").filter(w=>w.length>2);
  const hits=terms.filter(t=>norm(corpus).includes(t));
  if(hits.length>=Math.min(2,terms.length)){
    const idx=norm(corpus).indexOf(hits[0]);
    const source=corpus.slice(Math.max(0,idx-120),Math.min(corpus.length,idx+520)).replace(/\s+/g," ").trim();
    return `The website records this related information: ${source}`;
  }

  return "I could not find a recorded answer in the website's current pages, dynasty data, or enquiry database. Please try the person's full name or a question such as who is their father, children, spouse, birth year, education, occupation, or branch.";
}

const queryInput=document.getElementById("queryInput");
const answerBox=document.getElementById("answerBox");
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
function ask(){
  const q=queryInput.value.trim();
  const answer=answerQuestion(q);
  answerBox.innerHTML=`<span>📜</span><div><strong>Answer</strong><p>${escapeHTML(answer)}</p></div>`;
}
document.getElementById("askBtn").addEventListener("click",ask);
queryInput.addEventListener("keydown",e=>{if(e.key==="Enter")ask();});
document.querySelectorAll(".suggestions button").forEach(b=>b.addEventListener("click",()=>{queryInput.value=b.dataset.q;ask();}));
