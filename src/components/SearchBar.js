import React, { useState } from 'react'
import './App.css';
const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

    const OnSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="content">
            <form onSubmit={OnSubmit} className="form">
                <div className="ui  massive icon input" style={{width: '700px', marginTop: '0.5rem'}}>
                    <input type="text" placeholder="Search..." onChange={(e) => setTerm(e.target.value)}  />
                    <i className="search icon"></i>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
