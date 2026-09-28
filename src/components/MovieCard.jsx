const MovieCard = ({ show, onDetails }) => {
    const poster =
        show.image?.medium ||
        show.image?.original ||
        "https://placehold.co/400x600/0f172a/ffffff?text=No+Poster";

    const year = show.premiered
        ? new Date(show.premiered).getFullYear()
        : "N/A";

    const rating = show.rating?.average || "N/A";

    return (
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-indigo-500/10">
            <div className="relative aspect-[2/3] overflow-hidden bg-slate-800">
                <img
                    src={poster}
                    alt={show.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-yellow-400 backdrop-blur-md">
                    ⭐ {rating}
                </div>
            </div>

            <div className="p-4">
                <h3
                    className="truncate text-lg font-bold text-white"
                    title={show.name}
                >
                    {show.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <span>📅 {year}</span>

                    <span className="text-slate-600">•</span>

                    <span>{show.type || "Show"}</span>
                </div>

                {show.genres?.length > 0 && (
                    <div className="mt-3 flex gap-2 overflow-hidden">
                        {show.genres.slice(0, 2).map((genre) => (
                            <span
                                key={genre}
                                className="whitespace-nowrap rounded-md bg-indigo-500/10 px-2 py-1 text-xs text-indigo-300"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                )}

                <button
                    onClick={onDetails}
                    className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-indigo-500 active:scale-95"
                >
                    See Details
                </button>
            </div>
        </article>
    );
};

export default MovieCard;