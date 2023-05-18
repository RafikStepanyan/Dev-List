import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Developer } from '../type';

interface AddDeveloperType {
    AddDev: Function;
}

export const AddDeveloper: React.FC<AddDeveloperType> = ({ AddDev }: AddDeveloperType): JSX.Element => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<Developer>();
    const save = (data: Developer) => {
        if (!isNaN(data.age) && data.age > 0) {
            AddDev({ ...data });
            reset();
        } else {
            alert('age cannot be a string or negative');
        }
    };
    return (
        <div className='add'>
            <h1>Add Developer</h1>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder='name...' {...register('name', { required: true, minLength: 2 })} />
                {errors.name && errors.name.type == 'required' && <p>Enter the name</p>}
                {errors.name && errors.name.type == 'minLength' && <p>minLength Error</p>}
                <input type="text" placeholder='surname...' {...register('surname', { required: true, minLength: 2 })} />
                {errors.surname && errors.surname.type == 'required' && <p>Enter the surname</p>}
                {errors.surname && errors.surname.type == 'minLength' && <p>minLength Error</p>}
                <input type="number" placeholder='age...' {...register('age', { required: true, maxLength: 3 })} />
                {errors.age && errors.age.type == 'required' && <p>Enter the age</p>}
                {errors.age && errors.age.type == 'maxLength' && <p>maxLength Error</p>}
                <button>Add Developer</button>
            </form>
        </div>
    );
};