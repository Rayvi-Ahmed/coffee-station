import { useActionData, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffie = () => {

    const Coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, category, photo, detail } = Coffee

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.Supplier.value;
        const taste = form.taste.value;
        const category = form.Category.value;
        const detail = form.details.value;
        const photo = form.photo.value;
        form.reset()

        const updateCoffie = { name, quantity, supplier, taste, category, detail, photo }

        console.log(updateCoffie)


        fetch(`http://localhost:5000/coffiee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateCoffie)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffiee added',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                }
            })
    }
    return (
        <div className="bg-[#713f12] p-24 rounded-2xl" >
            <h1 className="text-3xl text-center text-[#facc15] font-bold mb-8">{name}</h1>

            {/* form raw name & Quantity*/}
            <form onSubmit={handleUpdate}>
                <div className="flex gap-3 mb-8">
                    <div className="form-control w-1/2">
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" name="name" defaultValue={name} placeholder="Coffie Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">

                        <label className="input-group">
                            <span>Quantity</span>
                            <input name="quantity" defaultValue={quantity} type="number" placeholder="Coffie Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>


                {/* form raw supplier & tasete */}

                <div className="flex gap-3 mb-8">
                    <div className="form-control w-1/2">

                        <label className="input-group">
                            <span>Supplier</span>
                            <input type="text" name="Supplier" defaultValue={supplier} placeholder="Write supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">

                        <label className="input-group">
                            <span>Taste</span>
                            <input name="taste" defaultValue={taste} type="text" placeholder="How's coffie test.." className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form raw Category & details*/}
                <div className="flex gap-3 mb-8">
                    <div className="form-control w-1/2">

                        <label className="input-group">
                            <span>Category</span>
                            <input type="text" defaultValue={category} name="Category" placeholder="write the category " className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">

                        <label className="input-group">
                            <span>Details</span>
                            <input name="details" type="text" defaultValue={detail} placeholder="write detail name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full mb-3">

                    <label className="input-group">
                        <span>Photo URL</span>
                        <input name="photo" defaultValue={photo
                        } type="text" placeholder="Photo URL.." className="input input-bordered w-full" />
                    </label>
                </div>
                <input placeholder="Add Coffie" type="submit" value="Update coffie" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateCoffie;