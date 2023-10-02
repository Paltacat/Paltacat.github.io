let sections = document.querySelectorAll('section');
let iframes = document.querySelectorAll('iframe');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}


const currentPage = 1;
const gallery = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.png', 'img8.png',
    'img9.png', 'img10.png', 'img11.png', 'img12.png', 'img13.png',
    'img14.png', 'img15.png', 'img16.png', 'img17.png', 'img18.png', 'img19.png', 'img20.png', 'img21.png',
    'img22.png', 'img23.png', 'img24.png', 'img25.png', 'img26.png', 'img27.png', 'img28.png', 'img29.png',
    'img30.png', 'img31.png', 'img32.png', 'img33.png', 'img34.png'
]

function displayGallery(pageNumber) {
    const currentGallery = [];
    document.getElementById('drawings-row-1').innerHTML = '';
    document.getElementById('drawings-row-2').innerHTML = '';
    for (let i = 1; i <= Math.ceil(gallery.length / 8); i++) {
        document.getElementById('drawings-page-' + i).classList.remove('active');
    }

    for (let i = ((pageNumber - 1) * 8); i < ((pageNumber - 1) * 8) + 8; i++) {
        if (i >= gallery.length) break;
        currentGallery.push(gallery[i]);
    }

    for (let i = 0; i < currentGallery.length; i++) {
        if (i >= gallery.length) break;
        const div = document.createElement('div');
        div.classList.add('images');
        div.classList.add('animate');
        const a = document.createElement('a');
        a.href = `assets/images/${currentGallery[i]}`;
        a.setAttribute('data-lightbox', 'models');
        const img = document.createElement('img');
        img.src = `assets/images/${currentGallery[i]}`;
        a.appendChild(img);
        div.appendChild(a);
        if (i > 3) {
            document.getElementById('drawings-row-2').appendChild(div);
        } else {
            document.getElementById('drawings-row-1').appendChild(div);
        }
    }
    document.getElementById('drawings-page-' + pageNumber).classList.add('active');
}

displayGallery(1);

const gifs = ['gif1.gif', 'gif2.gif', 'gif3.gif', 'gif4.gif', 'gif5.gif', 'gif6.gif', 'gif7.gif'];
function displayAnimations(pageNumber) {
    const currentGallery = [];
    document.getElementById('animations-row-1').innerHTML = '';
    document.getElementById('animations-row-2').innerHTML = '';
    for (let i = 1; i <= Math.ceil(gifs.length / 8); i++) {
        document.getElementById('animations-page-' + i).classList.remove('active');
    }

    for (let i = ((pageNumber - 1) * 8); i < ((pageNumber - 1) * 8) + 8; i++) {
        if (i >= gifs.length) break;
        currentGallery.push(gifs[i]);
    }

    for (let i = 0; i < currentGallery.length; i++) {
        if (i >= gifs.length) break;
        const div = document.createElement('div');
        div.classList.add('images');
        div.classList.add('animate');
        const a = document.createElement('a');
        a.href = `assets/images/${currentGallery[i]}`;
        a.setAttribute('data-lightbox', 'models');
        const img = document.createElement('img');
        img.src = `assets/images/${currentGallery[i]}`;
        a.appendChild(img);
        div.appendChild(a);
        if (i > 3) {
            document.getElementById('animations-row-2').appendChild(div);
        } else {
            document.getElementById('animations-row-1').appendChild(div);
        }
    }
    document.getElementById('animations-page-' + pageNumber).classList.add('active');
}
displayAnimations(1);


const vimeoIds = ["868951760", "868951760", "868951760", "868951760", "868951760", "868951760", "868951760", "868951760", "868951760"];
function displayVideos(pageNumber) {
    const currentGallery = [];
    document.getElementById('videos-row-1').innerHTML = '';
    document.getElementById('videos-row-2').innerHTML = '';
    for (let i = 1; i <= Math.ceil(vimeoIds.length / 8); i++) {
        document.getElementById('videos-page-' + i).classList.remove('active');
    }

    for (let i = ((pageNumber - 1) * 2); i < ((pageNumber - 1) * 2) + 2; i++) {
        if (i >= vimeoIds.length) break;
        currentGallery.push(vimeoIds[i]);
    }

    for (let i = 0; i < currentGallery.length; i++) {
        if (i >= vimeoIds.length) break;
        const div = document.createElement('div');
        div.classList.add('images');
        div.classList.add('animate');
        const iframe = document.createElement('iframe');
        iframe.src = "https://player.vimeo.com/video/" + currentGallery[i] + "?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479";
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
        div.appendChild(iframe);
        if (i >= currentGallery.length / 2) {
            document.getElementById('videos-row-2').appendChild(div);
        } else {
            document.getElementById('videos-row-1').appendChild(div);
        }
    }
    document.getElementById('videos-page-' + pageNumber).classList.add('active');
}
displayVideos(1);