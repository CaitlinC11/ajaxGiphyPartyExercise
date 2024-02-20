// console.log("Let's get this party started!");
// document.addEventListener('DOMContentLoaded', function() {
//     const searchButton = document.querySelector('.btn-outline-primary');
//     const removeButton = document.querySelector('.btn-outline-warning');
//     const gifArea = document.getElementById('gif-area');
//     const searchInput = document.getElementById('search');

//     searchButton.addEventListener('click', function() {
//         const searchTerm = searchInput.value.trim();
//         if (!searchTerm) {
//             alert('Please enter a search term.');
//             return;
//         }
//         const apiKey = 'Da1d585JyHHeUHuxNpN5yureiLkAA2jg';
//         const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`;

//         axios.get(url)
//             .then(response => {
//                 if (response.data.data.length) {
//                     const gifUrl = response.data.data[1].images.original.url;
//                     const imgElement = document.createElement('img');
//                     imgElement.src = gifUrl;
//                     imgElement.classList.add('img-fluid');
//                     imgElement.style.margin = '5px';
//                     gifArea.appendChild(imgElement);
//                 } else {
//                     alert('No GIFs found for your search term.');
//                 }
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     });

//     removeButton.addEventListener('click', function() {
//         gifArea.innerHTML = '';
//     });
// });


console.log("Let's get this party started!");

$(document).ready(function() {
    const $searchButton = $('.btn-outline-primary');
    const $removeButton = $('.btn-outline-warning');
    const $gifArea = $('#gif-area');
    const $searchInput = $('#search');

    $searchButton.click(function() {
        const searchTerm = $searchInput.val().trim();
        if (!searchTerm) {
            alert('Please enter a search term.');
            return;
        }
        const apiKey = 'Da1d585JyHHeUHuxNpN5yureiLkAA2jg';
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`;

        axios.get(url)
            .then(res => {
                addGif(res.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    $removeButton.click(function() {
        $gifArea.empty();
    });

    function addGif(res) {
        let numResults = res.data.length;
        if (numResults) {
            let randomIdx = Math.floor(Math.random() * numResults);
            let $newCol = $("<div>", { class: "col-4 mb-4" });
            let $newGif = $("<img>", {
                src: res.data[randomIdx].images.original.url,
                class: "w-100"
            });
            $newCol.append($newGif);
            $gifArea.append($newCol);
        }
    }
});