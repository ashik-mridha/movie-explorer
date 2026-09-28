

const Banner = () => {
    return (
        <section className="relative isolate flex min-h-[calc(100vh-73px)] w-full items-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=85')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-slate-950/75" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />

            {/* Decorative Blur */}
            <div className="absolute -right-32 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />

            {/* Hero Content */}
            <div className="w-full px-5 py-20 sm:px-8 lg:px-12 xl:px-20">
                <div className="max-w-3xl">
                    {/* Small Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                        <span>🍿</span>
                        <span>Your Ultimate Movie Destination</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                        Discover Your
                        <span className="block text-indigo-500">
                            Next Favorite
                        </span>
                        Movie
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        Explore thousands of amazing movies and shows,
                        discover new stories, and find something perfect
                        for your next movie night.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="/movies"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold shadow-lg shadow-indigo-600/25 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500"
                        >
                            Explore Movies
                            <span>→</span>
                        </a>

                        <a
                            href="#about"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur-sm transition duration-300 hover:bg-white/10"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
                        <div>
                            <p className="text-2xl font-bold">10K+</p>
                            <p className="mt-1 text-sm text-slate-400">
                                Movies & Shows
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold">50+</p>
                            <p className="mt-1 text-sm text-slate-400">
                                Genres
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold">24/7</p>
                            <p className="mt-1 text-sm text-slate-400">
                                Entertainment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;