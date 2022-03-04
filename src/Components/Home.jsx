import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () =>  {
    const [name, setName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleForm = () => {
        if(name != '' || roomName != "" || password != ""){
            window.sessionStorage.setItem("roomName", roomName);
            navigate('/oncall', {state : {name, roomName, password}});
        }else {
            alert('All inputs are should be filled !');
        }
    }


  return (
      <div className='homeContainer'>
          <div style={{color : 'white', fontSize : 20,marginTop: '5rem' }}>Make a Video Call</div>
          <form className='formContainer'>
                <div className='formLabels'>
                    <div className='form-label'>
                        <label for = 'name'>Name</label>
                        <input name='name' type="text" onChange={(e) => setName(e.target.value)}  placeholder='Rohit'  />
                    </div>
                    <div className='form-label'>
                        <label for = 'name'>Room Name</label>
                        <input name='name' type="text" onChange={(e) => setRoomName(e.target.value)}  placeholder='bw-45-tr'  />
                    </div>
                    <div className='form-label'>
                        <label for = 'password'>Password</label>
                        <input name='password' type="password" onChange={(e) => setPassword(e.target.value)}  placeholder='bw-45-tr'  />
                    </div>
                </div>
                <div className='btn' onClick={() => {handleForm()}}> Call</div>
          </form>
          
      </div>
  )
}

export default Home;