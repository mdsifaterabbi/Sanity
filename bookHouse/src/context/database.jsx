import { createContext, useEffect, useState } from 'react';
import { client } from '../connection/sanity';

export const MyMovie = createContext(); //creating context object named as MyMovie


export function AllMovieContextProvider({ children }) { //this function is wrapped in main.jsx

    const [movies, setMovies] = useState([]);
    const [categories, setCategory] = useState([]);

    const getAllMovies = async () => {
        const allMovies = await client.fetch("*[_type == 'movie']{movieName,'imageUrl': banner.asset->url, category->{category} }");
        

        return setMovies(allMovies);
    }
    const getAllCategory = async () => {
        const allCategory = await client.fetch("*[_type == 'category']['category']");
        //const allCategory = await client.fetch("*[_type == 'category']");

        return setCategory(allCategory);
    }

    useEffect(() => {

        getAllMovies();
        getAllCategory();

    }, [])

    return <MyMovie.Provider value={{ movies, categories }} >
        {children}
    </MyMovie.Provider>
}

