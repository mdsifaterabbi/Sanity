import CatMovieSlider from "../components/CatMovieSlider"
import Category from "../components/Category"
import MovieSlider from "../components/MovieSlider"
import Layout from "../layout/Layout"

const Home = () => {
    return (
        <>
            <Layout title={"Home"}>
                <section>
                    <MovieSlider />
                </section>
                <section className="bg-slate-900 text-center text-2xl italic text-white py-5">
                    <Category movieCategory='Select Category' />
                </section>
                <section>
                    <CatMovieSlider />
                </section>

            </Layout>

        </>
    )
}

export default Home