import MovieCard from "../components/MovieCard"
import Layout from "../layout/Layout"
import { useContext } from "react"
import { MyMovie } from "../context/database"

const Movies = () => {

    const { movies } = useContext(MyMovie);
    const { categories } = useContext(MyMovie);

    //console.log({categories})
    //console.log({movies});

    return (
        <Layout title="Movies">
            <>
                <section className="flex flex-wrap py-2 gap-3 justify-center">

                    <input type="search" placeholder="Search movie..." className="input input-bordered bg-black rounded-xl basis-[60%] text-white border-white" />


                    <select className="select w-full bg-black text-white basis-[25%]">
                        <option disabled defaultValue={"selected"} >Pick your Category</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>

                    </select>

                </section>
                <div className="container flex flex-wrap mx-auto justify-center py-5 gap-7">
                    {/* <MovieCard /> */}
                    {
                        movies.map((movie) => <MovieCard key={movie.movieName} movieInfo={movie} />)
                    }

                </div>
                <div className="container text-center mx-auto py-5">
                    <a href="#" className="bg-purple-900 mr-2 py-[5px] px-[15px] no-underline text-white rounded-[30px] hover:bg-yellow-600 transition-all linear  duration-300">Prev</a>
                    <a href="#" className="bg-purple-900 ml-2 py-[5px] px-[15px] no-underline text-white rounded-[30px] hover:bg-yellow-600 transition-all linear  duration-300">Next</a>
                </div>
            </>
        </Layout>

    )
}

export default Movies