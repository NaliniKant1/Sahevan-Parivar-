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
]];

const tr=document.getElementById("tr");

function mk(n){
  const [name="",note="",flag=0,ch]=n;
  const li=document.createElement("li");
  const cls=(flag==="f"?"f ":"")+(flag==="a"?"ad":"");
  const label=()=>{
    const s=document.createElement("span");
    s.className=cls;
    s.textContent=name;
    if(note){const sm=document.createElement("small");sm.textContent=" — "+note;s.appendChild(sm);}
    return s;
  };
  if(ch && ch.length){
    const d=document.createElement("details");
    const s=label();
    const summary=document.createElement("summary");
    summary.appendChild(s);
    d.appendChild(summary);
    const u=document.createElement("ul");
    ch.forEach(c=>u.appendChild(mk(c)));
    d.appendChild(u); li.appendChild(d);
  }else{
    const s=label();s.classList.add("leaf");li.appendChild(s);
  }
  return li;
}
tr.appendChild(mk(D));
const first=tr.querySelector("details"); if(first) first.open=true;

function tg(open){tr.querySelectorAll("details").forEach(d=>d.open=open);}
window.tg=tg;

/* Tree search: hide non-matching branches while preserving ancestors */
const treeSearch=document.getElementById("treeSearch");
const treeCount=document.getElementById("treeCount");
function searchTree(){
  const q=treeSearch.value.trim().toLowerCase();
  let matches=0;
  const all=tr.querySelectorAll("li");
  all.forEach(li=>li.style.display="");
  tr.querySelectorAll("details").forEach(d=>d.open=!q);
  if(!q){treeCount.textContent="";return;}
  all.forEach(li=>{
    const text=li.textContent.toLowerCase();
    const hit=text.includes(q);
    if(hit) matches++;
    li.dataset.hit=hit?"1":"0";
  });
  /* A node stays visible if it or any descendant contains the query. */
  [...all].reverse().forEach(li=>{
    const childHit=[...li.children].some(c=>c.matches("details") && [...c.querySelectorAll("li")].some(x=>x.dataset.hit==="1"));
    if(li.dataset.hit==="1"||childHit){
      li.style.display="";
      const d=li.querySelector(":scope > details");
      if(d) d.open=true;
    }else li.style.display="none";
  });
  treeCount.textContent=`${matches} matching branch${matches===1?"":"es"}`;
}
treeSearch.addEventListener("input",searchTree);

/* ---------------- Enquiry engine ----------------
   Structured facts are deliberately kept in one searchable dataset.
*/
const facts=[
  {names:["babu kuar singh","kuar singh","babu kuer singh"], birth:"1801", father:"not recorded", children:"Babu Bhauri Singh (1820), Babu Horil Singh (1823), Babu Shardha Singh (1826), and Babu Jeet Singh (1830).", role:"ancestor at the beginning of the dynasty chart"},
  {names:["babu bhauri singh","bhauri singh"], birth:"1820", father:"Babu Kuar Singh", children:"Babu Shivdayal Singh and adopted son Babu Tek Narayan Singh.", spouse:"not recorded", role:"adoptive father of Tek Narayan Singh"},
  {names:["babu shardha singh","shardha singh","sardha singh"], birth:"1826", father:"Babu Kuar Singh", children:"Babu Tek Narayan Singh and Babu Gopal Singh.", role:"biological father of Tek Narayan Singh"},
  {names:["tek narayan singh","teknarayan singh"], father:"Babu Shardha Singh", adoptedBy:"Babu Bhauri Singh", children:"Babu Ganga Singh alias Babu Meghraj Singh", residence:"Manjhwe", role:"founder of the Manjhwe Estate branch"},
  {names:["ganga singh","babu ganga singh","meghraj singh","babu meghraj singh"], father:"Babu Tek Narayan Singh", children:"Genand Singh, Faggu Singh, and Jagarnath Singh"},
  {names:["genand singh"], father:"Babu Ganga Singh alias Babu Meghraj Singh", children:"Babu Rameshwar Prasad Singh"},
  {names:["rameshwar prasad singh"], father:"Genand Singh", children:"Vishwanath and Paras"},
  {names:["faggu singh","faagu singh"], father:"Babu Ganga Singh alias Babu Meghraj Singh", children:"Brij Kumari"},
  {names:["brij kumari"], father:"Faggu Singh", spouse:"Kali Prasad Singh of Karnauti, Muzaffarpur district", children:"Jagat Prasad Singh, Gupteshwar Prasad Singh, and Harinandan Prasad Singh"},
  {names:["jagat prasad singh"], father:"Kali Prasad Singh? Family page records Jagat as a child of Brij Kumari; his paternal name is not explicitly recorded.", mother:"Brij Kumari", children:"Ajay, Vijay, and Viraj Prayaswama", residence:"Viraj Prayaswama is settled in Manjhwe"},
  {names:["gupteshwar prasad singh"], mother:"Brij Kumari", father:"Kali Prasad Singh (family branch)",},
  {names:["harinandan prasad singh","harinandan singh"], father:"Sheetal Prasad Singh", grandfather:"Shivdayal Prasad Singh (Born 1846)", greatGrandfather:"Babu Bhauri Singh (Born 1820)", greatGreatGrandfather:"Babu Kuar Singh (Born 1801)", spouse:"Shiv Jyoti Devi of Jamuwan near Tajpur", children:"Babu Madan Murari Prasad Singh", branch:"Manjhwe branch"},
  {names:["shivdayal prasad singh","shivdayal singh"], birth:"1846", father:"Babu Bhauri Singh", child:"Harinandan Prasad Singh is a grandson through Sheetal Prasad Singh"},
  {names:["sheetal prasad singh"], father:"Shivdayal Prasad Singh", children:"Babu Banaras Prasad Singh, Babu Harinandan Prasad Singh, and Babu Rajdev Narayan Singh", residence:"married at Village Bampur near Chandi-Ramghat"},
  {names:["banaras prasad singh","babu banaras prasad singh"], father:"Sheetal Prasad Singh", spouse:"Suryamukhi Devi of Jamuwan near Tajpur", children:"Bhagirath Prasad Singh and Birendra Prasad Singh"},
  {names:["bhagirath prasad singh"], father:"Babu Banaras Prasad Singh", residence:"married at Dumrama near Nawada", children:"Mrityunjay Prasad Singh"},
  {names:["mrityunjay prasad singh"], father:"Bhagirath Prasad Singh", spouse:"Vaidehi Devi of Teaus, daughter of Mani Prasad Singh", children:"Vikash Ranjan and Prakash Ranjan"},
  {names:["vikash ranjan"], father:"Mrityunjay Prasad Singh", child:"Gyan", spouse:"Aprajita of Auare near Lakhisarai", occupation:"eminent software engineer"},
  {names:["prakash ranjan"], father:"Mrityunjay Prasad Singh", child:"Darshit", spouse:"Priyanka of Janpura near Hisua", occupation:"business related to concrete"},
  {names:["birendra prasad singh"], father:"Babu Banaras Prasad Singh", spouse:"Panpati Devi of Bandhawa, Aurangabad", child:"Prabhavati Devi"},
  {names:["prabhavati devi"], father:"Birendra Prasad Singh", spouse:"Dr. Bimal Prasad Singh, former Principal of RDS College, Muzaffarpur"},
  {names:["madan murari prasad singh","madan murai prasad singh"], father:"Babu Harinandan Prasad Singh", spouse:"Hiramani Devi of Bandhwa, Aurangabad", children:"Arunjay Prasad Singh, Dhananjay Prasad Singh, Shashi Ranjan, Shashank Shekhar, and Ravi Ranjan"},
  {names:["arunjay prasad singh"], father:"Madan Murari Prasad Singh", spouse:"Pushpa Singh of Kafen, Muzaffarpur", children:"Parijat Dhawal and Sushnat Nirmal", occupation:"eminent engineer and Managing Director of several multinational companies"},
  {names:["parijat dhawal"], father:"Arunjay Prasad Singh", education:"B.Tech and M.Tech from IIT Kharagpur; MBA (Finance) from University of Michigan, USA", occupation:"finance-based entrepreneur"},
  {names:["sushnat nirmal"], father:"Arunjay Prasad Singh", spouse:"Meneka of Parepur near Bihta, Patna", child:"Laddu"},
  {names:["dhananjay prasad singh"], father:"Madan Murari Prasad Singh", spouse:"Nirmala Devi of Jehanabad", child:"Pankaj Kumar"},
  {names:["pankaj kumar"], father:"Dhananjay Prasad Singh", child:"Priyanshu"},
  {names:["shashi ranjan"], father:"Madan Murari Prasad Singh", spouse:"Madhurima Pandey of Sitalpur, Chhapra", children:"Nishikant and Rishikant"},
  {names:["nishikant"], father:"Shashi Ranjan", occupation:"specialised computer engineer"},
  {names:["rishikant"], father:"Shashi Ranjan"},
  {names:["shashank shekhar","tunni babu"], father:"Madan Murari Prasad Singh", spouse:"Nivedita Manju of Rampur Sinday near Sheikhpura", child:"Nalini Kant"},
  {names:["nalini kant"], father:"Shashank Shekhar", occupation:"specialised electronics engineer"},
  {names:["ravi ranjan"], father:"Madan Murari Prasad Singh", spouse:"Kanchana of Narauli, Nawada", child:"Aarav Ritvik Singh", occupation:"eminent electronics engineer; currently Director at NXP Semiconductors"},
  {names:["aarav ritvik singh"], father:"Ravi Ranjan"},
  {names:["jagarnath singh"], father:"Babu Ganga Singh alias Babu Meghraj Singh", children:"Ishwari Prasad Singh and Triveni Prasad Singh"},
  {names:["ishwari prasad singh"], father:"Jagarnath Singh", children:"Avadh Bihari, Vake Bihari, Brij Bihari, Saket Bihari, and Pramod Bihari"},
  {names:["triveni prasad singh"], father:"Jagarnath Singh", children:"No children", spouse:"Satyabhama Devi", position:"associated with educational/public welfare initiatives in Hisua; family history associates him with Triveni Satyabhama College (T.S. College)"},
  {names:["satyabhama devi"], spouse:"Triveni Prasad Singh", position:"Member of Parliament from Jehanabad Lok Sabha constituency, 1957–1967"},
  {names:["babu horil singh","horil singh"], birth:"1823", father:"Babu Kuar Singh", spouse:"Chhet Kuwer", child:"Mahadev Singh", note:"family history says he built Shivala, 1270 Fasli"},
  {names:["babu jeet singh","jeet singh"], birth:"1830", father:"Babu Kuar Singh"},
  {names:["gopal singh","babu gopal singh"], father:"Babu Shardha Singh", residence:"Kajoor"},
  {names:["govind prasad singh"], branch:"Estate / zamindar page currently marked Coming Soon"},
  {names:["chakradhar prasad singh","jhulan prasad singh"], branch:"Estate / zamindar page currently marked Coming Soon"},
  {names:["kamla prasad singh"], branch:"Estate / zamindar page currently marked Coming Soon"}
];

function norm(s){return s.toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9\u0900-\u097f ]+/g," ").replace(/\s+/g," ").trim();}
function findFact(q){
  const nq=norm(q);
  let best=null,score=0;
  for(const f of facts){
    for(const n of f.names){
      const nn=norm(n);
      if(nq.includes(nn) && nn.length>score){best=f;score=nn.length;}
    }
  }
  return best;
}
function answerQuestion(q){
  const f=findFact(q);
  if(!f) return "I could not find that person or estate in the website's recorded family data. Please check the spelling or ask about a person whose information is recorded here.";
  const nq=norm(q);
  let subject=f.names[0].replace(/\b\w/g,c=>c.toUpperCase());
  if(/\bwhen\b|\bborn\b|\bbirth\b/.test(nq) && f.birth) return `${subject} was born in ${f.birth}.`;
  if(/\bfather\b|\bwhose son\b|\bson of\b|\bparent\b/.test(nq) && f.father) return `${subject}'s recorded father is ${f.father}.`;
  if(/\bmother\b|\bdaughter of\b|\bwhose daughter\b/.test(nq) && f.mother) return `${subject}'s recorded mother is ${f.mother}.`;
  if(/\bwife\b|\bmarried\b|\bspouse\b|\bhusband\b/.test(nq) && f.spouse) return `${subject}'s recorded spouse/marriage information is: ${f.spouse}.`;
  if(/\bson\b|\bsons\b|\bchildren\b|\bchild\b|\bdaughter\b|\bdaughters\b/.test(nq) && f.children) return `The recorded children of ${subject} are: ${f.children}.`;
  if(/\blive\b|\blives\b|\blived\b|\bwhere\b/.test(nq) && f.residence) return `The recorded residence/location information for ${subject} is: ${f.residence}.`;
  if(/\bdo\b|\bjob\b|\bwork\b|\boccupation\b|\bengineer\b|\bposition\b|\brole\b|\bwhat\b/.test(nq) && (f.occupation||f.position||f.role)) return `${subject}: ${f.occupation||f.position||f.role}.`;
  if(/\beducation\b|\bstudied\b|\bdegree\b|\bcollege\b|\biit\b|\bmba\b/.test(nq) && f.education) return `${subject}'s recorded education is: ${f.education}.`;
  const details=[];
  if(f.birth)details.push(`Born: ${f.birth}`);
  if(f.father)details.push(`Father: ${f.father}`);
  if(f.spouse)details.push(`Spouse: ${f.spouse}`);
  if(f.children)details.push(`Children: ${f.children}`);
  if(f.residence)details.push(`Location: ${f.residence}`);
  if(f.occupation)details.push(`Occupation: ${f.occupation}`);
  if(f.position)details.push(`Position: ${f.position}`);
  if(f.education)details.push(`Education: ${f.education}`);
  if(f.adoptedBy)details.push(`Adopted by: ${f.adoptedBy}`);
  if(f.branch)details.push(`Branch: ${f.branch}`);
  if(details.length) return `${subject}: ${details.join(" • ")}.`;
  return `The website records ${subject}, but it does not contain enough structured detail to answer that specific question.`;
}

const queryInput=document.getElementById("queryInput");
const answerBox=document.getElementById("answerBox");
function ask(){
  const q=queryInput.value.trim();
  if(!q){answerBox.innerHTML="<span>💡</span><div><strong>Please type a question.</strong><p>For example: “Who is Harinandan Prasad Singh's father?”</p></div>";return;}
  answerBox.innerHTML=`<span>📜</span><div><strong>Answer</strong><p>${answerQuestion(q)}</p></div>`;
}
document.getElementById("askBtn").addEventListener("click",ask);
queryInput.addEventListener("keydown",e=>{if(e.key==="Enter")ask();});
document.querySelectorAll(".suggestions button").forEach(b=>b.addEventListener("click",()=>{queryInput.value=b.dataset.q;ask();}));
