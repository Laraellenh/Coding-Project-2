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
    //  make span and append to div to display gifs plus name of emotion
        const gifDiv = document.getElementById('mood-bar')
        const gifSpan = document.createElement('span')
        gifSpan.innerText = gifImages.mood
        const gifImage = document.createElement('img')
        gifImage.src = gifImages.gif
        gifDiv.append(gifSpan, gifImage,)

}
        
const bookDescription = document.createElement('p')
        bookDescription.innerText = bookDetails.description 
        document.getElementById('show-panel').append(bookDescription)
// 
        
            // console.log(event)
            // event.preventDefault();
            // //  const mood = document.getElementById('mood')
            // //  mood.textContent = gifImages.mood
            //  const fact = event.target.fact.value
            //  moodInfo.append(fact)
           
            //  const gif = document.getElementById('gif')
            //  gif.src = gifImages.gif
         
            // const moodInfo = document.getElementById('mood-info')
            // moodInfo.append(fact, gif)
    
    
        
    // when you click the gifSpot object images, we will see the gif mood word and the fact appear below, as well as the gif images
    //    
    //     
    //     

    // create a like button to show how you are feeling w/ the copy "give a like to show your mood right now"
    // add event listener "like" that adds the current likes plus 1
    

    // stretch goals: add a new gif/emotion/fact submit event and post a patch request