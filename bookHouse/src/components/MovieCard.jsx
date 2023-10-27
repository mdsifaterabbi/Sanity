import pathan_1 from '../assets/pathan_1.jpg'

const MovieCard = () => {
    const myStyle = {
        backgroundColor: 'goldenrod',
    }
    return (
        <>
            <div className="card shadow-xl w-[350px]" style={myStyle} >
                <figure><img src={pathan_1} alt="Movie" style={{width: '300px', height: '300px', marginTop: '20px', borderRadius: '30px'}} /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard