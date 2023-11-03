import { useParams } from "react-router-dom"
import Layout from "../layout/Layout"
import { useContext, useEffect, useState } from "react";
import { MyMovie } from "../context/database";
import { client } from "../connection/sanity";
import { PortableText } from "@portabletext/react";
import ReactPlayer from "react-player";

const Details = () => {

    const [soloMovie, setSoloMovie] = useState([]);

    const { movieId } = useParams();

    const singleMovieQuery = `*[_type == 'movie' && _id == '${movieId}']{movieName,'imageUrl': banner.asset->url, category->{category}, _id, shortDesc, cast, trailerUrl }`;

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

                        <button className="btn btn-success w-[15%]" onClick={() => document.getElementById('my_modal_1').showModal()}>Watch Trailer</button>

                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Trailer</h3>
                                <ReactPlayer url={singleMovie?.trailerUrl} muted='true' volume="0.5" width={460} />
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>


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