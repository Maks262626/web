export const api_key = 'c9d8c8176bb313ea2636715588d7ea85';
export const api = 'https://api.themoviedb.org/3';
export const imageUrl = 'https://image.tmdb.org/t/p/';
export async function fetchData(url,callback) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return callback(data);
    } catch (err) {
        console.error(err);
    }
}

