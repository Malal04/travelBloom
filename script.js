async function fetchRecommendations() {
    try {
        const response = await fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json');
        const data = await response.json();
        console.log('Données récupérées:', data);
        return data;
    } catch (error) {
        console.error('Erreur de récupération des données:', error);
        return [];
    }
}

function filterRecommendations(data, keyword) {
    const lowerKeyword = keyword.toLowerCase();
    let filteredData = [];

    filteredData = filteredData.concat(
        data.beaches.filter(item => item.name.toLowerCase().includes(lowerKeyword) || item.description.toLowerCase().includes(lowerKeyword))
    );

    filteredData = filteredData.concat(
        data.temples.filter(item => item.name.toLowerCase().includes(lowerKeyword) || item.description.toLowerCase().includes(lowerKeyword))
    );

    data.countries.forEach(country => {
        country.cities.forEach(city => {
            if (city.name.toLowerCase().includes(lowerKeyword) || city.description.toLowerCase().includes(lowerKeyword)) {
                filteredData.push({
                    name: `${city.name} (${country.name})`,
                    imageUrl: city.imageUrl,
                    description: city.description,
                    website: city.website || '#' 
                });
            }
        });
    });

    return filteredData;
}

function displaySearchResults(filteredData) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    if (filteredData.length === 0) {
        resultsContainer.innerHTML = '<p>Aucune recommandation trouvée.</p>';
        return;
    }

    filteredData.forEach(item => {
        const resultElement = document.createElement('div');
        resultElement.classList.add('result');

        resultElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" />
             <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="${item.website}" target="_blank">Visitez le site</a>
        `;

        resultsContainer.appendChild(resultElement);
    });
}

function resetSearch() {
    document.getElementById('destination').value = '';  
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';  
}

document.getElementById('search-button').addEventListener('click', async (event) => {
    event.preventDefault(); 

    const keyword = document.getElementById('destination').value.trim();  
    if (!keyword) {
        alert('Veuillez entrer un mot-clé pour la recherche.');
        return;
    }

    const data = await fetchRecommendations();  
    const filteredData = filterRecommendations(data, keyword); 
    displaySearchResults(filteredData);  
});

document.getElementById('clear-button').addEventListener('click', (event) => {
    event.preventDefault(); 
    resetSearch(); 
});

function displayCountryTime(timeZone) {
    const options = {
        timeZone: timeZone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const currentTime = new Date().toLocaleTimeString('en-US', options);
    console.log(`Heure actuelle à ${timeZone}:`, currentTime);
}

displayCountryTime('America/New_York');
displayCountryTime('Asia/Tokyo');
displayCountryTime('Europe/Paris');
