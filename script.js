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
    let arcaneCost = 12
    let apTotal = playerAP
    fungusHP =  fungusTotal - arcaneScepterAtk
    playerAP = apTotal - arcaneCost
    console.log('Fungus remaining Fungus HP after Arcane Scepter: ', fungusHP)
    console.log('Player remaining AP after Arcane Scepter: ', playerAP)
    render()
    }

    function entangleAtk(){
        let fungusTotal = fungusHP
        let apTotal = playerAP
        let entangleCost = 23
        fungusHP = fungusTotal - entangle
        playerAP = apTotal - entangleCost
        console.log('Fungus remaining Fungus HP after Entangle: ', fungusHP)
    console.log('Player remaining AP after Entangle: ', playerAP)
        render()
    }

    function dragonBladeAtk(){
        let fungusTotal = fungusHP
        let apTotal = playerAP
        let dragonBladeCost = 38
        fungusHP = fungusTotal - dragonBlade
        playerAP = apTotal - dragonBladeCost
        console.log('Fungus remaining Fungus HP after Arcane Scepter: ', fungusHP)
    console.log('Player remaining AP after Arcane Scepter: ', playerAP)
        render()
    }

function StarFireAtk(){
    let fungusTotal = fungusHP
    let apTotal = playerAP
    let StarFireCost = 33
    fungusHP = fungusTotal - starFire
    playerAP = apTotal - StarFireCost
    console.log('Fungus remaining Fungus HP after Arcane Scepter: ', fungusHP)
    console.log('Player remaining AP after Arcane Scepter: ', playerAP)
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
    apText.innerText = playerAP + ' AP'
    
}

onReady()