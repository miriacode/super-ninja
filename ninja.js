class Ninja{
    constructor(name){
       this.name = name;
       this.health = 0;
       this.speed = 3;
       this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }
    
    showStats(){
        console.log("Name: " + this.name);
        console.log("Strength: " + this.strength);
        console.log("Speed: " + this.speed);
        console.log("Health: " + this.health);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

console.log("-----------------------------")

class Sensei extends Ninja{
    constructor (name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do it in two months.");
        super.drinkSake();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();