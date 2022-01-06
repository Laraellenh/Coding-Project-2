const URL = "http://localhost:3000/emotion"

// CALLED FUNCTIONS
getData()

function getData() {
    fetch(URL)
        .then(res => res.json())
        .then(emotionArray => emotionArray.forEach(renderGIF))
        // .then(emotionArray => console.log(emotionArray))
}

// Show GIFs on page
function renderGIF(gifImagesObject) {
    
    //  make span and append to div to display gifs plus name of emotion
        const gifDiv = document.getElementById('gif-img')
        const gifSpan = document.createElement('span')
        const gifImage = document.createElement('img')

    // GIF appears on page
        gifImage.src = gifImagesObject.gif
        gifDiv.append(gifSpan, gifImage)

        // CLICK on gifs and display information about
    gifImage.addEventListener('click', () => {
        // Display GIF mood data
        const gifMood = document.createElement('p')
            console.log(gifMood)
            gifMood.innerText = gifImagesObject.mood
            document.getElementById('mood-info').append(gifMood)
        // Display GIF fact data
        const gifFact = document.createElement('ul')
            console.log(gifFact)
            gifFact.innerText = gifImagesObject.fact
            document.getElementById('mood-info').append(gifFact)
    })
}

    // create a like button to show how you are feeling w/ the copy "give a like to show your mood right now"
    // add event listener "like" that adds the current likes plus 1
    

    // stretch goals: add a new gif/emotion/Mood submit event and post a patch request