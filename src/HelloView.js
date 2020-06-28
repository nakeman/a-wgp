// simple hello view

var HELLOSPA = HELLOSPA || {};

(function(){

	function HelloView(){

		//1 View Object's data
		this.el = document.querySelector("#main");
		this.templatefile = 'HelloView.ejs';
		this.template = "";

		//2 View Object's method
		this.OKClickHandler = function(){

			// timer
			let t;			

			// show the greeting msg
			$txtGuestName = document.querySelector("#GuestName");
			$greeting = document.querySelector("#greeting");
			$greeting.innerHTML = "Hello "+$txtGuestName.value + "!";

			// save the GuestName across the session
			HELLOSPA.datastore = {"GuestName": $txtGuestName.value};

			// append an enter link after the greetign msg
			$enterLink = document.createElement("a");
			$enterLink.text = "enter...";
			$enterLink.href = "#goodbye";
			$greeting.append($enterLink);

			// add countdown timer 
			$enterLink.addEventListener("click", ()=>{if(t) clearInterval(t);})

			n = 10;
			t = setInterval(function() {
				$enterLink.text += n;
				n--;

				// if not click by user, auto enter
				if(n < 0) {
					clearInterval(t);
					document.location.hash="#goodbye";
				}

			}, 1000);	

		}

		//3 View Object UI
		// 构造函数里有数据，方法和UI，这些都是V类对象的形式部分，所以合理
		// 另，UI构造可分为 结构渲染和事件安装（绑定），此外由异步加载UI模板，而将bind串在render的后面
		this._render();


	}


	HelloView.prototype._render = function(){
		var that = this;

		var asynPromise = fetch(this.templatefile);
		asynPromise
		.then(function(response) {
			//response.text().then(function(text) {that.el.innerHTML= text;})
			response.text().then( text => {
				that.template = text;
				var html = ejs.render(text, {});
				that.el.innerHTML = html;

				//而将bind串在render的后面
				that._bind();

			})
			.catch( error => console.error('error:', error) );
		});

	HelloView.prototype._bind = function(){

		var $btn = document.querySelector("#btsubmit");
		//$btn = document.getElementById("main");
		$btn.addEventListener("click", this.OKClickHandler);
	}

	}


	HELLOSPA.HelloView = HelloView;

})()

