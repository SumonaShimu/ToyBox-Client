import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/03/52/73/34/360_F_352733401_JvKktwNtBzmwP9F3Q2tvST7IPxiWDYIN.jpg")` }}>
            {/* form+img container */}
            <div className="md:flex gap-10">
                {/* images */}
                <div className="my-2 w-72">
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu8.jpg" className=" shadow-2xl rounded-lg my-2 w-64 " />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                </div>
                {/* form */}
                <div className="md:min-w-[1/2] card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold mb-10">Please Register!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" placeholder="your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="photo" placeholder="your photo url" className="input input-bordered"/>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <button className="btn btn-primary text-2xl text-black my-3 "><span className="text-xs">register with </span> <FcGoogle></FcGoogle></button>
                            <small className="mx-auto">
                                Already have an account? Please<Link to='/login' className="link link-info link-hover"> Login</Link>
                            </small>
                        </div>
                    </div>
                </div>
                {/* images 2 only shown in large device */}
                <div className="my-2 w-72 hidden lg:block">
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu8.jpg" className=" shadow-2xl rounded-lg my-2 w-64 " />
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/edu22.jpg" className=" shadow-2xl rounded-lg my-2 w-64 ms-auto" />
                </div>
            </div>
        </div>
    );
};

export default Registration;