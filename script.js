const batman = {
    name: "Batman",
    health: 50,
}
const superman = {
    name: "Superman",
    health: 50,
}
const shrek = {
    name: "Shrek",
    health: 50,
}
const characters = [batman, superman, shrek];

const opponent = {
    name: "Kim Possible",
    health: 100,
}

while (opponent.health >= 0){
    let start = prompt("Choose which character you want to fight: 1 for Batman, 2 for Superman, or 3 for Shrek.");
    if (start === null) {
        console.log("You have left the game");
        break;
    }
    else if (opponent.health < 5){
        console.log("You have done the impossible and defeated Kim Possible")
    }
    else if (start === "1") {
        if (batman.health <= 0) {
            console.log("try again")
        }
        else if (batman.health >= 0) {
        batman.health = batman.health - 5;
        opponent.health = opponent.health - 5; 
            }
        }
    else if (start === "2") {
        if (superman.health <= 0) {
            console.log("try again")
        }
        else if (superman.health >= 0) {
        superman.health = superman.health - 5;
        opponent.health = opponent.health - 5;
        }
    }
    else if (start === "3") {
        if (shrek.health <= 0) {
            console.log("try again")
        }
        else if (shrek.health >= 0) {
        shrek.health = shrek.health - 5;
        opponent.health = opponent.health - 5;
        }
    }
    console.log(batman.name, batman.health);
    console.log(superman.name, superman.health);
    console.log(shrek.name, shrek.health);
    console.log(opponent.name, opponent.health);
}