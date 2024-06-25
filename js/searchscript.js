/*search bar*/
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');


/*search bar*/
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

