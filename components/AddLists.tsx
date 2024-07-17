'use client';
import React, { useState } from 'react';

const AddLists = () => {
    const [list, setList] = useState('');
    const [items, setItems] = useState<string[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setList(e.target.value);
    };

    const handleAddItem = () => {
        if (list.trim()) {
            setItems([...items, list]);
            setList('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={list}
                onChange={handleInputChange}
                placeholder="Add new item"
            />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default AddLists;
