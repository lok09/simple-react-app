import { createContext, useContext, useState } from 'react';
import ComponentB from './ComponentB.jsx'

/*
    Props drilling ,pass the value from A to D

*/
export const UserContextA = createContext();

function ComponentA(){

    const [user, setUser] = useState("ES LTD");
    return(
        <div className='box'>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContextA.Provider value={user}>
                <ComponentB/>
            </UserContextA.Provider>
        </div>
    );
}
export default ComponentA