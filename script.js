// alert to make sure it's working ok
alert("hello thank u for visiting my internet website page")

var showTab = "about"

function showNewTab(newTab){
	//Close current tab
	document.getElementById(showTab).style.display = 'none';
	//Open new tab
	document.getElementById(newTab).style.display = 'block';
	showTab = newTab;
}


function whenDocLoaded(){
	document.getElementById(showTab).style.display = 'block';
	var elems = document.getElementsByClassName('sidebar-button')

	for (var i = 0; i < elems.length; i++){
		elems[i].addEventListener('click',function(e){
			showNewTab(e.target.getAttribute('data'));
		});
	}
}
// You can halt event propogation if you don't
// want your parents to know you've been clicked ;)

document.addEventListener("DOMContentLoaded",whenDocLoaded);

// There is no drag and drop - there is only beep and boop