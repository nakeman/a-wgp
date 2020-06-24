// simple hello view

var HELLOSPA = HELLOSPA || {};

(function(){

	function HelloView(){
		
		this.el = document.querySelector("#main");
		this.templatefile = 'HelloView.ejs';
		this.template = "";

	}

	HelloView.prototype.render = function(){
		var that = this;

		var asynPromise = fetch(this.templatefile);
		asynPromise
		.then(function(response) {
			//response.text().then(function(text) {that.el.innerHTML= text;})
			response.text().then( text => {
				that.template = text;
				var html = ejs.render(text, {});
				that.el.innerHTML = html;

			})
			.catch( error => console.error('error:', error) );
		});



	}

	// HelloView.prototype.render1 = function(){
	// 	//self = this;
		
	// 	asynPromise = fetch(this.templatefile);
	// 	//asynPromise.then(function(response){self._fetchResponse(response)});	
	// 	asynPromise.then(response => this._fetchResponse(response) );	
	// }

	// HelloView.prototype._fetchResponse = function(response){
	// 	self = this;
	// 		response.text()
	// 		.then(function(text){self._fetchText(text)})
	// 		.catch( error => console.error('error:', error) );

	// }

	// HelloView.prototype._fetchText = function(text){
	// 	this.el.innerHTML= text;
	// }


	HELLOSPA.HelloView = HelloView;

})()