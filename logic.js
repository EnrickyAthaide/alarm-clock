// function clockka(){
//     let timo = new Date();
//     let hoor = timo.getHours();
//     let minu = timo.getMinutes();
//     let sexu = timo.getSeconds();
//     document.querySelector("#hour").innerHTML=hoor + ":";
//     document.querySelector("#min").innerHTML=minu  + ":";
//     document.querySelector("#sec").innerHTML=sexu;
//     if(hoor>=12){
//         document.querySelector("#deez").innerHTML= " " +" PM";
//     }
//     else{
//         document.querySelector("#deez").innerHTML= " " +" AM";
//     }
// }
//  clockka();
// setInterval(clockka,1000)

// function setAlarmm(){

//     let icon=document.querySelector("#add");
//     let displayz = document.querySelector("#setAlarm");
//     if(displayz.style.display=="none" || displayz.style.display == ""){
//         icon.style.transform="rotate(45deg)";
//         displayz.style.display="flex";

//     }
//     else{
//         displayz.style.display="none";
//     //     icon.innerHTML=` <i class="material-symbols-outlined" id="add">
//     //     add
//     // </i>`
//      icon.style.transform="rotate(0deg)"
//     }

// }

// document.querySelector("#add").addEventListener("click",setAlarmm);
// function bajgaya(){
//     let hour = document.querySelector("#hour1").value;
//     let min = document.querySelector("#min1").value;
//     let sec = document.querySelector("#sec1").value;
//     console.log(hour);
//     let division=document.createElement("div")
//     division.className="divi";
//     division.innerHTML=`<div class="userTIME">
//           <div class="heading4">
//             <h4 class="userH">${hour} </h4>
//             <h4 class="userM">: ${min}</h4>
//             <h4 class="userS">: ${sec}</h4>
//           </div>
//           <div class="del">
//             <i class="material-symbols-outlined icons" id="del">delete</i>
//             <i class="material-symbols-outlined icons" id="pau">pause</i>
//             <i class="material-symbols-outlined icons" id="play">play_arrow</i>
//           </div>
//         </div>`
//         document.querySelector(".parentdivi").append(division);

// }

// document.querySelector("#check").addEventListener("click",bajgaya);
// function bajega(){

//     let timo = new Date();
//     let hoor = timo.getHours();
//     let minu = timo.getMinutes();
//     let sexu = timo.getSeconds();
//     let userhour = document.querySelector("#hour1").value;
//     let usermin = document.querySelector("#min1").value;
//     let usersec = document.querySelector("#sec1").value;
//     if(hoor==userhour && minu==usermin && sexu==usersec){
//         document.querySelector("#ganna").play();
//     }
// }

// setInterval(bajega,1000);

// document.querySelector(".parentdivi").addEventListener("click", function (e) {
//     if (e.target && e.target.id === "del") {
//       removingCHILD(e.target);
//     } else if (e.target && e.target.id === "pau") {
//       pauseAUD();
//     } else if (e.target && e.target.id === "play") {
//       playAGAIN();
//     }
//   });
//   function removingCHILD(target) {
//     let division = target.closest(".divi");
//     division.parentNode.removeChild(division);
//     //   document.querySelector(".userH").innerHTML = "0";
//     //   document.querySelector(".userM").innerHTML = "";
//     //   document.querySelector(".userS").innerHTML = "";
//     document.querySelector("#ganna").pause();
//   }

// function pauseAUD(){
//     document.querySelector("#ganna").pause();
// }
// document.querySelector("#pau").addEventListener("click", pauseAUD);

// function playAGAIN(){
//     document.querySelector("#ganna").play();
// }
// function resetkaro(){
//      document.querySelector("#hour1").value=0;
//     document.querySelector("#min1").value=0;
//     document.querySelector("#sec1").value=0;
// }
// document.querySelector("#restart").addEventListener("click",resetkaro);



function clockka() {
    let timo = new Date();
    let hoor = timo.getHours();
    let minu = timo.getMinutes();
    let sexu = timo.getSeconds();
    document.querySelector("#hour").innerHTML = hoor + ":";
    document.querySelector("#min").innerHTML = minu + ":";
    document.querySelector("#sec").innerHTML = sexu;
    if (hoor >= 12) {
        document.querySelector("#deez").innerHTML = " " + " PM";
    } else {
        document.querySelector("#deez").innerHTML = " " + " AM";
    }
}
clockka();
setInterval(clockka, 1000);

function setAlarmm() {
    let icon = document.querySelector("#add");
    let displayz = document.querySelector("#setAlarm");
    if (displayz.style.display == "none" || displayz.style.display == "") {
        icon.style.transform = "rotate(45deg)";
        displayz.style.display = "flex";
    } else {
        displayz.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    }
}

document.querySelector("#add").addEventListener("click", setAlarmm);

function bajgaya() {
    let hour = document.querySelector("#hour1").value;
    let min = document.querySelector("#min1").value;
    let sec = document.querySelector("#sec1").value;
    console.log(hour);
    let division = document.createElement("div");
    division.className = "divi";
    division.innerHTML = `
        <div class="userTIME">
            <div class="heading4">
                <h4 class="userH">${hour} </h4>
                <h4 class="userM">: ${min}</h4>
                <h4 class="userS">: ${sec}</h4>
            </div>
            <div class="del">
                <i class="material-symbols-outlined icons" id="del">delete</i>
                <i class="material-symbols-outlined icons" id="pau">pause</i>
                <i class="material-symbols-outlined icons" id="play">play_arrow</i>
            </div>
        </div>`;
    document.querySelector(".parentdivi").append(division);
}

document.querySelector("#check").addEventListener("click", bajgaya);

function bajega() {
    let timo = new Date();
    let hoor = timo.getHours();
    let minu = timo.getMinutes();
    let sexu = timo.getSeconds();
    let userhour = document.querySelector("#hour1").value;
    let usermin = document.querySelector("#min1").value;
    let usersec = document.querySelector("#sec1").value;
    if (hoor == userhour && minu == usermin && sexu == usersec) {
        document.querySelector("#ganna").play();
    }
}

setInterval(bajega, 1000);

document.querySelector(".parentdivi").addEventListener("click", function (e) {
    if (e.target && e.target.id === "del") {
        removingCHILD(e.target);
    } else if (e.target && e.target.id === "pau") {
        pauseAUD();
    } else if (e.target && e.target.id === "play") {
        playAGAIN();
    }
});

function removingCHILD(target) {
    let division = target.closest(".divi");
    division.parentNode.removeChild(division);
    document.querySelector("#ganna").pause();
}

function pauseAUD() {
    document.querySelector("#ganna").pause();
}

function playAGAIN() {
    document.querySelector("#ganna").play();
}

function resetkaro() {
    document.querySelector("#hour1").value = 0;
    document.querySelector("#min1").value = 0;
    document.querySelector("#sec1").value = 0;
}

document.querySelector("#restart").addEventListener("click", resetkaro);
