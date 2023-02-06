import './style.css'; 
import {useNavigate} from 'react-router-dom';

import Item from '../Item';


const List =(props)=>{
  const navigate=useNavigate();

    const {userList,deleteUser}=props;

    const removeUser=(id)=>{
        deleteUser(id)
    }



    return(
        <div className='main-container'>
          <h1>Userlist</h1>
          <ul>
            {userList.map((each)=>{
              console.log(each.name);
              return <Item key={each.id} details={each} removeUser={removeUser} />
              }) 
              
            }
    
          </ul>
          <div className='but-con'>

            <button type="button" className='but3' onClick={()=>{navigate("/addUser")}}>Add User</button>
          </div>
        </div>
    
    
    
      )
} 

export default List;