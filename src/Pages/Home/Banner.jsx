const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu4.png")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        <div className="max-w-lg text-justify">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Welcome to the ToyBox, where curious minds come to explore and discover the wonders of science through play! In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu8.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        <div className="max-w-lg text-justify">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Welcome to the ToyBox, where curious minds come to explore and discover the wonders of science through play! In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                        <div className="max-w-lg text-justify">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Welcome to the ToyBox, where curious minds come to explore and discover the wonders of science through play! In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="hero h-[100vh]" style={{ backgroundImage: `url("https://raw.githubusercontent.com/SumonaShimu/ToyData/main/soft4.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        <div className="max-w-lg text-justify">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Welcome to the ToyBox, where curious minds come to explore and discover the wonders of science through play! In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Banner;