function mintaszoveg() {
    let szoveg = document.getElementById("mintaszovegInput").value;
    if (szoveg.trim() === "") {
        document.getElementById("mintaszovegHiba").innerHTML = "A mintaszöveg nem lehet üres!";
        document.getElementById("szovegKiiras").innerHTML = "";
    }
    if (szoveg !== "") {
        document.getElementById("mintaszovegHiba").innerHTML = "";
        document.getElementById("szovegKiiras").innerHTML = szoveg;
    }
}

function betumeret() {
    let meret = document.getElementById("betumeretInput").value;
    document.getElementById("szovegKiiras").style.fontSize = meret + "pt";
}

function betuszin() {
    let szin = document.getElementById("betuszinInput").value;
    document.getElementById("szovegKiiras").style.color = szin;
}

function hatterszin() {
    let szin = document.getElementById("hatterszinInput").value;
    document.getElementById("szovegKiiras").style.backgroundColor = szin;
}

function alaphelyzet() {
    document.getElementById("szovegKiiras").removeAttribute("style");
    document.getElementById("mintaszovegInput").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("betumeretInput").value = "12";
    document.getElementById("betuszinInput").value = "#000000";
    document.getElementById("hatterszinInput").value = "#FFFFFF";
    document.getElementById("szovegKiiras").innerHTML = "Árvíztűrő tükörfúrógép";
}

function init() {
    document.getElementById("mintaszovegInput").addEventListener("input", mintaszoveg);
    document.getElementById("betumeretInput").addEventListener("input", betumeret);
    document.getElementById("betuszinInput").addEventListener("input", betuszin);
    document.getElementById("hatterszinInput").addEventListener("input", hatterszin);
    document.getElementById("alaphelyzetButton").addEventListener("click", alaphelyzet);
}

document.addEventListener("DOMContentLoaded", init);