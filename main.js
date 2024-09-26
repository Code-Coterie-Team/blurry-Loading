const loadingText = document.getElementById('loading-text');
const image = document.getElementById('image');

// let load = 100;

// const blurInterval = setInterval(() => {
//   load--;

// if (load < 0) {
//     clearInterval(blurInterval);
// } else {
//     loadingText.textContent = `${load}%`;
//     image.style.filter = `blur(${(load / 100) * 30}px)`;
//     loadingText.style.opacity = load / 100;
//   }
// }, 30);

function firstLoad () {
    let load = 100;

    const blurInterval = setInterval(() => {
    load--;

    if (load < 0) {
        clearInterval(blurInterval);
    } else {
        loadingText.textContent = `${load}%`;
        image.style.filter = `blur(${(load / 100) * 30}px)`;
        loadingText.style.opacity = load / 100;
    }
    }, 30);
}

window.addEventListener("load",firstLoad());