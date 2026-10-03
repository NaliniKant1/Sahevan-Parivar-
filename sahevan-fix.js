/*
 * Sahevan Parivar – Family Tree + Enquiry fix
 * ------------------------------------------------------------------
 * ONE script, no HTML/CSS of the existing design is changed.
 * Add this single line just before </body> on family-tree.html and enquiry.html:
 *      <script src="sahevan-fix.js" defer></script>
 * (The script detects the page itself; it is safe to add to other pages too.)
 *
 * Data source: text of all site pages (History, Manjhwe Estate, Harinandan
 * Prasad Singh, Notable People …) arranged as the dynasty chart
 * (Babu Kuar Singh b.1801 -> present). Please compare with img.jpg and
 * correct/add names in the DATA section below – both the tree and the
 * enquiry answers are generated from this one list.
 */
(function () {
  'use strict';

  /* =================================================================
   *  DATA  –  a(id, name, fatherId, options)
   *  options: b=birth year, f=female, ad=adopted stub, sp=spouse text,
   *           al=[aliases], fa=father text override, note=extra fact,
   *           pri=priority when two people share a name, nt=hide from tree,
   *           ne=hide from enquiry
   * ================================================================= */
  var P = [];
  function a(id, name, p, o) { o = o || {}; o.id = id; o.name = name; o.p = p || null; P.push(o); return o; }

  /* --- Founder and four sons --- */
  a('kuar', 'Babu Kuar Singh', null, { b: 1801, al: ['Kuer Singh', 'Kuar Singh'], note: 'Beginning of the dynasty chart. He had four sons: Bhauri Singh (1820), Horil Singh (1823), Shardha Singh (1826) and Jeet Singh (1830).' });
  a('bhauri', 'Babu Bhauri Singh', 'kuar', { b: 1820, note: 'Elder son of Babu Kuar Singh. The zamindari was purchased by him. Of Kajoor. Adopted Tek Narayan Singh before his own son Shivdayal was born.' });
  a('horil', 'Babu Horil Singh', 'kuar', { b: 1823 });
  a('shardha', 'Babu Shardha Singh', 'kuar', { b: 1826, note: 'Gave a half share to Gopal Singh, who stayed at Kajoor.' });
  a('jeet', 'Babu Jeet Singh', 'kuar', { b: 1830 });

  /* --- Bhauri Singh line --- */
  a('shivdayal', 'Babu Shivdayal Prasad Singh', 'bhauri', { b: 1846, al: ['Shivdayal Singh'], sp: 'married at Shivnar near Mokama', note: 'Biological son of Bhauri Singh.' });
  a('tek_ad', 'Babu Tek Narayan Singh (adopted)', 'bhauri', { ad: 1, nt: 0, ne: 1, note: 'Adopted by Bhauri Singh; biological son of Shardha Singh (see his branch below Shardha Singh).' });
  a('sheetal', 'Babu Sheetal Prasad Singh', 'shivdayal', { sp: 'married at Bampur near Chandi-Ramghat' });
  a('banaras', 'Babu Banaras Prasad Singh', 'sheetal', { sp: 'Suryamukhi Devi of Jamuwan near Tajpur', note: 'Elder brother of Harinandan Prasad Singh.' });
  a('harinandan', 'Zamindar Babu Harinandan Prasad Singh', 'sheetal', { sp: 'Shiv Jyoti Devi of Jamuwan near Tajpur', pri: 5, al: ['Harinandan Prasad Singh', 'Harinandan'], note: 'Had one son, Madan Murari Prasad Singh.' });
  a('rajdev', 'Babu Rajdev Narayan Singh', 'sheetal', { sp: 'Shanti Devi of Balwa, Jehanabad', note: 'Younger brother of Harinandan Prasad Singh. Died issueless.' });

  /* Banaras Prasad Singh branch */
  a('bhagirath', 'Bhagirath Prasad Singh', 'banaras');
  a('birendra', 'Birendra Prasad Singh', 'banaras', { sp: 'Panpati Devi of Bandhawa, Aurangabad' });
  a('prabhavati', 'Prabhavati Devi', 'birendra', { f: 1, sp: 'Dr. Bimal Prasad Singh, former Principal of RDS College, Muzaffarpur (of Kebatgawan, Muzaffarpur)' });
  a('mrityunjay', 'Mrityunjay Prasad Singh', 'bhagirath', { al: ['Mritunjay Prasad Singh'], sp: 'Vaidehi Devi of Teaus, daughter of Mani Prasad Singh' });
  a('vikash', 'Vikash Ranjan', 'mrityunjay', { note: 'Eminent software engineer.' });
  a('gyan', 'Gyan', 'vikash');
  a('prakash', 'Prakash Ranjan', 'mrityunjay', { note: 'Businessman in concrete-related industries.' });
  a('darshit', 'Darshit', 'prakash');

  /* Harinandan -> Madan Murari -> five sons */
  a('madan', 'Madan Murari Prasad Singh', 'harinandan', { sp: 'Hiramani Devi of Bandhwa, Aurangabad', note: 'Only son of Zamindar Babu Harinandan Prasad Singh; has five sons.' });
  a('arunjay', 'Arunjay Prasad Singh', 'madan', { sp: 'Pushpa Singh of Kafen, Muzaffarpur', note: 'Eminent engineer and Managing Director of many multinational companies.' });
  a('parijat', 'Parijat Dhawal', 'arunjay', { note: 'Youngest son of Arunjay Prasad Singh. B.Tech & M.Tech from IIT Kharagpur and MBA (Finance) from University of Michigan, USA. Finance-based entrepreneur.' });
  a('sushnat', 'Sushnat Nirmal', 'arunjay', { sp: 'Meneka of Parepur near Bihta, Patna' });
  a('laddu', 'Laddu', 'sushnat');
  a('dhananjay', 'Dhananjay Prasad Singh', 'madan', { sp: 'Nirmala Devi of Ganankura, Jehanabad' });
  a('pankaj', 'Pankaj Kumar', 'dhananjay', { sp: 'Sangita of Kariyana near Shilao, Rajgir' });
  a('priyanshu', 'Priyanshu', 'pankaj');
  a('shashi', 'Shashi Ranjan', 'madan', { sp: 'Madhurima Pandey of Sitalpur, Chhapra' });
  a('aman', 'Aman', 'shashi', { al: ['Aman']});
  a('ankit', 'Ankit', 'shashi', { al: ['Ankit'] });
  a('shashank', 'Shashank Shekhar', 'madan', { sp: 'Nivedita Manju of Rampur Sinday near Sheikhpura' });
  a('nalini', 'Nalini Kant', 'shashank', { al: ['Nalinikant'], note: 'Specialised electronics engineer.' });
  a('ravi', 'Ravi Ranjan', 'madan', { sp: 'Kanchana of Narauli, Nawada', note: 'Eminent electronics engineer; Director at NXP Semiconductors.' });
  a('aarav', 'Aarav Ritvik Singh', 'ravi');

  /* --- Shardha Singh -> Tek Narayan (Manjhwe Estate) --- */
  a('tek', 'Babu Tek Narayan Singh', 'shardha', { fa: 'Babu Shardha Singh (biological father); adopted by his uncle Babu Bhauri Singh', note: 'Founder of the Manjhwe Estate; moved to Manjhwe with shares from both branches.' });
  a('ganga', 'Babu Ganga Singh', 'tek', { al: ['Meghraj Singh', 'Babu Meghraj Singh', 'Ganga Singh alias Meghraj Singh'] });
  a('genand', 'Genand Singh', 'ganga');
  a('rameshwar', 'Babu Rameshwar Prasad Singh', 'genand');
  a('vishwanath', 'Vishwanath', 'rameshwar');
  a('paras', 'Paras', 'rameshwar');
  a('faggu', 'Faggu Singh', 'ganga', { note: 'Only daughter: Brij Kumari.' });
  a('brij', 'Brij Kumari', 'faggu', { f: 1, sp: 'Kali Prasad Singh of Karnauti, Muzaffarpur District (dynasty of Mahesh Prasad Singh, ex-Minister, Govt. of Bihar)' });
  a('jagat', 'Jagat Prasad Singh', 'brij', { fa: 'Kali Prasad Singh of Karnauti (mother: Brij Kumari)', note: 'Settled in Manjhwe.' });
  a('ajay', 'Ajay', 'jagat'); a('vijay', 'Vijay', 'jagat'); a('viraj', 'Viraj Prayaswama', 'jagat');
  a('gupteshwar', 'Gupteshwar Prasad Singh', 'brij', { fa: 'Kali Prasad Singh of Karnauti (mother: Brij Kumari)' });
  a('harinandan2', 'Harinandan Prasad Singh (of Karnauti)', 'brij', { pri: 1, al: ['Harinandan Prasad Singh', 'Harinandan'], fa: 'Kali Prasad Singh of Karnauti (mother: Brij Kumari)' });
  a('jagarnath', 'Jagarnath Singh', 'ganga', { note: 'Zamindar; father of Ishwari Prasad Singh and Triveni Prasad Singh.' });
  a('ishwari', 'Ishwari Prasad Singh', 'jagarnath', { note: 'Had five sons.' });
  a('avadh', 'Avadh Bihari', 'ishwari'); a('vake', 'Vake Bihari', 'ishwari'); a('brijb', 'Brij Bihari', 'ishwari');
  a('saket', 'Saket Bihari', 'ishwari'); a('pramod', 'Pramod Bihari', 'ishwari');
  a('triveni', 'Babu Triveni Prasad Singh', 'jagarnath', { al: ['Triveni Prasad Singh'], sp: 'Satyabhama Devi', note: 'No children recorded. Founded many hospitals and colleges in Hisua, including Triveni-Satyabhama College (T.S. College), Hisua. Great-grandson of Tek Narayan Singh.' });
  a('satyabhama', 'Satyabhama Devi', null, { f: 1, nt: 1, sp: 'Babu Triveni Prasad Singh', note: 'Wife of Triveni Prasad Singh; Member of Parliament from Jehanabad Lok Sabha constituency, 1957 to 1967.' });

  /* --- Other recorded branch (link to dynasty not stated on the site) --- */
  a('dasarath', 'Dasarath Prasad Singh', null, { other: 1, note: 'Link with the main dynasty is not stated in the site records.' });
  a('awadesh', 'Awadesh Prasad Singh', 'dasarath');
  a('sanjay', 'Sanjay Kumar', 'awadesh', { note: 'Hospitality and logistics businessman.' });
  a('sudhir', 'Sudhir Kumar', 'awadesh', { note: 'Prominent petroleum engineer; studied Petroleum Engineering at BHU (now IIT BHU), Varanasi.' });

  /* ---------- helpers ---------- */
  var BY = {}; P.forEach(function (x) { BY[x.id] = x; });
  function kids(id) { return P.filter(function (x) { return x.p === id; }); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function nm(x) { return x.name + (x.b ? ' (b. ' + x.b + ')' : ''); }
  function ready(fn) { if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  function findBtn(re) {
    var l = document.querySelectorAll('button, a, input[type=button], input[type=submit]');
    for (var i = 0; i < l.length; i++) { var t = (l[i].value || l[i].textContent || '').trim(); if (re.test(t)) return l[i]; }
    return null;
  }
  function descCount(id) { var c = kids(id), n = c.length; c.forEach(function (k) { n += descCount(k.id); }); return n; }

  /* =================================================================
   *  FAMILY TREE
   * ================================================================= */
  function initTree() {
    var exp = findBtn(/^expand all$/i), col = findBtn(/^collapse all$/i);
    if (!exp && !col) return;

    var css = document.createElement('style');
    css.textContent =
      '.sv-tree{margin:1.2rem 0;overflow-x:auto;padding-bottom:1rem}' +
      '.sv-n{margin:.15rem 0 .15rem 1.1rem;padding-left:.7rem;border-left:1px solid rgba(128,128,128,.45)}' +
      '.sv-tree>.sv-n{margin-left:0;padding-left:0;border-left:0}' +
      '.sv-row{display:flex;align-items:center;gap:.45rem;margin:.3rem 0}' +
      '.sv-t{flex:none;width:1.6rem;height:1.6rem;border-radius:50%;border:1px solid currentColor;background:transparent;color:inherit;cursor:pointer;line-height:1;padding:0;font-size:1rem}' +
      '.sv-t.sv-leaf{visibility:hidden}' +
      '.sv-c{padding:.35rem .7rem;border:1px solid rgba(128,128,128,.55);border-radius:.6rem;background:rgba(128,128,128,.08)}' +
      '.sv-c small{display:block;opacity:.75;font-size:.78em}' +
      '.sv-f>.sv-row .sv-c{background:rgba(236,72,153,.16);border-color:#ec4899}' +
      '.sv-a>.sv-row .sv-c{border-style:dashed}' +
      '.sv-hit>.sv-row .sv-c{outline:2px solid #d4a017}' +
      '.sv-k[hidden]{display:none}' +
      '.sv-h{margin:1rem 0 .3rem;font-weight:600;opacity:.8}';
    document.head.appendChild(css);

    /* hide empty/broken old tree containers (they have no visible content) */
    var old = document.querySelectorAll('[id*="tree" i],[class*="tree" i]');
    for (var i = 0; i < old.length; i++) {
      var e = old[i];
      if (e === document.body || e === document.documentElement || e.tagName === 'MAIN' || e.tagName === 'SECTION') continue;
      if (!e.textContent.trim() && !e.querySelector('button,input')) e.style.display = 'none';
    }

    var host = document.createElement('div'); host.className = 'sv-tree'; host.id = 'sv-tree';
    var bar = (exp || col).parentElement;
    if (bar && bar.parentElement && bar.parentElement.tagName !== 'BODY') bar.parentElement.insertBefore(host, bar.nextSibling);
    else (document.querySelector('main') || document.body).appendChild(host);

    function build(p) {
      var n = document.createElement('div'); n.className = 'sv-n' + (p.f ? ' sv-f' : '') + (p.ad ? ' sv-a' : ''); n.dataset.id = p.id;
      var ch = p.ad ? [] : kids(p.id);
      var row = document.createElement('div'); row.className = 'sv-row';
      var t = document.createElement('button'); t.type = 'button'; t.className = 'sv-t' + (ch.length ? '' : ' sv-leaf'); t.textContent = '+';
      var c = document.createElement('span'); c.className = 'sv-c'; if (p.note) c.title = p.note;
      var h = esc(p.name) + (p.b ? ' <small>Born ' + p.b + '</small>' : '');
      if (p.sp) h += '<small>' + (p.f ? 'Spouse: ' : 'Married: ') + esc(p.sp) + '</small>';
      if (ch.length) h += '<small>' + ch.length + ' child' + (ch.length > 1 ? 'ren' : '') + ' · ' + descCount(p.id) + ' descendants</small>';
      c.innerHTML = h; row.appendChild(t); row.appendChild(c); n.appendChild(row);
      if (ch.length) {
        var k = document.createElement('div'); k.className = 'sv-k'; k.hidden = true;
        ch.forEach(function (x) { k.appendChild(build(x)); });
        n.appendChild(k);
        t.addEventListener('click', function () { setOpen(n, k.hidden); });
      }
      return n;
    }
    function setOpen(n, open) {
      var k = n.querySelector(':scope > .sv-k'), t = n.querySelector(':scope > .sv-row > .sv-t');
      if (!k) return; k.hidden = !open; t.textContent = open ? '−' : '+';
    }
    function all(open) { host.querySelectorAll('.sv-n').forEach(function (n) { setOpen(n, open); }); }

    var main = P.filter(function (x) { return !x.p && !x.nt && !x.other; });
    var other = P.filter(function (x) { return !x.p && !x.nt && x.other; });
    main.forEach(function (r) { host.appendChild(build(r)); });
    if (other.length) {
      var hh = document.createElement('div'); hh.className = 'sv-h'; hh.textContent = 'Other recorded branch (link to the main dynasty to be confirmed)'; host.appendChild(hh);
      other.forEach(function (r) { host.appendChild(build(r)); });
    }
    host.querySelectorAll(':scope > .sv-n').forEach(function (n) { setOpen(n, true); });   /* founder opens to his four sons */

    /* Expand All / Collapse All (capture phase -> replaces the old broken handlers) */
    document.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('button, a, input');
      if (!b) return;
      if (b === exp) { ev.preventDefault(); ev.stopImmediatePropagation(); all(true); }
      else if (b === col) { ev.preventDefault(); ev.stopImmediatePropagation(); all(false); }
    }, true);

    /* Search */
    var inp = document.querySelector('main input[type=search], main input[type=text], main input:not([type]), input[type=search]');
    function search(q) {
      q = q.toLowerCase().replace(/\s+/g, '');
      host.querySelectorAll('.sv-hit').forEach(function (n) { n.classList.remove('sv-hit'); });
      if (!q) { return; }
      var first = null;
      P.forEach(function (p) {
        var hay = (p.name + ' ' + (p.al || []).join(' ') + ' ' + (p.sp || '')).toLowerCase().replace(/\s+/g, '');
        if (hay.indexOf(q) === -1) return;
        var n = host.querySelector('.sv-n[data-id="' + p.id + '"]'); if (!n) return;
        n.classList.add('sv-hit');
        for (var u = n.parentElement; u && u !== host; u = u.parentElement) if (u.classList.contains('sv-n')) setOpen(u, true);
        if (!first) first = n;
      });
      if (first) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    if (inp) inp.addEventListener('input', function () { search(inp.value); });
  }

  /* =================================================================
   *  ENQUIRY
   * ================================================================= */
  var GENERIC = { singh: 1, prasad: 1, kumar: 1, devi: 1, babu: 1, zamindar: 1, shri: 1, sri: 1, mr: 1, mrs: 1, dr: 1, smt: 1, the: 1 };
  var STOP = ('who is whose what which the of a an and tell me about name please give show list ' +
    'father mother parent parents son sons daughter daughters children child kids kid wife husband spouse married marriage ' +
    'brother brothers sister sisters sibling siblings born birth year when age dob grandfather grandson grandsons grandchildren grand ' +
    'ancestor ancestors lineage descendant descendants education occupation position residence lives live village profession work has have had his her their ' +
    'was were are in for to s is').split(' ').reduce(function (o, w) { o[w] = 1; return o; }, {});

  function norm(s) { return String(s).toLowerCase().replace(/[’']s\b/g, '').replace(/kuer/g, 'kuar').replace(/[^a-z0-9\u0900-\u097f ]+/g, ' ').replace(/\s+/g, ' ').trim(); }

  function findPerson(q) {
    var toks = norm(q).split(' ').filter(function (t) { return t && !STOP[t]; });
    var sig = toks.filter(function (t) { return !GENERIC[t]; });
    if (!sig.length) return { none: true };
    var qn = sig.join('');
    var best = [], bs = 0;
    P.forEach(function (p) {
      if (p.ne) return;
      var names = [p.name].concat(p.al || []), sc = 0;
      names.forEach(function (n) {
        var nn = norm(n), nz = nn.replace(/ /g, ''), s = 0;
        if (nz.indexOf(qn) > -1) s = 100 + qn.length - (nz.length - qn.length) / 100;
        else { var nt = nn.split(' '); sig.forEach(function (t) { if (nt.indexOf(t) > -1) s += 10; }); if (s < 10 * sig.length) s = s * 0.5; }
        if (s > sc) sc = s;
      });
      if (sc <= 0) return;
      sc += (p.pri || 0) * 0.01;
      if (sc > bs + 1e-9) { bs = sc; best = [p]; } else if (Math.abs(sc - bs) < 1e-9) best.push(p);
    });
    return best.length ? { p: best[0], alts: best.slice(1), score: bs } : { none: true };
  }

  function list(arr) { return arr.map(function (x) { return '• ' + nm(x); }).join('\n'); }
  function fatherOf(x) { return x.fa || (x.p ? BY[x.p].name : null); }
  function anc(x) { var r = [], c = x; while (c && c.p) { c = BY[c.p]; r.push(c); } return r; }

  function answerStructured(q) {
    var s = norm(q), r;
    var who = findPerson(q);
    if (who.none) return null;
    var x = who.p, note = '';
    if (who.alts.length && who.alts[0].name.replace(/ \(.*\)/, '') === x.name.replace(/ \(.*\)/, '')) {
      note = '\n\n(Another family member with the same name is also recorded: ' + who.alts[0].name + '.)';
    }
    var c = kids(x.id);
    if (/\bgrand ?(father|pita)\b|\bdada\b/.test(s)) {
      var f = x.p ? BY[x.p] : null; r = f && f.p ? BY[f.p].name + "'s grandson is " + x.name + '.' : 'No grandfather recorded for ' + x.name + '.';
      if (f && f.p) r = x.name + "'s grandfather: " + nm(BY[f.p]) + '.';
    } else if (/\bgrand ?(son|sons|children|child|daughters?)\b/.test(s)) {
      var g = []; c.forEach(function (k) { g = g.concat(kids(k.id)); });
      r = g.length ? 'Grandchildren of ' + x.name + ' (' + g.length + '):\n' + list(g) : 'No grandchildren are recorded for ' + x.name + '.';
    } else if (/\b(father|dad|papa|pita|parents?)\b/.test(s)) {
      var fa = fatherOf(x); r = fa ? x.name + "'s father: " + fa + '.' : 'The father of ' + x.name + ' is not recorded (he is the head of the chart or the link is not stated).';
      if (x.id === 'harinandan') r = "Babu Harinandan Prasad Singh's father: Babu Sheetal Prasad Singh (son of Shivdayal Prasad Singh b.1846, grandson of Bhauri Singh b.1820, great-grandson of Babu Kuar Singh b.1801).";
    } else if (/\bmother\b|\bmata\b/.test(s)) {
      r = x.p && BY[x.p].f ? x.name + "'s mother: " + BY[x.p].name + '.' : "The mother's name of " + x.name + ' is not recorded.';
    } else if (/\b(descendants?)\b/.test(s)) {
      var d = [], st = [x.id]; while (st.length) { kids(st.pop()).forEach(function (k) { if (k.ad) return; d.push(k); st.push(k.id); }); }
      r = d.length ? x.name + ' has ' + d.length + ' recorded descendants:\n' + list(d) : 'No descendants are recorded for ' + x.name + '.';
    } else if (/\b(sons?|boys?|beta)\b/.test(s)) {
      var sn = c.filter(function (k) { return !k.f; });
      r = sn.length ? x.name + ' has ' + sn.length + ' recorded son' + (sn.length > 1 ? 's' : '') + ':\n' + list(sn) : 'No sons are recorded for ' + x.name + '.' + (x.note && /issueless|no children/i.test(x.note) ? ' (Recorded as having no issue.)' : '');
    } else if (/\bdaughters?\b|\bbeti\b/.test(s)) {
      var dt = c.filter(function (k) { return k.f; });
      r = dt.length ? x.name + "'s recorded daughter" + (dt.length > 1 ? 's' : '') + ':\n' + list(dt) : 'No daughters are recorded for ' + x.name + '.';
    } else if (/\b(children|child|kids?|issue|offspring)\b/.test(s)) {
      r = c.length ? x.name + ' has ' + c.length + ' recorded child' + (c.length > 1 ? 'ren' : '') + ':\n' + list(c) : 'No children are recorded for ' + x.name + '.' + (x.note && /issueless|no children/i.test(x.note) ? ' (Recorded as having no issue.)' : '');
    } else if (/\b(wife|husband|spouse|married|marriage|wed|partner|patni)\b/.test(s)) {
      r = x.sp ? x.name + (x.f ? ' – spouse: ' : ' – married: ') + x.sp + '.' : 'No spouse is recorded for ' + x.name + '.';
    } else if (/\b(brothers?|sisters?|siblings?)\b/.test(s)) {
      var sb = x.p ? kids(x.p).filter(function (k) { return k.id !== x.id && !k.ad; }) : [];
      r = sb.length ? 'Siblings of ' + x.name + ':\n' + list(sb) : 'No siblings are recorded for ' + x.name + '.';
    } else if (/\b(born|birth|year|when|age|dob)\b/.test(s)) {
      r = x.b ? x.name + ' was born in ' + x.b + '.' : 'The birth year of ' + x.name + ' is not recorded.';
    } else if (/\b(ancestors?|lineage|forefathers?)\b/.test(s)) {
      var an = anc(x); r = an.length ? 'Lineage of ' + x.name + ' (from the founder):\n' + list(an.reverse()) + '\n• ' + x.name : x.name + ' is at the top of the recorded chart.';
    } else {
      var lines = [nm(x)]; var fo = fatherOf(x);
      if (fo) lines.push('Father: ' + fo);
      if (x.sp) lines.push((x.f ? 'Spouse: ' : 'Married: ') + x.sp);
      if (c.length) lines.push('Children: ' + c.map(function (k) { return k.name; }).join(', '));
      if (x.note) lines.push(x.note);
      r = lines.join('\n');
    }
    return r + note;
  }

  /* ----- full-text search over every page of the website ----- */
  var PAGES = ['index', 'history', 'estates', 'manjhwe-estate', 'harinandan-prasad-singh', 'govind-prasad-singh', 'chakradhar-prasad-singh', 'kamla-prasad-singh', 'notable-people', 'bhoodan', 'contact', 'family-tree'];
  var corpusP = null;
  function loadCorpus() {
    if (corpusP) return corpusP;
    var base = location.href.replace(/[#?].*$/, '').replace(/[^\/]*$/, '');
    var extra = [].slice.call(document.querySelectorAll('a[href$=".html"]')).map(function (l) { return l.getAttribute('href').replace(/^.*\//, '').replace('.html', ''); });
    var pages = PAGES.concat(extra).filter(function (v, i, arr) { return arr.indexOf(v) === i; });
    corpusP = Promise.all(pages.map(function (p) {
      return fetch(base + p + '.html').then(function (r) { return r.ok ? r.text() : ''; }).catch(function () { return ''; }).then(function (html) {
        if (!html) return [];
        var d = new DOMParser().parseFromString(html, 'text/html');
        d.querySelectorAll('script,style,nav,header,footer').forEach(function (n) { n.remove(); });
        var title = (d.title || p).replace(/ – .*$/, '');
        var imgs = [].slice.call(d.querySelectorAll('img')).map(function (i) { return (i.alt || '') + ' ' + (i.title || ''); }).join('. ');
        var txt = (d.body ? d.body.innerText || d.body.textContent : '') + '. ' + imgs;
        return txt.split(/\n+|(?<=[.!?])\s+/).map(function (t) { return t.trim(); }).filter(function (t) { return t.length > 25; }).map(function (t) { return { t: t, src: title }; });
      });
    })).then(function (a) { return [].concat.apply([], a); });
    return corpusP;
  }
  function textSearch(q) {
    var words = norm(q).split(' ').filter(function (w) { return w.length > 2 && !STOP[w] && !GENERIC[w]; });
    if (!words.length) return Promise.resolve(null);
    return loadCorpus().then(function (rows) {
      var seen = {}, sc = rows.map(function (r) {
        var l = norm(r.t), s = 0; words.forEach(function (w) { if (l.indexOf(w) > -1) s++; });
        return { r: r, s: s };
      }).filter(function (z) { return z.s > 0; }).sort(function (a, b) { return b.s - a.s; })
        .filter(function (z) { if (seen[z.r.t]) return false; seen[z.r.t] = 1; return z.s >= Math.max(1, Math.ceil(words.length / 2)); }).slice(0, 3);
      return sc.length ? sc.map(function (z) { return '• ' + z.r.t + '  [' + z.r.src + ']'; }).join('\n') : null;
    });
  }

  function answer(q) {
    q = (q || '').trim();
    if (!q) return Promise.resolve('Please type a question, for example: Babu Harinandan\'s father.');
    var s = answerStructured(q);
    if (s) return Promise.resolve(s);
    return textSearch(q).then(function (t) {
      return t ? 'Found in the website records:\n' + t : 'No matching record was found. Try a name with a question word, e.g. "Madan Murari\'s sons", "Nalini Kant\'s father", "Babu Kuar Singh\'s birth".';
    });
  }

  function initEnquiry() {
    var ask = findBtn(/^ask$/i); if (!ask) return;
    var inp = document.querySelector('main input[type=text], main input[type=search], main input:not([type]), main textarea') ||
      document.querySelector('input[type=text], input[type=search], textarea');
    if (!inp) return;
    /* the element that currently says "Answer will appear here." */
    var out = null, w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    while (w.nextNode()) { if (/answer will appear here/i.test(w.currentNode.nodeValue)) { out = w.currentNode.parentElement; break; } }
    if (!out) { out = document.createElement('div'); ask.parentElement.parentElement.appendChild(out); }

    function run() {
      var q = inp.value;
      answer(q).then(function (r) { out.innerHTML = esc(r).replace(/\n/g, '<br>'); });
    }
    document.addEventListener('click', function (ev) {
      var el = ev.target.closest && ev.target.closest('button, a, li, span, div');
      if (!el) return;
      if (el === ask || ask.contains(el)) { ev.preventDefault(); ev.stopImmediatePropagation(); run(); return; }
      /* the four sample-question chips */
      var t = (el.textContent || '').trim();
      if (el.children.length === 0 && t.length < 60 && el !== out && !out.contains(el) &&
        /^(Babu Harinandan's father|Madan Murari's sons|Nalini Kant's father|Babu Kuar Singh's birth)$/i.test(t.replace(/[’]/g, "'"))) {
        ev.preventDefault(); ev.stopImmediatePropagation(); inp.value = t; run();
      }
    }, true);
    inp.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter') { ev.preventDefault(); ev.stopImmediatePropagation(); run(); }
    }, true);
    var f = inp.closest('form');
    if (f) f.addEventListener('submit', function (ev) { ev.preventDefault(); ev.stopImmediatePropagation(); run(); }, true);
    window.sahevanAnswer = answer;   /* handy for testing in the browser console */
  }

  ready(function () { try { initTree(); } catch (e) { console.error('tree', e); } try { initEnquiry(); } catch (e) { console.error('enquiry', e); } });

  /* export for node tests */
  if (typeof module !== 'undefined') module.exports = { answerStructured: answerStructured, P: P };
})();
