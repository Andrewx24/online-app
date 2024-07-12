import React from 'react';
import Image from 'next/image';

const Lists = [
    {
        id: 1,
        name: 'Cappuccino',
        price: 3.5,
        image: '/items/cappuccino.png'
    },
    {
        id: 2,
        name: 'Pumpkin Spice Latte',
        price: 5.5,
        image: '/items/pumpkinspicedlatte.png'
    },
    {
        id: 3,
        name: 'Latte',
        price: 4.5,
        image: '/items/late.png'
    },
];

const CoffeeLists = () => {
  return (
    <div className="max-w-44xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Coffee Lists</h1>
        <ul className="space-y-6">
            {Lists.map((list) => (
                <li key={list.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">{list.name}</h2>
                    <p className="text-xl font-medium text-gray-600 mb-4">${list.price.toFixed(2)}</p>
                    <Image src={list.image} alt={list.name} width={200} height={200} className="mb-4" />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">Add to Cart</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default CoffeeLists;
