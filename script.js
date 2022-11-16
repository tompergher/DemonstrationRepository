function handleKeyPress(ev) {
    if (ev.code === "space") {
        const player = document.querySelector("#player")
        player.setAttribute("cx", 100*Math.random())
        player.setAttribute("cy", 100*Math.random())
    } else if (ev.key === "r") {
        player.settAttribute("fill", "red")
    } else if (ev.key === "g") {
        player.settAttribute("fill", "green")
    }
}
window.onkeydown = handleKeyPress