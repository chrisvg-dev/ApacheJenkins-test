import React, { useState } from 'react';

export const App = ():any => {
    const [ repositories, setRepositories ] = useState<any[]>([]);

    const fetchPost = async () => {
        await fetch('https://api.github.com/users/chrisvg-dev/repos')
            .then(data => data.json())
            .then( data => {
                setRepositories(data)
            } );
    };

    return (
        <>
            <div className='container'>
                <h1 className='text text-secondary'>Hello</h1>
                <input type="text" className='form-control' />
                <ul>
                    { repositories.map((data: any) =>
                        {
                            return <li key={data.id}>                                
                                {data.full_name}
                            </li>
                        }
                    )}
                </ul>
                <button onClick={fetchPost}>Hello</button>
            </div>
        </>
    );
}