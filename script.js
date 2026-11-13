/* دكان السعادة | الإصدار v6 | تاريخ التحديث 2026-11-13 */
(function(){
'use strict';
var play=document.getElementById('play'),frame=document.getElementById('frame'),
    fsBtn=document.getElementById('fs'),back=document.getElementById('back'),loaded=false;

function open(){
  // يتحمّل الإطار مرة واحدة فقط، فيفضل التقدم شغال عند الرجوع للموقع
  if(!loaded){frame.src='game.html?v=8';loaded=true;hit('plays');}
  play.hidden=false;document.documentElement.classList.add('playing');
  if(location.hash!=='#play')history.pushState(null,'','#play');
  setTimeout(function(){try{frame.contentWindow.focus()}catch(e){}},300);
}
function close(){
  play.hidden=true;document.documentElement.classList.remove('playing');
  if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen();
  if(location.hash==='#play')history.replaceState(null,'',location.pathname+location.search);
}
function toggleFs(){
  var d=document,el=play;
  if(d.fullscreenElement||d.webkitFullscreenElement){(d.exitFullscreen||d.webkitExitFullscreen).call(d);}
  else if(el.requestFullscreen){el.requestFullscreen().catch(function(){});}
  else if(el.webkitRequestFullscreen){el.webkitRequestFullscreen();}
  else{play.classList.toggle('pseudo-fs');} // احتياطي لو المتصفح مش بيدعم
}
document.querySelectorAll('[data-play]').forEach(function(b){b.addEventListener('click',open)});
back.addEventListener('click',close);
fsBtn.addEventListener('click',toggleFs);
window.addEventListener('popstate',function(){location.hash==='#play'?open():close()});
if(location.hash==='#play')open();

// ظهور الأقسام بنعومة
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.s h2,.f,.steps li,.shot,.about>*').forEach(function(el){el.classList.add('rv');io.observe(el)});
}
// القائمة الجانبية
var menu=document.getElementById('menu'),mBtn=document.getElementById('menuBtn'),mClose=document.getElementById('menuClose'),mBack=document.getElementById('menuBack');
function setMenu(o){menu.classList.toggle('open',o);mBack.classList.toggle('open',o);mBtn.setAttribute('aria-expanded',o);menu.setAttribute('aria-hidden',!o);document.documentElement.classList.toggle('menu-open',o);if(o)mClose.focus();else if(menu.contains(document.activeElement))mBtn.focus();}
mBtn.addEventListener('click',function(){setMenu(true)});
mClose.addEventListener('click',function(){setMenu(false)});
mBack.addEventListener('click',function(){setMenu(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
menu.querySelectorAll('a[href^="#"],[data-play]').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});

// قسم الدعم (مخفي لحد ما يتفتح) + نسخ الرقم
var sBtn=document.getElementById('supportBtn'),sBox=document.getElementById('support'),cp=document.getElementById('copyNum');
sBtn.addEventListener('click',function(){var open=sBox.hidden;sBox.hidden=!open;sBtn.setAttribute('aria-expanded',open);if(open)sBox.scrollIntoView({block:'nearest',behavior:'smooth'})});
cp.addEventListener('click',function(){
  var n='01016900850';
  function done(){cp.textContent='تم النسخ ✓';setTimeout(function(){cp.textContent='نسخ الرقم'},2000)}
  function fb(){var t=document.createElement('textarea');t.value=n;t.style.cssText='position:fixed;opacity:0';document.body.appendChild(t);t.select();try{document.execCommand('copy');done()}catch(e){cp.textContent='انسخه يدوياً'}document.body.removeChild(t)}
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(n).then(done,fb);else fb();
});

// عدادات حقيقية عبر Abacus (مجاني وبدون تسجيل). لو الخدمة مش متاحة بيظهر «—» ومفيش أرقام وهمية
var NS='dokan-sa3ada-g3an3tshan',API='https://abacus.jasoncameron.dev/';
function showStat(k,v){var el=document.querySelector('[data-stat="'+k+'"]');if(el)el.textContent=(typeof v==='number')?v.toLocaleString('ar-EG'):'—';}
function call(op,k){return fetch(API+op+'/'+NS+'/'+k).then(function(r){if(r.status===404)return{value:0};if(!r.ok)throw new Error(r.status);return r.json()}).then(function(d){return +d.value||0})}
function hit(k){call('hit',k).then(function(v){showStat(k,v)}).catch(function(){})}
function getStat(k){call('get',k).then(function(v){showStat(k,v)}).catch(function(){showStat(k,null)})}
var seen=false;try{seen=localStorage.getItem('dokan_seen')==='1'}catch(e){}
if(seen)getStat('visitors');
else call('hit','visitors').then(function(v){showStat('visitors',v);try{localStorage.setItem('dokan_seen','1')}catch(e){}}).catch(function(){showStat('visitors',null)});
getStat('plays');
})();
