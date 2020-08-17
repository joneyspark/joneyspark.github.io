const searchBtn = document.querySelector('.search-btn');
const searchForm = document.querySelector('.search-form');
const searchOutput = document.querySelector('.searchOutput');
const showMoreBtn = document.querySelector('.next-prev');
const lyricContent = document.querySelector('.lyric');
const SinglelyricContent = document.querySelector('.singleLyric');
const lyricTitle = document.querySelector('#lyric-title');
const lyricArtist = document.querySelector('#lyric-artist');
const singlesSearchResult = document.querySelector('.search-result');


const apiUrl = 'https://api.lyrics.ovh';

searchBtn.addEventListener("click", getSearchResult);

async function getSearchResult() {
    let searchValue = searchForm.value;
    if (searchValue.length == 0) {
        alert("You must write something")
    } else {
        const res = await fetch(`${apiUrl}/suggest/${searchValue}`);
        const data = await res.json();
        showOutput(data);
    }
}

function showOutput(data) {
    searchOutput.innerHTML = `
    ${
        data.data.map(songDetails => `
        <div class="author lead d-flex justify-content-center">
            <p>
                <strong>${songDetails.title}</strong> Album by <span>${songDetails.artist.name}</span>
            </p>
            <button class="btn btn-success" data-artist="${songDetails.artist.name}" data-songtitle="${songDetails.title}">Get Lyrics</button>
        </div>
        `).join('')
    }
    `;

    singlesSearchResult.innerHTML = `
    ${
        data.data.map(songDetails => `
        <div class="single-result row align-items-center my-3 p-3" id="singleRes">
            <div class="col-md-9">
                <h3 class="lyrics-name">${songDetails.title}</h3>
                <p class="author lead">Album by <span>${songDetails.artist.name}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success" data-artist="${songDetails.artist.name}" data-songtitle="${songDetails.title}">Get Lyrics</button>
            </div>
            
        </div>
        `).join('')
    }
    `;

    if (data.next || data.prev) {
        showMoreBtn.innerHTML = `
        ${data.prev ? `<button class="btn">Prev</button>` : ''}
        ${data.next ? `<button class="btn">Next</button>` : ''}
        `
    } else {
        showMoreBtn.innerHTML = ''
    }
}

searchOutput.addEventListener("click", e => {
    const targetEl = e.target;

    if (targetEl.tagName === "BUTTON") {
        const artist = targetEl.getAttribute('data-artist');
        const songtitle = targetEl.getAttribute('data-songtitle');
        parseLyrics(artist, songtitle);
    }
});

singlesSearchResult.addEventListener("click", e => {
    const targetEl = e.target;
    //console.log(targetEl);

    if (targetEl.tagName === "BUTTON") {
        const artist = targetEl.getAttribute('data-artist');
        const songtitle = targetEl.getAttribute('data-songtitle');
        singleParseLyrics(artist, songtitle, targetEl);
    }
});


async function parseLyrics(artist, songtitle) {
    const res = await fetch(`${apiUrl}/v1/${artist}/${songtitle}`);
    const data = await res.json();

    // const lyrics = data.lyrics.replace(/(\r\n|\r\n)/g, '<br>');
    console.log(data);
    lyricTitle.innerHTML = `${songtitle} by&nbsp;`;
    lyricArtist.innerHTML = `${artist}`;
    lyricContent.innerHTML = `${data.lyrics}`;
}

async function singleParseLyrics(artist, songtitle, targetEl) {
    const res = await fetch(`${apiUrl}/v1/${artist}/${songtitle}`);
    const data = await res.json();
    let createPre = targetEl.parentNode.parentNode;
    const preElement = document.createElement('pre');
    preElement.innerHTML = `${data.lyrics}`;
    preElement.classList = 'preClass'
    createPre.appendChild(preElement);

    // const lyrics = data.lyrics.replace(/(\r\n|\r\n)/g, '<br>');
    console.log(data);


}