import React, { useState, useEffect } from 'react'

export const Searcher = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    }
    
    const handleSubmit =  (event) => {
        event.preventDefault();
        props.getSearchedValue(searchValue);
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="false">
            <div className="row">
                <div className="col-md-8 offset-1">
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-dark">
                                <i className="material-icons" style={{ color: 'white' }}>search</i>
                            </div>
                        </div>
                        <input type="text"
                            className="form-control"
                            name="search"
                            placeholder='Search your image. Exaple: "Footbal" '
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="col-md-2">
                    <input type="submit" className="btn btn-danger btn-block" value="Search..." />
                </div>
            </div>
        </form>
    )
}
