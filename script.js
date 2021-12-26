var character = document.querySelector("#character");
var block = document.querySelector("#block");

function jump() {
    if (character.classList != "animative") {
        character.classList.add("animative");
    }
    setTimeout(function() {
        character.classList.remove("animative");
    }, 500);
}
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("you lose!")
    }
}, 10);