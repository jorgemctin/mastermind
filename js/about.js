
document.addEventListener("DOMContentLoaded", function() {

    let storedUserName = localStorage.getItem("userName");
    console.log(storedUserName);

    let player = document.getElementById("user1");
    player.innerHTML = storedUserName;
});