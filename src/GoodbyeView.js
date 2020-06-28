
var HELLOSPA = HELLOSPA || {};

(function(){

	function GoodbyeView(){
		
		this.el = document.querySelector("#main");
		this.templatefile = 'GoodbyeView.ejs';
		this.template = "";

		this._render();

	}

	GoodbyeView.prototype._render = function(){
		that = this;

		asynPromise = fetch(this.templatefile);
		asynPromise
		.then(function(response) {
			response.text().then( text => {
				that.template = text;
				html = ejs.render(text, {});
				that.el.innerHTML = html;

				document.querySelector("#greeting").innerHTML = "Welcome "+ HELLOSPA.datastore.GuestName +"!!";

				that._bind();

			})
			.catch( error => console.error('error:', error) );
		});



	}

	GoodbyeView.prototype._bind = function(){

	}

	HELLOSPA.GoodbyeView = GoodbyeView;

})()