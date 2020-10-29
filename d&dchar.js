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
        return txt;
    }
}
GalikStats = new Atributos(13, 16, 14, 10, 16, 11);
document.getElementById('resultado').innerHTML = GalikStats.statblock;
