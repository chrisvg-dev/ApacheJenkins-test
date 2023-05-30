import React, { useState } from 'react';
import './index.css'

export const App = ():any => {
    const [ repositories, setRepositories ] = useState<any[]>([]);

    const fetchPost = async () => {
        await fetch('https://api.github.com/users/chrisvg-dev/repos')
            .then(data => data.json())
            .then( data => {
                console.log(data)
                setRepositories(data)
            } );
    };

    return (
        <>
            <div className='container'>
                <h1 className='text text-secondary'>Hello</h1>
                
                <input type="text" className='form-control' />
                <button onClick={fetchPost}>Hello</button>
                <hr />
                { repositories.map((data: any) =>
                    {
                        return (
                            <div className='card col-md-4' key={data.id}>                                
                                <div className='card-header'>
                                    {data.name}
                                </div>
                            </div>
                        );
                    }
                )}
                
            </div>
        </>
    );
}