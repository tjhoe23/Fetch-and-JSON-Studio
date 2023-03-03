document.addEventListener("load", () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json", {
        method: 'GET'
    }).then((response) => {
        response.json().then((jsonResponse) => {
            console.log(jsonResponse)
        })
    response.json().then(i => i.forEach(i => console.log(i.name)))
    }).catch((err) => {
        console.log(`Error: ${err}`)
    })
    
    
})
    