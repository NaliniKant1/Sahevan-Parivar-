document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.getElementById("menuToggle"), nav=document.getElementById("mainNav");
  if(toggle) toggle.addEventListener("click",()=>nav.classList.toggle("open"));
  const theme=document.getElementById("themeToggle");
  const saved=localStorage.getItem("sahevan-theme");
  if(saved) document.documentElement.dataset.theme=saved;
  if(theme) theme.addEventListener("click",()=>{
    const next=document.documentElement.dataset.theme==="dark"?"light":"dark";
    document.documentElement.dataset.theme=next; localStorage.setItem("sahevan-theme",next);
  });
});
document.addEventListener("DOMContentLoaded",()=>{
 const root=document.getElementById("familyTree"); if(!root||!window.FAMILY_DATA) return;
 function make(node){
   const [name="",note="",flag=0,children]=node, li=document.createElement("li");
   const label=document.createElement("span"); label.className="tree-label "+(flag==="f"?"female ":"")+(flag==="a"?"adopted ":""); label.textContent=name;
   if(note){const s=document.createElement("small");s.textContent=" — "+note;label.appendChild(s);}
   if(children&&children.length){
     const d=document.createElement("details"); const sum=document.createElement("summary"); sum.appendChild(label); d.appendChild(sum);
     const ul=document.createElement("ul"); children.forEach(c=>ul.appendChild(make(c))); d.appendChild(ul); li.appendChild(d);
   }else li.appendChild(label);
   return li;
 }
 window.FAMILY_DATA.forEach(n=>root.appendChild(make(n)));
 const first=root.querySelector("details"); if(first) first.open=true;
 document.getElementById("expandAll")?.addEventListener("click",()=>root.querySelectorAll("details").forEach(d=>d.open=true));
 document.getElementById("collapseAll")?.addEventListener("click",()=>root.querySelectorAll("details").forEach(d=>d.open=false));
 const search=document.getElementById("treeSearch"), count=document.getElementById("treeCount");
 search?.addEventListener("input",()=>{
   const q=search.value.toLowerCase().trim(); let n=0;
   root.querySelectorAll("li").forEach(li=>li.style.display="");
   if(!q){count.textContent="";return;}
   [...root.querySelectorAll("li")].reverse().forEach(li=>{
     const hit=li.textContent.toLowerCase().includes(q);
     if(hit)n++;
     const childHit=[...li.querySelectorAll("li")].some(x=>x.style.display!=="none"&&x.textContent.toLowerCase().includes(q));
     if(hit||childHit){li.style.display="";li.querySelector(":scope > details")?.setAttribute("open","");}
     else li.style.display="none";
   });
   count.textContent=`${n} matching branch${n===1?"":"es"}`;
 });
});
