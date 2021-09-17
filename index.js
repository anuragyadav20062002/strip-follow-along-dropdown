const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(){
console.log("Enter");
this.classList.add('trigger-enter');

setTimeout(()=>{
    this.classList.add('trigger-enter-active')
}, 150)
}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
console.log("leave")
}

triggers.forEach(trigger=> trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));