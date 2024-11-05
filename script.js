// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100 //total HP
let playerAP = 100
let arcaneScepterAtk = 14 //hp dmg 
let entangle = 9 //hp dmg
let dragonBlade = 47 //hp dmg
let starFire = 23 //hp dmg

function arcaneScepter(){
    let fungusTotal = fungusHP

    fungusHP =  fungusTotal - arcaneScepterAtk
    console.log('Fungus remaining HP = ', fungusHP)
    render()
    }


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
function render() {
    const hpText = document.querySelector('.hp-text')
    const apText = document.querySelector('.ap-text')
    console.log('Testing new Variable', fungusHP)
    hpText.innerText = fungusHP + ' HP'
    
}

onReady()