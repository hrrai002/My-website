// =========================
// DESIGN BUTTON
// =========================

const designButton = document.getElementById("designButton");

if (designButton) {
    designButton.addEventListener("click", function () {
        window.location.href = "customize.html";
    });
}


// =========================
// MOBILE SIDEBAR TOGGLE
// =========================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarClose = document.getElementById("sidebarClose");

function openSidebar() {
    mobileSidebar.classList.add("open");
    sidebarOverlay.classList.add("active");
}

function closeSidebar() {
    mobileSidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
}

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", openSidebar);
}

if (sidebarClose) {
    sidebarClose.addEventListener("click", closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
}

function journeyToggle(btn) {
    var details = btn.nextElementSibling;
    var isOpen = btn.classList.contains('open');

    if (isOpen) {
        details.style.maxHeight = '0px';
        btn.classList.remove('open');
    } else {
        details.style.maxHeight = details.scrollHeight + 'px';
        btn.classList.add('open');
    }
}
