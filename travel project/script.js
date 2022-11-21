let searchBtn=document.querySelector("#search-btn");
let searchBar=document.querySelector('.search-bar-container');
let formBtn=document.querySelector("#login-btn");
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");
let videoBtn=document.querySelectorAll(".vid-btn");

window.onscroll=()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove("fa-times");
    navbar.classList.remove('active');
}
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle('active');
});
searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle('active');
});
formBtn.addEventListener("click", () => {
    loginForm.classList.add('active');
});
formClose.addEventListener("click", () => {
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;
    });
});
function home(){
    window.open("#home");
}
function book(){
    window.open("#book");
}

var rate = 0;
 
function submitRate(){
	var user=document.getElementById('user').value;
	var review=document.getElementById('review').value;
	if(rate != 0 && user !="" && review !=""){
		var html=
		"<h4>User: <label class='text-primary'>" + user + "</label></h4>"
		+"<h4>Rating: <label class='text-primary'>" + rate + "</label></h4>"
		
		+"<hr style='border-top:1px solid #000;'/>";
		document.getElementById('result').innerHTML+=html;
 
		document.getElementById('user').value="";
		document.getElementById('review').value="";
	}
}