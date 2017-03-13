# Werewolves
The game of Werewolves

# Directory Structure 

  /public/index.html: The Game <br>
  /public/css: The CSS files <br>
  /public/js: The JS files <br>
  /public/cards/[role].html <br>
  /public/cards/[role].js <br>
  /public/res: The resource files (images)<br>

# Data Structure
```
  var roles = {
    "witch": "女巫",
    "werewolf": "狼人", 
    "hunter": "猎人", 
    "prophet": "预言家", 
    "cupid": "丘比特",
    "villager": "村民",
    "police": "警长"
  }

  var active_roles = {
    "werewolf": []
    "villager": []
    "god": {
      "witch": [],//must have
      "hunter":[],//must have
      "prophet":[], //must have
      "cupid":[], //optional 
    }
  }

  var players = [
    0 => {
      role: // (string) role name, 
      live_status: // (bool) true/false,
      killed_by: // (int) player_index, if -1 then killed by vote
      saved_by: // (int) player_index,
      police: // (bool) true/false,
      bring_to_hell: // (int) player_index
      die: function(){
        if (police){
          re_elect()
          live_status = false
        } 
        if (role == "hunter"){
          popup to enter bring_to_hell
          kill(bring_to_hell) //popup to enter the play to kill
        }
      }
      save: function(index){
        if (role=="witch") {
          players[index].saved_by = current_index
          players[live_status] = true
        }
      }
    }
   ] //the number of players vary between 9 ~ 12 

  var kill = function (index){
    players[index].die()
  }

```

# Game Process Design 
Page 1. Select number of players <br>
Page 2. Select number of Gods <br>
        Select number of Wolves <br>
        Calculates number of Villagers <br>
Page 3. Game Starts - Night 
Page 4. 
```
  If cupid exists 
    cupid open eyes 
  else 
    werewolves open eyes
    werewolve kills

  witch open eyes
  witch decide to drug or save a member 
  
  prophet open eyes 
  prophet decides to verify the identity of a member 

  hunter open eyes 
  confirm if hunter is dead 
    if dead
      choose who to bring to hell with
     if not dead 
      continue 
```P
Page 5 Morning. Display the resut as a floating window
```
  Vote for Police 
  God Declares the Results
  If Hunter is dead, brings a member to hell
  If Wolf Suicide 
    kills a member
    continue to next loop, skip page 6
```
Page 6 Vote to kill a member 

Check if Game is Over: 
  if Police is not dead, compare the number of votes to the wolf and the rest 
  if Police is dead, check the number of alive wolves and the rest 
  
Page 7 Loop until game is over: 

Page police popup: If police is dead, pass the police to another player 

Page hunter bring to hell popup: if hunter is dead, bring another person to hell

# Github Branches 

  Master
  Byron
  Jinhua

# Project Schedule 

Page 1 - 3, and Page 4 (prophet), page Police popup and Hunter popup @ginward DDL Friday 

Page 4 (Werewolves, Hunter, Cupid) @Byron, DDL Friday 

