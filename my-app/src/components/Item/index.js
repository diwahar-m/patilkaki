import './style.css';
import {CgProfile} from 'react-icons/cg'
import {Link} from 'react-router-dom';
const Item=(props)=>{
    const {details,removeUser}=props; 
    const{id,name,gender,email}=details; 

    const deleteUser=(event)=>{
        const id1=event.target.id;
        removeUser(id1);
    }
    
    return(
        <li key={id}>
            <div key={id} className='list'> 
                <CgProfile size='60' className='icon'/>
                <div className='list2'>
                    <h3>Name: <span>{name}</span></h3> 
                    <p>Gender: <span>{gender}</span></p> 
                    <p>Email: <span>{email}</span></p>
                    <div>
                        <Link to="/edit" state={{details:details}}>
                            <button className='but1' id={id} type='button'>Edit</button>
                        </Link>
                        
                        <button  className='but2' id={id} type='button' onClick={deleteUser}>Delete</button>
                    </div>

                </div>
                 

            </div>
        </li>
    )
    
}

export default Item;