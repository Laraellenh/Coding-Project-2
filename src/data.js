const URL = "http://localhost:3000/emotion"

// CALLED FUNCTIONS
getData()

function getData() {
    fetch(URL)
        .then(res => res.json())
        .then(emotionArray => emotionArray.forEach(showGIF))
        // .then(emotionArray => console.log(emotionArray))
}

// Show GIFs on page
function showGIF(gifImages) {

        const dataSpan = document.createElement('span')
    
        dataSpan.innerText = gifImages.mood
    
        const moodBar = document.getElementById('mood-bar')
    
        moodBar.appendChild(dataSpan)
    
        dataSpan.addEventListener('click', () => {
            document.getElementById('mood').innerText = gifImages.mood
            document.getElementById('fact').innerText = gifImages.fact
            document.getElementById('gif').src = gifImages.gif
        })
    }

    