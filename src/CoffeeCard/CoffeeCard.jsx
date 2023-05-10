import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, photo, detail } = coffee
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
                        <button className="btn">Edit</button>
                        <button className="btn">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;