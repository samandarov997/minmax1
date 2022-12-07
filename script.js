// console.log(Math.round(Math.random()*10));
let num = +prompt("nechta misol ishlamoqchisan");
function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
for (let i = 0; i < num; i++) {
  let n1 = random(10, 20);
  let n2 = random(1, 10);
  let sym = random(1, 5);
  let savol
  let javob 
  if (sym == 1) {
    savol = +prompt(`${n1} + ${n2} = ?`)
    javob = n1+n2
  }
  else if (sym == 2){savol = +prompt(`${n1} - ${n2} = ?`)
  javob = n1-n2}
  else if (sym == 3){savol = +prompt(`${n1} * ${n2} = ?`)
  javob = n1*n2}
  else if (sym == 4){savol = +prompt(`${n1} / ${n2} = ?`)
  javob = n1/n2}
  else if (sym == 5){savol = +prompt(`${n1} % ${n2} = ?`)
  javob = n1%n2}
  if(savol==javob)
  console.log(`sani javobing togri ${savol}`);
  else{
    console.log(`sani javobing notogri ${savol}. togri javob ${javob}`);
  }
}
let natija = alert("natijani korish uchun consolni oching (F12)")
