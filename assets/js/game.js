var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var i =0;

  var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd liked to fight or run
      var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = Math.max(0, playerMoney-10);
          console.log("playerMoney", playerMoney);
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      var playerDamage = randomNumber(playerAttack - 3, playerAttack)
      enemyHealth = Math.max(0, enemyHealth - playerDamage);
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack-3, enemyAttack)
      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };
  //function to start a new game
var startGame = function (){
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i=0; i < enemyName.length; i++){
    if (playerHealth > 0){
      window.alert ("Welcome to Robot Gladiators! Round " + (i+1));
      var pickedEnemyName = enemyName [i];
      enemyHealth = randomNumber(40, 60);
      fight(pickedEnemyName);
      if (playerHealth > 0 && i< enemyName.length - 1){
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        //if yes, take them to the store function
        if(storeConfirm){
          shop();
        }
      }
    }
    else {
      window.alert ("You have lost your robot in battle! Game over!");
      break;
    }
  }
  //play again
  endGame();
};
//function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!")
  if (playerHealth > 0){
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm){
    //restart the game
    startGame();
  }
  else {
    window.alert ("Thank you for playing Robot Gladiators! Come back soon!")
  }
}
var shop = function(){
  console.log("entered the shop");
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', or 'UPGRADE', or 'LEAVE' to make a choice."
  )
  switch(shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
        //increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      }
      else{
        window.alert("You don't have enought money!");
      }
      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        //increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }
      else{
        window.alert("You don't have enought money!");
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store,");
      //end function
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
}
//function generates randome number
var randomNumber = function(min, max){
  var value = Math.floor(Math.random()*(max -min + 1)+min);
  return value;
}
//start the game when the page loads
startGame ();
