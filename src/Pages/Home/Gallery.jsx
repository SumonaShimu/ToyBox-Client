
const Gallery = () => {
    return (
        <div className='my-10'>
            <div className='text-center max-w-lg mx-auto'>
            <h1 className='font-bold text-4xl py-5'>Photo Galary</h1>
            <p className=''>In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way.</p>
            </div> 
            {/* cards from json */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-10">
                <div className="card transform hover:scale-110 transition duration-300 ease-in-out bg-base-100 shadow-xl">
                    <figure><img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/logo.png" alt="Shoes" /></figure>
                </div>
                <div className="card transform hover:scale-110 transition duration-300 ease-in-out bg-base-100 shadow-xl">
                    <figure><img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/logo.png" alt="Shoes" /></figure>
                </div>
                <div className="card transform hover:scale-110 transition duration-300 ease-in-out bg-base-100 shadow-xl">
                    <figure><img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/logo.png" alt="Shoes" /></figure>
                </div>
                <div className="card transform hover:scale-110 transition duration-300 ease-in-out bg-base-100 shadow-xl">
                    <figure><img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/logo.png" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;