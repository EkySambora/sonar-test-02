let coverAll = document.querySelector('.cover-all');
let showPopover = document.querySelector('#showPopover');
let tabs = document.querySelectorAll('.tabs');
let valTab1 = document.querySelector('.tab-1');
let valTab2 = document.querySelector('.tab-2');
let pseudo = document.querySelector('.pseudo');
let images = document.querySelectorAll('.image img');
let indicator = document.querySelectorAll('.indicator span');

coverAll.style.display = 'none';
tabs[0].classList.add('active');
valTab2.style.display = 'none';

tabs.forEach(tab => tab.addEventListener('click', activeTab));

showPopover.addEventListener("click", function(){
    coverAll.style.display = 'flex';
})

pseudo.addEventListener("click", function() {
    coverAll.style.display = 'none';
}) 

function activeTab(e){
    tabs.forEach(tab=>tab.classList.remove('active'))
    e.target.classList.toggle('active');

    let dataSet = e.target.dataset.tab;

    if(dataSet == 'two'){
        valTab2.style.display = 'block';
        valTab1.style.display = 'none';
    } else {
        valTab2.style.display = 'none';
        valTab1.style.display = 'block';
    }
}

images[1].style.display = "none";
images[2].style.display = "none";

//slider
indicator[0].style.background = "#123";
var counter = 0;
var newCountdown = setInterval(function(){
  counter++

    if(counter === 0) {
        images[0].style.display = "block";
        images[1].style.display = "none";
        images[2].style.display = "none";

        indicator[0].style.background = "#123";
        indicator[1].style.background = "#fff";
        indicator[2].style.background = "#fff";

        
    }
    else if(counter === 1) {
        images[0].style.display = "none";
        images[1].style.display = "block";
        images[2].style.display = "none";

        indicator[0].style.background = "#fff";
        indicator[1].style.background = "#123";
        indicator[2].style.background = "#fff";
    }
    else if(counter === 2) {
        images[2].style.height = "300px";
        images[0].style.display = "none";
        images[1].style.display = "none";
        images[2].style.display = "block";

        indicator[0].style.background = "#fff";
        indicator[1].style.background = "#fff";
        indicator[2].style.background = "#123";
    }
    else if(counter === 3) {
        images[0].style.display = "block";
        images[1].style.display = "none";
        images[2].style.display = "none";

        indicator[0].style.background = "#123";
        indicator[1].style.background = "#fff";
        indicator[2].style.background = "#fff";

        counter = 0
        // clearInterval(newCountdown);
    }
}, 3000);