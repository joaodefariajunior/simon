let i=0;
let txt = 'Im not sure if this is right!'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;