// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imageContainer = document.getElementById('dog-image-container');
    const breedList = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
    let allBreeds = [];

    

    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = 'Random dog image';
                imageContainer.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));



    // Challenge 2 & 3 & 4
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            allBreeds = Object.keys(data.message);
            
            displayBreeds(allBreeds);

            // Challenge 3: Add click behavior to change color
            breedList.addEventListener('click', (e) => {
                if (e.target.tagName === 'LI') {
                    e.target.style.color = 'purple';
                }
            });



            // Challenge 4: Add filter functionality
            breedDropdown.addEventListener('change', (e) => {
                const selectedLetter = e.target.value;
                const filteredBreeds = allBreeds.filter(breed => 
                    breed.startsWith(selectedLetter)
                );
                displayBreeds(filteredBreeds);
            });
        })
        .catch(error => console.error('Error fetching breeds:', error));

    function displayBreeds(breeds) {
        breedList.innerHTML = '';
        
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
        });
    }
});




