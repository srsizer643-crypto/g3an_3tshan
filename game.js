/* دكان السعادة | الإصدار v6 | تاريخ التحديث 2026-11-13 */

const W=420,H=540,$=id=>document.getElementById(id);
const C=$('c');C.width=W*2;C.height=H*2;
let X=C.getContext('2d');
const B=document.createElement('canvas');B.width=W*2;B.height=H*2;
let S={money:0,sold:0,earned:0,tips:0,rushes:0,haggles:0,stock:0,lvSeen:1,by:{cane:0,lemon:0,iced:0,lemonj:0,orange:0,mango:0,straw:0,mix:0},ach:{},dr:{},u:{juice:0,speed:0,price:0,fridge:0,fan:0,lemon:0,ice:0,juice2:0,seats:0,sign:0,reg:0,big:0,hire:0}};
try{const s=JSON.parse(localStorage.getItem('gaan_v1'));if(s&&s.u){S.money=+s.money||0;S.sold=+s.sold||0;S.earned=+s.earned||0;S.tips=+s.tips||0;S.rushes=+s.rushes||0;S.haggles=+s.haggles||0;S.stock=+s.stock||0;Object.assign(S.u,s.u);Object.assign(S.by,s.by||{});S.ach=s.ach||{};S.dr=s.dr||{};S.lvSeen=+s.lvSeen||(1+Math.floor(S.sold/25));S.stock=Math.min(S.stock,S.u.fridge||0)}}catch(e){}
if(location.hash==='#demo'){S.money=9999;S.sold=300;S.lvSeen=13;Object.assign(S.u,{hire:2,fridge:3,seats:1,big:1,fan:2})}
function save(){if(location.hash==='#demo')return;try{localStorage.setItem('gaan_v1',JSON.stringify(S))}catch(e){}}
const IC={
coin:'<circle cx="12" cy="12" r="11" fill="#c98b1f"/><circle cx="12" cy="12" r="9" fill="#ffc107"/><text x="12" y="16.5" text-anchor="middle" font-size="12" font-weight="700" font-family="Tahoma,Arial" fill="#7a4a00">ج</text>',
receipt:'<path d="M5 2h14v20l-2.3-1.7L14.3 22 12 20.3 9.7 22l-2.4-1.7L5 22z" fill="#fff3d6"/><path d="M8.5 7h7M8.5 11h7M8.5 15h4.5" stroke="#c26a0e" stroke-width="1.8" stroke-linecap="round"/>',
star:'<polygon points="12,2 14.9,8.6 22,9.3 16.6,14 18.2,21 12,17.3 5.8,21 7.4,14 2,9.3 9.1,8.6" fill="#ffd54a" stroke="#c98b1f" stroke-width="1.2" stroke-linejoin="round"/>',
tag:'<path d="M3 3h8.5l9.5 9.5a2 2 0 010 2.8l-5.2 5.2a2 2 0 01-2.8 0L3 11z" fill="#ffd54a" stroke="#c98b1f" stroke-width="1.2" stroke-linejoin="round"/><circle cx="7.5" cy="7.5" r="1.8" fill="#3d2614"/>',
menu:'<rect x="4" y="4" width="16" height="18" rx="3" fill="currentColor"/><rect x="8" y="2" width="8" height="4.5" rx="1.5" fill="currentColor" stroke="#ffc94a" stroke-width="1.2"/><path d="M8 11h8M8 14.5h8M8 18h5" stroke="#ffc94a" stroke-width="1.8" stroke-linecap="round"/>',
gear:'<circle cx="12" cy="12" r="5.8" fill="none" stroke="currentColor" stroke-width="3.6"/><circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="3.6 3.6" transform="rotate(-11 12 12)"/>',
cup:'<path d="M13 6l2.5-4.5h3" stroke="#e53935" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M5 6h14l-1.8 15H6.8z" fill="#fff" fill-opacity=".92"/><path d="M5.9 12h12.2l-.9 9H6.8z" fill="#b5d94a"/><rect x="4" y="5" width="16" height="2.6" rx="1" fill="#e53935"/>',
lock:'<rect x="5" y="10.5" width="14" height="10.5" rx="2.5" fill="currentColor"/><path d="M8 10.5V8a4 4 0 018 0v2.5" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="15.5" r="1.6" fill="#31200f"/>',
angry:'<circle cx="12" cy="12" r="11" fill="#e53935"/><path d="M6 7.5l5 2.5M18 7.5l-5 2.5" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="8.8" cy="12.2" r="1.6" fill="#fff"/><circle cx="15.2" cy="12.2" r="1.6" fill="#fff"/><path d="M8 18c1-2.4 7-2.4 8 0" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>',
trophy:'<path d="M7 3h10v5a5 5 0 01-10 0z" fill="#ffd54a" stroke="#c98b1f" stroke-width="1.2"/><path d="M7 5H3.5c0 3 1.5 4.5 3.8 4.8M17 5h3.5c0 3-1.5 4.5-3.8 4.8" stroke="#c98b1f" stroke-width="1.6" fill="none"/><rect x="10.5" y="13" width="3" height="4" fill="#c98b1f"/><rect x="7.5" y="17" width="9" height="3.5" rx="1.2" fill="#ffd54a" stroke="#c98b1f" stroke-width="1.2"/>',
check:'<circle cx="12" cy="12" r="10" fill="#7cb342"/><path d="M7 12.5l3.2 3.2L17 9" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
flame:'<path d="M12 2c1 4 6 6 6 12a6 6 0 01-12 0c0-3 2-4.5 3-6 .3 2 1.2 2.8 2 3 0-3-.6-5.5 1-9z" fill="#ff7043"/><path d="M12 13c2 1.5 3 2.5 3 4.3a3 3 0 01-6 0c0-1.5 1.5-2.5 3-4.3z" fill="#ffd54a"/>',
lemon:'<ellipse cx="12" cy="13.5" rx="9" ry="7" fill="#ffe14d" stroke="#c9a800" stroke-width="1.2"/><path d="M12 6.5c1-2.5 3-3.5 5.5-3.5-1 2.2-2.3 3.4-5.5 3.5z" fill="#66bb6a"/><path d="M7 12.5c.6-1.6 2-2.6 3.4-2.8" stroke="#fff8c4" stroke-width="1.6" fill="none" stroke-linecap="round"/>',
iced:'<rect x="4" y="5" width="16" height="16" rx="3" fill="#bfe9f7" stroke="#6fb6d4" stroke-width="1.4"/><path d="M8 9h3M8 9v3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><path d="M13 16h3" stroke="#e3f6fd" stroke-width="1.6" stroke-linecap="round"/>',
lemonj:'<path d="M5 7h14l-1.8 14H6.8z" fill="#fff" fill-opacity=".92"/><path d="M5.9 12.5h12.2l-.9 8.5H6.8z" fill="#fff06a"/><circle cx="17.5" cy="6" r="4.5" fill="#ffe94a" stroke="#c9a800" stroke-width="1"/><path d="M17.5 2v8M13.5 6h8M14.7 3.2l5.6 5.6M20.3 3.2l-5.6 5.6" stroke="#fff8c4" stroke-width=".7"/><rect x="4" y="6" width="16" height="2.2" rx="1" fill="#c9a800"/>',
orange:'<circle cx="12" cy="13.5" r="8.5" fill="#ff9800" stroke="#e65100" stroke-width="1.2"/><path d="M12 5.2c.9-2.2 3-3.2 5.2-3.2-.8 2.2-2.4 3.3-5.2 3.2z" fill="#66bb6a"/><path d="M7.6 12c.5-1.7 1.9-2.8 3.4-3" stroke="#ffd180" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
mango:'<path d="M4.5 14.5c0-5.5 4-9.5 9.5-9.5 3.7 0 6.2 2.6 6.2 6.2 0 5.8-5.2 9.8-10.4 9.8-3.2 0-5.3-2.2-5.3-6.5z" fill="#ffb300" stroke="#e65100" stroke-width="1.2"/><path d="M14 5c.8-2.1 2.7-3.2 4.8-3.2-.6 2.1-2.1 3.3-4.8 3.2z" fill="#66bb6a"/><path d="M12.5 17.5c2.4-.4 4.4-2 5.2-4.5" stroke="#ef5350" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".65"/>',
straw:'<path d="M12 21.5C5.8 17.5 3.8 12.4 5.4 9.2c1.5-3 4.2-2.6 6.6-1.6 2.4-1 5.1-1.4 6.6 1.6 1.6 3.2-.4 8.3-6.6 12.3z" fill="#e53958" stroke="#b71c3c" stroke-width="1"/><path d="M6.8 7.2c1.8-2 3.4-2.4 5.2-1.2 1.8-1.2 3.4-.8 5.2 1.2-1.9.5-3.5.2-5.2-.7-1.7.9-3.3 1.2-5.2.7z" fill="#43a047"/><g fill="#ffe082"><circle cx="9.3" cy="12" r=".9"/><circle cx="14.7" cy="11.6" r=".9"/><circle cx="12" cy="15" r=".9"/><circle cx="10.4" cy="9.6" r=".8"/><circle cx="13.8" cy="8.9" r=".8"/></g>',
mix:'<path d="M4 6h16l-2 14.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2z" fill="#fff" fill-opacity=".92"/><path d="M4.7 9.5h14.6l-.5 3.7H5.2z" fill="#e5365a"/><path d="M5.2 13.2h13.6l-.6 3.8H5.8z" fill="#ff9a1f"/><path d="M5.8 17h12.4l-.4 3a1.2 1.2 0 01-1.2 1H7.4a1.2 1.2 0 01-1.2-1z" fill="#c6e03a"/><path d="M15 6.5l2.6-5" stroke="#7e57c2" stroke-width="1.8" stroke-linecap="round"/><circle cx="7.8" cy="5.2" r="2.3" fill="#d50000"/>'};
function ic(n,s){s=s||18;return '<svg class="ic" width="'+s+'" height="'+s+'" viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>'}
document.querySelectorAll('i[data-ic]').forEach(e=>{e.innerHTML=ic(e.dataset.ic,+e.dataset.s||18)});
let actx=null,toastT=null;
function tone(f,t0,d,type,v){const o=actx.createOscillator(),g=actx.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(v,t0+.015);g.gain.exponentialRampToValueAtTime(.001,t0+d);o.connect(g);g.connect(actx.destination);o.start(t0);o.stop(t0+d+.03)}
function unlock(){try{if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();if(actx.state==='running')return;actx.resume();const b=actx.createBuffer(1,1,22050),n=actx.createBufferSource();n.buffer=b;n.connect(actx.destination);n.start(0)}catch(e){}}
['pointerdown','touchend','click'].forEach(ev=>document.addEventListener(ev,unlock,{passive:true}));
function snd(k){try{if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();if(actx.state==='suspended')actx.resume();const t=actx.currentTime;
  if(k==='sell'){tone(988,t,.3,'sine',.35);tone(1319,t+.09,.45,'sine',.35);tone(2637,t+.09,.25,'sine',.08)}
  else if(k==='tip'){[1568,1976,2349,3136].forEach((f,i)=>tone(f,t+.22+i*.07,.28,'sine',.14));tone(4186,t+.52,.4,'sine',.05)}
  else if(k==='level'){[523,659,784,1047,1319].forEach((f,i)=>tone(f,t+i*.1,.35,'triangle',.22));tone(1568,t+.55,.7,'sine',.14)}
  else if(k==='ach'){tone(784,t,.2,'triangle',.2);tone(1175,t+.12,.5,'triangle',.2);tone(1568,t+.12,.4,'sine',.08)}
  else if(k==='rush'){tone(440,t,.22,'square',.09);tone(440,t+.3,.22,'square',.09);tone(587,t+.6,.5,'square',.09)}
  else{[523,659,784,1047].forEach((f,i)=>tone(f,t+i*.09,.3,'triangle',.2));tone(1568,t+.38,.5,'sine',.12);tone(2093,t+.38,.4,'sine',.05)}
}catch(e){}}
const TQ=[];let tBusy=false;
function toast(html,ms){TQ.push([html,ms||2600]);if(!tBusy)nextToast()}
function nextToast(){const q=TQ.shift();if(!q){tBusy=false;return}tBusy=true;const el=$('upgradeToast');el.innerHTML=q[0];el.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>{el.classList.remove('show');setTimeout(nextToast,300)},q[1])}
const tt=(i,a,b)=>'<div class="tt">'+ic(i,24)+'<div>'+a+(b?'<small>'+b+'</small>':'')+'</div></div>';

/* ---------- helpers ---------- */
function R(x,y,w,h,c){X.fillStyle=c;X.fillRect(x,y,w,h)}
function rr(x,y,w,h,r,f){X.beginPath();X.moveTo(x+r,y);X.arcTo(x+w,y,x+w,y+h,r);X.arcTo(x+w,y+h,x,y+h,r);X.arcTo(x,y+h,x,y,r);X.arcTo(x,y,x+w,y,r);X.closePath();if(f){X.fillStyle=f;X.fill()}}
function circ(x,y,r,c){X.fillStyle=c;X.beginPath();X.arc(x,y,r,0,7);X.fill()}
function move(e,tx,ty,sp,dt){const dx=tx-e.x,dy=ty-e.y,d=Math.hypot(dx,dy),s=sp*dt;if(d<=s||d<.01){e.x=tx;e.y=ty;return true}e.x+=dx/d*s;e.y+=dy/d*s;e.moving=true;if(Math.abs(dx)>1)e.fx=dx>0?1:-1;return false}


/* ---------- decor helpers (visual only) ---------- */
function lg(x0,y0,x1,y1,stops){const g=X.createLinearGradient(x0,y0,x1,y1);stops.forEach((c,i)=>g.addColorStop(i/(stops.length-1),c));return g}
function caneTop(x,y,n,spread){for(let i=0;i<n;i++){const dx=(i-(n-1)/2)*spread,h=16+((i*7)%9);X.strokeStyle='#7cb342';X.lineWidth=3.4;X.lineCap='round';X.beginPath();X.moveTo(x+dx*.5,y);X.lineTo(x+dx*1.5,y-h);X.stroke();X.strokeStyle='#4f8a2c';X.lineWidth=1.2;X.beginPath();X.moveTo(x+dx*.5-2,y-h*.45);X.lineTo(x+dx*.5+2,y-h*.45);X.stroke();X.fillStyle='#9ccc65';X.beginPath();X.ellipse(x+dx*1.5,y-h-1,2.6,5,dx*.05,0,7);X.fill()}}
function barrel(cx,cy,r,withCane){
  X.fillStyle='rgba(0,0,0,.22)';X.beginPath();X.ellipse(cx+2,cy+r+1,r+3,5,0,0,7);X.fill();
  if(withCane)caneTop(cx,cy-r+3,5,5);
  rr(cx-r,cy-r,r*2,r*2,5,lg(cx-r,0,cx+r,0,['#6e431c','#a8702f','#8a5a2c','#5e3815']));
  for(const k of [.28,.72]){R(cx-r,cy-r+r*2*k-1.5,r*2,3,'#37474f');R(cx-r,cy-r+r*2*k-1.5,r*2,1,'rgba(255,255,255,.35)')}
  for(let i=1;i<4;i++)R(cx-r+i*r*.5,cy-r+2,1,r*2-4,'rgba(0,0,0,.18)');
  X.fillStyle='#3b2410';X.beginPath();X.ellipse(cx,cy-r+2,r-1,4,0,0,7);X.fill();X.fillStyle='#c98b3f';X.beginPath();X.ellipse(cx,cy-r+1,r-3,3,0,0,7);X.fill();
}
function crate(x,y,w,h,fruit){
  X.fillStyle='rgba(0,0,0,.2)';X.beginPath();X.ellipse(x+w/2+2,y+h+1,w/2+3,4,0,0,7);X.fill();
  if(fruit==='lemon'){for(let i=0;i<5;i++){circ(x+4+i*(w-8)/4,y+3,4.6,'#ffe14d');R(x+2+i*(w-8)/4,y+2,2,1.5,'#fffbc7')}circ(x+w*.5,y-1,4.6,'#ffd93a')}
  rr(x,y+2,w,h-2,3,'#b9803f');
  for(let i=0;i<3;i++){R(x+1,y+5+i*((h-8)/3),w-2,(h-8)/3-2,i%2?'#c58f4c':'#a8712f');R(x+1,y+5+i*((h-8)/3),w-2,1,'rgba(255,255,255,.25)')}
  R(x,y+2,4,h-2,'#7a4a1c');R(x+w-4,y+2,4,h-2,'#7a4a1c');
  for(const nx of [x+2,x+w-2])for(const ny of [y+6,y+h-4])circ(nx,ny,.9,'#d7ccc8');
}
function sack(x,y){X.fillStyle='rgba(0,0,0,.2)';X.beginPath();X.ellipse(x+12,y+24,15,4,0,0,7);X.fill();rr(x,y+4,24,20,7,'#e7d9b4');X.fillStyle='#d4c294';X.beginPath();X.moveTo(x+5,y+5);X.lineTo(x+8,y);X.lineTo(x+16,y);X.lineTo(x+19,y+5);X.fill();R(x+7,y+3,10,2,'#8d6e63');rr(x+6,y+11,12,7,2,'#7cb342');R(x+8,y+14,8,1.5,'#fff')}

/* ---------- static shop background (drawn once) ---------- */
function buildBG(){
  const main=X;X=B.getContext('2d');X.setTransform(2,0,0,2,0,0);
  const WD='#4a2c12',OR='#e9701e',CR='#fff3d6',GR='#2f7a4a',hn=S.u.hire;
  // back wall: warm orange wallpaper + green wainscot
  R(0,0,W,58,'#e9923f');for(let i=0;i<W;i+=18)R(i,7,9,50,'rgba(255,255,255,.06)');
  R(0,0,W,7,WD);R(0,7,W,2,'#2d1a09');
  R(0,56,W,3,'#6b4220');R(0,59,W,18,GR);
  for(let i=0;i<W;i+=22){R(i,59,1,18,'rgba(0,0,0,.18)');R(i+1,59,1,18,'rgba(255,255,255,.08)')}
  R(0,77,W,3,'#6b4220');
  // wallpaper diamonds, crown molding, subway tiles
  for(let yy=14,r=0;yy<56;yy+=14,r++)for(let xx=(r%2)*9;xx<W;xx+=18){X.fillStyle='rgba(255,236,190,.11)';X.beginPath();X.moveTo(xx+9,yy-4);X.lineTo(xx+13,yy);X.lineTo(xx+9,yy+4);X.lineTo(xx+5,yy);X.fill()}
  R(0,9,W,3,'#8a5a2c');R(0,12,W,1,'rgba(255,255,255,.25)');R(0,13,W,3,'rgba(0,0,0,.12)');
  R(0,59,W,18,lg(0,59,0,77,['#3a9459','#2f7a4a','#26683e']));
  for(let r=0;r<2;r++)for(let xx=(r?-11:0);xx<W;xx+=22){R(xx,59+r*9,22,1,'rgba(255,255,255,.22)');R(xx+21,59+r*9,1,9,'rgba(0,0,0,.2)');R(xx+1,60+r*9,20,1,'rgba(255,255,255,.1)')}
  R(0,68,W,1,'rgba(0,0,0,.22)');R(0,56,W,1,'rgba(255,255,255,.2)');
  // wooden plank floor
  for(let y=80,r=0;y<500;y+=24,r++){R(0,y,W,24,r%2?'#c98a52':'#bd7d46');R(0,y+23,W,1,'rgba(60,30,10,.35)');
    for(let x=((r*47)%90)-90;x<W;x+=90)R(x,y,1,24,'rgba(60,30,10,.28)');
    for(let k=0;k<4;k++)R((r*37+k*83)%W,y+5+k*4,22,1,'rgba(255,255,255,.08)')}
  R(0,80,W,7,'rgba(0,0,0,.2)');
  for(let y=80,r=0;y<500;y+=24,r++){X.fillStyle=['rgba(255,214,150,.07)','rgba(90,40,10,.07)','rgba(255,255,255,0)'][r%3];X.fillRect(0,y,W,23);for(let k=0;k<2;k++){const kx=(r*61+k*173)%W,ky=y+12;X.fillStyle='rgba(70,35,10,.28)';X.beginPath();X.ellipse(kx,ky,3,1.7,0,0,7);X.fill();X.strokeStyle='rgba(70,35,10,.14)';X.lineWidth=1;X.beginPath();X.ellipse(kx,ky,6,3.4,0,0,7);X.stroke()}}
  // kitchen tile zone behind the counter
  for(let ty=136,a=0;ty<240;ty+=26,a++)for(let tx=0,b=0;tx<W;tx+=26,b++){const dk=(a+b)%2;R(tx,ty,26,26,dk?'#9fd3a4':'#f4ead0');R(tx,ty,26,1,'rgba(255,255,255,.55)');R(tx,ty,1,26,'rgba(255,255,255,.35)');R(tx+25,ty,1,26,'rgba(60,90,60,.25)');R(tx,ty+25,26,1,'rgba(60,90,60,.25)');X.fillStyle='rgba(255,255,255,.14)';X.beginPath();X.moveTo(tx+3,ty+22);X.lineTo(tx+14,ty+3);X.lineTo(tx+18,ty+3);X.lineTo(tx+7,ty+22);X.fill()}
  R(0,136,W,2,'#7a4a24');
  // contact shadows under counters
  X.fillStyle=lg(0,138,0,156,['rgba(40,20,0,.32)','rgba(40,20,0,0)']);X.fillRect(0,138,330,18);
  X.fillStyle=lg(0,286,0,304,['rgba(40,20,0,.34)','rgba(40,20,0,0)']);X.fillRect(20,286,380,18);
  X.fillStyle=lg(0,222,0,240,['rgba(40,20,0,0)','rgba(40,20,0,.25)']);X.fillRect(0,222,W,18);
  const RG=[['#e08a2e','#2b6a43'],['#c62828','#efd9b0'],['#6a1b9a','#efd9b0']];
  for(let i=0;i<=hn;i++){const x=LX[i]-48;rr(x,300,96,192,12,RG[i][0]);rr(x+6,306,84,180,9,RG[i][1]);rr(x+12,312,72,168,6,'rgba(255,255,255,.08)');for(let y=326;y<476;y+=22)R(x+14,y,68,2,'rgba(255,200,120,.35)')}
  X.save();X.translate(30,0);X.textAlign='center';X.direction='rtl';
  // sign: wooden frame, green board, marquee bulbs
  rr(80,6,200,50,10,WD);rr(84,10,192,42,7,'#1f5a34');rr(88,14,184,34,5,'#27703f');
  X.textAlign='center';X.direction='rtl';X.font='bold 25px Tahoma,Arial';X.lineJoin='round';X.lineWidth=4;X.strokeStyle='#123a22';X.strokeText('دكان السعادة',180,40);X.fillStyle='#ffb347';X.fillText('دكان السعادة',180,40);
  const bulb=(x,y)=>{circ(x,y,5,'rgba(255,200,90,.28)');circ(x,y,2.1,'#fff1b0')};
  for(let x=92;x<=268;x+=14){bulb(x,8);bulb(x,54)}
  for(const y of[20,32,44]){bulb(83,y);bulb(277,y)}
  X.restore();
  // window with striped awning
  rr(10,18,64,36,4,WD);rr(14,22,56,28,2,'#9fd8ea');R(41,22,3,28,WD);R(14,34,56,3,WD);circ(26,30,5,'rgba(255,255,255,.55)');
  R(52,45,12,6,'#d9772b');circ(58,41,5,'#43a047');circ(54,43,3.5,'#66bb6a');
  for(let i=0;i<8;i++)R(8+i*8.5,8,8.5,10,i%2?CR:OR);
  for(let i=0;i<8;i++)circ(12.25+i*8.5,18,4.25,i%2?CR:OR);
  X.save();X.translate(60,0);X.textAlign='center';X.direction='rtl';
  // menu chalkboard
  rr(284,10,68,44,4,WD);rr(288,14,60,36,2,'#22432d');
  X.fillStyle=CR;X.font='bold 11px Tahoma,Arial';X.fillText('عصير قصب',318,28);R(298,31,40,1,'rgba(255,255,255,.4)');X.fillStyle='#ffb347';X.font='10px Tahoma,Arial';X.fillText('طازة ولذيذ',318,43);
  X.restore();
  R(0,84,330,38,'#d29a5f');R(0,84,330,3,'#e6b57c');R(0,122,330,14,'#7a4a24');R(0,122,330,3,'#4f2f14');
  for(let i=0;i<10;i++)R(8+i*32,127,20,6,'#8f5a2c');
  X.save();X.translate(30,0);X.textAlign='center';X.direction='rtl';
  for(let i=0;i<3;i++){X.fillStyle='#f3f7fa';X.beginPath();X.moveTo(252+i*14,98);X.lineTo(262+i*14,98);X.lineTo(261+i*14,112);X.lineTo(253+i*14,112);X.fill();R(252+i*14,98,10,2,'#cfd8dc');R(252.6+i*14,103,8.8,3,OR)}
  X.restore();
  X.save();X.translate(-288,0);X.textAlign='center';X.direction='rtl';
  rr(300,90,36,30,3,GR);R(298,88,40,5,'#b9e2c5');rr(304,97,28,17,2,'#a8d9b8');R(333,99,2,10,'#e8f5e9');
  X.restore();
  X.save();X.translate(323,0);X.textAlign='center';X.direction='rtl';
  // cane crate
  for(let i=0;i<9;i++){const x0=20+i*8,tx=x0+(i-4)*2.5;X.strokeStyle='#8bc34a';X.lineWidth=5;X.lineCap='round';X.beginPath();X.moveTo(x0,122);X.lineTo(tx,82);X.stroke();X.strokeStyle='#558b2f';X.lineWidth=1.5;for(let k=0;k<4;k++){const f=.2+k*.22;const nx=x0+(tx-x0)*f,ny=122-40*f;X.beginPath();X.moveTo(nx-2.5,ny);X.lineTo(nx+2.5,ny);X.stroke()}}
  rr(12,112,76,32,4,'#9a6430');for(let i=0;i<3;i++)R(14,118+i*8,72,1.5,'#6b4220');R(12,142,76,4,'rgba(0,0,0,.2)');rr(38,121,24,11,2,OR);
  X.restore();
  R(20,240,380,24,'#d29a5f');R(20,240,380,3,'#e6b57c');R(20,264,380,22,'#7a4a24');R(20,264,380,3,'#4f2f14');
  for(let i=0;i<11;i++)R(32+i*34,272,22,9,'#8f5a2c');
  R(20,243,380,1,'rgba(255,255,255,.35)');for(let i=0;i<9;i++)R(20+((i*53)%360),246+(i%3)*6,48,1,'rgba(120,70,30,.28)');
  R(20,262,380,2,'#e6c15a');R(20,262,380,1,'#fff0a8');R(20,266,380,1,'rgba(255,255,255,.18)');
  for(let i=0;i<11;i++){R(32+i*34,272,22,1,'rgba(255,255,255,.2)');R(32+i*34,280,22,1,'rgba(0,0,0,.22)')}
  for(let i=0;i<=hn;i++){const x=LX[i]+22;rr(x,222,30,20,3,'#37474f');R(x-2,217,30,7,'#78909c');R(x+4,228,10,4,'#a5d6a7');R(x+4,228,10,1,'rgba(255,255,255,.5)');for(let k=0;k<3;k++)R(x+17+k*3.4,226,2,2,'#ffb74d');for(let k=0;k<3;k++)R(x+17+k*3.4,230,2,2,'#eceff1');R(x+2,239,26,1.5,'rgba(0,0,0,.25)')}
  X.save();X.translate(80,14);X.textAlign='center';X.direction='rtl';
  circ(190,212,16,'rgba(255,190,90,.16)');R(189,214,3,12,WD);X.fillStyle=OR;X.beginPath();X.moveTo(182,214);X.lineTo(198,214);X.lineTo(194,205);X.lineTo(186,205);X.fill();
  X.restore();
  R(0,500,W,40,'#7a4a24');for(let x=0;x<W;x+=20)R(x,504,1,36,'rgba(0,0,0,.2)');R(0,500,W,4,WD);
  R(182,504,56,36,'#d8c8a8');R(182,504,56,36,'rgba(255,255,255,.12)');
  R(178,496,5,44,WD);R(237,496,5,44,WD);R(178,490,64,6,WD);
  for(let i=0;i<9;i++)R(174+i*8,478,8,12,i%2?CR:OR);
  for(let i=0;i<9;i++)circ(178+i*8,490,4,i%2?CR:OR);
  X.textAlign='center';X.direction='rtl';rr(252,508,34,16,3,WD);R(254,510,30,12,GR);X.fillStyle=CR;X.font='bold 10px Tahoma,Arial';X.fillText('مفتوح',269,520);
  X.save();X.translate(-50,60);X.textAlign='center';X.direction='rtl';
  circ(200,458,11,WD);circ(200,458,9,CR);X.strokeStyle=WD;X.lineWidth=1.2;X.beginPath();X.moveTo(200,458);X.lineTo(200,452);X.moveTo(200,458);X.lineTo(205,460);X.stroke();
  X.restore();
  X.save();X.translate(74,60);X.textAlign='center';X.direction='rtl';
  rr(232,448,22,18,2,WD);R(234,450,18,14,'#f2c27b');R(234,458,18,6,'#43a047');circ(243,454,3,'#ffd54a');
  rr(262,448,22,18,2,WD);R(264,450,18,14,CR);circ(273,457,5,OR);R(272,449,2,3,'#43a047');
  X.restore();
  X.save();X.translate(0,60);X.textAlign='center';X.direction='rtl';
  // plants in terracotta pots
  for(const px of [24,396]){R(px-9,412,18,16,'#d9772b');R(px-10,410,20,4,'#b85a18');circ(px,404,13,'#43a047');circ(px-6,398,8,'#66bb6a');circ(px+6,400,8,'#2e7d32')}
  X.restore();
  // wall decor: framed cane poster + small shelf
  rr(314,15,26,34,3,WD);rr(317,18,20,28,2,'#f3e4bf');for(const dx of[-4,0,4]){X.strokeStyle='#7cb342';X.lineWidth=3;X.lineCap='round';X.beginPath();X.moveTo(327+dx,42);X.lineTo(327+dx*1.6,24);X.stroke()}R(320,41,14,2,'#b9803f');circ(327,22,0,'#000');
  R(77,41,31,3,WD);R(77,44,31,1.5,'rgba(0,0,0,.25)');circ(84,37,4,'#ffe14d');circ(91,38,3.4,'#ffd93a');rr(96,29,10,12,2,'rgba(200,235,210,.85)');R(97,35,8,6,'#aed581');R(96,27,10,3,'#8d6e63');
  // left side decor: crate of lemons + cane barrels (work area), sack
  crate(6,142,36,28,'lemon');barrel(24,196,13,true);barrel(24,226,13,false);
  // front-of-house corners
  barrel(401,352,12,true);crate(388,372,28,24,'lemon');sack(7,372);
  // warm light pools over the counter
  for(const lx of[90,210,330]){const g2=X.createRadialGradient(lx,262,4,lx,262,70);g2.addColorStop(0,'rgba(255,225,150,.20)');g2.addColorStop(1,'rgba(255,225,150,0)');X.fillStyle=g2;X.fillRect(lx-70,200,140,130)}
  // soft vignette for a cozy feel
  const g=X.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,H*.78);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(30,12,0,.38)');X.fillStyle=g;X.fillRect(0,0,W,H);
  X=main;
}

/* ---------- game state ---------- */
const ST={store:{x:373,y:164},juicer:{x:240,y:160},cups:{x:301,y:160},serve:{x:316,y:228},idle:{x:300,y:195},fridge:{x:52,y:156},fridgeW:{x:86,y:188}};
const SKINS=['#f7dcc4','#ecc19a','#d29a66','#b07744','#8a5530','#5a3722'],SHIRTS=['#e53935','#1e88e5','#8e24aa','#fb8c00','#00897b','#6d4c41','#d81b60','#3949ab','#7cb342','#546e7a'],HAIRS=['#14100d','#2b1b10','#4a2c12','#6b4423','#8a3b1d','#c9a24a'],PANTS=['#3b3b58','#37474f','#5d4037','#263238','#455a64','#1a237e'];
const HJC=['#8e24aa','#00897b','#d81b60','#3949ab','#e9d8b4','#546e7a','#c2185b','#2e7d32'];
function mkLook(){const g=Math.random()<.5?'m':'f',sh=pick(SHIRTS);let c2=pick(SHIRTS);while(c2===sh)c2=pick(SHIRTS);
  const L={g,hs:Math.floor(Math.random()*5),os:Math.floor(Math.random()*5),skin:pick(SKINS),hair:pick(HAIRS),shirt:sh,c2,pants:pick(PANTS)};
  if(g==='f'&&Math.random()<.3){let h=pick(HJC);while(h===sh)h=pick(HJC);L.hj=h;L.os=pick([0,3,4])}
  return L}
const CUST_LINES=[['يا اسطى','عايزين كوبيتين قصب'],['عامل إيه','عايز كوباية قصب'],['بقولك يا خويا','الكوبايه بكام؟'],['السلام عليكم','قصب طازة لو سمحت'],['يا معلم','كوباية قصب يا اسطى'],['الجو حر قوي','عايز قصب بسرعة'],['اديني كوباية','وانا مستعجل شوية'],['وحشني عصيرك','كوباية قصب لو سمحت'],['ربنا يكرمك','كوباية قصب حلوة'],['صباح الخير','كوباية قصب يا ريس']];
const CH={c:null,n:0,fin:0},GAP=1.3;let AVW=null;
const TIPSAY=[['تسلم إيدك','يا اسطى'],['يعطيك العافية','وده بقشيش'],['الله ينور','خد بقشيشك']];
const REPLIES=[['تحت أمرك يا باشا','حاضر ثواني'],['الحمد لله يا غالي','ثواني وتكون جاهزة'],null,['وعليكم السلام','نورت المحل يا غالي'],['أمرك يا حبيبي','ثواني وجاهزة'],['عندنا الحل يا باشا','قصب طازة حالاً'],['من عنيا يا غالي','هتلاقيها حالاً'],['حبيبي يا معلم','نورتنا'],['وإياك يا حبيبي','ثواني وتكون عندك'],['صباح النور يا ريس','من عنيا']];
const Wk={x:300,y:195,ph:0,fx:1,carry:null,task:null,item:'cane',skin:'#e0ac69',shirt:'#1e88e5',hair:'#222',apron:true,hat:true};
const M={run:false,t:0,total:3,rot:0,glass:0,col:'#b5d94a'};
const mkM=()=>({run:false,t:0,total:3,rot:0,glass:0,col:'#b5d94a'}),LX=[330,210,90];
const HL=[{i:0,lane:1,k:1.2,mx:165,home:{x:196,y:228},jx:165,jy:160,sv:{x:196,y:228},m:mkM(),x:196,y:228,ph:0,fx:1,carry:null,task:null,item:'cane',skin:'#d29a66',shirt:'#e53935',hair:'#14100d',apron:true,hat:true},{i:1,lane:2,k:1.5,mx:90,home:{x:76,y:228},jx:90,jy:160,sv:{x:76,y:228},m:mkM(),x:76,y:228,ph:0,fx:1,carry:null,task:null,item:'cane',skin:'#f7dcc4',shirt:'#8e24aa',hair:'#4a2c12',apron:true,hat:true}];
const HS=()=>HL.slice(0,S.u.hire),mUp=(m,dt)=>{if(m.run){m.t-=dt;m.rot+=dt*14;m.glass=Math.min(1,1-m.t/m.total);if(m.t<=0){m.run=false;m.glass=1}}};
const say=(e,t,l)=>{e.bt=t;e.bl=l||2},HSAY={a:['أمرك يا باشا','حاضر يا فندم','ثواني وتكون جاهزة','من عنيا'],m:['العصير بيتعصر','قصب طازة','لحظة واحدة'],d:['اتفضل يا فندم','الكوباية جاهزة','بالهنا والشفا']},CSAY=['تسلم','عايزها سريعة','شكراً يا اسطى','متتأخرش'];
/* ---------- الثلاجة: محطة مشتركة (عامل واحد في المرة) ---------- */
const FS={by:null,q:[],age:0};
const fsAlive=w=>!!(w.task&&(w.task.s===20||w.task.s===21));
function fsFree(w){if(FS.by===w)FS.by=null;const i=FS.q.indexOf(w);if(i>=0)FS.q.splice(i,1)}
function fsReq(w){if(FS.by===w)return true;if(FS.by)return false;if(FS.q.length&&FS.q[0]!==w)return false;const i=FS.q.indexOf(w);if(i>=0)FS.q.splice(i,1);FS.by=w;FS.age=0;return true}
function fsTick(dt){
  if(FS.by){FS.age+=dt;if(!fsAlive(FS.by))FS.by=null;else if(FS.age>8){const w=FS.by;FS.by=null;w.task.s=20}}
  FS.q=FS.q.filter(fsAlive)}
/* حالة 20: رايح الثلاجة أو مستني دوره | حالة 21: بياخد المنتج. بترجع true لما يخلص */
function fridgeStep(w,t,sp,dt,dw){
  if(t.s===20){
    const turn=!FS.by&&(!FS.q.length||FS.q[0]===w)||FS.by===w;
    if(!turn){if(!FS.q.includes(w))FS.q.push(w);t.fq=t.fq||0;if(move(w,ST.fridgeW.x,ST.fridgeW.y,sp,dt)){t.fq+=dt;if(t.fq>10){fsFree(w);return true}}return false}
    if(move(w,ST.fridge.x,ST.fridge.y,sp,dt)&&fsReq(w)){t.s=21;t.w=FT;if(w.i!==undefined)say(w,'من الثلاجة',1.4)}
    return false}
  w.work=true;t.w-=dw;if(t.w<=0){fsFree(w);return true}
  return false}
function hUpdate(h,dt){
  if(h.bl>0)h.bl-=dt;h.moving=false;h.work=false;h.ph+=dt;const L=k=>S.u['w'+h.i+k]||0,sp=wkSpeed()*.85*h.k*(1+.15*L('walk')),dw=dt*(1+.25*L('work')),t=h.task,m=h.m;
  if(!t){move(h,h.home.x,h.home.y,sp,dt);const c=qL(h.lane).find(c=>c.ready&&!c.taken);if(c){c.taken=true;h.task={c,s:1,w:WS};h.item=c.item;say(h,gf(c,pick(HSAY.a)),2);say(c,pick(CSAY),1.8)}return}
  const c=t.c;if(c.st!=='q'){fsFree(h);h.task=null;h.carry=null;m.run=false;m.glass=0;return}
  switch(t.s){
    case 1:h.work=true;t.w-=dw;if(t.w<=0)t.s=cold(h.item)?20:2;break;
    case 20:case 21:if(fridgeStep(h,t,sp,dt,dw))t.s=2;break;
    case 2:if(move(h,ST.store.x,ST.store.y,sp,dt)){t.s=3;t.w=.6*WS}break;
    case 3:h.work=true;t.w-=dw;if(t.w<=0){h.carry='cane';t.s=5}break;
    case 5:if(move(h,h.jx,h.jy,sp,dt)){h.carry=null;m.col=ITEMS[h.item].col;m.it=h.item;m.run=true;m.total=m.t=juiceTime()*1.25*Math.pow(.85,L('juice'))*jt(h.item);m.glass=0;t.s=6;say(h,pick(HSAY.m),2)}break;
    case 6:h.work=true;if(!m.run){h.carry='juice';m.glass=0;t.s=8}break;
    case 8:if(move(h,ST.cups.x,ST.cups.y,sp,dt)){t.s=9;t.w=.7*WS}break;
    case 9:h.work=true;t.w-=dw;if(t.w<=0){h.carry='cup';t.s=11}break;
    case 11:if(move(h,h.sv.x,h.sv.y,sp,dt)){t.s=12;t.w=.4*WS}break;
    case 12:h.work=true;t.w-=dw;if(t.w<=0){c.hb=L('tip');c.pay=Math.round(cPrice(c)*(1+.08*L('price')));serve(c);h.carry=null;h.task=null;say(h,pick(HSAY.d),2);say(c,'تسلم إيدك',1.8)}break}}
const ITEMS={
 cane:{n:'عصير قصب',i:'cup',lv:1,mul:1,col:'#b5d94a'},
 lemon:{n:'قصب بليمون',i:'lemon',lv:2,mul:1.6,col:'#d9e24f',lines:[
  [['يا اسطى','عايز قصب بليمون'],['من عنيا يا باشا','ليمون على قصب حالاً']],
  [['السلام عليكم','قصب بليمون لو سمحت'],['وعليكم السلام','ثواني وتكون جاهزة']],
  [['نفسي في حاجة حامضة','هات قصب بليمون'],['عندنا اللي يظبطك','ثواني يا غالي']],
  [['يا معلم','كوباية قصب بليمون يا ريس'],['أمرك يا حبيبي','بليمون فريش']],
  [['الجو حر قوي','عايز قصب بليمون بسرعة'],['حاضر يا باشا','ثواني وتشرب']],
  [['صباح الخير','قصب بليمون لو سمحت'],['صباح النور','تحت أمرك']]]},
 iced:{n:'قصب ساقع',i:'iced',lv:3,mul:2.2,cold:true,col:'#c4ecd9',lines:[
  [['الجو نار يا اسطى','عايز قصب ساقع'],['عندنا اللي يبرّد','ساقع حالاً']],
  [['يا معلم','كوباية قصب ساقع'],['من عنيا','ساقع زي التلج']],
  [['عايز حاجة تتلج','قصب ساقع لو سمحت'],['أمرك يا غالي','ثواني وتكون ساقعة']],
  [['السلام عليكم','قصب ساقع بالتلج'],['وعليكم السلام','نورت يا حبيبي']],
  [['ربنا يكرمك','هات قصب ساقع'],['تحت أمرك يا باشا','حاضر']],
  [['الشمس واكلاني','قصب ساقع بسرعة'],['سلامتك','ثواني وتبرد']]]}
};
const P=t=>t.split('\n').map(l=>{const q=l.split('|');return[[q[0],q[1]],q.length>2?[q[2],q[3]]:null]});
const CL={m:CUST_LINES.map((a,i)=>[a,REPLIES[i]]).concat(P(`صباح الفل|كوباية قصب بسرعة|صباح النور يا باشا|من عنيا
يا اسطى الجو نار|عايز قصب يبرّد|عندنا اللي يبرّد|حاضر يا غالي
ازيك يا معلم|هات كوباية قصب|الحمد لله يا باشا|ثواني وتشرب
مساء الخير|كوباية قصب طازة|مساء النور|عنيا يا غالي
يا رجالة|عايز قصب يظبطني|أمرك يا باشا|ثواني وتكون جاهزة
تعبان قوي النهاردة|كوباية قصب تفوّقني|سلامتك يا غالي|ثواني وتبقى كويس
يا ريس|قصب على السريع|من عنيا يا ريس|حاضر حالاً
السلام عليكم|عايز أشرب قصب|وعليكم السلام|أمرك يا باشا
وحشتني يا اسطى|كوباية قصب زي العادة|نورت يا غالي|حاضر يا حبيبي
الشمس نار|هات كوباية قصب|ربنا يبرّد عليك|ثواني ونجيبها
يا معلم الحكاية|قصب حلو لو سمحت|عندنا أحلى قصب|من عنيا
لسه فاتح؟|عايز قصب قبل ما أمشي|طبعاً يا باشا|ثواني وتمشي مبسوط
يا اسطى بسرعة|عندي معاد، كوباية قصب|حاضر يا باشا|ثواني وتلحق
يا اسطى|الكوباية بكام النهاردة؟
لو سمحت|بكام كوباية القصب؟`)),f:P(`صباح الخير|عايزة كوباية قصب|صباح النور يا هانم|ثواني وتكون جاهزة
ازيك يا اسطى|عايزة قصب طازة|الحمد لله يا غالية|من عنيا
لو سمحت|الكوباية بكام؟
السلام عليكم|كوباية قصب لو سمحت|وعليكم السلام يا هانم|نورتي المحل
الجو حر قوي|عايزة قصب بسرعة|سلامتك يا غالية|ثواني وتشربي
يا معلم|عايزة كوباية قصب حلوة|أمرك يا هانم|حاضر
وحشني عصيرك|كوباية قصب زي كل مرة|نورتي يا غالية|حاضر يا ست الكل
مساء الخير|كوباية قصب طازة|مساء النور يا مدام|من عنيا
أنا مستعجلة شوية|كوباية قصب بسرعة|حاضر يا هانم|ثواني وتلحقي
ربنا يكرمك|عايزة قصب يظبط مزاجي|تحت أمرك يا غالية|ثواني وتبقي حلوة
تعبانة النهاردة|كوباية قصب تفوّقني|سلامتك يا قمر|ثواني وتبقي كويسة
يا اسطى|هات كوباية قصب لو سمحت|عنيا يا هانم|حاضر ثواني
بسرعة لو سمحت|عايزة قصب ساقع|حاضر يا أستاذة|ثواني وتشربي
فاتح لسه؟|عايزة قصب قبل ما أمشي|طبعاً يا هانم|ثواني وتمشي مبسوطة
الشمس واكلاني|عايزة كوباية قصب|ربنا يبرّد عليكي|ثواني ونجيبها
يا اسطى|الكوباية بكام النهاردة؟
عامل إيه|كوباية قصب طازة يا اسطى|الحمد لله يا غالية|ثواني وتكون عندك
صباح الفل|عايزة قصب حلو|صباح النور يا ست الكل|عندنا أحلى قصب
أنا جعانة وعطشانة|كوباية قصب تشبعني|سلامتك يا هانم|حاضر ثواني
مساء النور|هات كوباية قصب|نورتي يا مدام|من عنيا
يا ريس|عايزة قصب يبرّد|أمرك يا هانم|ثواني وتشربي
ممكن لو سمحت|كوباية قصب من غير زحمة|طبعاً يا غالية|حاضر
الجو خانق|عايزة قصب بتلج|ساقع إن شاء الله|ثواني
يا اسطى|اديني كوباية قصب|من عنيا يا هانم|ثواني وتكون جاهزة
أهلاً|عايزة أجرّب قصبكم|نورتي يا غالية|هتحبيه إن شاء الله`)};
ITEMS.lemon.lines={m:ITEMS.lemon.lines,f:P(`يا اسطى|عايزة قصب بليمون|من عنيا يا هانم|ليمون على قصب حالاً
السلام عليكم|قصب بليمون لو سمحت|وعليكم السلام يا غالية|ثواني وتكون جاهزة
نفسي في حاجة حامضة|هات قصب بليمون|عندنا اللي يظبطك يا هانم|ثواني يا غالية
يا معلم|عايزة كوباية قصب بليمون|أمرك يا هانم|بليمون فريش
الجو حر قوي|عايزة قصب بليمون بسرعة|حاضر يا هانم|ثواني وتشربي
صباح الخير|قصب بليمون لو سمحت|صباح النور يا ست الكل|تحت أمرك`)};ITEMS.iced.lines={m:ITEMS.iced.lines,f:P(`الجو نار يا اسطى|عايزة قصب ساقع|عندنا اللي يبرّد يا هانم|ساقع حالاً
يا معلم|كوباية قصب ساقع لو سمحت|من عنيا يا غالية|ساقع زي التلج
عايزة حاجة تتلّج|قصب ساقع لو سمحت|أمرك يا هانم|ثواني وتكون ساقعة
السلام عليكم|عايزة قصب ساقع بالتلج|وعليكم السلام يا غالية|نورتي
ربنا يكرمك|هات قصب ساقع|تحت أمرك يا هانم|حاضر
الشمس واكلاني|قصب ساقع بسرعة|سلامتك يا قمر|ثواني وتبردي`)};
/* ---------- مشروبات الفاكهة: بتتفتح بالفلوس من القايمة ----------
   mul=سعر البيع (× سعر الكوب) | cm=تكلفة الإنتاج (× سعر الكوب) | jt=مضاعف وقت العصر | pb=ثواني صبر زيادة للزبون
   cost=سعر فتح المشروب | lv=أقل مستوى للشراء | need=لازم يتفتح قبله. القصب هو الأساسي وماتغيّرش فيه حاجة */
Object.assign(ITEMS,{
 lemonj:{n:'عصير ليمون',i:'lemonj',lv:2,mul:2.6,cm:.8,jt:.8,pb:0,cost:350,need:null,col:'#fff06a',lines:{m:P(`الجو حر قوي|عايز عصير ليمون|من عنيا يا باشا|ليمون فريش حالاً
يا اسطى|كوباية عصير ليمون لو سمحت|أمرك يا غالي|ثواني وتكون جاهزة
السلام عليكم|عايز عصير ليمون يفوّقني|وعليكم السلام|ثواني وتشرب
صباح الخير|هات عصير ليمون يا ريس|صباح النور يا باشا|حاضر حالاً
يا معلم|نفسي في ليمون حامض|عندنا اللي يظبطك|ليمون فريش
ربنا يكرمك|كوباية ليمون بسرعة|تحت أمرك يا باشا|ثواني`),f:P(`الجو حر قوي|عايزة عصير ليمون|من عنيا يا هانم|ليمون فريش حالاً
يا اسطى|كوباية عصير ليمون لو سمحت|أمرك يا غالية|ثواني وتكون جاهزة
السلام عليكم|عايزة عصير ليمون يفوّقني|وعليكم السلام يا هانم|ثواني وتشربي
صباح الخير|هاتلي عصير ليمون|صباح النور يا ست الكل|حاضر حالاً
يا معلم|نفسي في ليمون حامض|عندنا اللي يظبطك يا هانم|ليمون فريش
ربنا يكرمك|كوباية ليمون بسرعة|تحت أمرك يا غالية|ثواني`)}},
 orange:{n:'عصير برتقال',i:'orange',lv:3,mul:3.2,cm:1,jt:1,pb:0,cost:650,need:'lemonj',col:'#ff9d1c',lines:{m:P(`صباح الخير|عايز عصير برتقال|صباح النور يا باشا|برتقال فريش
يا اسطى|كوباية عصير برتقال لو سمحت|من عنيا|ثواني وتكون جاهزة
السلام عليكم|هات عصير برتقال طازة|وعليكم السلام|حاضر يا غالي
الجو حلو النهاردة|نفسي في عصير برتقال|أمرك يا باشا|برتقال حالاً
يا معلم|عصير برتقال لو سمحت|تحت أمرك يا باشا|ثواني وتشرب
وحشني عصيرك|كوباية برتقال زي العادة|نورت يا غالي|حاضر يا حبيبي`),f:P(`صباح الخير|عايزة عصير برتقال|صباح النور يا ست الكل|برتقال فريش
يا اسطى|كوباية عصير برتقال لو سمحت|من عنيا يا هانم|ثواني وتكون جاهزة
السلام عليكم|هاتلي عصير برتقال طازة|وعليكم السلام يا غالية|حاضر يا هانم
الجو حلو النهاردة|نفسي في عصير برتقال|أمرك يا هانم|برتقال حالاً
يا معلم|عصير برتقال لو سمحت|تحت أمرك يا غالية|ثواني وتشربي
وحشني عصيرك|كوباية برتقال زي العادة|نورتي يا غالية|حاضر يا ست الكل`)}},
 mango:{n:'عصير مانجا',i:'mango',lv:4,mul:4,cm:1.2,jt:1.25,pb:2,cost:1100,need:'orange',col:'#ffb81c',lines:{m:P(`الجو حر قوي|عايز عصير مانجا|من عنيا يا باشا|مانجا طازة حالاً
يا اسطى|كوباية عصير مانجا لو سمحت|أمرك يا غالي|ثواني وتكون جاهزة
السلام عليكم|هات عصير مانجا ساقع|وعليكم السلام|ثواني وتشرب
صباح الخير|نفسي في مانجا|صباح النور يا باشا|المانجا عندنا أحلى حاجة
يا معلم|عصير مانجا يا ريس|تحت أمرك|ثواني ويبقى عندك
ربنا يكرمك|كوباية مانجا بسرعة|من عنيا يا باشا|ثواني`),f:P(`الجو حر قوي|عايزة عصير مانجا|من عنيا يا هانم|مانجا طازة حالاً
يا اسطى|كوباية عصير مانجا لو سمحت|أمرك يا غالية|ثواني وتكون جاهزة
السلام عليكم|هاتلي عصير مانجا ساقع|وعليكم السلام يا هانم|ثواني وتشربي
صباح الخير|نفسي في مانجا|صباح النور يا ست الكل|المانجا عندنا أحلى حاجة
يا معلم|عصير مانجا لو سمحت|تحت أمرك يا غالية|ثواني ويبقى عندك
ربنا يكرمك|كوباية مانجا بسرعة|من عنيا يا هانم|ثواني`)}},
 straw:{n:'عصير فراولة',i:'straw',lv:5,mul:5,cm:1.5,jt:1.5,pb:4,cost:1700,need:'mango',col:'#f0587a',lines:{m:P(`صباح الخير|عايز عصير فراولة|صباح النور يا باشا|فراولة طازة حالاً
يا اسطى|كوباية عصير فراولة لو سمحت|أمرك يا غالي|ثواني وتكون جاهزة
السلام عليكم|هات عصير فراولة|وعليكم السلام|ثواني وتشرب
الجو حر|نفسي في فراولة ساقعة|من عنيا يا باشا|فراولة فريش
يا معلم|عصير فراولة يا ريس|تحت أمرك|حاضر
وحشني عصيرك|كوباية فراولة زي العادة|نورت يا غالي|حاضر يا حبيبي`),f:P(`صباح الخير|عايزة عصير فراولة|صباح النور يا ست الكل|فراولة طازة حالاً
يا اسطى|كوباية عصير فراولة لو سمحت|أمرك يا غالية|ثواني وتكون جاهزة
السلام عليكم|هاتلي عصير فراولة|وعليكم السلام يا هانم|ثواني وتشربي
الجو حر|نفسي في فراولة ساقعة|من عنيا يا هانم|فراولة فريش
يا معلم|عصير فراولة لو سمحت|تحت أمرك يا غالية|حاضر
وحشني عصيرك|كوباية فراولة زي العادة|نورتي يا غالية|حاضر يا ست الكل`)}},
 mix:{n:'كوكتيل فواكه',i:'mix',lv:6,mul:7,cm:2,jt:2,pb:7,cost:2600,need:'straw',col:'#ff7a3d',lines:{m:P(`يا اسطى|عايز كوكتيل فواكه|من عنيا يا باشا|كوكتيل مظبوط حالاً
السلام عليكم|كوباية كوكتيل لو سمحت|وعليكم السلام|فواكه فريش
الجو حر قوي|هات كوكتيل فواكه ساقع|أمرك يا باشا|ثواني وتشرب
صباح الخير|نفسي في كوكتيل|صباح النور يا باشا|أحلى كوكتيل عندنا
يا معلم|كوكتيل فواكه يا ريس|تحت أمرك|ثواني ويبقى عندك
ربنا يكرمك|كوباية كوكتيل بسرعة|من عنيا|ثواني`),f:P(`يا اسطى|عايزة كوكتيل فواكه|من عنيا يا هانم|كوكتيل مظبوط حالاً
السلام عليكم|كوباية كوكتيل لو سمحت|وعليكم السلام يا غالية|فواكه فريش
الجو حر قوي|هاتلي كوكتيل فواكه ساقع|أمرك يا هانم|ثواني وتشربي
صباح الخير|نفسي في كوكتيل|صباح النور يا ست الكل|أحلى كوكتيل عندنا
يا معلم|كوكتيل فواكه لو سمحت|تحت أمرك يا غالية|ثواني ويبقى عندك
ربنا يكرمك|كوباية كوكتيل بسرعة|من عنيا يا هانم|ثواني`)}}
});
const FD=k=>ITEMS[k]&&ITEMS[k].cost?ITEMS[k]:null,jt=k=>(ITEMS[k]&&ITEMS[k].jt)||1;
const isOpen=k=>{const m=ITEMS[k];return m.cost?!!S.dr[k]:m.lv<=level()};
const prodCost=c=>{const m=ITEMS[c.item];return m&&m.cm?Math.round(price()*m.cm*(c.big?1.6:1)):0};
const linesOf=(it,g)=>it==='cane'?CL[g]:ITEMS[it].lines[g],isPrice=c=>!linesOf(c.item,c.g)[c.line][1];
const gf=(c,t)=>c.g==='f'?t.replace(/يا باشا/g,'يا هانم').replace(/يا غالي/g,'يا غالية').replace(/يا حبيبي/g,'يا حبيبتي'):t;
const itemPrice=k=>Math.round(price()*ITEMS[k].mul*(k==='lemon'?1+.12*S.u.lemon:k==='iced'?1+.12*S.u.ice:1));
const cPrice=c=>Math.round(itemPrice(c.item)*(c.big?1.6:1)),qcap=()=>4+S.u.seats+(RU.on?1:0),qsp=()=>qcap()>5?32:38;
const HAGS=['غالي كده! خليها','معلش اعمل حسابي، خليها','هو ده آخر سعر؟ خليها'];
const RU={on:false,t:0,next:70},FR={t:0};let coins=[];
/* تحديث 1: ثوابت الصعوبة. WS=بطء الشغل اليدوي، JSLOW=بطء العصر، FT=وقت الأخذ من الثلاجة، COLDPAT=صبر زيادة لطلبات التبريد */
const WS=1.3,JSLOW=1.2,FT=.9,COLDPAT=8,cold=k=>!!(ITEMS[k]&&ITEMS[k].cold);
const pat=it=>24+4*S.u.fan+(it==='iced'?3*S.u.ice+COLDPAT:0)+((ITEMS[it]&&ITEMS[it].pb)||0);
let cust=[],pops=[],spawnT=.4,hudT=0,saveT=0;
const juiceTime=()=>3.2*JSLOW*Math.pow(.82,S.u.juice)*Math.pow(.78,S.u.juice2),FRT=()=>juiceTime()/JSLOW*2.2,wkSpeed=()=>56*(1+.18*S.u.speed),price=()=>10+4*S.u.price,level=()=>1+Math.floor(S.sold/25);
const qL=l=>cust.filter(c=>c.st==='q'&&(c.lane||0)===l),qList=()=>qL(0);
const pick=a=>a[Math.floor(Math.random()*a.length)];
let coldRun=0;
function pickItem(){let un=Object.keys(ITEMS).filter(isOpen);if(coldRun>=2){const nc=un.filter(k=>!ITEMS[k].cold);if(nc.length)un=nc}
  let tot=0;const w=un.map(k=>{const v=k==='cane'?3:ITEMS[k].cost?1.5:2;tot+=v;return v});let r=Math.random()*tot,it='cane';for(let i=0;i<un.length;i++){r-=w[i];if(r<=0){it=un[i];break}}
  coldRun=ITEMS[it].cold?coldRun+1:0;return it}
function addCust(ln){ln=ln||0;const lk=mkLook(),item=pickItem(),n=linesOf(item,lk.g).length,hag=!ln&&S.sold>=12&&Math.random()<.12?{st:'pre'}:null;
  cust.push({x:210,y:H+16,ph:Math.random()*5,fx:1,st:'q',wp:true,ready:false,carry:null,l:0,pt:pat(item),pm:pat(item),item,hag,lane:ln,big:S.u.big>0&&Math.random()<.3,line:Math.floor(Math.random()*n),...lk})}
function avatar(e){const cv=document.createElement('canvas');cv.width=cv.height=88;const main=X;X=cv.getContext('2d');
  try{X.setTransform(2,0,0,2,0,0);X.save();X.beginPath();X.arc(22,22,22,0,7);X.clip();R(0,0,44,44,'#f6e3b4');
    X.translate(22,63);X.scale(1.1,1.1);person(Object.assign({},e,{x:0,y:0,ph:0,moving:false,work:false,carry:null,fx:1}));X.restore()}finally{X=main}
  return cv.toDataURL()}
function buildMsgs(c){const m=buildMsgs0(c);if(c.big&&!c.hag)m[0].t+='، كبيرة لو سمحت';return m}
function buildMsgs0(c){const it=c.item,p=cPrice(c),j=a=>a.join('، ');let L,Rp;
  {const o=linesOf(it,c.g)[c.line];L=o[0];Rp=o[1]}
  if(c.hag){c.hp=Math.max(p-4,Math.floor(p*.75));return[{w:0,t:j(L)},{w:1,t:gf(c,'الكوباية '+p+' جنيه يا باشا')},{w:0,t:pick(HAGS)+' '+c.hp+' جنيه'}]}
  if(!Rp)return[{w:0,t:j(L)},{w:1,t:gf(c,'الكوبايه '+p+' جنيه، يا باشا')},{w:0,t:c.g==='f'?'طب، عايزة كوباية قصب':'طب، عايز كوباية قصب'}];
  return[{w:0,t:j(L)},{w:1,t:j(Rp)}]}
function startChat(c){const ms=buildMsgs(c);c.chat={msgs:ms,t:0,total:(ms.length-1)*GAP+1};CH.c=c;CH.n=0;CH.fin=0;$('chatList').innerHTML='';$('hagBtns').classList.remove('show');$('chat').classList.add('show')}
function addMsg(c,m){if(CH.c!==c)return;const d=document.createElement('div'),im=document.createElement('img'),b=document.createElement('div');
  d.className='msg '+(m.w?'me':'them');im.src=m.w?(AVW||(AVW=avatar(Wk,true))):(c.av||(c.av=avatar(c,false)));b.className='bub';b.textContent=m.t;
  d.appendChild(im);d.appendChild(b);const L=$('chatList');L.appendChild(d);while(L.children.length>3)L.removeChild(L.firstChild)}
function chatTick(dt){const c=CH.c;if(!c)return;const ch=c.chat;
  if(ch&&CH.fin<=0)while(CH.n<ch.msgs.length&&ch.t>=CH.n*GAP){addMsg(c,ch.msgs[CH.n]);CH.n++}
  if(ch&&c.hag&&c.hag.st==='pre'&&CH.n>=ch.msgs.length&&ch.t>=ch.total){c.hag.st='ask';$('hagBtns').classList.add('show')}
  if(CH.fin>0){CH.fin-=dt;if(CH.fin<=0){$('chat').classList.remove('show');$('hagBtns').classList.remove('show');CH.c=null}}}
function leave(c,angry){c.st='l';c.l=0;if(angry)pops.push({x:c.x,y:c.y-70,t:0,k:'angry'});
  if(Wk.task&&Wk.task.c===c){fsFree(Wk);if(Wk.task.fs)S.stock++;Wk.task=null;Wk.carry=null;M.run=false;M.glass=0}
  if(CH.c===c)$('hagBtns').classList.remove('show')}
function leaveAngry(c){leave(c,true);if(CH.c===c){addMsg(c,{w:0,t:'مش هستنى أكتر، سلام!'});CH.fin=2.2}}
function hagChoose(yes){const c=CH.c;if(!c||!c.hag||c.hag.st!=='ask')return;$('hagBtns').classList.remove('show');c.hag.st='done';S.haggles++;
  if(yes){c.pay=c.hp;addMsg(c,{w:1,t:gf(c,'اتفقنا يا باشا')});setTimeout(()=>addMsg(c,{w:0,t:'تسلم إيدك'}),500)}
  else{addMsg(c,{w:1,t:gf(c,'والله ده سعره يا باشا')});
    if(Math.random()<.6)setTimeout(()=>addMsg(c,{w:0,t:'طيب ماشي، هدفع'}),600);
    else{setTimeout(()=>addMsg(c,{w:0,t:'خلاص مش هاخد، سلام'}),600);leave(c,false);CH.fin=2.6}}
  checkAch();save()}
function serve(c){c.st='l';c.l=0;c.carry='cup';const p=c.pay||cPrice(c),r=c.pt/c.pm,tip=Math.ceil((r>.5?Math.ceil(p*.5):r>.25?Math.ceil(p*.25):0)*(RU.on?2:1)*(1+.2*S.u.reg)*(1+.15*(c.hb||0))*(c.item==='lemon'?1+.15*S.u.lemon:1));
  const pc=prodCost(c);S.money+=p+tip-pc;S.earned+=p+tip-pc;S.sold++;S.by[c.item]=(S.by[c.item]||0)+1;if(tip)S.tips++;
  pops.push({x:c.x,y:c.y-70,t:0,k:'sale',n:p-pc});
  for(let i=0;i<(tip?6:4);i++)coins.push({x0:c.x,y0:c.y-70,t:-i*.07,d:.85});
  if(tip){pops.push({x:c.x,y:c.y-102,t:-.2,k:'tip',n:tip});addMsg(c,{w:0,t:pick(TIPSAY).join('، ')})}if(CH.c===c)CH.fin=tip?2.6:.9;
  snd('sell');if(tip)snd('tip');lvCheck();checkAch();save()}

function wkUpdate(dt){
  const w=Wk,sp=wkSpeed();if(!isFinite(w.x)||!isFinite(w.y)){w.x=ST.idle.x;w.y=ST.idle.y}w.moving=false;w.work=false;w.ph+=dt;
  let t=w.task;
  if(t&&talking())return;
  if(!t){move(w,ST.idle.x,ST.idle.y,sp,dt);return}
  switch(t.s){
    case 20:case 21:if(fridgeStep(w,t,sp,dt,dt)){if(S.stock>0){S.stock--;FR.t=0;t.fs=true;w.carry='cup';t.s=10}else t.s=1}break;
    case 2:if(move(w,ST.store.x,ST.store.y,sp,dt)){t.s=3;t.w=.6*WS}break;
    case 3:w.work=true;t.w-=dt;if(t.w<=0){w.carry='cane';t.s=4}break;
    case 5:if(move(w,ST.juicer.x,ST.juicer.y,sp,dt)){w.carry=null;M.col=(ITEMS[w.item]||ITEMS.cane).col;M.it=w.item;M.run=true;M.total=M.t=juiceTime()*jt(w.item);M.glass=0;t.s=6}break;
    case 6:w.work=true;if(!M.run){w.carry='juice';M.glass=0;t.s=7}break;
    case 8:if(move(w,ST.cups.x,ST.cups.y,sp,dt)){t.s=9;t.w=.7*WS}break;
    case 9:w.work=true;t.w-=dt;if(t.w<=0){w.carry='cup';t.s=10}break;
    case 11:if(move(w,ST.serve.x,ST.serve.y,sp,dt)){t.s=12;t.w=.4*WS}break;
    case 12:w.work=true;t.w-=dt;if(t.w<=0){serve(t.c);w.carry=null;w.task=null}break;
  }
}
function update(dt){
  spawnT-=dt;
  if(spawnT<=0){let ln=-1,mn=99;for(let i=0;i<=S.u.hire;i++){const k=qL(i).length;if(k<qcap()&&k<mn){mn=k;ln=i}}if(ln>=0){addCust(ln);spawnT=(RU.on?.7+Math.random()*.7:(cust.length<3?1.3:3+Math.random()*3))/(1+.15*S.u.sign)/(1+.7*S.u.hire)}}
  for(let ln=0;ln<=S.u.hire;ln++)qL(ln).forEach((c,i)=>{c.moving=false;c.ph+=dt;if(c.bl>0)c.bl-=dt;
    if(c.wp){if(move(c,210,488,62,dt))c.wp=false;c.ready=false}
    else{const a=move(c,LX[ln],314+i*qsp(),62,dt);c.ready=a&&i===0}
    if(ln>0){if(c.ready){c.pt-=dt;if(c.pt<=0){c.pt=0;leaveAngry(c)}}return}
    const bs=Wk.task&&Wk.task.c===c;if(bs&&c.chat)c.chat.t+=dt;
    if(c.ready&&c.chat&&c.chat.t>=c.chat.total&&!(c.hag&&c.hag.st==='ask')){c.pt-=dt;if(c.pt<=0){c.pt=0;leaveAngry(c)}}});
  const XP=c=>{const g=(c.lane||0)===2?150:270;return[[g,c.y+6],[g,490],[210,490],[210,H+20]]};
  for(const c of cust)if(c.st==='l'){const L=c.ex||(c.ex=XP(c));c.moving=false;c.ph+=dt;c.sayT=Math.max(0,(c.sayT||0)-dt);if(c.bl>0)c.bl-=dt;if(move(c,L[c.l][0],L[c.l][1],62,dt)){c.l++;if(c.l>=L.length)c.dead=true}}
  cust=cust.filter(c=>!c.dead);
  fsTick(dt);wkUpdate(dt);HS().forEach(h=>{hUpdate(h,dt);mUp(h.m,dt)});extra(dt);
  if(M.run){M.t-=dt;M.rot+=dt*14;M.glass=Math.min(1,1-M.t/M.total);if(M.t<=0){M.run=false;M.glass=1}}
  for(const p of pops){p.t+=dt;p.y-=18*dt}
  pops=pops.filter(p=>p.t<1.7);
  saveT+=dt;if(saveT>5){saveT=0;save()}
}

/* ---------- drawing ---------- */

function fruitIcon(it,x,y,s){X.save();X.translate(x,y);X.scale(s||1,s||1);
  const leaf=(lx,ly,a)=>{X.fillStyle='#43a047';X.beginPath();X.ellipse(lx,ly,3.2,1.6,a,0,7);X.fill()};
  if(it==='lemonj'){X.fillStyle='#ffe94a';X.beginPath();X.ellipse(0,0,7,4.8,-.45,0,7);X.fill();X.strokeStyle='#c9a800';X.lineWidth=.9;X.stroke();circ(-6.6,2.8,1.3,'#ffe94a');circ(6.6,-2.8,1.3,'#ffe94a');X.fillStyle='rgba(255,255,255,.55)';X.beginPath();X.ellipse(-1.8,-1.6,2.6,1,-.45,0,7);X.fill()}
  else if(it==='orange'){circ(0,0,6,'#ff9800');circ(-2,-2,1.9,'rgba(255,255,255,.45)');circ(0,-5.2,.9,'#e65100');leaf(2.8,-5.6,-.5)}
  else if(it==='mango'){X.fillStyle='#ffb300';X.beginPath();X.ellipse(0,0,6.8,5,-.5,0,7);X.fill();X.fillStyle='rgba(239,83,80,.6)';X.beginPath();X.ellipse(2.4,1.6,3.6,2.6,-.5,0,7);X.fill();X.fillStyle='rgba(255,255,255,.5)';X.beginPath();X.ellipse(-2.4,-1.8,2,.9,-.5,0,7);X.fill();leaf(-4.6,-4.6,-.6)}
  else if(it==='straw'){X.fillStyle='#e0183e';X.beginPath();X.moveTo(0,6.4);X.quadraticCurveTo(-6.4,2.4,-5.6,-2.6);X.quadraticCurveTo(0,-5.4,5.6,-2.6);X.quadraticCurveTo(6.4,2.4,0,6.4);X.fill();for(const q of[[-2.6,0],[2.4,-.4],[0,2.6],[-1.2,-2.6],[1.8,-2.8]])circ(q[0],q[1],.6,'#ffe082');X.fillStyle='#43a047';X.beginPath();X.ellipse(0,-4.6,4.2,1.5,0,0,7);X.fill();R(-.6,-7,1.2,2.4,'#2e7d32')}
  else if(it==='mix'){circ(-3.8,2.2,3.7,'#ff9800');circ(3.8,2.4,3.5,'#e0183e');circ(0,-2.8,3.7,'#ffd93a');circ(-1.2,-4,1,'rgba(255,255,255,.55)');leaf(0,-6.4,0)}
  X.restore()}
function cupFx(it,x,y){
  if(it==='lemonj'){X.fillStyle='#ffe94a';X.beginPath();X.arc(x+5,y-7,4.2,Math.PI,0);X.fill();X.strokeStyle='#c9a800';X.lineWidth=.8;X.stroke();X.strokeStyle='#fff8c4';X.lineWidth=.7;X.beginPath();X.moveTo(x+5,y-7);X.lineTo(x+5,y-10.6);X.moveTo(x+5,y-7);X.lineTo(x+2.2,y-9.6);X.moveTo(x+5,y-7);X.lineTo(x+7.8,y-9.6);X.stroke()}
  else if(it==='orange'){circ(x+5,y-6.5,4,'#e65100');circ(x+5,y-6.5,3.2,'#ff9800');X.strokeStyle='rgba(255,236,179,.85)';X.lineWidth=.7;X.beginPath();for(let a=0;a<6;a++){X.moveTo(x+5,y-6.5);X.lineTo(x+5+Math.cos(a*1.047)*3.1,y-6.5+Math.sin(a*1.047)*3.1)}X.stroke()}
  else if(it==='mango'){X.fillStyle='#ff8f00';X.beginPath();X.moveTo(x-4.3,y+2.4);X.lineTo(x+4.3,y+2.4);X.lineTo(x+4,y+6);X.lineTo(x-4,y+6);X.fill();rr(x+2,y-10,6,5,1.5,'#ffc107');rr(x+2.8,y-9.2,2.2,1.6,.8,'rgba(255,255,255,.55)');X.fillStyle='#43a047';X.beginPath();X.ellipse(x+6.8,y-10.2,2.2,1.1,-.5,0,7);X.fill()}
  else if(it==='straw'){X.fillStyle='#ff9bb0';X.beginPath();X.moveTo(x-4.5,y-2);X.lineTo(x+4.5,y-2);X.lineTo(x+4.4,y+.8);X.lineTo(x-4.4,y+.8);X.fill();X.fillStyle='#e0183e';X.beginPath();X.moveTo(x+2.2,y-9.2);X.lineTo(x+8.2,y-9.2);X.lineTo(x+5.2,y-3.6);X.fill();R(x+2.8,y-10.4,4.8,1.8,'#43a047');circ(x+4.2,y-8,.5,'#ffe082');circ(x+6.2,y-8,.5,'#ffe082');circ(x+5.2,y-6.2,.5,'#ffe082')}
  else if(it==='mix'){const q=(y0,y1,xa,xb,c)=>{X.fillStyle=c;X.beginPath();X.moveTo(x-xa,y0);X.lineTo(x+xa,y0);X.lineTo(x+xb,y1);X.lineTo(x-xb,y1);X.fill()};
    q(y-2,y+.7,4.5,4.3,'#e5365a');q(y+.7,y+3.4,4.3,4.15,'#ff9a1f');q(y+3.4,y+6,4.15,4,'#c6e03a');
    circ(x-5,y-8,2.3,'#d50000');circ(x-5.7,y-8.7,.6,'#ff8a80');
    X.strokeStyle='#8d6e63';X.lineWidth=.9;X.beginPath();X.moveTo(x+1,y-8);X.lineTo(x+1.5,y-15);X.stroke();X.fillStyle='#7e57c2';X.beginPath();X.arc(x+1.5,y-15,4,Math.PI,0);X.fill();R(x-.2,y-17.2,1.4,2.2,'#fff')}}
function drawFruits(){let i=0;for(const k in ITEMS)if(ITEMS[k].cost&&S.dr[k]){fruitIcon(k,346+i*15,107,.95);i++}}
function item(k,x,y,it){
  if(k==='cane'&&FD(it)){fruitIcon(it,x,y,1);return}
  if(k==='cane'){X.strokeStyle='#7cb342';X.lineWidth=4;X.lineCap='round';X.beginPath();X.moveTo(x-7,y+8);X.lineTo(x+7,y-8);X.stroke();X.strokeStyle='#33691e';X.lineWidth=1.5;X.beginPath();X.moveTo(x-1,y+1);X.lineTo(x+3,y+3);X.moveTo(x+3,y-4);X.lineTo(x+6,y-2);X.stroke();return}
  const I=ITEMS[it]||ITEMS.cane;
  X.fillStyle='rgba(255,255,255,.85)';X.beginPath();X.moveTo(x-5,y-7);X.lineTo(x+5,y-7);X.lineTo(x+4,y+7);X.lineTo(x-4,y+7);X.fill();
  X.fillStyle=I.col;X.beginPath();X.moveTo(x-4.5,y-2);X.lineTo(x+4.5,y-2);X.lineTo(x+4,y+6);X.lineTo(x-4,y+6);X.fill();
  if(it==='iced'){R(x-3.4,y-1.5,3,3,'rgba(255,255,255,.9)');R(x+.6,y+1.5,3,3,'rgba(255,255,255,.85)')}
  if(it==='lemon'){circ(x+5.5,y-6,3.4,'#c9a800');circ(x+5.5,y-6,2.6,'#ffe14d')}
  if(FD(it))cupFx(it,x,y);
  if(k==='cup'){R(x-6,y-9,12,2.5,'#e53935');X.strokeStyle='#e53935';X.lineWidth=1.5;X.beginPath();X.moveTo(x+2,y-9);X.lineTo(x+5,y-15);X.stroke()}
}
function hairBack(cx,cy,r,e){const c=e.hair;if(e.hj){circ(cx,cy,r*1.3,e.hj);rr(cx-r*1.24,cy,r*2.48,r*1.7,r*.8,e.hj);return}X.fillStyle=c;
  if(e.g==='m'){if(e.hs===2)circ(cx,cy-r*.45,r*1.35,c);return}
  if(e.hs===0)rr(cx-r*1.35,cy-r*.7,r*2.7,r*3.4,r*.6,c);
  else if(e.hs===1){X.beginPath();X.ellipse(cx+r*1.15,cy+r*.5,r*.4,r*1,.25,0,7);X.fill()}
  else if(e.hs===2)rr(cx-r*1.2,cy-r*.7,r*2.4,r*2,r*.7,c);
  else if(e.hs===4){circ(cx-r,cy+r*.2,r*.6,c);circ(cx+r,cy+r*.2,r*.6,c);circ(cx-r*.8,cy+r*.9,r*.5,c);circ(cx+r*.8,cy+r*.9,r*.5,c)}}
function hairFront(cx,cy,r,e){const c=e.hair;if(e.hj){X.fillStyle=e.hj;X.beginPath();X.arc(cx,cy-r*.12,r*1.02,Math.PI*1.1,Math.PI*1.9);X.closePath();X.fill();X.strokeStyle='rgba(0,0,0,.2)';X.lineWidth=.8;X.beginPath();X.arc(cx,cy-r*.12,r*1.02,Math.PI*1.1,Math.PI*1.9);X.stroke();return}X.fillStyle=c;
  const cap=k=>{X.beginPath();X.arc(cx,cy-r/9,r*(k||1.06),Math.PI,0);X.fill()};
  if(e.g==='m'){
    if(e.hs===3){X.beginPath();X.ellipse(cx,cy-r*.45,r*1.02,r*.62,0,Math.PI,0);X.fill();return}
    cap();
    if(e.hs===1){X.beginPath();X.ellipse(cx+r*.25,cy-r*1.02,r*.7,r*.32,.15,0,7);X.fill()}
    else if(e.hs===4)for(const i of[-1,0,1]){X.beginPath();X.moveTo(cx+i*r*.55-r*.28,cy-r*.95);X.lineTo(cx+i*r*.55,cy-r*1.55);X.lineTo(cx+i*r*.55+r*.28,cy-r*.95);X.fill()}
    return}
  cap(e.hs===4?1.12:1.06);
  if(e.hs===0||e.hs===2){X.beginPath();X.ellipse(cx,cy-r*.4,r*.95,r*.3,0,0,7);X.fill()}
  else if(e.hs===3){circ(cx-r*.85,cy-r*1.05,r*.42,c);circ(cx+r*.85,cy-r*1.05,r*.42,c)}}
function outfit(e,x,y,bob){const o=e.os,f=e.g==='f',top=y-32-bob;
  if((o===1&&!f)||(o===3&&f))for(const k of[-27,-21,-15])R(x-9,y+k-bob,18,2.5,'rgba(255,255,255,.55)');
  if(!f&&o===2){rr(x-8,y-34-bob,16,6,3,e.shirt);rr(x-8,y-34-bob,16,6,3,'rgba(0,0,0,.25)');rr(x-6,y-20-bob,12,6,2,'rgba(0,0,0,.18)');R(x-3,y-28-bob,1.2,5,'#fff');R(x+2,y-28-bob,1.2,5,'#fff')}
  if(!f&&o===3){X.fillStyle='#fff';X.beginPath();X.moveTo(x-6,top);X.lineTo(x,top+7);X.lineTo(x,top);X.fill();X.beginPath();X.moveTo(x+6,top);X.lineTo(x,top+7);X.lineTo(x,top);X.fill();circ(x,y-21-bob,.9,'#fff');circ(x,y-16-bob,.9,'#fff')}
  if(!f&&o===4)R(x-10,y-14-bob,20,3,'rgba(255,255,255,.7)');
  if(f&&(o===1||o===2)){X.fillStyle=o===1?e.shirt:e.c2;X.beginPath();X.moveTo(x-10,y-17-bob);X.lineTo(x+10,y-17-bob);X.lineTo(x+13,y-5);X.lineTo(x-13,y-5);X.fill();if(o===1)R(x-10,y-21-bob,20,2.5,e.c2)}
  if(f&&o===4)rr(x-4,top,8,21,2,e.c2);
  if(e.hj){rr(x-10,y-33-bob,20,9,4,e.hj);rr(x-6,y-26-bob,12,2,1,'rgba(0,0,0,.14)')}}
function person(e){
  const x=e.x,y=e.y,t=e.ph,m=e.moving;let sw=m?Math.sin(t*11)*4:0,bob=m?Math.abs(Math.sin(t*11))*1.5:0,fx=e.fx||1,ox=0,idy=0;const aw=e.work?Math.sin(t*14)*3:0;let aL=aw,aR=-aw;
  /* حركة محسّنة للعامل والمساعدين فقط (شكل فقط، من غير أي تغيير في اللعب) */
  if(e===Wk||HL.includes(e)){
    const v=e.v||(e.v={wm:0,wb:0,fs:e.fx||1,px:x,py:y,lt:performance.now(),wp:0,wt:0}),now=performance.now(),dt=Math.min(.05,Math.max(0,(now-v.lt)/1000));v.lt=now;
    const dd=Math.min(8,Math.hypot(x-v.px,y-v.py));v.px=x;v.py=y;
    const sm=(a,b,r)=>a+(b-a)*Math.min(1,r*dt);
    v.wm=sm(v.wm,m?1:0,12);v.wb=sm(v.wb,e.work?1:0,10);v.fs=sm(v.fs,e.fx||1,14);v.wp+=dd*.16;if(e.work)v.wt+=dt;
    const wm=v.wm,wb=v.wb,sn=Math.sin(v.wp),wt=v.wt,k=e.task?e.task.s:0;let dip=0;fx=v.fs;
    /* مشي: خطوة متزامنة مع المسافة، ارتداد خفيف، ميل للأمام، وتأرجح دراعات عكس الرجلين */
    sw=sn*4*wm;bob=Math.abs(Math.cos(v.wp))*1.8*wm;ox=v.fs*1.6*wm+sn*.7*wm;aL=-sn*3*wm;aR=sn*3*wm;
    /* وقفة: تنفس هادي */
    bob+=(1-wm)*(1-wb)*(Math.sin(t*2.2)*.5+.5)*.8;
    if(wb>.01){
      if(k===3){const a=Math.abs(Math.sin(wt*9));aL=aR=-a*5*wb;dip=a*2*wb;ox+=v.fs*2*wb}                 /* سحب القصب من الشوال */
      else if(k===6){const a=Math.sin(wt*14);aL=a*4*wb;aR=-a*4*wb;ox+=a*1.2*wb;dip=1.2*wb}              /* عصر: لف الذراع وهزة جسم */
      else if(k===9||k===21){ox+=v.fs*1.5*wb;dip=(1.2+Math.sin(wt*10))*wb}                                        /* مدّ إيده للكوبايات */
      else if(k===12){dip=(1.5+Math.sin(wt*8)*.6)*wb;idy=5*wb}                                           /* تسليم الطلب بانحناءة */
      else if(k===1){const a=Math.sin(wt*12);aL=a*3*wb;aR=-a*3*wb;dip=Math.abs(a)*wb}                    /* تجهيز الطلب */
      else{aL=aw*wb;aR=-aw*wb}
    }
    bob-=dip;
  }
  const cu=e.os!==undefined,f=e.g==='f',bare=cu&&f&&(e.os===1||e.os===2),short=cu&&!f&&e.os===4,sleeveless=cu&&((!f&&e.os===4)||(f&&e.os===1));
  X.fillStyle='rgba(0,0,0,.25)';X.beginPath();X.ellipse(x,y,11,4,0,0,7);X.fill();
  const lc=cu?((bare||short)?e.skin:e.pants):'#3b3b58';
  R(x-7,y-13,5,12+sw*.5,lc);R(x+2,y-13,5,12-sw*.5,lc);
  if(short){R(x-7,y-13,5,7,e.pants);R(x+2,y-13,5,7,e.pants)}
  R(x-8,y-2+sw*.5,7,3,'#1a1a1a');R(x+1,y-2-sw*.5,7,3,'#1a1a1a');
  X.save();X.translate(ox,0);
  if(cu)hairBack(x,y-40-bob,9,e);
  rr(x-10,y-32-bob,20,21,5,e.shirt);
  if(cu)outfit(e,x,y,bob);
  if(e.apron){rr(x-7,y-29-bob,14,17,3,'#fff');R(x-7,y-24-bob,14,2,'#ffb300')}
  const car=!!e.carry,sl=sleeveless?e.skin:e.shirt;
  if(car){R(x-13,y-28-bob,5,10,sl);R(x+8,y-28-bob,5,10,sl);circ(x-6,y-18-bob,2.6,e.skin);circ(x+6,y-18-bob,2.6,e.skin)}
  else{R(x-14,y-29-bob+aL,4,12,sl);R(x+10,y-29-bob+aR,4,12,sl);circ(x-12,y-16-bob+aL,2.6,e.skin);circ(x+12,y-16-bob+aR,2.6,e.skin)}
  circ(x,y-40-bob,9,e.skin);
  if(cu)hairFront(x,y-40-bob,9,e);else{X.fillStyle=e.hair;X.beginPath();X.arc(x,y-41-bob,9.5,Math.PI,0);X.fill()}
  if(e.hat){rr(x-9,y-54-bob,18,8,3,'#fff');R(x-10,y-47-bob,20,3,'#fff')}
  R(x-4+fx,y-40-bob,2,3,'#222');R(x+2+fx,y-40-bob,2,3,'#222');
  if(cu&&f){X.strokeStyle='#222';X.lineWidth=.8;X.beginPath();X.moveTo(x-4.6+fx,y-40.3-bob);X.lineTo(x-5.4+fx,y-41.4-bob);X.moveTo(x+4.4+fx,y-40.3-bob);X.lineTo(x+5.2+fx,y-41.4-bob);X.stroke()}
  X.strokeStyle=cu?(f?'#b0385a':'#5a2415'):'#8a3a2a';X.lineWidth=1;X.beginPath();X.arc(x+fx,y-36-bob,2.5,.2,2.9);X.stroke();
  if(car)item(e.carry,x,y-21-bob+idy,e.item);
  X.restore();
}
function easeB(x){const c=1.70158;return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)}
function star(x,y,r,c){X.fillStyle=c;X.beginPath();for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,d=i%2?r*.45:r;X[i?'lineTo':'moveTo'](x+Math.cos(a)*d,y+Math.sin(a)*d)}X.closePath();X.fill()}
function drawPop(p){
  if(p.t<0)return;
  const L=1.7,sc=easeB(Math.min(1,p.t/.28)),al=p.t>L-.4?Math.max(0,(L-p.t)/.4):1;
  X.save();X.globalAlpha=al;X.translate(p.x,p.y);X.scale(sc,sc);X.textBaseline='middle';
  if(p.k==='angry'){circ(0,0,15,'#fff3d6');circ(0,0,13,'#e53935');X.strokeStyle='#fff';X.lineCap='round';X.lineWidth=2;X.beginPath();X.moveTo(-8,-6);X.lineTo(-2,-3);X.moveTo(8,-6);X.lineTo(2,-3);X.stroke();circ(-4.5,0,1.9,'#fff');circ(4.5,0,1.9,'#fff');X.beginPath();X.arc(0,9,4.5,Math.PI*1.15,Math.PI*1.85);X.stroke()}
  else if(p.k==='tip'){
    const num='+'+p.n,lab='بقشيش';
    X.font='bold 14px Tahoma,Arial';X.direction='ltr';const wn=X.measureText(num).width;
    X.font='bold 13px Tahoma,Arial';X.direction='rtl';const wl=X.measureText(lab).width,w=24+wn+wl+18;
    for(let i=0;i<5;i++){const a=i*1.26+p.t*2.5;star(Math.cos(a)*(w/2+8+p.t*6)*.9,Math.sin(a)*14,3+(i%2)*1.5,'#ffe082')}
    rr(-w/2-2,-16,w+4,32,16,'#fff3d6');rr(-w/2,-14,w,28,14,'#e9701e');
    star(-w/2+15,0,9,'#ffd54a');
    X.fillStyle='#fff';X.textAlign='left';
    X.font='bold 14px Tahoma,Arial';X.direction='ltr';X.fillText(num,-w/2+28,1);
    X.font='bold 13px Tahoma,Arial';X.direction='rtl';X.fillText(lab,-w/2+28+wn+6,1)}
  else{
    const num='+'+p.n;X.font='bold 16px Tahoma,Arial';X.direction='ltr';const w=X.measureText(num).width+46;
    rr(-w/2-2,-15,w+4,30,15,'#fff3d6');rr(-w/2,-13,w,26,13,'#1f6b3a');
    circ(-w/2+15,0,10,'#c98b1f');circ(-w/2+15,0,8.3,'#ffc107');
    X.fillStyle='#7a4a00';X.font='bold 11px Tahoma,Arial';X.textAlign='center';X.direction='rtl';X.fillText('ج',-w/2+15,1);
    X.fillStyle='#fff';X.font='bold 16px Tahoma,Arial';X.direction='ltr';X.textAlign='left';X.fillText(num,-w/2+30,1)}
  X.restore()}
function bub(e){if(!e.bt||!(e.bl>0))return;X.save();X.globalAlpha=Math.min(1,e.bl/.3);X.font='bold 10px Tahoma,Arial';X.direction='rtl';X.textAlign='center';const w=X.measureText(e.bt).width+14,x=Math.max(w/2+2,Math.min(W-w/2-2,e.x)),y=e.y-90;rr(x-w/2,y-9,w,18,8,'#fff');X.fillStyle='#fff';X.beginPath();X.moveTo(e.x-4,y+8);X.lineTo(e.x+4,y+8);X.lineTo(e.x,y+14);X.fill();X.fillStyle='#3a2000';X.fillText(e.bt,x,y+4);X.restore()}
function drawMachine(t,m,cx){X.save();X.translate((cx||160)-160,0);
  const sh=m.run?Math.sin(t*50)*.8:0;
  const x0=130+sh;
  X.fillStyle='rgba(0,0,0,.25)';X.beginPath();X.ellipse(160,113,34,4,0,0,7);X.fill();
  rr(x0-3,105,66,7,3,'#5f6b73');R(x0,106,60,1.5,'#b0bec5');for(let i=0;i<8;i++)R(x0+3+i*7,109,4,1.6,'#263238');
  X.fillStyle='#b0bec5';X.beginPath();X.moveTo(x0+14,57);X.lineTo(x0+46,57);X.lineTo(x0+40,66);X.lineTo(x0+20,66);X.fill();R(x0+12,55,36,3,'#eceff1');R(x0+16,59,28,1.5,'rgba(255,255,255,.5)');
  rr(x0,64,60,43,6,'#b85a18');rr(x0+1,65,58,19,5,lg(0,65,0,84,['#ffc477','#f0a04b']));R(x0+5,67,50,2.5,'rgba(255,255,255,.45)');
  R(x0+1,84,58,2,'#8a4a14');R(x0+2,86,56,19,lg(0,86,0,105,['#e8873a','#c9651a']));R(x0+3,88,3,15,'rgba(255,255,255,.22)');R(x0+54,88,3,15,'rgba(0,0,0,.18)');
  rr(x0+9,68,42,16,4,'#455a64');rr(x0+11,70,38,12,3,'#1c272c');
  for(const rv of [x0+4,x0+56])circ(rv,75,1.1,'#cfd8dc');circ(x0+4,100,1.1,'#cfd8dc');circ(x0+56,100,1.1,'#cfd8dc');
  circ(x0+48,96,4.2,'#cfd8dc');circ(x0+48,96,2.6,'#78909c');R(x0+47.4,92.6,1.2,3.4,'#263238');
  rr(x0+26,91,8,6,1.5,'#f6e7b4');R(x0+28,93,4,1,'#7cb342');R(x0+28,95,4,1,'#7cb342');
  for(const rx of [149,171]){X.save();X.translate(rx+sh,76);X.rotate(m.rot*(rx<160?1:-1));circ(0,0,7,'#eceff1');circ(0,0,5.4,'#90a4ae');circ(-1.6,-2,1.8,'rgba(255,255,255,.8)');X.strokeStyle='#37474f';X.lineWidth=2;X.beginPath();X.moveTo(-6,0);X.lineTo(6,0);X.moveTo(0,-6);X.lineTo(0,6);X.stroke();X.restore()}
  if(m.run&&FD(m.it)){const p=1-m.t/m.total;fruitIcon(m.it,160+sh,42+p*28,1.25)}
  else if(m.run){const p=1-m.t/m.total;X.strokeStyle='#8bc34a';X.lineWidth=5;X.lineCap='round';X.beginPath();X.moveTo(160+sh,40+p*34);X.lineTo(160+sh,72);X.stroke()}
  circ(140,96,4.6,'#263238');circ(140,96,3,m.run&&Math.floor(t*6)%2?'#ff5252':(m.run?'#b71c1c':'#66bb6a'));
  rr(156,103,10,6,2,'#607d8b');R(157,104,8,1.4,'#b0bec5');R(159,108,4,1.5,'#263238');
  if(m.glass>.02){if(m.run){X.strokeStyle=FD(m.it)?m.col:'#c5e07a';X.lineWidth=2;X.beginPath();X.moveTo(161,109);X.lineTo(161,118-m.glass*10);X.stroke()}
    X.fillStyle='rgba(255,255,255,.8)';X.beginPath();X.moveTo(154,106);X.lineTo(168,106);X.lineTo(166,121);X.lineTo(156,121);X.fill();
    const h=14*m.glass;X.fillStyle=m.it==='mix'?lg(0,107,0,121,['#e5365a','#ff9a1f','#c6e03a']):(m.col||'#b5d94a');X.beginPath();X.moveTo(166-2*(1-m.glass)*0.1,121);X.lineTo(156,121);X.lineTo(156+(h<14?(14-h)*.14:0),121-h);X.lineTo(166-(h<14?(14-h)*.14:0),121-h);X.fill()}
X.restore()}
function draw(t){
  X.setTransform(2,0,0,2,0,0);X.drawImage(B,0,0,W,H);
  drawMachine(t,M,240);drawFridge();drawFruits();
  for(const h of HS())drawMachine(t,h.m,h.mx);
  const ents=[Wk].concat(HS(),cust).sort((a,b)=>a.y-b.y);
  for(const e of ents){
    person(e);bub(e);
    if(e.st==='q'&&e.ready&&e.item&&e.item!=='cane')item('cup',e.x+30,e.y-22,e.item);
    if(HL.includes(e)){rr(e.x-24,e.y-71,48,14,6,'#7a1f1f');X.fillStyle='#ffd54a';X.font='bold 9px Tahoma,Arial';X.textAlign='center';X.fillText('مساعد '+['١','٢'][e.i],e.x,e.y-61)}
    if(e.st==='q'&&e.ready&&e.pm&&((e.lane||0)>0||e.chat&&e.chat.t>=e.chat.total)){const r=Math.max(0,e.pt/e.pm),h=30*r;rr(e.x+16,e.y-37,5,30,2,'rgba(0,0,0,.5)');if(h>3)rr(e.x+16,e.y-7-h,5,h,2,r>.5?'#7cb342':r>.25?'#ffb300':'#e53935')}
    if(e===Wk){rr(e.x-17,e.y-71,34,14,6,'#4a2c12');X.fillStyle='#ffd54a';X.font='bold 9px Tahoma,Arial';X.textAlign='center';X.fillText('أنت',e.x,e.y-61)}
  }
  {const g=target().z;if(g){X.strokeStyle='#ffd54a';X.lineWidth=2+Math.sin(t*7);rr(g.x,g.y,g.w,g.h,8);X.stroke();X.fillStyle='rgba(255,213,74,'+(.12+.08*Math.sin(t*7))+')';X.fill()}}
  for(const p of pops)drawPop(p);
  drawCoins();
  X.globalAlpha=1;
}

/* ---------- levels, achievements, events, fridge, coins ---------- */
const LVUN={2:'قصب بليمون + ليمون طازة + عامل مساعد',3:'قصب ساقع + تلج أكتر + عصّارة تانية',4:'الثلاجة + لافتة أحلى + ماكينة حاسبة',5:'المروحة + كراسي + كوباية كبيرة'};
function lvCheck(){const L=level();while(S.lvSeen<L){S.lvSeen++;toast(tt('star','مستوى جديد '+S.lvSeen,LVUN[S.lvSeen]||'كمّل وهتفتح حاجات جديدة'),3200);snd('level')}}
const upTotal=()=>Object.values(S.u).reduce((a,b)=>a+b,0);
const ACH=[
 {id:'c1',n:'أول كوباية',d:'بيع أول كوباية',f:()=>S.sold>=1},
 {id:'c10',n:'عشر كوبايات',d:'بيع 10 كوبايات',f:()=>S.sold>=10},
 {id:'c50',n:'خمسين كوباية',d:'بيع 50 كوباية',f:()=>S.sold>=50},
 {id:'c100',n:'مية كوباية',d:'بيع 100 كوباية',f:()=>S.sold>=100},
 {id:'c250',n:'اسطى القصب',d:'بيع 250 كوباية',f:()=>S.sold>=250},
 {id:'t1',n:'أول بقشيش',d:'خد بقشيش من زبون',f:()=>S.tips>=1},
 {id:'t20',n:'حبيب الزباين',d:'خد 20 بقشيش',f:()=>S.tips>=20},
 {id:'all',n:'مجرّب',d:'بيع كل الأصناف',f:()=>S.by.cane>0&&S.by.lemon>0&&S.by.iced>0},
 {id:'up1',n:'أول تطوير',d:'اشتري أي تطوير',f:()=>upTotal()>=1},
 {id:'rush',n:'نجم الذروة',d:'خلّص ساعة ذروة',f:()=>S.rushes>=1},
 {id:'hag',n:'فصّال',d:'قابل زبون بيساوم',f:()=>S.haggles>=1},
 {id:'m500',n:'نص ألف',d:'اكسب 500 جنيه إجمالي',f:()=>S.earned>=500}];
function checkAch(){for(const a of ACH)if(!S.ach[a.id]&&a.f()){S.ach[a.id]=1;toast(tt('trophy','إنجاز جديد: '+a.n,a.d));snd('ach')}}
function extra(dt){
  if(S.sold>=10){
    if(!RU.on){RU.next-=dt;if(RU.next<=0){RU.on=true;RU.t=22;toast(tt('flame','ساعة الذروة!','زباين كتير والبقشيش مضاعف'));snd('rush')}}
    else{RU.t-=dt;if(RU.t<=0){RU.on=false;RU.next=70+Math.random()*40;S.rushes++;toast(tt('check','خلصت ساعة الذروة','عاش يا اسطى'));checkAch();save()}}}
  if(S.u.fridge>0&&S.stock<S.u.fridge){if(!Wk.task){FR.t+=dt;if(FR.t>=FRT()){FR.t=0;S.stock++;save()}}}else FR.t=0;
  for(const c of coins)c.t+=dt;
  const n=coins.length;coins=coins.filter(c=>c.t<c.d);
  if(coins.length<n){const h=$('hm');h.classList.remove('bump');void h.offsetWidth;h.classList.add('bump')}
}
function drawFridge(){
  for(let i=0;i<S.stock;i++){const x=19+i*9;X.fillStyle='rgba(255,255,255,.92)';X.beginPath();X.moveTo(x,100);X.lineTo(x+7,100);X.lineTo(x+6,111);X.lineTo(x+1,111);X.fill();R(x+.7,104,5.6,6,'#b5d94a');R(x-.5,99,8,1.6,'#e53935')}
  if(S.u.fridge>0&&S.stock<S.u.fridge){R(17,112.5,26,2,'rgba(0,0,0,.25)');R(17,112.5,26*Math.min(1,FR.t/FRT()),2,'#66bb6a')}
  const fw=FS.by,ft=fw&&fw.task&&fw.task.s===21?1-Math.max(0,fw.task.w)/FT:0;
  circ(43,90.5,1.8,fw?'#e53935':'#66bb6a');
  if(ft>0){R(17,115.5,26,2.2,'rgba(0,0,0,.3)');R(17,115.5,26*Math.min(1,ft),2.2,'#4dd0e1')}
}
function drawCoins(){for(const c of coins){if(c.t<0)continue;const p=c.t/c.d,e=p*p*(3-2*p),x=c.x0+(W-34-c.x0)*e,y=c.y0+(-14-c.y0)*e-Math.sin(Math.PI*p)*26,r=6-2*p;circ(x,y,r,'#c98b1f');circ(x,y,r*.78,'#ffc107');circ(x-r*.2,y-r*.2,r*.25,'#fff3b0')}}

/* ---------- UI ---------- */
const UP=[{k:'juice',n:'سرعة العصارة',b:40,lv:1},{k:'speed',n:'سرعة العامل',b:60,lv:1},{k:'price',n:'سعر الكوب',b:50,lv:1},{k:'fridge',n:'ثلاجة كوبايات جاهزة',b:120,lv:4,max:3},{k:'fan',n:'مروحة (صبر الزباين)',b:70,lv:5,max:5},
{k:'lemon',n:'ليمون طازة',d:'سعر وبقشيش بليمون',b:80,lv:2,max:5},{k:'ice',n:'تلج أكتر',d:'سعر وصبر الساقع',b:100,lv:3,max:5},{k:'juice2',n:'عصّارة تانية',d:'عصر أسرع بكتير',b:150,lv:3,max:4},
{k:'sign',n:'لافتة أحلى',d:'زباين أكتر',b:130,lv:4,max:5},{k:'reg',n:'ماكينة حاسبة',d:'بقشيش أكتر',b:140,lv:4,max:5},{k:'seats',n:'كراسي الزباين',d:'مكان زيادة في الطابور',b:200,lv:5,max:1},{k:'big',n:'كوباية كبيرة',d:'حجم كبير بسعر أعلى',b:250,lv:5,max:1},
{k:'hire',n:'عامل مساعد',d:'بيخدم طابور لوحده',b:300,lv:2,max:2}];
const cost=u=>Math.floor(u.b*Math.pow(1.7,S.u[u.k]));
UP.forEach(u=>{const b=document.createElement('button');b.className='up';b.innerHTML='<span></span><small></small>';b.onclick=()=>{if(level()<u.lv||(u.max&&S.u[u.k]>=u.max))return;const c=cost(u);if(S.money>=c){S.money-=c;S.u[u.k]++;if(u.k==='hire')buildBG();save();refresh();snd('up');checkAch()}};$('shop').appendChild(b);u.el=b});
function refresh(){
  $('hm').innerHTML=ic('coin',20)+'<b>'+S.money+'</b>';$('hs').innerHTML=ic('receipt',18)+'<b>'+S.sold+'</b>';$('hl').innerHTML=ic('star',18)+'<b>'+level()+'</b>';$('hp').innerHTML=ic('tag',18)+'<b>'+price()+' ج</b>';
  UP.forEach(u=>{const c=cost(u),lk=level()<u.lv,mx=u.max&&S.u[u.k]>=u.max;u.el.children[0].textContent=u.n+(u.d?' – '+u.d:'');u.el.children[1].textContent=lk?'يفتح في مستوى '+u.lv:mx?'أقصى مستوى':'مستوى '+S.u[u.k]+' • '+c+' ج';u.el.disabled=lk||mx||S.money<c});
  const hr=$('hr');if(RU.on){hr.style.display='';hr.innerHTML=ic('flame',18)+'<b>'+Math.ceil(RU.t)+'</b>'}else hr.style.display='none';
}

const Z={cane:{x:335,y:80,w:84,h:70},machine:{x:205,y:62,w:70,h:64},cups:{x:276,y:86,w:56,h:38},counter:{x:250,y:204,w:170,h:84}};
function talking(){const t=Wk.task;if(!t)return false;const c=t.c;if(c.hag&&c.hag.st!=='done')return true;return !!(isPrice(c)&&c.chat&&c.chat.t<c.chat.total)}
function target(){const t=Wk.task;
  if(t&&talking())return{z:null,m:t.c.hag&&t.c.hag.st!=='done'?'الزبون بيساوم... استنى واختار من الشات':'الزبون بيسأل... استنى لما يخلص كلامه'};
  if(!t){const c=qList().find(c=>c.ready);return c?{z:{x:c.x-26,y:c.y-82,w:52,h:90},m:'اضغط على طلب الزبون لتبدأ'}:{z:null,m:'بانتظار الزبائن...'}}
  if(t.s===20)return{z:null,m:FS.by&&FS.by!==Wk?'الثلاجة مشغولة... العامل مستني دوره':'العامل رايح الثلاجة يجيب الطلب...'};
  if(t.s===21)return{z:null,m:'العامل بياخد من الثلاجة...'};
  const k={1:['cane',FD(t.c.item)?'اضغط على صندوق الفاكهة':'اضغط على القصب'],4:['machine','اضغط على ماكينة العصير'],7:['cups','اضغط على طاولة الأكواب'],10:['counter','اضغط على الكاونتر لتسليم الطلب']}[t.s];
  if(k)return{z:Z[k[0]],m:k[1]};
  return{z:null,m:t.s===6?'العصير قيد التجهيز...':'جاري التنفيذ...'}}
function tap(x,y){const w=Wk,t=w.task,h=z=>x>=z.x&&x<=z.x+z.w&&y>=z.y&&y<=z.y+z.h;
  if(!t){const c=qList().find(c=>c.ready&&h({x:c.x-26,y:c.y-82,w:52,h:90}));if(c){w.item=c.item;if(cold(c.item))w.task={c,s:20,w:0};else if(S.stock>0){S.stock--;FR.t=0;w.carry='cup';w.task={c,s:10,w:0,fs:true}}else w.task={c,s:1,w:0};startChat(c)}return}
  if(talking())return;
  if(t.s===1&&h(Z.cane))t.s=2;else if(t.s===4&&h(Z.machine))t.s=5;else if(t.s===7&&h(Z.cups))t.s=8;else if(t.s===10&&h(Z.counter))t.s=11}
C.addEventListener('pointerdown',ev=>{const r=C.getBoundingClientRect();tap((ev.clientX-r.left)/r.width*W,(ev.clientY-r.top)/r.height*H)});
$('btnUpgrades').addEventListener('click',()=>{refresh();$('upgradesOverlay').classList.add('show')});
$('upgradesClose').addEventListener('click',()=>{$('upgradesOverlay').classList.remove('show')});
$('upgradesOverlay').addEventListener('click',ev=>{if(ev.target===$('upgradesOverlay'))$('upgradesOverlay').classList.remove('show')});
function openMenu(){const note='<p style="font-size:12px;margin:2px 0 8px;opacity:.85">مشروبات الفاكهة ليها تكلفة إنتاج بتتخصم من كل كوباية، والرقم اللي بيظهر بعد البيع هو الصافي.</p>';
  $('menuList').innerHTML=Object.keys(ITEMS).map(k=>{const m=ITEMS[k];
    if(!m.cost){const lk=m.lv>level();return '<div class="menu-row'+(lk?' lock':'')+'"><span>'+ic(lk?'lock':m.i,22)+m.n+'</span><b>'+(lk?'مستوى '+m.lv:itemPrice(k)+' ج')+'</b></div>'}
    const pr=itemPrice(k),pc=Math.round(price()*m.cm),info='بيع '+pr+' • تكلفة '+pc+' • صافي '+(pr-pc)+' • عصر '+(juiceTime()*m.jt).toFixed(1)+' ث';
    if(S.dr[k])return '<div class="menu-row"><span style="flex:1;min-width:0">'+ic(m.i,22)+'<span class="at" style="display:flex;flex-direction:column;min-width:0">'+m.n+'<small>'+info+'</small></span></span><b style="flex:none">'+ic('check',18)+'</b></div>';
    const prev=m.need&&!S.dr[m.need],lvl=level()<m.lv,why=prev?'افتح '+ITEMS[m.need].n+' الأول':lvl?'يفتح في مستوى '+m.lv:'',ok=!prev&&!lvl;
    return '<div class="menu-row'+(ok?'':' lock')+'"><span style="flex:1;min-width:0">'+ic('lock',22)+'<span class="at" style="display:flex;flex-direction:column;min-width:0">'+m.n+'<small>'+(why||info)+'</small></span></span>'+(ok?'<button class="wbuy" style="flex:none;white-space:nowrap" data-buy="'+k+'" data-c="'+m.cost+'"'+(S.money<m.cost?' disabled':'')+'>افتح بـ '+m.cost+' ج</button>':'<b style="flex:none">'+m.cost+' ج</b>')+'</div>'}).join('')+'<div class="menu-row lock"><span>'+ic('lock',20)+'أصناف جديدة</span><b>قريباً</b></div>'+note;$('menuOverlay').classList.add('show')}
function menuTick(){if(!$('menuOverlay').classList.contains('show'))return;document.querySelectorAll('#menuList .wbuy[data-c]').forEach(b=>{b.disabled=S.money<+b.dataset.c})}
$('menuList').addEventListener('click',ev=>{const b=ev.target.closest('.wbuy[data-buy]');if(!b||b.disabled)return;const k=b.dataset.buy,m=ITEMS[k];
  if(!m||!m.cost||S.dr[k]||level()<m.lv||(m.need&&!S.dr[m.need])||S.money<m.cost)return;
  S.money-=m.cost;S.dr[k]=1;save();refresh();snd('up');toast(tt(m.i,'اتفتح: '+m.n,'الزباين هيبدأوا يطلبوه'),2800);checkAch();
  const pn=$('menuList').closest('.panel'),st=pn?pn.scrollTop:0;openMenu();if(pn)pn.scrollTop=st});
const WU=[{k:'walk',n:'سرعة المشي',d:'سرعة أعلى 15% لكل مستوى',b:60},{k:'work',n:'سرعة الشغل',d:'تجهيز أسرع للقصب والأكواب',b:70},{k:'juice',n:'سرعة العصر',d:'وقت العصر أقل بنسبة 15%',b:80},{k:'tip',n:'ذوق في التعامل',d:'بقشيش أكتر بنسبة 15%',b:100},{k:'price',n:'قدرة على البيع',d:'سعر الكوب أعلى بنسبة 8%',b:120}];
let WT=0;const wlv=(i,k)=>S.u['w'+i+k]||0,wcost=(i,u)=>Math.floor(u.b*Math.pow(1.7,wlv(i,u.k)));
function drawWk(){const n=S.u.hire;
  $('wkTitle').innerHTML='تطويرات العمال '+ic('gear',22);
  const tabs=HL.map((h,i)=>'<button class="wtab'+(i===WT?' on':'')+(i>=n?' lk':'')+'" data-i="'+i+'">'+(i>=n?ic('lock',16):'')+'مساعد '+['١','٢'][i]+'</button>').join('');
  const body=WT>=n?'<p style="text-align:center">لسه ماشتريتش العامل ده.<br>اشتريه من «عامل مساعد» في التطويرات.</p>':WU.map(u=>{const l=wlv(WT,u.k),mx=l>=5,c=wcost(WT,u);return '<div class="wrow"><div class="wi">'+u.n+'<small>'+u.d+'</small><div class="pips">'+[0,1,2,3,4].map(j=>'<i'+(j<l?' class="on"':'')+'></i>').join('')+'</div></div><button class="wbuy" data-k="'+u.k+'"'+(mx?' disabled>أقصى':' data-c="'+c+'"'+(S.money<c?' disabled':'')+'>'+c+' ج')+'</button></div>'}).join('');
  $('wkList').innerHTML='<div class="wtabs">'+tabs+'</div>'+body;wkTick()}
function wkTick(){if(!$('wkOverlay').classList.contains('show'))return;$('wkMoney').innerHTML=ic('coin',18)+'<b>'+S.money+'</b>';document.querySelectorAll('#wkList .wbuy[data-c]').forEach(b=>{b.disabled=S.money<+b.dataset.c})}
$('btnWk').addEventListener('click',()=>{$('wkOverlay').classList.add('show');drawWk()});
$('wkClose').addEventListener('click',()=>{$('wkOverlay').classList.remove('show')});
$('wkOverlay').addEventListener('click',ev=>{if(ev.target===$('wkOverlay'))$('wkOverlay').classList.remove('show')});
$('wkList').addEventListener('click',ev=>{const t=ev.target.closest('.wtab');if(t){WT=+t.dataset.i;drawWk();return}
  const b=ev.target.closest('.wbuy');if(!b||b.disabled)return;const u=WU.find(x=>x.k===b.dataset.k),c=wcost(WT,u);
  if(WT<S.u.hire&&S.money>=c&&wlv(WT,u.k)<5){S.money-=c;S.u['w'+WT+u.k]=wlv(WT,u.k)+1;save();snd('up');checkAch();drawWk();refresh()}});
function openAch(){const n=ACH.filter(a=>S.ach[a.id]).length;$('achTitle').innerHTML='الإنجازات '+ic('trophy',22)+' '+n+'/'+ACH.length;
  $('achList').innerHTML=ACH.map(a=>{const d=!!S.ach[a.id];return '<div class="menu-row'+(d?'':' lock')+'"><span>'+ic(d?'check':'lock',22)+'<span class="at">'+a.n+'<small>'+a.d+'</small></span></span></div>'}).join('');$('achOverlay').classList.add('show')}
$('btnAch').addEventListener('click',openAch);
$('achClose').addEventListener('click',()=>{$('achOverlay').classList.remove('show')});
$('achOverlay').addEventListener('click',ev=>{if(ev.target===$('achOverlay'))$('achOverlay').classList.remove('show')});
$('hagYes').addEventListener('click',()=>hagChoose(true));
$('hagNo').addEventListener('click',()=>hagChoose(false));
$('btnMenu').addEventListener('click',openMenu);
$('menuClose').addEventListener('click',()=>{$('menuOverlay').classList.remove('show')});
$('menuOverlay').addEventListener('click',ev=>{if(ev.target===$('menuOverlay'))$('menuOverlay').classList.remove('show')});
function closeTut(){$('tutorialOverlay').classList.remove('show');try{localStorage.setItem('gaan_tut_v1','1')}catch(e){}}
$('btnTutorial').addEventListener('click',()=>{$('tutorialOverlay').classList.add('show')});
$('tutorialClose').addEventListener('click',closeTut);
$('tutorialOverlay').addEventListener('click',ev=>{if(ev.target===$('tutorialOverlay'))closeTut()});
try{if(!localStorage.getItem('gaan_tut_v1'))$('tutorialOverlay').classList.add('show')}catch(e){}
buildBG();refresh();
let last=0;
function loop(n){
  if(!last)last=n;
  const dt=Math.max(0,Math.min(.05,(n-last)/1000));last=n;
  try{update(dt);chatTick(dt);draw(n/1000);hudT+=dt;if(hudT>.2){hudT=0;refresh();wkTick();menuTick();$('hint').textContent=target().m}}catch(e){console.error(e)}
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
document.addEventListener('visibilitychange',()=>{if(document.hidden)save()});
