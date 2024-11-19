const hamburgerMenu = document.getElementById("btn_sidebar_mobile")
const sidebarMenu = document.getElementById("sidebar_wrapper")
const sidebarBackdrop = document.getElementById("sidebar_backdrop")

// HANDLE SIDEBAR MENU 

hamburgerMenu.addEventListener('click', function() {
    sidebarMenu.style.transform = "translateX(0%)"
    sidebarBackdrop.style.display = "block"
})

sidebarBackdrop.addEventListener('click', function() {
    sidebarMenu.style.transform = "translateX(100%)"
    sidebarBackdrop.style.display = "none"
})

