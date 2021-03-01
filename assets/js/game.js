var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var i =0;

var fight = function () {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player chooses to fight, then fight
    if(promptFight=="fight" || promptFight=="FIGHT"){
        //Subtract the value of 'playerAttack. from 'enemyHealth' and update the value of 'enemyHealth'
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console to indicate it worked
        console.log (
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );
        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died!");
        }
        else {
            window.alert (enemyNames[i] + " still has " + enemyHealth + " health left.");
        }
        //Subtract the value of enemyAttack from the value of playerHealth and update the vlue of playerHealth
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console to indicate it worked
        console.log(
            enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining"
        );
        if (playerHealth <= 0){
            window.alert(playerName + " had died!");
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    //if player chooses to skip
    else if (promptFight == "skip" || promptFight == "SKIP") {
        //confirm the player wants to skip
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
        //if yes, leave fight
        if (confirmSkip) {
            window.alert (playerName + " has chosen to skip the fight!");
            //subtract money from playerMoney
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
};
for (var i=0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}
