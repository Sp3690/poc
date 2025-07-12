const header = document.getElementById("mainHeader");

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


const icons = [...document.querySelectorAll('.floating-icon')];

function moveIcon(icon) {
    const container = document.querySelector('.container');
    const bounds = container.getBoundingClientRect();
    const padding = 60;

    const x = Math.random() * (bounds.width - padding * 2) + padding;
    const y = Math.random() * (bounds.height - padding * 2) + padding;

    icon.style.transform = `translate(${x}px, ${y}px) scale(1)`;
}

function updateBadge(icon) {
    const badge = icon.querySelector('.notification');
    let count = 1;
    setInterval(() => {
        count = (count % 9) + 1;
        badge.textContent = count;
    }, 3000 + Math.random() * 2000);
}

function animateIcons() {
    icons.forEach((icon, i) => {
        setTimeout(() => {
            icon.classList.add('show');
            moveIcon(icon);
            updateBadge(icon);
            setInterval(() => moveIcon(icon), 6000 + Math.random() * 3000);
        }, i * 400);
    });
}

window.addEventListener('load', animateIcons);
window.addEventListener('resize', () => icons.forEach(moveIcon));