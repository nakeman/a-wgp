// router module
var HELLOSPA = HELLOSPA || {};

var Router = {

	route :[
		{"hello":"HelloView"},
		{"goodbye":"GoodbyeView"}
	],

	start : function (){
		this.routing();
		console.log("hello spa world!");

	},

	routing : function (){
		if(document.location.hash == "#hello" || document.location.hash == ""){
			var v = new HELLOSPA.HelloView();
			//v.render();
			//sleep(1000);
			//v.bind();
		}else {
			var v = new HELLOSPA.GoodbyeView();	
		}
	}
};

HELLOSPA.Router = Router;

window.addEventListener('hashchange',HELLOSPA.Router.routing,false);