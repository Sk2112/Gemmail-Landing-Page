import HeroImage from "../assets/images/Hero.png";
import DownloadIcon from "../components/DownloadIcon";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Demo from "../sections/Demo";
import Installation from "../sections/Installation";



const Home = () => {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-black pb-28 pt-23 ">
        <div className="container backdrop-blur-md bg-white/20 p-10 rounded-4xl shadow-lg mx-auto px-4">
          <div className="flex flex-wrap items-center">

            {/* Left Column */}
            <div className="w-full lg:w-5/12 px-4">
              <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl text-center">
                Smart AI Replies for Your Gmail – Powered by GemMail.
              </h1>
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#Installation"
                  className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
                >
                  Watch Installation Video 
                </a>
                <a
                  href="https://github.com/Sk2112/Gem-Mail/releases/tag/v1.0.0"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-white font-medium hover:text-blue-300 text-xl mx-10"
                >
                  <DownloadIcon/>
                  Download Extension
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-7/12 px-4 mt-10 lg:mt-0  ">
              <img
                src={HeroImage}
                alt="Hero"
                className="mx-auto lg:ml-auto rounded-4xl "
              />
            </div>
          </div>
        </div>
        <Demo/>
        <Installation/>
        <Footer/>
      </section>
    </>
  );
};

export default Home;





