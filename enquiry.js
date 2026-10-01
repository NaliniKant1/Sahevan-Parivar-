document.addEventListener("DOMContentLoaded",()=>{
const facts=[
["babu kuar singh","1801","Babu Bhauri Singh (1820), Babu Horil Singh (1823), Babu Shardha Singh (1826), Babu Jeet Singh (1830)","Babu Kuar Singh is recorded as the ancestor at the beginning of the dynasty chart."],
["babu bhauri singh","1820","Babu Shivdayal Singh and adopted son Babu Tek Narayan Singh","Babu Bhauri Singh was a son of Babu Kuar Singh and the adoptive father of Tek Narayan Singh."],
["babu shardha singh","1826","Babu Tek Narayan Singh and Babu Gopal Singh","Babu Shardha Singh was the biological father of Tek Narayan Singh."],
["tek narayan singh","","Babu Ganga Singh alias Babu Meghraj Singh","Tek Narayan Singh was adopted by Babu Bhauri Singh and shifted to Manjhwe."],
["harinandan prasad singh","","Babu Madan Murari Prasad Singh","Harinandan was the son of Sheetal Prasad Singh; spouse Shiv Jyoti Devi of Jamuwan near Tajpur."],
["madan murari prasad singh","","Arunjay Prasad Singh, Dhananjay Prasad Singh, Shashi Ranjan, Shashank Shekhar, Ravi Ranjan","Madan Murari Prasad Singh was married to Hiramani Devi of Bandhwa, Aurangabad."],
["nalini kant","","","Nalini Kant is recorded as the son of Shashank Shekhar and a specialised electronics engineer."],
["ravi ranjan","","Aarav Ritvik Singh","Ravi Ranjan is recorded as married to Kanchana of Narauli, Nawada and as an electronics engineer/Director at NXP Semiconductors."],
["satyabhama devi","","","Satyabhama Devi is recorded as Member of Parliament from Jehanabad Lok Sabha constituency, 1957–1967."],
["triveni prasad singh","","No children","Triveni Prasad Singh is recorded as the husband of Satyabhama Devi."]
];
const norm=s=>s.toLowerCase().replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
const input=document.getElementById("queryInput"), box=document.getElementById("answerBox");
function ask(){
 const q=norm(input.value); if(!q){box.innerHTML="<strong>Please type a question.</strong>";return;}
 let f=facts.find(x=>q.includes(x[0]));
 if(!f){box.innerHTML="<strong>No recorded match.</strong><p>The website does not contain that person or fact in its structured data.</p>";return;}
 let text=f[3], low=q;
 if(/born|birth|when/.test(low)&&f[1]) text=`${f[0]} was born in ${f[1]}.`;
 else if(/father|son of|parent/.test(low)) text=`The recorded father information for ${f[0]} is not fully represented in the enquiry dataset. The family page records: ${f[3]}`;
 else if(/son|sons|child|children|daughter/.test(low)&&f[2]) text=`Recorded children of ${f[0]}: ${f[2]}.`;
 else if(/wife|husband|spouse|married/.test(low)) text=f[3];
 box.innerHTML=`<strong>Answer</strong><p>${text}</p>`;
}
document.getElementById("askBtn").addEventListener("click",ask);
input.addEventListener("keydown",e=>{if(e.key==="Enter")ask()});
document.querySelectorAll(".suggestions button").forEach(b=>b.addEventListener("click",()=>{input.value=b.dataset.q;ask()}));
});