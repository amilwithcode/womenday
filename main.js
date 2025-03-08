const containerEl = document.querySelector('.container')
const hbdEl = document.querySelector(".hbd")

const word =[
    "Happy Women's Day🎉",
];

const eightShape = [
    "  ███  ",
    " █   █ ",
    " █   █ ",
    "  ███  ",
    " █   █ ",
    " █   █ ",
    "  ███  "
];

let index = 0;

hbdEl.innerHTML = word.slice(0, index + 1).join("\n");
function drawEight() {
    containerEl.innerHTML = eightShape.slice(0, index + 1).join("\n");
    index++;

    if (index < eightShape.length) {
        setTimeout(drawEight, 1000);
    } else {
        setTimeout(() => {
            index = 0;  // Yenidən başlat
            drawEight(); // Sonsuz dövr yaradılır
        }, 1000); // 1 saniyə gözləyib yenidən başlayır
    }
}

drawEight();
