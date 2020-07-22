import React, { useState, useEffect } from 'react'
import { Pagination } from './Pagination';

export const Results = ({ imageList, prevPage, nextPage }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(imageList);
    }, [imageList])

    return (
        <div className="row mt-5">
            <div className="col-md-10 mx-auto">
                <div className="card-columns">
                    {results.map(image => (
                        <div key={image.id} className="card">
                            <img src={image.webformatURL}
                                alt={image.tags}
                                className="card-image-top img-fluid"
                                style={{ height: '200px' }}
                            />
                            <div className="card-body">
                                <p>Likes: {image.likes}</p>
                                <p>Views: {image.views}</p>
                                <a className="btn btn-primary btn-block" href={image.webformatURL} target="_blank">Ver imagen</a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination  {...{prevPage, nextPage, imageLength:imageList.length}}/>
                </div>
            </div>
        </div>
    )
}

