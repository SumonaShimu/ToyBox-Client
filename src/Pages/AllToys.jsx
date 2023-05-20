import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
    const toys = useLoaderData();
    console.log(toys)
    return (
        <div className="overflow-x-auto m-5">
            <table className="table table-compact w-full text-center">
                <thead>
                    <tr>
                        <th></th>
                        <th>Saller</th>
                        <th>Toy-name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, i) => {
                            console.log(toy);
                            return <tr key={toy._id}>
                                <th>{i + 1}</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.name}</td>
                                <td>{toy.subcategory}</td>
                                <td>${toy.price}</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/details/${toy._id}`} className='btn btn-primary rounded-t-none'>View Details</Link>
                                </td>
                            </tr>
                        }
                        )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;