// simple greeting page

function appinit(){
	var bt_submit = document.querySelector("#bt_submit");

	bt_submit.addEventListener('click', greet, false);
}
/**
**/
function greet(event){
	var guestinput = document.querySelector("#GuestName");
	var greeting =  document.querySelector("#greeting");
	greeting.innerText = "Hello " + guestinput.value + "!";

}

appinit();