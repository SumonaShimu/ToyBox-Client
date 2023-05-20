import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext);
    let userName = '', userEmail = ''
    if (user) {
        userName = user.displayName;
        userEmail = user.email;
    }
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const addItem = (event) => {
        event.preventDefault()
        const form = event.target;
        const name=form.name.value;
        const pictureURL=form.url.value;
        const price=parseFloat(form.price.value);
        const quantity=parseFloat(form.quantity.value);
        const rating=parseFloat(form.rating.value);
        const sellerEmail=form.email.value;
        const sellerName=form.seller.value;
        const subcategory=selectedValue;

        const newItem={
            name,pictureURL,price,quantity,rating,sellerEmail,sellerName,subcategory
        }
        const itemjson=JSON.stringify(newItem);
        fetch('https://toybox-server.vercel.app/addtoy', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Toy inserted successfully')
            }
        })
        console.log(itemjson)
    }
    return (
        <div>
            <form onSubmit={addItem} className="bg-primary mx-10 my-50 p-10 grid md:grid-cols-2 grid-cols-1 gap-3 w-[90%]">
                <label className="input-group">
                    <span>Picture</span>
                    <input name='url' type="url" placeholder="give the product image url" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Toy Name</span>
                    <input name='name' type="text" placeholder="toy name" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Seller Name</span>
                    <input name='seller' type="text"
                        defaultValue={userName} className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Your Email</span>
                    <input name='email' type="email"
                        defaultValue={userEmail} className="input input-bordered w-full" />
                </label>

                <label className="input-group">
                    <span>Price</span>
                    <input name='price' type="number" step="0.01" placeholder="100.00" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Rating</span>
                    <input name='rating' type="number" step="0.01" placeholder="5" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <span>Available quantity</span>
                    <input name='quantity' type="number" placeholder="10" className="input input-bordered w-full" />
                </label>

                <label className="input-group">
                    <span>Sub Category</span>
                    <select className="select select-bordered" onChange={handleSelectChange} value={selectedValue}>
                        <option disabled value="">Pick one</option>
                        <option value="Geography">Geography</option>
                        <option value="Problem-Solving">Problem-Solving</option>
                        <option value="Math">Math and Counting</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <input type="submit" value="Add Product" className="btn btn-secondary text-white col-span-2 mx-auto"/>
            </form>
        </div>
    );
};

export default AddToy;