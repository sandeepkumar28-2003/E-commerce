document.getElementById("formContainer").addEventListener("submit",(e)=>{
  e.preventDefault();
  let email=document.getElementById("email").value;
  let password=document.getElementById("password").value;
  let userData=JSON.parse(localStorage.getItem("userDetails"));
  if (userData.email==email && userData.password==password) {
    // alert("Login Successfull");
    window.location.href="../Home/Home.html";
    const msg = new SpeechSynthesisUtterance(
      "Hello! Your Login is Successful. Welcome to Qkart-India's biggest"
    );
    msg.lang="en-US";
    speechSynthesis.speak(msg);
  }else{
    alert("Invalid Credentials!!!");
    window.location.reload();
  }
})
