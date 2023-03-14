
import './App.css';

//newly import
import USERS from './data/userdata';
import {useState} from 'react';
import ListItem from './ListItem';


function App() {

  //step1# create state variable for useStates , first one: 'users' are just name, setUsers are vary due to the states
const [users, setUsers] = useState(USERS);

//step2# no selected user when the app loads, User must click an edit button first to set (set null first)
const [selectedUser, setSelectedUser] = useState('a74f7d01-9f6b-435c-9d7b-4ebfeca8b765');

//step4# adding fucntion here, allow you to update state later
function saveUser(newUser){
  //update user here
  let updatedUsers = users.map( (user) => {
    if (user.uid === newUser.uid){
      return newUser
    } else {
      return user;
    }
  })
setUsers(updatedUsers);
setSelectedUser(null);
}


  return (
    <div className="App">
     <h1>State and Events</h1>

     {/* step3# import user items here, and also add a key inside the ListItem for identification , also set function here to handle multiple files, also we have the saveUser function state*/}
     <ul className="userList">
      {users.map(user => <ListItem key={user.uid} saveUser={saveUser} picked={selectedUser} user={user} setSelectedUser={setSelectedUser}/>)}
     </ul>
    </div>
  );
}

export default App;
