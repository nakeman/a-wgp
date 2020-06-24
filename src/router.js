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
		if(document.location.hash == "#hello"){
			let v = new HELLOSPA.HelloView();
			v.render();
		}else {
			let v = new HELLOSPA.GoodbyeView();
			v.render();			
		}
	}
};

HELLOSPA.Router = Router;

window.addEventListener('hashchange',HELLOSPA.Router.routing,false);