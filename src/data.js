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
    
        dataSpan.src = gifImages.gif
    
        const moodBar = document.getElementById('mood-bar')
    
        moodBar.appendChild(dataSpan)
    
        dataSpan.addEventListener('click', () => {
            document.getElementById('mood').innerText = gifImages.mood
            document.getElementById('fact').innerText = gifImages.fact
            document.getElementById('gif').src = gifImages.gif
        })
    }

    // create a like button to show how you are feeling w/ the copy "give a like to show your mood right now"
    // add event listener "like" that adds the current likes plus 1
    

    // stretch goals: add a new gif/emotion/fact submit event and post a patch request