
import { api_key,imageUrl,fetchData} from "./modules/api.js";

const genrelist = document.querySelector('.genre-list');


const heroSwiper = document.querySelector(".mySwiper .swiper-wrapper");
const trendingSwiper = document.querySelector(".trendingSwiper .swiper-wrapper");
const trendingWrapper = document.querySelector(".trending");
const popularWrapper = document.querySelector(".popular");
const topRatedWrapper = document.querySelector(".topRated");
import { swiper } from "./modules/sliders.js";





export async function getGenres(){
    fetchData(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,({genres})=>{
        genres.forEach(g => {
            genrelist.innerHTML += `<li onclick="redirectToGenresPage(${g.id})">${g.name}</li>`;
        });
    });
}
// export async function getGenreById(id){
//     fetchData(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,({genres})=>{
//         const genre = genres.find(g => g.id === id);
//         if (genre) {
//           return genre;
//         } else {
//             console.error("genre not found");
//         }
//     });
// }
export function getGenreById(id) {
    return new Promise((resolve, reject) => {
      fetchData(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, ({ genres }) => {
      
      genres.forEach(g =>{
        if(g.id == id){
            resolve(g.name);
        }
      })

        reject('Genre not found');
        
      });
    });
  }
  
async function getUpComing(){
    if (window.location.pathname !== '/index.html') return;
    fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`,(res)=>{
        let films = res.results.slice(0,10);
        films.forEach(f => {
            heroSwiper.innerHTML += `
            <div class="swiper-slide heroSwiper-slide">
                <div class="film-poster">
                    <img src="${imageUrl}original${f.backdrop_path}" alt="Film Poster">
                    <div class="film-details">
                        <h2 class="film-title">${f.title}</h2>
                        <div class="film-info">
                            <span class="film-year">Year: ${f.release_date}</span>
                            <span class="film-rating">Рейтинг: ${f.vote_average}</span>
                        </div>
                        <p class="film-description">${f.overview}</p>
                        <a href="#" class="watch-btn btn" onclick="redirectToDetailsPage(${f.id})"><i class="fas fa-play"></i> Watch Now</a>
                    </div>
                </div>
            </div>    
        `;
        });
    });

}

async function getTrending(){
    await fetchData(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`,(res)=>{
        let films = res.results.slice(0,5);
        console.log(films);
        films.forEach(f=>{
            
            addPoster(trendingWrapper,f);
        });
    });
}
async function getPopular(){
    await fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`,(res)=>{
        let films = res.results.slice(0,5);
        console.log(films);
        films.forEach(f=>{
            
            addPoster(popularWrapper,f);
        });
    });
}
async function getTopRated(){
    await fetchData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`,(res)=>{
        let films = res.results.slice(0,5);
        console.log(films);
        films.forEach(f=>{
            
            addPoster(topRatedWrapper,f);
        });
    });
}

export function addPoster(wrapper,f){
    if(f.poster_path === null) return;
        wrapper.innerHTML += `
        <div onclick="redirectToDetailsPage(${f.id})" class="mainposters__film-card">
        <div class="mainposters__film-img">
            <img src="${imageUrl}w500${f.poster_path}" alt="">
        </div>
        <div class="mainposters__film-info">
            <div class="mainposters__film-title">
                ${f.title.length < 15 ? f.title : f.title.substring(0,15)+'...' }
            </div>
            <div class="mainposters__film-bottom">
                <div class="mainposters__film-rating"><i class="fa fa-star"></i>${f.vote_average.toFixed(1)}</div>
                <div class="mainposters__film-year">${f.release_date.split("-")[0]}</div>
            </div>
        </div>
    </div>
        `;

    
}


window.redirectToDetailsPage = function(movieId) {
    let detailsPageUrl = 'details.html?id=' + movieId;
    window.location.href = detailsPageUrl;

 
}
window.redirectToGenresPage = function(genreid) {
    let detailsPageUrl = 'genres.html?id=' + genreid;
    window.location.href = detailsPageUrl;

 
}
const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const searchText = searchInput.value;
      window.location.href = `search.html?query=${encodeURIComponent(searchText)}`;
    }
  });
getGenres();
getUpComing();
getTrending();
getPopular();
getTopRated();