import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, photo, detail } = coffee

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "delete"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl p-6">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className=" w-full flex justify-between pr-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>Coffie Detail: {detail}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Buy Qauntity: {quantity}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-6">
                        <button className="btn">View</button>
                        <Link to={`updateCoffie/${_id}`} > <button className="btn">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-400">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;