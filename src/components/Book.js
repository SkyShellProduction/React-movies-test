import React from "react";
const Book = (props) => {
    return (
        <React.Fragment>
            <div className="book">
                <h2>{props.name}</h2>
                <p>{props.text}</p>
            </div>
        </React.Fragment>
    )
}
export default Book;