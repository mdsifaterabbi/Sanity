import pathan_1 from '../assets/pathan_1.jpg'
import { Link } from 'react-router-dom'

const MovieCard = () => {
    const myStyle = {
        backgroundColor: 'black',
        color: '#999999'
    }
    return (
        <>
            <div className="card shadow-xl w-[350px]" style={myStyle} >
                <figure><img src={pathan_1} alt="Movie" style={{width: '300px', height: '300px', marginTop: '20px', borderRadius: '30px'}} /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <Link to={'/movies/123'}><button className="btn bg-white hover:bg-yellow-500">Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieCard