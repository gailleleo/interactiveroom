const sechand = document.querySelector("[data-second]")
const minhand = document.querySelector("[data-minute]")
const hourhand = document.querySelector("[data-hour]")



console.log("Hi.");

function setClock(){
    console.log("Test.")
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/60
    const minute = (currentDate.getMinutes() + seconds)/60
    const hour = currentDate.getHours()

    console.log(seconds)
    setRotation(sechand, seconds)
} 


function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation * 360)
}
setInterval(setClock,1000);

setClock()