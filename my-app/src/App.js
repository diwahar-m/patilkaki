import './App.css'; 
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
import List from './components/List';
import User from './components/User';
import Edit from './components/Edit';
import api from './api/userDetails';

export default function App(){
  

  const[userList,updateList] =useState([]); 
  console.log(userList);

  const getUserList=async()=>{
    const response = await api.get('/userDetails');
    console.log(response);
    return response;
  };

  const getAllList=async()=>{
    const getList=await getUserList(); 
    const data = await getList.data
    console.log(data);
    if (data) updateList([...data]);
  }; 

  const deleteUser=async(id)=>{
    await api.delete(`/userDetails/${id}`);
    const newUser = userList.filter((each)=>{
      return each.id!==id;
    }); 
    updateList(newUser);
  }

  useEffect(()=>{
    getAllList();
   
  },[]) 

  const createUser=async(user)=>{
    const response=await api.post("/userDetails",user); 
    updateList([...userList,response.data]);
  }

  const updateUser=async(detail)=>{
    const response=await api.put(`/userDetails/${detail.id}`,detail)
    const data1=response.data;
    const {id}=data1;
    updateList(userList.map((each)=>{
      return each.id===id ? {...data1} : each ;
    }))
  }



  return(
    <Router>
      <Routes>
        <Route path='/' exact element={<List userList={userList} deleteUser={deleteUser}/>}/>
        
        <Route path='/addUser' exact element={<User  createUser={createUser}/>}/>
        <Route path='/edit' exact element={<Edit updateUser={updateUser} />}/>

        
      </Routes>
    </Router>

  )


}


 