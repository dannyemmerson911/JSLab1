



var playerHealth=40;
var grantHealth=10;
var grantLives=3;
var name = "";

var play = prompt("Do you want to play?");
	if (play === "yes"){
		name = prompt("What is your name?");
	} else {
		console.log("Maybe next time"); 
	}





while(playerHealth >= 0, grantHealth >= 0, grantLives > 0){
	var attack = Math.floor((Math.random() * 2) + 1);
	grantHealth -= attack;
	playerHealth -= attack; 
	console.log("Grant has " + grantHealth + " hitpoints remaining");
	console.log(name + " has " + playerHealth + " hitpoints remaining");
	if (grantHealth<=0){
		grantLives--; console.log("Grant now has " + grantLives + " lives left.");
		grantHealth = 10;
	}
	if (grantHealth<=0){
		grantLives--; console.log("Grant now has " + grantLives + " lives left.");
		grantHealth = 10;
	}
	if (grantLives===0){
		console.log("You now have won the battle!");
	}

} 