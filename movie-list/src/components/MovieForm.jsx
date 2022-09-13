import { MovieList } from "./MovieList";

export const MovieForm = () => {
    let favoriteMovies = ['Good Movie 1', 'Better Movie: the sequel'];
    
    const AddItem = () => {
        let movieInput = document.getElementById('movie-input').value;
        movieInput !== "" ? favoriteMovies.push(movieInput) : console.log("can't be blank");
        
        document.getElementById('movie-input').value = "";
        console.log(favoriteMovies);
    };
    
    return (
        <div>
            <label htmlFor="title">Movie: </label>
            <input type="text" id="movie-input" placeholder="Check console for list" />
            <div>
                <button onClick={AddItem}>Add to List</button>
            </div>

            <div>
            <h1>Favorite Movies</h1>
            <ul>
                {favoriteMovies.map((movie) => (
                    <MovieList movieName={movie} />
                ))}
            </ul>
        </div>
        </div>
    );
}