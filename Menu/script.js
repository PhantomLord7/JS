var clicks = 1;
function menuClick() {
    if (clicks == 1) {
        const menu = document.getElementById('navbarSupportedContent');
        menu.style.display = 'block';
        menu.style.height = "0px"
        for (let i = 0; i < 150; i++) {
           setInterval(() => {menu.style.height = i + "px"}, 300)
        }
        clicks++;
    } else {
        const menu = document.getElementById('navbarSupportedContent');
        menu.style.display = 'none';
        clicks--;
        console.log(clicks)
    }
}
