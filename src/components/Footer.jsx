

const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-slate-950">
            <div className="flex w-full flex-col items-center justify-between gap-4 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
                <div>
                    <p className="font-bold">
                        🎬 Movie
                        <span className="text-indigo-500">Explorer</span>
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        Discover. Explore. Enjoy.
                    </p>
                </div>

                <p className="text-sm text-slate-500">
                    © 2026 MovieExplorer. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;