import { FcGoogle} from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/866298824/photo/kids-toys-background-with-teddy-bear-and-colorful-blocks.jpg?s=170667a&w=0&k=20&c=2LSBHwxVjlJ2NA6t-6zx58w0Fw6v4NoeHWdPkUzO528=")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="">
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/count.jpg" className="max-h-52 m-2 rounded-lg mx-auto w-[3/5] object-cover" />
                    <div className="flex">
                        <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/soft1.jpg" className="max-h-52 m-2 rounded-lg" alt="" />
                        <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/soft6.jpeg" className="max-h-52 m-2 rounded-lg" alt="" />
                    </div>
                    <img src="https://raw.githubusercontent.com/SumonaShimu/ToyData/main/soft4.jpg" className="max-h-52 m-2 rounded-lg mx-auto w-[3/5] object-cover" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                        <h1 className="text-5xl font-bold mb-10">Please Login!</h1>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <button className="btn btn-primary text-2xl text-black my-3 "><span className="text-xs">Login with </span> <FcGoogle></FcGoogle></button>
                            <small className="mx-auto">
                                Don't have an account? Please<Link to='/reg' className="link link-info link-hover"> Register</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;