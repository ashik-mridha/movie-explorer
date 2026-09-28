

const About = () => {
    return (
        <section
            id="about"
            className="w-full border-t border-white/10 bg-slate-900 py-20"
        >
            <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-20">
                <div className="grid gap-12 md:grid-cols-2 md:items-center">
                    {/* Text */}
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                            Why MovieExplorer?
                        </p>

                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Everything you need to find your next watch.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-400">
                            MovieExplorer makes it easy to discover movies
                            and shows. Search for your favorite titles,
                            explore different genres, and view detailed
                            information before deciding what to watch.
                        </p>

                        <a
                            href="/movies"
                            className="mt-7 inline-flex items-center gap-2 font-semibold text-indigo-400 transition hover:text-indigo-300"
                        >
                            Start exploring
                            <span>→</span>
                        </a>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {/* Card 1 */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500/40">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                                🔎
                            </div>

                            <h3 className="text-lg font-bold">
                                Easy Search
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Quickly find movies and shows by their
                                titles.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500/40">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                                ⭐
                            </div>

                            <h3 className="text-lg font-bold">
                                Ratings
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Check ratings and other useful information
                                before watching.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500/40">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                                🎭
                            </div>

                            <h3 className="text-lg font-bold">
                                Explore Genres
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Discover stories across different genres
                                and categories.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-indigo-500/40">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                                📱
                            </div>

                            <h3 className="text-lg font-bold">
                                Fully Responsive
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Enjoy a smooth experience on mobile,
                                tablet, and desktop.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;