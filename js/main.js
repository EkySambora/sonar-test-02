let coverAll = document.querySelector('.cover-all')
let showPopover = document.querySelector('#showPopover')
let tabs = document.querySelectorAll('.tabs')
let valTab1 = document.querySelector('.tab-1')
let valTab2 = document.querySelector('.tab-2')
let pseudo = document.querySelector('.pseudo')

coverAll.style.display = 'none'
tabs[0].classList.add('active')
valTab2.style.display = 'none'

tabs.forEach(tab => tab.addEventListener('click', activeTab));

showPopover.addEventListener("click", function(){
    coverAll.style.display = 'flex'
})


pseudo.addEventListener("click", function() {
    coverAll.style.display = 'none'
}) 

function activeTab(e){
    tabs.forEach(tab=>tab.classList.remove('active'))
    e.target.classList.toggle('active');

    let dataSet = e.target.dataset.tab
    if(dataSet == 'two'){
        valTab2.style.display = 'block'
        valTab1.style.display = 'none'
    } else {
        valTab2.style.display = 'none'
        valTab1.style.display = 'block'
    }

}