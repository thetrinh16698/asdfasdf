const urlForm = document.getElementById('url-form');
const longUrl = document.getElementById('longUrl');
const confirmationShow = document.getElementById('confirmationShow');
const longLink = document.getElementById('longLink');
const shortLink = document.getElementById('shortLink');
const clickCount = document.getElementById('clickCount');

const formsubmit = e => {
    e.preventDefault();
    fetch('https://url-shrinker-backend.herokuapp.com/shorturl', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            longUrl: longUrl.value
        })
    })
    .then(res => res.json())
    .then(data  => {
        confirmationShow.innerHTML = `The link is ready now!!!`;
        longLink.innerHTML = `<a target="_blank" href=${data.longUrl}>${data.longUrl}</a>`
        shortLink.innerHTML = `<a target="_blank" href=${data.shortUrl}>${data.shortUrl}</a>`
        clickCount.innerHTML = `${data.clickCount}`
    })
    .catch(err => {
        console.log('oops', err);
        confirmationShow.innerText = 'Network error, retry'
    })
}

urlForm.addEventListener('submit', formsubmit);