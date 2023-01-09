import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { usersApi } from './components/api/users_api';

// Тут список пользователей: https://reqres.in/api/users


function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [invite, setInvite] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const response = usersApi.fetchUsers()
      response.then(data => data.data).then(data => {
        setUsers([...data.data]);
      })
    } catch (e) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  }, []);


  const inviteUsers = (id) => {
    if(invite.includes(id)) {
      setInvite(prevState => prevState.filter((_id) => _id !== id))
    } else {
      setInvite(prevState => [...prevState, id]);
    }
  }

  const updateSucces = (success, reset) => {
    if(reset === 1) {
      setSuccess(success);
      setInvite([]);
    }
    setSuccess(success);
  }

  return (
    <div className="App">
      {
        success ? <Success count={invite.length} updateSucces={updateSucces}/> : <Users users={users} isLoading={isLoading} inviteUsers={inviteUsers} invite={invite} updateSucces={updateSucces} count={invite.length}/>
      }      
      
    </div>
  );
}

export default App;
