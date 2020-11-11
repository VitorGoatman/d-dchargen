class Atributos {
    constructor(STR, DEX, CON, INT, WIS, CHA) {
        this.strenght = STR;
        this.dexterity = DEX;
        this.constitution = CON;
        this.intelligence = INT;
        this.wisdom = WIS;
        this.charisma = CHA;
    }
    get statblock() {
        var txt = "STR: " + this.strenght +"<br>DEX: " + this.dexterity + "<br>CON: " + this.constitution + "<br>INT: " + this.intelligence + "<br>WIS: " + this.wisdom + "<br>CHA: " + this.charisma;
        return "Atributos:<br>"+txt+"<br>";
    }
}
function getSTR() {
    var score = document.getElementById('STR').value;
    return score;
}
function getDEX() {
    var score = document.getElementById('DEX').value;
    return score;
}
function getCON() {
    var score = document.getElementById('CON').value;
    return score;
}
function getINT() {
    var score = document.getElementById('INT').value;
    return score;
}
function getWIS() {
    var score = document.getElementById('WIS').value;
    return score;
}
function getCHA() {
    var score = document.getElementById('CHA').value;
    return score;
}

CharStats = new Atributos(getSTR(), getDEX(), getCON(), getINT(), getWIS(), getCHA());
function printStuff() {
    document.getElementById('resultado').innerHTML = CharStats.statblock;
}
