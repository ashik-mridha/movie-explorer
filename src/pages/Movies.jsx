import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_URL = "https://api.tvmaze.com";

const Movies = () => {
    const [shows, setShows] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedShow, setSelectedShow] = useState(null);

    const fetchShows = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(`${API_URL}/shows`);

            if (!response.ok) {
                throw new Error("Failed to fetch shows");
            }

            const data = await response.json();

            setShows(data);
        } catch (error) {
            setError("Something went wrong while loading shows.");
        } finally {
            setLoading(false);
        }
    };

    const searchShows = async (query) => {
        try {
            setLoading(true);
            setError("");

            const response = await fetch(
                `${API_URL}/search/shows?q=${encodeURIComponent(query)}`
            );

            if (!response.ok) {
                throw new Error("Search failed");
            }

            const data = await response.json();

            const searchResults = data.map((item) => item.show);

            setShows(searchResults);
        } catch (error) {
            setError("Something went wrong while searching.");
            setShows([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShows();
    }, []);

    useEffect(() => {
        const trimmedSearch = search.trim();

        if (!trimmedSearch) {
            fetchShows();
            return;
        }

        const timer = setTimeout(() => {
            searchShows(trimmedSearch);
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    return (
        <main className="min-h-screen w-full overflow-hidden bg-slate-950 text-white">
            <section className="w-full border-b border-white/10 bg-slate-950">
                <div className="w-full px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
                    <div className="w-full text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">
                            Movie Explorer
                        </p>

                        <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                            Explore Movies & Shows
                        </h1>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                            Discover amazing shows, search for your favorite
                            titles, and find something new to watch.
                        </p>

                        <div className="relative mx-auto mt-8 w-full max-w-4xl">
                            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                                🔍
                            </span>

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search for a movie or show..."
                                className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-14 pr-20 text-base text-white outline-none backdrop-blur-sm transition placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                            />

                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-sm text-slate-400 transition hover:bg-white/10 hover:text-white"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-5 py-12 sm:px-8 lg:px-12 xl:px-16">
                {/* Heading */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h2 className="text-2xl font-bold sm:text-3xl">
                            {search
                                ? `Search Results for "${search}"`
                                : "All Shows"}
                        </h2>

                        {!loading && !error && (
                            <p className="mt-1 text-sm text-slate-500">
                                {shows.length}{" "}
                                {shows.length === 1 ? "result" : "results"}{" "}
                                found
                            </p>
                        )}
                    </div>

                    {!search && (
                        <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
                            🎬 TVMaze Collection
                        </span>
                    )}
                </div>

                {loading && (
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <MovieCardSkeleton key={index} />
                        ))}
                    </div>
                )}

                {!loading && error && (
                    <div className="flex min-h-60 w-full items-center justify-center">
                        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-8 py-10 text-center">
                            <div className="text-4xl">⚠️</div>

                            <h3 className="mt-4 text-xl font-bold">
                                Something went wrong
                            </h3>

                            <p className="mt-2 text-sm text-slate-400">
                                {error}
                            </p>

                            <button
                                onClick={
                                    search
                                        ? () => searchShows(search)
                                        : fetchShows
                                }
                                className="mt-6 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-indigo-500"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                )}

                {!loading && !error && shows.length === 0 && (
                    <div className="flex min-h-60 w-full items-center justify-center">
                        <div className="text-center">
                            <div className="text-5xl">🎬</div>

                            <h3 className="mt-4 text-xl font-bold">
                                No shows found
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Try searching with a different title.
                            </p>
                        </div>
                    </div>
                )}

                {!loading && !error && shows.length > 0 && (
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        {shows.map((show) => (
                            <MovieCard
                                key={show.id}
                                show={show}
                                onDetails={() => setSelectedShow(show)}
                            />
                        ))}
                    </div>
                )}
            </section>

            {selectedShow && (
                <MovieDetailsModal
                    show={selectedShow}
                    onClose={() => setSelectedShow(null)}
                />
            )}
        </main>
    );
};


const MovieCardSkeleton = () => {
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-[2/3] w-full animate-pulse bg-slate-800" />

            <div className="space-y-3 p-4">
                <div className="h-5 w-full animate-pulse rounded bg-slate-800" />

                <div className="h-4 w-2/3 animate-pulse rounded bg-slate-800" />

                <div className="h-10 w-full animate-pulse rounded bg-slate-800" />
            </div>
        </div>
    );
};



const MovieDetailsModal = ({ show, onClose }) => {
    const image =
        show.image?.original ||
        show.image?.medium ||
        "https://placehold.co/800x500/0f172a/ffffff?text=No+Image";

    const summary = show.summary
        ? show.summary.replace(/<[^>]*>/g, "")
        : "No description available for this show.";

    const releaseDate = show.premiered
        ? new Date(show.premiered).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "N/A";

    const rating = show.rating?.average || "N/A";

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur-md transition hover:bg-red-500"
                >
                    ✕
                </button>

                <div className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
                    <img
                        src={image}
                        alt={show.name}
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                </div>

                <div className="p-6 sm:p-8">
                    <h2 className="text-3xl font-black sm:text-4xl">
                        {show.name}
                    </h2>

                    <div className="mt-4 flex flex-wrap gap-3">
                        <span className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
                            ⭐ {rating}
                        </span>

                        <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400">
                            📅 {releaseDate}
                        </span>

                        {show.status && (
                            <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                                ● {show.status}
                            </span>
                        )}
                    </div>

                    {show.genres?.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                            {show.genres.map((genre) => (
                                <span
                                    key={genre}
                                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="mt-7">
                        <h3 className="text-lg font-bold">Overview</h3>

                        <p className="mt-3 leading-7 text-slate-400">
                            {summary}
                        </p>
                    </div>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                        {show.language && (
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Language
                                </p>

                                <p className="mt-1 font-medium">
                                    {show.language}
                                </p>
                            </div>
                        )}

                        {show.runtime && (
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="text-xs uppercase tracking-wider text-slate-500">
                                    Runtime
                                </p>

                                <p className="mt-1 font-medium">
                                    {show.runtime} minutes
                                </p>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-8 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold transition hover:bg-indigo-500"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Movies;