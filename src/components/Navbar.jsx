

const Navbar = () => {
    return (
        <nav className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <span className="text-3xl">🎬</span>

                    <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                        Movie
                        <span className="text-indigo-500">Explorer</span>
                    </h1>
                </a>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="/"
                        className="text-sm font-medium text-white transition hover:text-indigo-400"
                    >
                        Home
                    </a>

                    <a
                        href="/movies"
                        className="text-sm font-medium text-slate-300 transition hover:text-indigo-400"
                    >
                        Movies
                    </a>

                    <a
                        href="/movies"
                        className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-indigo-500"
                    >
                        Explore Movies
                    </a>
                </div>

                {/* Mobile Button */}
                <a
                    href="/movies"
                    className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold transition hover:bg-indigo-500 md:hidden"
                >
                    Movies
                </a>
            </div>
        </nav>
    );
};

export default Navbar;