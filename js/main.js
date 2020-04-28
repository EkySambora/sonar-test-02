var coverAll = document.querySelector('.cover-all')
var showPopover = document.querySelector('#showPopover')
var tabs = document.querySelectorAll('.tabs')
var valTab1 = document.querySelector('.tab-1')
var valTab2 = document.querySelector('.tab-2')

coverAll.style.display = 'none'

showPopover.onclick = function(){
    coverAll.style.display = 'flex'
}
tabs[0].classList.add('active')
valTab2.style.display = 'none'
tabs.forEach(tab => tab.addEventListener('click', klik));


function klik(e){
    tabs.forEach(tab=>tab.classList.remove('active'))
    e.target.classList.toggle('active');
    // console.log(e.target.dataset.tab);
    // console.log(e);
    let dataSet = e.target.dataset.tab
    if(dataSet == 'two'){
        valTab2.style.display = 'block'
        valTab1.style.display = 'none'
    } else {
        valTab2.style.display = 'none'
        valTab1.style.display = 'block'
    }
    
    // if(e.target.innerHTML == 'data completeness'){
    //     tab.classList.add('d-none');
    //     tab2.classList.remove('d-none')
    // }else {
    //     tab.classList.remove('d-none');
    //     tab2.classList.remove('d-none')
    // }
}