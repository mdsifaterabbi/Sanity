import Layout from "../layout/Layout"

const Details = () => {
    return (
        <Layout title={"Movie Details"}>
            <section style={{ paddingTop: '15px', paddingBottom: '15px' }}>
                <div className="card card-side bg-base-100 shadow-xl w-[80vw] mx-auto">
                    <div style={{ width: '300px', height: '500px' }}><img src="https://c8.alamy.com/comp/F6J8CC/mar-07-2003-hollywood-ca-usa-poster-from-the-drama-action-thriller-F6J8CC.jpg" alt="Movie" style={{ paddingTop: '15px',paddingLeft: '20px' }} /></div>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Details