import './style.css'; 
import {useState,useEffect} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';

const Edit=(props)=>{ 
    const location=useLocation();
    console.log(location.state.details);
    const detail=location.state.details;
    const {id,name,gender,email}=detail;
    const navigate = useNavigate();
    const {updateUser}=props;
    const[name1,updateName]=useState('');
    const[gender1,updateGender]=useState('Female');
    const[mail1,updateMail]=useState('');
    const[error,updateError]=useState('')
    
    useEffect(()=>{

        updateName(name);
        updateGender(gender); 
        updateMail(email);

    },[])
    const editUser=(event)=>{
        event.preventDefault(); 
        if(name1==='' || mail1===''){
            updateError('*Please enter all details');
        }else{
            updateError('');
            const user={
                id:id,
                name:name1,
                gender:gender1,
                email:mail1
            }
            updateUser(user);
            navigate("/")
        }
    }


    return(
        <div className='user-con'>
            <h1>EDIT DETAILS</h1>
            <form onSubmit={editUser}>
               <label>Name: </label>
                <div className='inputBox'>

                    <input type='text' placeholder="Enter Name..." value={name1} onChange={(event)=>{updateName(event.target.value)}}/>
                    
                </div>
            
            
                <label>Gender: </label>
               
                    <select value={gender1} onChange={(event)=>{updateGender(event.target.value)}}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Others">Others</option>
                    </select> 
               
            
                <label>Email: </label>
                <div className='inputBox'>
                    <input type='text' placeholder="Enter mailId..." value={mail1} onChange={(event)=>{updateMail(event.target.value)}} />
                </div>
                <div className='butCover'>

                    <button className='but5' type="submit" >Change</button>
                </div>
            </form>
            <p className='p1'>{error}</p>
        </div>

    )
}

export default Edit;