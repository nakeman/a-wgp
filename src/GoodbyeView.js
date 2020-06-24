
var HELLOSPA = HELLOSPA || {};

(function(){

	function GoodbyeView(){
		
		this.el = document.querySelector("#main");
		this.templatefile = 'GoodbyeView.ejs';
		this.template = "";

	}

	GoodbyeView.prototype.render = function(){
		that = this;

		asynPromise = fetch(this.templatefile);
		asynPromise
		.then(function(response) {
			response.text().then( text => {
				that.template = text;
				html = ejs.render(text, {});
				that.el.innerHTML = html;

			})
			.catch( error => console.error('error:', error) );
		});



	}

	HELLOSPA.GoodbyeView = GoodbyeView;

})()