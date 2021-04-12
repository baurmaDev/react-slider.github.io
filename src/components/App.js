import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
import SearchBar from './SearchBar';
import axios from 'axios';

const App = () => {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async (term) => {
        const responce = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID cxMCkPkdzjkkRp94eKSyIKMXduklBANs8KWNf-R46Oo'
            },
        });
        setImages(responce.data.results);
        console.log(images);
    }

    return (
        <div>
            <SearchBar onFormSubmit={onSearchSubmit}  />
            <br></br>
            <ImageSlider  images={images} />
        </div>
    )
}

export default App;
