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
    <div>
        <h1>Coffee Lists</h1>
        <ul>
            {Lists.map((list) => (
                <li key={list.id}>
                    <h2>{list.name}</h2>
                    <p>${list.price.toFixed(2)}</p>
                    <Image src={list.image} alt={list.name} width={300} height={300} />
                    <button className='btn'>Add to Cart</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default CoffeeLists;
