import * as React from 'react';
import { Developer } from '../type';

interface AllDeveloperType {
    arr: Developer[];
    deleteById: Function;
}

export const AllDeveloper: React.FC<AllDeveloperType> = ({ arr, deleteById }: AllDeveloperType): JSX.Element => {
    return (
        <div>
            <h1>All Developers</h1>
            <div className='tab'>
                {
                    arr.length ?
                        <table>
                            <thead>
                                <th>name</th>
                                <th>surname</th>
                                <th>age</th>
                                <th>delete</th>
                            </thead>
                            <tbody>
                                {
                                    arr.map((e:any) => {
                                        return <tr key={e.id}>
                                            <td>{e.name}</td>
                                            <td>{e.surname}</td>
                                            <td>{e.age}</td>
                                            <td><button onClick={() => {
                                                deleteById(e.id);
                                            }}>X</button></td>
                                        </tr>;
                                    })
                                }
                            </tbody>
                        </table> : <></>
                }
            </div>
        </div>
    );
};