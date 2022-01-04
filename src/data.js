let APIKEY = "eoIS0b0eoJAXqllCNBsmWHr70q9CPinJ"
        document.addEventListener("DOMContentLoaded", mood)
        function mood(){
            document.getElementById("").addEventListener("click", event => {
                event.preventDefault();
                let url = "api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q="
                let 

                console.log(url)
                fetch(url)
                    .then(response => response)
                    .then()
            })
        }
