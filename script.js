(function(){
'use strict';
var play=document.getElementById('play'),frame=document.getElementById('frame'),
    fsBtn=document.getElementById('fs'),back=document.getElementById('back'),loaded=false;

function open(){
  // يتحمّل الإطار مرة واحدة فقط، فيفضل التقدم شغال عند الرجوع للموقع
  if(!loaded){frame.src='game.html';loaded=true;}
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
})();
