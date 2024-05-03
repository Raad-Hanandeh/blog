function Navwhite(){
    return(
        <>

<header className="lg:px-10 px-4 pt-2 text-lg">
        <nav className="flex justify-between items-center">
            <div className="flex justify-center items-center">
                <a href="./index.html">
                    <img className="w-32 h-11 sm:w-40 sm:h-14" src="image/Yallabook-logo-light.png"
                        alt="logo-light"/>
                </a>
            </div>
            <div
                className="hidden  lg:flex space-x-4 xl:space-x-8 justify-center items-center text-white text-lg font-medium">
                <a href="./packages.html">packages</a>
                <a href="">Guide Me</a>
                <a href="">Yalla Guide <span className="text-sm font-medium text-red-soft">soon</span></a>
                <a href="blog.html">Articles & Blogs</a>
                <a href="">About us</a>
            </div>
            <div className="lg:flex space-x-4 hidden justify-center items-center text-white text-lg font-medium">
                <a href="privacy.html">Countries</a>
                <a href=""><img src="./image/britich.svg" alt="kingdom"/></a>
                        <a href="#"><img src="./image/down-white.svg" alt="arrow"/></a>
                        <a href="#"><img src="./image/serach-white.svg" alt="search"/></a>
                        <a className="block lg:hidden" href="#"><img src="./image/menu.svg" alt="menu"/></a>
                        </div>
        </nav>
    </header>
        </>
    )
}

export default Navwhite