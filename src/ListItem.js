//destructing props from below:
//const user = props.user;
//to {user}

export default function ListItem({user,picked, setSelectedUser, saveUser}){
   
    //create a copy to store the change on the objects temporary
    const tempUserForEditing = { ...user};



   //using if statement 
   if(picked === user.uid){
   //if user Id is = picked (state)
    return ( 
    <li className="user">

        {/* comment: when there is any change in onInput(), it will update the tempUserForEditing */}
    <input className="name" defaultValue={user.full_name} onInput={(ev) => tempUserForEditing.full_name = ev.target.value}/>
    <input className="email" defaultValue={user.email} onInput={ (ev) => tempUserForEditing.email = ev.target.value}/>
    <div className="buttons">
        <button className="btnSave" onClick={() => saveUser(tempUserForEditing)}>Save</button>
        <button className="btnCancel" onClick={() => setSelectedUser(null)} >Cancel</button>
    </div>
</li>)

   }else {
   

    /* adding a arrow function inside the onclick for user to obtain the userId */
    return (
        <li className="user">
            <h2 className="name">{user.full_name}</h2>
            <p className="email">{user.email}</p>
            <div className="buttons">
                <button className="btnEdit" onClick={ () =>setSelectedUser(user.uid) }>EDIT</button>
            </div>
        </li>
    )


}
}