import MovieCard from "../components/MovieCard"
import Layout from "../layout/Layout"

const Movies = () => {

    return (
        <Layout title="Movies">
            <>
                <div className="flex justify-center py-2">
                    <input type="search" placeholder="Search movie..." className="input input-bordered" />
                </div>
                <div className="container flex flex-wrap mx-auto justify-center py-5 gap-7">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
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