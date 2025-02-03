
const searchInfo = document.getElementById("resultContainer");
const searchInput = document.getElementById("searchInput");

function loadContent(page) {
    const content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = `
            <h2 class="heading">Welcome..!</h2>
            <p>Find your best place to visit</p>
        `;
    } else if (page === "about") {
        content.innerHTML = `
            <h2 class="heading">About Us</h2>
            <p>We provide the best places to enjoy your trip.</p>
        `;
    } else if (page === "contact") {
        content.innerHTML = `
            <h2 class="heading">Contact Us</h2>
            <p>Reach us at contact@example.com</p>
        `;
    }
}


function searchRecommendations(){
    const searchWord = searchInput.value;
    if (searchWord === ''){
        window.alert("Enter a keyword to search");
    }
    else{

    searchWord.toLowerCase();

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        searchInfo.innerHTML = '';
    console.log(searchWord)
    
    data.beaches.forEach(beach => {
        if(searchWord === 'beaches' || searchWord === 'beach' || beach.description.includes(searchWord) || beach.name.includes(searchWord)){
      console.log(`- ${beach.name} in ${beach.description}`);
      searchInfo.innerHTML += `<div class="results">
                            <h2>${beach.name}</h2>
                            <p> ${beach.description}</p>`;
        }
    });

    
    data.temples.forEach(temple => {
    if(searchWord === 'temples' || searchWord === 'temple' || temple.description.includes(searchWord) || temple.name.includes(searchWord)){
        console.log(`- ${temple.name} in ${temple.description}`);
        searchInfo.innerHTML += `<div class="result">
                                <h2>${temple.name}</h2>
                                <img src=${temple.imageUrl}>
                            <p> ${temple.description}</p>
                            </div>`;
        }
    });


    data.countries.forEach(country => {
        country.cities.forEach(city =>{
            if(city.name.includes(searchWord) || city.description.includes(searchWord) || country.name === searchWord){
                console.log(`- ${city.name} in ${city.description}`);
                searchInfo.innerHTML += `<div class="results">
                                        <h2>${city.name}</h2>
                                        
                                    <p> ${city.description}</p>
                                    </div>`;
                }

        })
        });
        



    })
    // .catch(error => {
    //     console.error('Error fetching weather:', error);
    //     const weatherInfo = document.getElementById('weatherInfo');
    //     weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    //   });
}
}

function clearResults(){
    searchInfo.innerHTML = '';
    searchInput.value = '';
}