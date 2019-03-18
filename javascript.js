function get() {
    var url = 'https://api.kanye.rest'
    //call api
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
            //populate code with quote from api call
            document.getElementById("quote").innerHTML = data.quote;


    });
};
