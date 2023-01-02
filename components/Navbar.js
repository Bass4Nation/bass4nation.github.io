import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/anime">My Anime watchlist</Link>
            </div>
        </nav>
    );
}

export default Navbar;