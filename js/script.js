let sections = document.querySelectorAll('section');
let iframes = document.querySelectorAll('iframe');
const touchscreen = false;

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            if (sec.classList.contains('home')) {
                //sec.parentElement.setAttribute('transition-style', 'in:circle:hesitate');
            }
            sec.classList.add('show-animate');
        }
        else {
            if (sec.classList.contains('home')) {
                //sec.parentElement.setAttribute('transition-style', '');
            }
            sec.classList.remove('show-animate');
        }
    })
}

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const currentPage = 1;
const gallery = [ 'img10.png','img9.png', 'img46.png', 'img45.png','img12.png', 'img56.png','img16.png','img8.png', 'img17.png', 'img18.png','img59.png','img58.png', 'img19.png', 
'img20.png', 'img22.png', 'img25.png', 'img27.png', 'img29.png', 'img30.png', 'img31.png', 'img32.png', 'img33.png', 'img34.png', 'img35.png', 'img36.png', 'img37.png',
 'img38.png', 'img40.png', 'img41.png', 'img42.png', 'img43.png', 'img44.png', 'img47.png', 'img48.png', 'img49.png', 'img50.png', 'img51.png', 'img52.png', 'img53.png', 
     'img54.png', 'img55.png'];
window.onresize = () => {
    displayGallery(1);
}

document.ontouchmove = (e) => {
    touchscreen = true;
    displayAnimations(1);
}

function displayGallery(pageNumber) {
    /* Drawings */
    const numberOfImagesPerPage = Math.floor(window.innerWidth / 400) * 2;
    drawings = document.querySelectorAll('.drawings')[0];
    div = drawings.querySelectorAll('.images')[0];
    div.innerHTML = '';
    for (let i = ((pageNumber - 1) * numberOfImagesPerPage); i < ((pageNumber - 1) * numberOfImagesPerPage) + numberOfImagesPerPage; i++) {
        if (i >= gallery.length) break;
        const a = document.createElement('a');
        a.href = `assets/images/${gallery[i]}`;
        a.setAttribute('data-lightbox', 'models');
        a.classList.add('animate');
        const img = document.createElement('img');
        img.src = `assets/images/${gallery[i]}`;
        a.appendChild(img);
        div.appendChild(a);
        img.onload = () => {
            img.style.display = 'block';
        }
    }
    /* Page Selector */
    pageSelector = document.querySelectorAll('.page-selector')[0];
    pageSelector.innerHTML = '';
    for (let i = 1; i <= Math.ceil(gallery.length / numberOfImagesPerPage); i++) {
        const a = document.createElement('a');
        a.id = 'drawings-page-' + i;
        a.innerHTML = i;
        a.onclick = () => {
            displayGallery(i);
        }
        pageSelector.appendChild(a);
    }
    document.getElementById('drawings-page-' + pageNumber).classList.add('active');
    pageSelector.classList.add('animate');
}
displayGallery(1);

const personalWork = ['img39.png', 'img57.png', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.png', 'img11.png', 'img14.png', 'img24.png', 'img26.png', 
'img28.png', ];
function displayPersonalWork(pageNumber) {
    /* Drawings */
    const numberOfImagesPerPage = Math.floor(window.innerWidth / 400) * 2;
    drawings = document.querySelectorAll('.personal-work')[0];
    div = drawings.querySelectorAll('.images')[0];
    div.innerHTML = '';
    for (let i = ((pageNumber - 1) * numberOfImagesPerPage); i < ((pageNumber - 1) * numberOfImagesPerPage) + numberOfImagesPerPage; i++) {
        if (i >= personalWork.length) break;
        const a = document.createElement('a');
        a.href = `assets/images/${personalWork[i]}`;
        a.setAttribute('data-lightbox', 'models');
        a.classList.add('animate');
        const img = document.createElement('img');
        img.src = `assets/images/${personalWork[i]}`;
        a.appendChild(img);
        div.appendChild(a);
        img.onload = () => {
            img.style.display = 'block';
        }
    }
    /* Page Selector */
    pageSelector = document.querySelectorAll('.page-selector')[1];
    pageSelector.innerHTML = '';
    for (let i = 1; i <= Math.ceil(personalWork.length / numberOfImagesPerPage); i++) {
        const a = document.createElement('a');
        a.id = 'personal-work-page-' + i;
        a.innerHTML = i;
        a.onclick = () => {
            displayPersonalWork(i);
        }
        pageSelector.appendChild(a);
    }
    document.getElementById('personal-work-page-' + pageNumber).classList.add('active');
    pageSelector.classList.add('animate');
}
displayPersonalWork(1);




// Por mientras no se usa esto
function displayAnimations(pageNumber) {
    /* gifs */
    const numberOfAnimationsPerPage = Math.floor(window.innerWidth / 400) * 2;
    animations = document.querySelectorAll('.animations')[0];
    div = animations.querySelectorAll('.images')[0];
    div.innerHTML = '';
    for (let i = ((pageNumber - 1) * numberOfAnimationsPerPage); i < ((pageNumber - 1) * numberOfAnimationsPerPage) + numberOfAnimationsPerPage; i++) {
        if (i >= gifs.length) break;
        const img = document.createElement('video');
        img.src = `assets/images/${gifs[i]}`;
       // img.type = 'video/webm';
        img.classList.add('animate');
        // Potrait mode
        if (touchscreen) {
            img.controls = true;
        }
        else {
            img.onmouseover = () => {
                img.play();
                img.controls = true;
            }
            img.onmouseout = () => {
                img.currentTime = 0;
                img.pause();
                img.controls = false;
            }
        }
        div.appendChild(img);

    }
    /* Page Selector */
    pageSelector = document.querySelectorAll('.page-selector')[1];
    pageSelector.innerHTML = '';
    for (let i = 1; i <= Math.ceil(gifs.length / numberOfAnimationsPerPage); i++) {
        const a = document.createElement('a');
        a.id = 'animations-page-' + i;
        a.innerHTML = i;
        a.onclick = () => {
            displayAnimations(i);
        }
        pageSelector.appendChild(a);
    }
    document.getElementById('animations-page-' + pageNumber).classList.add('active');
    pageSelector.classList.add('animate');
}
//displayAnimations(1);
