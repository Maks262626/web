console.log(1);

import { getGenres} from "../index.js";
import { fetchData,api_key,imageUrl } from "./api.js";
const filmWrapper = document.querySelector('.film'); 

async ()=>{
    await getGenres();
}

function getId(){
    let url = window.location.href;
    let searchParams = new URLSearchParams(new URL(url).search);
    return searchParams.get('id');
}
let actorsWrapper;
async function getActors(){
    
    await fetchData(`https://api.themoviedb.org/3/movie/${getId()}/credits?api_key=${api_key}`,(res)=>{
        let actors = res.cast.slice(0,5);
        actors.forEach((actor) => {
            addActor(actorsWrapper,actor)
          });
    });
    console.log(actorsWrapper);
    
}
async function getMainPoster(){
    await fetchData(`https://api.themoviedb.org/3/movie/${getId()}?api_key=${api_key}`,(f)=>{
        filmWrapper.innerHTML = '';
        let genres = [];
        for(const g of f.genres){
            genres.push(g.name);
        }
        filmWrapper.innerHTML+= `
        <div class="film__poster">
            <img src="${imageUrl}w500${f.poster_path}" alt="">
        </div>
        <div class="film__info">
            <div class="film__title">${f.title}</div>
            <div class="film__text-wrapper">
                <div class="film__rating"><i class="fa fa-star"></i>${f.vote_average.toFixed(2)}</div>
                <div class="film__year">${f.release_date.split("-")[0]}</div>
            </div>
            <div class="film__genres">
                ${genres.join(" ")}
            </div>
            <div class="film__actors">${f.overview}</div>
            <div class="actors-wrapper">
                <h2 class="title">Main Actors</h2>
                <div class="actors mainposters">
                
                    
                </div>
            </div>
        </div>
        </div>
         
           
            `;
            actorsWrapper = document.querySelector('.actors');
        getActors();

    
    });
    

}
getMainPoster();
function addActor(wrapper,a){
    wrapper.innerHTML += `
    <div class="mainposters__film-card">
    <div class="mainposters__film-img">
        <img src="${imageUrl}w500${a.profile_path}" alt="">
    </div>
    <div class="mainposters__film-info">
        <div class="mainposters__film-title">
            ${a.name}
        </div>
        <div class="mainposters__film-bottom">
            <div class="mainposters__film-rating"><i class="fa fa-star"></i>${a.popularity}</div>
            <div class="mainposters__film-year">${a.character}</div>
        </div>
    </div>
</div>
    `;
    
}

