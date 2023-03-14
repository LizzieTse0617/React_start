//the add user component

export default function AddUser(){

const tempUser = {
    uid:'',
    full_name:'',
    email:''
}

function saveUser(){

    //update tempUser with uid crypto.randomUUID()
    //let newId = self.crypto.randomUUID();
    //tempUser.uid.push( newId )
    
    //update tempUser with uid crypto.randomUUID()
    //call the function inside APP.js to add the new user
    //clear the form
    //reset tempUser back to empty Strings
    
    }

return (


<div>   
        <input className="name" 
        defaultValue="" 
        onInput={(ev) => tempUser.full_name = ev.target.value}/>

        <input className="email" 
        defaultValue=""
        onInput={ (ev) =>tempUser.email = ev.target.value}/>



        <div className="buttons">
        <button className="BtnAdd">Add</button>
            {/* <button className="BtnAdd" onClick={() => saveUser(tempUser)}>Add</button> */}
        </div>

    

    </div>  


);

}
