import React from 'react'

export const Pagination = ({ imageLength, prevPage, nextPage }) => {

    if (imageLength > 0) {
        return (
            <>
                <button className="btn btn-primary mr-1" onClick={prevPage}>Prev &larr;</button>
                <button className="btn btn-primary mr-1" onClick={nextPage}>Next &rarr;</button>
            </>
        )
    } else {
        return null;
    }

}
