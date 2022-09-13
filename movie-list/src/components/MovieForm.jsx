export const MovieForm = () => {
    let favoriteMovies = [];
    
    const AddItem = () => {
        let movieInput = document.getElementById('movie-input').value;
        movieInput !== "" ? favoriteMovies.push(movieInput) : console.log("can't be blank");
        
        document.getElementById('movie-input').value = "";
    };
    
    return (
        <div>
            <label htmlFor="title">Movie: </label>
            <input type="text" id="movie-input" />
            <div>
                <button onClick={AddItem}>Add to List</button>
            </div>
        </div>
    );
}