import { BsArrowBarRight } from "react-icons/bs";

const Us = () => {
    return (
        <div className='flex md:flex-row flex-col my-10'>
            <div className="w-full md:w-1/2 p-5">
                <img src="https://thepeartree.co.za/wp-content/uploads/2020/08/creativity.jpg" className="w-full h-full rounded-xl border-4 shadow-md border-slate-300" />
            </div>
            <div className='flex flex-col gap-3 w-full md:w-1/2 max-w-4xl my-auto text-justify p-10'>
                <h4 className="">Our Story...</h4>
                <h1 className='font-bold text-4xl'>The ToyBox</h1>
                <p className=''>It is created as a Toy Science Lab, where curious minds come to explore and discover the wonders of science through play! In this section, children can embark on exciting scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way. In this place, children can embark on exciting educative & scientific adventures, conduct fun experiments, and learn about various scientific principles in an interactive and engaging way. </p>
                <button className="btn lg:w-1/2">Find us on Facebook <BsArrowBarRight className="text-2xl"></BsArrowBarRight></button>
            </div>
        </div>
    );
};

export default Us;