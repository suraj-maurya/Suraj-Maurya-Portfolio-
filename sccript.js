make_arrow(17); 
progress_bar();









 //function to make arrow
function make_arrow(arrlength=20 ){

    let arrow=document.querySelector('.arrow')
let arrowhead='';
const arrowbody='<div class="arrowbody"></div>'

for (let i = 0; i <arrlength; i++) {
    arrowhead +=`<div class="arrowhead">
    <div class="arrowhead1">
    <div class="semi-circle"></div>
    </div>
    <div class="arrowhead2">
      <div class="semi-circle"></div>
      </div>
  </div>`;
}
const arrowhtml=` ${arrowbody} ${arrowhead}`
arrow.innerHTML=arrowhtml;
}
// function for the progress bar
function progress_bar(){

  const meters = document.querySelectorAll('svg[data-value] .meter');
  
meters.forEach((path) => {
  // Get the length of the path
  let length = path.getTotalLength();
  
  // console.log(length);
  
  // Just need to set this once manually on the .meter element and then can be commented out
  // path.style.strokeDashoffset = length;
  // path.style.strokeDasharray = length;
  
  // Get the value of the meter
  let value = parseInt(path.parentNode.getAttribute('data-value'));
  // Calculate the percentage of the total length
  let to = length * ((100 - value) / 100);
  // Trigger Layout in Safari hack https://jakearchibald.com/2013/animated-line-drawing-svg/
  path.getBoundingClientRect();
  // Set the Offset
  path.style.strokeDashoffset = Math.max(0, to);   path.nextElementSibling.textContent = `${value}%`;
});

}