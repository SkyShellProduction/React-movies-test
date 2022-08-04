import React from "react";
const Movies = (props) => {
    return (
        <React.Fragment>
            <div className="movies">
                <h3 className="movies__title">{props.title}</h3>
                <p className="movies__money">Сборы в мире: {props.price}</p>
                <div className="movies__children">
                    {props.children}
                    {/* аналог слотов в vue */}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Movies;