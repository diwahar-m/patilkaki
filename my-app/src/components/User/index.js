import './style.css'; 
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom';
const User=(props)=>{ 
    const navigate = useNavigate();
    const {createUser}=props;
    const[name,updateName]=useState('');
    const[gender,updateGender]=useState('Female');
    const[mail,updateMail]=useState('');
    const[error,updateError]=useState('')
    
    const updateUser=(event)=>{
        event.preventDefault(); 
        if(name==='' || mail===''){
            updateError('*Please enter all details');
        }else{
            updateError('');
            const user={
                id:uuidv4(),
                name:name,
                gender:gender,
                email:mail
            }
            createUser(user);
            navigate("/")
        }
    }


    return(
        <div className='user-con'>
            <h1>USER DETAILS</h1>
            <form onSubmit={updateUser}>
               <label>Name: </label>
                <div className='inputBox'>

                    <input type='text' placeholder="Enter Name..." onChange={(event)=>{updateName(event.target.value)}}/>
                    
                </div>
            
            
                <label>Gender: </label>
               
                    <select onChange={(event)=>{updateGender(event.target.value)}}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Others">Others</option>
                    </select> 
               
            
                <label>Email: </label>
                <div className='inputBox'>
                    <input type='text' placeholder="Enter mailId..." onChange={(event)=>{updateMail(event.target.value)}} />
                </div>
                <div className='butCover2'>
                    <button className='but4' type="submit" >Add</button>
                </div>
            </form>
            <p className='p1'>{error}</p>
        </div>

    )
}

export default User;