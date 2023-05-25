

import { getGenres, addPoster,getGenreById} from "../index.js";
import { fetchData,api_key,imageUrl } from "./api.js";
const searchFilms = document.querySelector(".genres-films");
const loadBtn = document.querySelector(".genres-btn");
const searchTitle = document.querySelector(".genres-title");

async ()=>{
    await getGenres();
}



function getId(){
    let url = window.location.href;
    let searchParams = new URLSearchParams(new URL(url).search);
    return searchParams.get('id');
}

(async () => {
  try {
    let genreName = await getGenreById(getId());
    searchTitle.innerHTML = "All from " + genreName;
  } catch (error) {
    console.error(error);
  }
})();



let pageSearch = 1;
async function load(){
    await fetchData(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${getId()}&page=${pageSearch}`,(res)=>{
        let films = res.results;
        pageSearch++;
        if(res.total_pages == pageSearch){
            loadBtn.style.display = 'none';
        }
        pageSearch++;
        films.forEach(film => {
            fetchData(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${api_key}`,(f)=>{
                addPoster(searchFilms,f);
            });
        });
    
    
    });
}
load();
loadBtn.onclick = () =>{
    load();
};
