// HTML DOM add() Method for open menu bar in header
document.getElementById("ham-btn").addEventListener("click", open);
function open() {
  document.getElementById("navigation").style.display = 'block';
}
    
document.getElementById("close-btn").addEventListener("click", close);
function close() {
  document.getElementById("navigation").style.display = 'none';
}


// Close mobile navigation after click on link
var closeNav = document.getElementsByClassName('navigation__mobile'); 
function closeContainer(e)
{
  navigation.style.display= "none";
};

for (var i = 0; i < closeNav.length; i++) {
   closeNav[i].addEventListener('click', closeContainer); 
}


// Dropdown listener event
var expanded = false;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if(!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
}
  else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}


// Range slider js
var myRange = document.querySelector('#myRange1, #myRange2, #myRange3');
var myValue = document.querySelector('#myValue1, #myValue2, #myValue3');
var myUnits = ' ';
var off = myRange.offsetWidth / (parseInt(myRange.max) + parseInt(myRange.min));
var px =  ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

myValue.parentElement.style.left = px + 'px';
myValue.innerHTML = myRange.value + ' ' + myUnits;

myRange.oninput =function(){
  let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 8);
  myValue.innerHTML = myRange.value + ' ' + myUnits;
  myValue.parentElement.style.left = px + 'px';
};


// Back to top button js 
var scrollpos = window.scrollY;
var btn = document.getElementById("button");

function add_class_on_scroll() {
    btn.classList.add("show");
}

function remove_class_on_scroll() {
    btn.classList.remove("show");
}

window.addEventListener('scroll', function(){ 

    scrollpos = window.scrollY;

    if(scrollpos > 100){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});