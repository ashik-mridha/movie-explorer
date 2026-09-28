import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <main className="min-h-screen w-full overflow-hidden bg-slate-950 text-white">
            {/* Navbar */}
           <Navbar></Navbar>

            {/* Hero Section */}
            <Banner></Banner>

            {/* About Section */}
            <About></About>

            {/* Footer */}
            <Footer></Footer>
        </main>
    );
};

export default Home;