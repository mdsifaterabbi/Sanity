import { createContext, useEffect, useState } from 'react';
import { client } from '../connection/sanity';

export const MyMovie = createContext(); //creating context object named as MyMovie

export const MyCat = createContext(); //creating context object named as MyCat

export function AllMovieContextProvider({ children }) { //this function is wrapped in main.jsx

    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {
        const allMovies = await client.fetch("*[_type == 'movie']['movieName']");
        //const allMovies = await client.fetch("*[_type == 'movie']");

        return setMovies(allMovies);
    }

    useEffect(() => {

        getAllMovies();

    }, [])




    return <MyMovie.Provider value={{ movies }} >
        {children}
    </MyMovie.Provider>
}

export function AllCategoryContextProvider({ children }) {

    const [category, setCategory] = useState([]);

    const getAllCategory = async () => {
        const allCategory = await client.fetch("*[_type == 'category']['category']");

        return setCategory(allCategory);
    }

    useEffect(() => {

        getAllCategory();

    }, [])

    return <MyCat.Provider value={{category}}>
        {children}
    </MyCat.Provider>

}