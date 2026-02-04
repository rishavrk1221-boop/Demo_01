let step = 0;

function img(name){
  return "images/" + name;
}

// PRELOAD
["photo1","photo2","photo4","photo5","photo6","photo7","photo8","photo9"]
.forEach(n=>{
  let i=new Image();
  i.src=img(n+".jpeg");
  i.onerror=()=> i.src=img(n+".jpg");
});

function startSite(){
  document.getElementById("startScreen").style.display="none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("song").play();
  createHearts();
  next();
}

function page(title,image,text){

 let imgTag="";

 if(image){
  imgTag=`
   <div class="left">
    <img class="dayImage" src="${img(image+".jpeg")}"
    onerror="this.src='${img(image+".jpg")}'">
   </div>`;
 }

 return `
 <div class="container">
   ${imgTag}

   <div class="right">
     <h2>${title}</h2>
     <p>${text}</p>

     <button class="btn" onclick="next()">YES 💖</button>
     <button class="btn no" onmouseover="run(this)">NO 😜</button>
   </div>
 </div>`;
}

function next(){
 step++;
 const m=document.getElementById("main");

 // 1 ROSE
 if(step==1)
 m.innerHTML=page(
 "🌹 Rose Day",
 "photo1",
 "Sonam, This rose is just a small way of telling you how special you are to me. Every time I see you, life feels a little softer and happier. I may not say it perfectly, but my heart feels it deeply. Will you accept this rose from me today?"
 );

 // 2 PROPOSE – PHOTO9 ADDED
 if(step==2)
 m.innerHTML=page(
 "💍 Propose Day",
 "photo9",
 "Sonam, I don’t have grand promises or fancy lines, I only know that being with you feels right. I want to share simple moments, laughter, and silences with you. Will you let me be someone special in your life?"
 );

 // 3 CHOCOLATE
 if(step==3)
 m.innerHTML=page(
 "🍫 Chocolate Day",
 "photo3",
 "Sonam, Just like chocolate, you make my days sweeter without trying. A message from you can change my whole mood. If I could pack my feelings, they would taste like your smile. Will you take this little sweetness from me?"
 );

 // 4 TEDDY
 if(step==4)
 m.innerHTML=page(
 "🧸 Teddy Day",
 "photo4",
 "Sonam, When you’re not near, I wish I had something that feels like you. Something warm, soft, and full of comfort. Until I can be there myself, imagine this teddy is me. Will you keep it close for my sake?"
 );

 // 5 PROMISE – CUSTOMIZED
 if(step==5)
 m.innerHTML=page(
 "🤞 Promise Day",
 "photo5",
 "Sonam, I can’t promise perfection, but I can promise to be there when you need me. To listen, to care, and to respect your heart. I truly love you in my simple, honest way. Will you trust me with this promise?"
 );

 // 6 HUG
 if(step==6)
 m.innerHTML=page(
 "🤗 Hug Day",
 "photo6",
 "Sonam, Sometimes words are not enough to show what I feel. A hug can say everything my heart holds quietly. I wish I could wrap you in my arms right now. Can I have a warm hug from you today?"
 );

 // 7 KISS
 if(step==7)
 m.innerHTML=page(
 "💋 Kiss Day",
 "photo7",
 "Sonam, There are emotions I can’t put into sentences. Maybe a small kiss could tell you what my messages cannot. Something gentle, real, and just ours. Will you let me steal one sweet kiss?"
 );

 // 8 VALENTINE – FINAL
 if(step==8)
 m.innerHTML=`
 <div class="container">

 <div class="left">
  <img class="dayImage" src="${img("photo8.jpeg")}"
  onerror="this.src='${img("photo8.jpg")}'">
 </div>

 <div class="right">
  <h2>❤️ Valentine’s Day</h2>

  <p>
  Sonam,
  You didn’t just enter my life, you changed it.
  With you, ordinary days feel meaningful,
  and even silence feels comfortable.
  I don’t need a perfect world, just you beside me.
  Will you be my Valentine, Sonam?
  </p>

  <h3>Will you be my Valentine?</h3>

  <button class="btn" onclick="final()">YES 😍</button>
  <button class="btn no" onmouseover="run(this)">NO 😜</button>
 </div>

 </div>`;
}

function final(){
 alert("Sonam said YES ❤️\Rahul is the luckiest guy on earth!");

 const box=document.createElement("div");

 box.innerHTML=`
 <div style="
 position:fixed;top:0;left:0;width:100%;height:100%;
 background:#fff0f6;display:flex;align-items:center;
 justify-content:center;flex-direction:column;
 font-size:28px;font-family:'Great Vibes';z-index:999;">

 <h1>She Said YES! 💖</h1>

 <p>You just made my heart smile like never before.</p>
 <p>— Yours, Rahul</p>

 </div>`;

 document.body.appendChild(box);

 for(let i=0;i<40;i++) createHearts();
}

function run(b){
 b.style.position="absolute";
 b.style.left=Math.random()*250+"px";
 b.style.top=Math.random()*250+"px";
}

function createHearts(){
 setInterval(()=>{
   let h=document.createElement("span");
   const hearts=["♥️","💖","💕","💗"];
   h.innerHTML = hearts[Math.floor(Math.random()*hearts.length)];
   h.style.left=Math.random()*100+"vw";
   h.style.fontSize=(14+Math.random()*16)+"px";
   document.querySelector(".hearts").appendChild(h);
   setTimeout(()=>h.remove(),7000);
 },200);
}
