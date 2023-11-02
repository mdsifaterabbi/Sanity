import { useParams } from "react-router-dom"
import Layout from "../layout/Layout"
import { useContext, useEffect, useState } from "react";
import { MyMovie } from "../context/database";
import { client } from "../connection/sanity";
import { PortableText } from "@portabletext/react";

const Details = () => {

    const [soloMovie, setSoloMovie] = useState([]);

    const { movieId } = useParams();

    const singleMovieQuery = `*[_type == 'movie' && _id == '${movieId}']{movieName,'imageUrl': banner.asset->url, category->{category}, _id, shortDesc, cast }`;

    const getSingleMovie = async () => {
        const soloMovie = await client.fetch(singleMovieQuery);
        return setSoloMovie(soloMovie);
    }

    useEffect(() => {
        getSingleMovie();
    }, [])


    const [singleMovie] = soloMovie; //destructing array of objects to a single array

    //console.log(singleMovie?._id,'===',singleMovie?.movieName);


    return (
        <Layout title={"Movie Details"}>
            <section style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                <div className="card card-side bg-base-100 shadow-xl w-[80vw] mx-auto">
                    <div style={{ width: '300px', height: 'auto' }}><img src={singleMovie?.imageUrl} alt="Movie" style={{ paddingTop: '0px', paddingBottom: '0px', paddingLeft: '0px' }} /></div>
                    <div className="card-body">
                        <h2 className="card-title">{singleMovie?.movieName}</h2>
                        <span className="badge badge-info font-bold">{singleMovie?.category?.category}</span> 
                        <p><span className="text-red-500 font-bold">Details:</span> <PortableText value={singleMovie?.shortDesc} /> </p>
                        <p><span className="text-red-500 font-bold">Casts:</span> <PortableText value={singleMovie?.cast} /></p>
                        
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Trailer</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Details