function aylantr() {
document.querySelector(".img1").classList.add("pressed")
document.querySelector(".img2").classList.add("pressed")
setTimeout ( function (){
    document.querySelector(".img1").classList.remove("pressed");
    document.querySelector(".img2").classList.remove("pressed");
},300);
    let tasodifiy1 = Math.floor(Math.random() * 6) + 1;
    let tasodifiy2 = Math.floor(Math.random() * 6) + 1;
  
    document.querySelector('img1').src = `./assets/dice${dice}.png`;
    document.querySelector('img2').src = `./assets/dice${dice}.png`;
  
   
    if (tasodifiy1 > tasodifiy2) {
     document.getElementById("winner").innerHTML= "O'yinchi 1 g'olib!";
    } else if (tasodifiy2 > tasodifiy1) {
      document.getElementById("winner").innerHTML = "O'yinchi 2 g'olib!";
    } else {

        document.getElementById('winner').innerText ="durrang";
    }
  }
  