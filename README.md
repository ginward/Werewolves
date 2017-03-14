# Werewolves
The game of Werewolves (Work in Process)

# Directory Structure 

  - /public/index.html: The Game <br>
  - /public/css: The CSS files <br>
  - /public/js: The JS files <br>
  - /public/cards/[role].html <br>
  - /public/cards/[role].js <br>
  - /public/res: The resource files (images)<br>

# Data Structure
- The data object is stored in /public/js/data.js
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

  var players = [] //the number of players vary between 9 ~ 12. @contains Player object

  //the player object 
  var Player = function (role){
	this.role = role; 
	this.live_status = true;
	this.killed_by = -2; 
	this.saved_by = -2;
	this.police = false; 
	this.bring_to_hell = -2; 
	this.die = function(murderer){
		this.live_status = false; 
		this.killed_by = murderer;
	}
	this.save_live = function(hero){
		this.live_status = true;
		this.saved_by = hero;
	}
  }

  var kill = function (index){
    players[index].die()
  }

```

# Game Process Design 
- Page 1. Select number of players <br>
- Page 2. Select number of Gods <br>
          Select number of Wolves <br>
          Calculates number of Villagers <br>
- Page 3. Game Starts - Night 
- Page 4. 
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
```
- Page 5 Morning. Display the resut as a floating window
```
  Vote for Police 
  God Declares the Results
  If Hunter is dead, brings a member to hell
  If Wolf Suicide 
    kills a member
    continue to next loop, skip page 6
```
- Page 6 Vote to kill a member 

- Check if Game is Over: 
  - if Police is not dead, compare the number of votes to the wolf and the rest 
  - if Police is dead, check the number of alive wolves and the rest 
  
- Page 7 Loop until game is over: 

- Page police popup: If police is dead, pass the police to another player 

- Page hunter bring to hell popup: if hunter is dead, bring another person to hell

# Github Branches 

  - Master
  - Byron
  - Jinhua

# Project Schedule 

- Page 1 - 3, and Page 4 (prophet), page Police popup and Hunter popup @ginward DDL Friday 

- Page 4 (Werewolves, Hunter, Cupid) @Byron, DDL Friday 

# Some notes on dynamically loading HTML and Javascript 
There is a js file for each html fragment in Cards. While the html files and dynamically loaded, the js files are loaded in the beginning and is loaded only once. 
To make sure that the onclick events fires, use the following code: 
```
$('body').on('click', '#my-button', function () {
     console.log("");
});
```
- To load a card, simply call load_card(url_to_html, url_to_js_file)
- To remove a card, simply call remove_card(card_css)
```
function load_card(url_to_html, url_to_js){
	jQuery.get(url_to_html, function(data){
		jQuery("#swipe-wrap").append(data);
		var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true,
		});
		if (url_to_js!=""){
			jQuery.getScript(url_to_js);
		}
	});	
}

function remove_card(card_css){
	jQuery(card_css).remove();
}
```
