const string=`
.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .skin *::before,
  .skin *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #ffe600;
    min-height: 100vh;
  }
  
  .skin {
    position: relative;
  }
  .circle {
    position: absolute;
  
    width: 40px;
    height: 40px;
    left: 50%;
    top: 145px;
    margin-left: -20px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 10;
  }
  .square {
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 25px;
    right: 20px;
    transform-origin: bottom right;
    transform: rotate(45deg);
    background-color: black;
    z-index: 10;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(10deg);
    }
    66% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .circle:hover {
    animation: wave 200ms infinite linear;
  }
  .eye {
    border: 3px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    border-radius: 50%;
    background-color: #2e2e2e;
  }
  .eye::before {
    content: "";
    display: block;
    border: 3px solid black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    position: relative;
    left: 4px;
  }
  .eye.left {
    transform: translateX(-120px);
  }
  .eye.right {
    transform: translateX(120px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 170px;
  }
  .mouth .up .lip {
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    z-index: 3;
    background-color: #ffe600;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-20deg);
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
  
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
  
    transform: rotate(20deg);
    left: 50%;
    margin-left: -50px;
    transform: translateX(51px) rotate(20deg);
    top: -30px;
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 7px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan {
    border: 2px solid black;
    width: 150px;
    height: 500px;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    bottom: 0;
    border-radius: 75px/250px;
    background-color: #9b000a;
    overflow: hidden;
  }
  .mouth .down .yuan .yuan1 {
    border: 1px solid green;
    height: 300px;
    width: 200px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background-color: #ff485f;
    border-radius: 50%;
  }
  .face {
    position: absolute;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    left: 50%;
    margin-left: -44px;
    top: 200px;
    border-radius: 50%;
    background-color: #ff0000;
  }
  .face.left {
    transform: translateX(180px);
  }
  .face.right {
    transform: translateX(-180px);
  }
`
let n=1
demo2.innerHTML=string.substr(0,n)
demo.innerText=string.substr(0,n)

let time=100;
const run=()=>{
    n+=1
    if(n>string.length){
        window.clearInterval(id)
        return
}

demo2.innerHTML=string.substr(0,n)
demo.innerText=string.substr(0,n)
demo.scrollTop=999999//demo.scrollHeight

}
const play=()=>{
return setInterval(run,time)
}
const pause=()=>{
    window.clearInterval(id)
}
let id=play()
btnPause.onclick=()=>{
    pause()
}
btnPlay.onclick=()=>{
    id=play()
}
btnSlow.onclick=()=>{
    pause()
    time=300
    id=play()
}
btnNormal.onclick=()=>{
    pause()
    time=100
    id=play()
}
btnFast.onclick=()=>{
    pause()
    time=0
    id=play()
}