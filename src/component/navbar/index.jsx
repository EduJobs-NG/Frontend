import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav className="w-screen bg-white px-8 py-4 flex items-center justify-between">
        <ul className="gap-4 flex">
            <li>
                <Link to='/'>jobs</Link>
            </li>
            <li>
                <Link to='/'>candidates</Link>
            </li>
            <li>
                <Link to='/'>interviews</Link>
            </li>
        </ul>
        <div className="search">
            <input type="search" name="" id="" />
        </div>
    </nav>;
};

export default Navbar;
