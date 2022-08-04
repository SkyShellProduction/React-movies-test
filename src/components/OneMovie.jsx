export default function OneMovie(props) {
    const movie = props.movie;
    return (
        <div className="card movie" id={movie.imdbID}>
            <div className="card-image">
                <img src={movie.Poster} alt=""/>
            </div>
            <div className="card-content">
                <span className="card-title">{movie.Title}</span>
                <p>{movie.Year} {movie.Type}</p>
            </div>
            <div className="card-action">
                <a href="#!">This is a link</a>
            </div>
      </div>
    )
}