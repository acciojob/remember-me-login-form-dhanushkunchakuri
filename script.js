//your JS code here. If required.
let btn=document.getElementById("submit");
btn.addEventListener('click',(e)=>{
	e.preventDefault();
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;
	alert(`Logged in as ${user}`)
	let check=document.getElementById("checkbox");
	if(check.checked){
		localStorage.setItem("username",user);
		localStorage.setItem("password",pass);
		
		alert("credentials are stored in localStorage");
		
	}
	else{
		alert("credentials are not stored")
	}
  window.addEventListener('DOMContentLoaded', () => {
  let existingBtn = document.getElementById("existing");
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "inline-block";
  }
})