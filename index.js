const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(){

this.classList.add('trigger-enter');

setTimeout(()=>{
    this.classList.add('trigger-enter-active')
}, 150)

background.classList.add('open');

const dropdown = this.querySelector('.dropdown');
const dropdownCoords = dropdown.getBoundingClientRect();
const navcoords = nav.getBoundingClientRect();

const cords={
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top-navcoords.top,
    left: dropdownCoords.left-navcoords.left
}

background.style.setProperty('width', `${cords.width}px`);
background.style.setProperty('height', `${cords.height}px`);
background.style.setProperty('transform', `translate(${cords.left}px, ${cords.top}px)`)
}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');

}

triggers.forEach(trigger=> trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));