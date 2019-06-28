//define UI elements i want to work with
const inputNumber = document.querySelector('select');
const generateButton = document.querySelector('input');
const clearButton = document.getElementById('clear');
const copyButton = document.getElementById('copy');

//add Eevent listeners to buttons
generateButton.addEventListener('click', calcNumOfLorem);
clearButton.addEventListener('click', clearStuff);
copyButton.addEventListener('click', copyTo);

//have a const that cntains 1 paragraph of Lorem Ipsum 
const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


//calucaltes the # of LI paragraphs to display
function calcNumOfLorem(e){
  const selected = inputNumber.value;
  //Once a user clicks generate the button becomes diasbled to stop any weird bugs from happening
  generateButton.setAttribute("disabled", "disabled");

  for(i = 0; i < selected; i++){
    const para = document.createElement("P");
    para.className = 'lorem';
    para.innerText = loremIpsum;
    document.body.appendChild(para);
  }
}

//clear the generated paragraphs off the screen
function clearStuff(e){
  const p = document.querySelectorAll('.lorem');

  if (p.length === 0) {
    alert('Make a selection first!');
  } else {
    generateButton.disabled = false;
    p.forEach((e) =>{
    e.remove();
    });
  } 
}


//copies the generated paragraphs to the user's clipboard
function copyTo(){
  const copyLorems = document.querySelectorAll('.lorem');

if (copyLorems.length === 0){
  alert('Make a selection first!');
} else {
  var html = "";
  for(i = 0; i < copyLorems.length; i++){
    html += copyLorems[i].innerHTML;
  }
    const hiddenInput = document.createElement('input');
    document.body.appendChild(hiddenInput);
    hiddenInput.id = 'hidden';
    hiddenInput.value = html;
    hiddenInput.select();
    document.execCommand("copy", false);
    alert('Copied!');
  }
}