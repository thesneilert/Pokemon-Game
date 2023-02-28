characterController()
function characterController() {

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown" || event.key === "s") {
            characterPosition.y += 50;
        } else if (event.key === "ArrowUp" || event.key === "w") {
            characterPosition.y -= 50;
        } else if (event.key === "ArrowLeft" || event.key === "a") {
            characterPosition.x -= 50;
        } else if (event.key === "ArrowRight" || event.key === "d") {
            characterPosition.x += 50;
        }
    });
}