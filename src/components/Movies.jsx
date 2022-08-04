import OneMovie from "./OneMovie"

export default function Movies(props) {
    const movies = props.movies || []
    return (
        <div className="movies">
            {movies.length ? 
                movies.map(item => <OneMovie movie={item} key={item.imdbID}/>)
                :
                <p>Nothing to Found</p>
            }
        </div>
    )
}