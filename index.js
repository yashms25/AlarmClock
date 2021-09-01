
const ans = document.getElementById('ans');
const date = document.getElementById('alarm');
const setalarm = document.getElementById('setalarm');
date.addEventListener('input', ()=>{
    console.log("alarm is blurred");
    let regex = /^([0-9]){4}-([0-9]){2}-([0-9]){2}\s([0-9]){2}:([0-9]){2}:([0-9]){2}$/;
    let str = date.value;
    if(regex.test(str)){
        date.classList.remove('is-invalid');
        date.classList.add('is-valid');      
    }
    else{
        date.classList.add('is-invalid');
        date.classList.remove('is-valid'); 
    }
})

setalarm.addEventListener('click',setAlarm);
var audio = new Audio('krishna flute.mp3');
function ringBell() {
    audio.play();
}

function setAlarm(e) {
    e.preventDefault();
    alarmDate = new Date(date.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
        setInterval(() => {
          now = new Date();
          let timeToAlarm = Math.round((alarmDate - now)/1000);
          if(timeToAlarm >= 0){
            ans.innerHTML = `Your Alarm will ring in ${timeToAlarm} seconds`
          }
          else{
            ans.innerHTML = `Ringing Now...🚨🚨🚨`
          }
        }, 1000);
    }
}
