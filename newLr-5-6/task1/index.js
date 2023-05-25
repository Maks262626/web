const btn = document.querySelector('#myBtn');
const btnGif = document.querySelector('#img-gif');

const browserName = navigator.userAgent;
const browserVersion = navigator.appVersion;


btn.onclick = (e) =>{
    e.preventDefault();
    console.log(navigator)
    alert(browserName);
}

btnGif.onclick = (e) =>{
    e.preventDefault();
    alert(browserVersion);
}
