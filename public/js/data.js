/*
 * The data object to store data of Werewolves
 */

var roles = {
	"witch": "女巫",
	"werewolf": "狼人", 
	"hunter": "猎人", 
	"prophet": "预言家", 
	"cupid": "丘比特",
	"villager": "村民",
	"police": "警长"
};

var active_roles = {
	"werewolf": [], 
	"villager": [],
	"god": {
	  "witch": [],//must have
	  "hunter":[],//must have
	  "prophet":[], //must have
	}
};

var Player = function (role){
	this.role = role; 
	this.live_status = true;
	this.killed_by = -2; 
	this.saved_by = -2;
	this.police = false; 
	this.bring_to_hell = -2; 
	this.die = function(murderer){
		if(this.police){
			//todo: wakeup the police dialog
			this.police = false; 			
		}
		if(this.role=="hunter"){
			//todo: popup to select another person to kill
		}
		this.live_status = false; 
		this.killed_by = murderer;
	}
	this.save = function(hero){

	}
}

var players = [];
