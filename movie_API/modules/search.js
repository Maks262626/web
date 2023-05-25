

import { getGenres, addPoster} from "../index.js";
import { fetchData,api_key,imageUrl } from "./api.js";
const searchFilms = document.querySelector(".search-films");
const loadBtn = document.querySelector(".load-btn");
const searchTitle = document.querySelector(".search-title");

async ()=>{
    await getGenres();
}


function getQuery(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('query');
}
searchTitle.innerHTML = "Searched for " + getQuery();
let pageSearch = 1;
async function load(){

    await fetchData(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(getQuery())}&page=${pageSearch}`,(res)=>{
        let films = res.results;
        if(res.total_pages == pageSearch){
            loadBtn.style.display = 'none';
        }
        pageSearch++;
        console.log(res);
        console.log(films);
        films.forEach(film => {
            console.log(film)
            fetchData(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${api_key}`,(f)=>{
                addPoster(searchFilms,f);
                console.log(f)
            });
        });
    
    
    });
}
load();
loadBtn.onclick = () =>{
    load();
};