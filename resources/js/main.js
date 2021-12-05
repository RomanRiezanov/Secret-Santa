const main = document.getElementById("main");
const btn = document.getElementById("button");
const irina = document.getElementById("radio0");
const yana = document.getElementById("radio1");
const vika = document.getElementById("radio2");
const artur = document.getElementById("radio3");
const roman = document.getElementById("radio4");
const oleg = document.getElementById("radio5");
const result = document.getElementById("resultSanta-block");
const nameOfResult = document.getElementById("nameOfResult");
const resultSantaText = document.getElementById("resultSanta-text");


const names = ["Иры", "Яны", "Вики", "Артура", "Романа", "Олега"];
const repeatNames = [];

const random = (arr) => {
    const randomName = Math.floor(Math.random() * arr.length);
    return arr[randomName];
}

const iraAndRoma = () => {
    const irinaNames = names.slice();
    const firstIndex = irinaNames.indexOf("Иры");
    const secondIndex = irinaNames.indexOf("Романа") - 1;

    if (firstIndex > -1 || secondIndex > -1) {
        irinaNames.splice(firstIndex, 1)
        irinaNames.splice(secondIndex, 1)
    }

    let res = random(irinaNames);
    while (repeatNames.indexOf(res) > -1) {
        res = random(irinaNames)
    }
    repeatNames.push(res);

    resultSantaText.innerHTML = `Поздравляю! Ты тайный Санта у ${res}`;
    result.style.display = "grid";
}

const yanaAndArtur = () => {
    const yanaNames = names.slice();
    const firstIndex = yanaNames.indexOf("Яны");
    const secondIndex = yanaNames.indexOf("Артура") - 1;

    if (firstIndex > -1 || secondIndex > -1) {
        yanaNames.splice(firstIndex, 1)
        yanaNames.splice(secondIndex, 1)
    }
    let res = random(yanaNames);
    while (repeatNames.indexOf(res) > -1) {
        res = random(yanaNames)
    }

    repeatNames.push(res);

    resultSantaText.innerHTML = `Поздравляю! Ты тайный Санта у ${res}`;
    result.style.display = "grid";

}

const vikaAndOleg = () => {
    const vikaNames = names.slice();
    const firstIndex = vikaNames.indexOf("Вики");
    const secondIndex = vikaNames.indexOf("Олега") - 1;

    if (firstIndex > -1 || secondIndex > -1) {
        vikaNames.splice(firstIndex, 1)
        vikaNames.splice(secondIndex, 1)
    }
    let res = random(vikaNames);
    while (repeatNames.indexOf(res) > -1) {
        res = random(vikaNames)
    }

    repeatNames.push(res);

    resultSantaText.innerHTML = `Поздравляю! Ты тайный Санта у ${res}`;
    result.style.display = "grid";
}

let repeatIra = true;
let repeatYana = true;
let repeatVika = true;
let repeatArtur = true;
let repeatRoman = true;
let repeatOleg = true;

const btnChecked = () => {
    if(irina.checked && repeatIra) {
        repeatIra = false;
        iraAndRoma();

    } else if (yana.checked && repeatYana) {
        repeatYana = false;
        yanaAndArtur();

    } else if (vika.checked && repeatVika) {
        repeatVika = false;
        vikaAndOleg();

    } else if (artur.checked && repeatArtur) {
        repeatArtur = false;
        yanaAndArtur();

    } else if (roman.checked && repeatRoman) {
        repeatRoman = false;
        iraAndRoma();

    } else if (oleg.checked && repeatOleg){
        repeatOleg = false;
        vikaAndOleg();
        
    } else {
        resultSantaText.innerHTML = "Ты уже выбирал!"
    }
}


btn.onclick = btnChecked;