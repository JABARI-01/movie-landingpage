import React from 'react'
import {moviesData} from "../data/moviesData.js"
import MovieCard from "./MovieCard"
import { Grid } from '@mui/material';
import Navbar from "./Navbar.jsx"

const Home = () => {
    const movies = moviesData.results
    
    return (
    
    <>
        <Navbar />
        <Grid container spacing={4} sx={{ p: 4,  }} justifyContent="center">
            {movies.map(movie => ( 
                <Grid key={movie.id} sx={{
                    sm:6,
                    md:4,
                    lg:3
                }} xs={12}>
                    <MovieCard 
                        key={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        image={movie.poster_path}
                        rating={movie.vote_average / 2} // I am scaling down to 5-star rating (7.5 -> 3.75) which I belive it's much better 
                        genre={movie.genre_ids}
                        year={movie.release_date.slice(0,4)}
                        
                        // Placeholder functions for interactivity :)
                        onPlay={() => console.log(`Playing: ${movie.title}`)}
                        onFavorite={() => console.log(`Favorited: ${movie.title}`)}
                        onShare={() => console.log(`Shared: ${movie.title}`)}
                    />
                </Grid>
            ))}
        </Grid>
    </>
    )
}

export default Home