import {useContext} from 'react';
import { UserContextA} from './ComponentA.jsx';
function ComponentD(pros){
    
    const user = useContext(UserContextA);
    return(
        <div className='box'>
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}
export default ComponentD