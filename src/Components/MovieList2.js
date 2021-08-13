import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard';
import Modal2 from './Modal2'
import "./MovieList.css"



export default function MovieList(props) {
    const [filter, setFilter] = useState(false);
    const [title, setTitle] = useState(false)
    const changeFilter = () => setFilter(!filter);
    const changeTitle = () => setTitle(!title);


    const [movieList, setMovieList] = useState([{
        title: "Aziz",
        description: "nice film ever",
        posterURL: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/169241483/original/af413b406d3cb2eedc149baf2a8b87156d86d56f/make-your-movie-or-short-film-poster.jpg",
        rating: 5
    },
    {
        title: "Anas",
        description: "nice film ever",
        posterURL: "https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg",
        rating: 3
    },
    {
        title: "Abd",
        description: "nice film ever",
        posterURL: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
        rating: 6
    },
 ]);
    useEffect(() => {
        console.log(movieList);

    }, [movieList])
    const filterByRate = () => {
        filter ? setMovieList(movieList.sort((a, b) => b.rating - a.rating)) : setMovieList(movieList.sort((a, b) => a.rating - b.rating));
    }
    const filterByTitle = () => {
        title ? setMovieList(movieList.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))) : setMovieList(movieList.sort((a, b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0)))
    }
    return (



        <>
            <Modal2 movies={movieList} newList={(movie) => setMovieList(movie)} ></Modal2>
            <div className="btns">
                <button className="filter" onClick={() => { changeFilter(); filterByRate();}}>Filter By rank</button>
                <button className="title" onClick={() => { changeTitle(); filterByTitle() }}>Filter By Title</button>
            </div>
            <div className="list">
                {movieList.map(el => <MovieCard title={el.title} rating={el.rating} description={el.description} posterURL={el.posterURL} />
                )}
            </div>
        </>
    )
}
