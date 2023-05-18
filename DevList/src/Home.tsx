import * as React from 'react';
import { useState } from 'react';
import './style.css';
import { AddDeveloper } from './component/AddDeveloper';
import { AllDeveloper } from './component/AllDeveloper';
import { Developer } from './type';

export const Home: React.FC = (): JSX.Element => {
    const [arr, setArr] = useState<Developer[]>([{
        name: 'Anthony',
        surname: 'Joshua',
        age: 23,
        id: 1,
    },
    {
        name: 'Mandy',
        surname: 'Rose',
        age: 25,
        id: 2,
    },
    {
        name: 'Randy',
        surname: 'Orton',
        age: 28,
        id: 3,
    },]);

    const AddDev = (data: Developer): void => {
        arr.push({ ...data, id: Date.now() });
        setArr([...arr]);
    };

    const deleteById = (id: number): void => {
        setArr([...arr.filter(e => e.id != id)]);
    };

    return (
        <div className='main'>
            <AddDeveloper AddDev={AddDev}></AddDeveloper>
            <AllDeveloper arr={arr} deleteById={deleteById}></AllDeveloper>
        </div>
    );
};