import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
    return(
        <>
            <header>
                <Navbar />
            </header>

            <main className="h-screen">
                {  children }
            </main>

            <footer>
                <Footer />
            </footer>
            
        </>
    )
}

export default Layout