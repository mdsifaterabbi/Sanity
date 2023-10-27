import { NavLink } from "react-router-dom"

const Navbar = () => {

    const myStyle = {
        backgroundColor: '#333333',
    }

    return (
        <>
            <div className="navbar" style={myStyle}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/home" className="mx-3 text-3xl text-yellow-500 px-2 py-1 hover:bg-slate-800 hover:text-white transition-all linear  duration-300">Home</NavLink>
                            <NavLink to="/movies" className="mx-3 text-3xl text-yellow-500 px-2 py-1 hover:bg-slate-800 hover:text-white transition-all linear  duration-300">Movies</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-yellow-500">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/home" className="mx-3 text-3xl text-yellow-500 px-2 py-1 hover:bg-slate-800 hover:text-white transition-all linear  duration-300">Home</NavLink>
                        <NavLink to="/movies" className="mx-3 text-3xl text-yellow-500 px-2 py-1 hover:bg-slate-800 hover:text-white transition-all linear  duration-300">Movies</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Sign In</a>
                </div>
            </div>
        </>
    )
}
export default Navbar