import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
// import React, { useState } from 'react';
import SearchBar from "../searchBar/searchBar";

const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchResults, setSearchResults] = useState([]); // State to hold search results
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results);
                setSearchResults(data.results); // Initialize search results with movieList
            });
    };

    const performSearch = (query) => {
        const filteredResults = movieList.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            
            {/* Include the SearchBar component */}
            <div className="search-container">
            <SearchBar onSearch={performSearch} />
            </div>
            
            <div className="list__cards">
                {
                    searchResults.map(movie => (
                        <Cards movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    );
}



export default MovieList