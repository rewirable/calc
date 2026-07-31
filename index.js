const allButtons = document.querySelectorAll("button");

allButtons.forEach(btn => {
    btn.addEventListener("click", function(){
        console.log(`button ${btn.id}`)
    });
});