import {useState} from 'react';
import axios from 'axios';

let Admin = () => {
  const [users, setUsers] = useState([]);
  const [inputRemove, setInputRemove] = useState('');
  const [inputUpdate, setInputUpdate] = useState('');
  const [inputNewPass, setInputNewPass] = useState('');
  // const [form, setValues] = useState({
  //   username: "",
  //   password: "",
  // });



  let getUsers = () => {
    axios.get('http://localhost:3030/Login')
    .then((res)=>{
      setUsers(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  let renderUsers=()=>(
    users.map((user,idx)=><li key={idx}>{user.username}</li>)
    )

  let handleChange3=(e)=>{
    setInputRemove(e.target.value)
    console.log(inputRemove)
  }

  let handleChange4=(e)=>{
    setInputUpdate(e.target.value)
  }

  let handleChange5=(e)=>{
    setInputNewPass(e.target.value)
  }


  let removeUser=()=>{
    axios.post('http://localhost:3030/Login/remove', {username:inputRemove})
    .then((res) => {
      console.log(res.data)
      alert(`User ${res.data.name} was removed`)
      setInputRemove('')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  let updateCart=()=>{
    axios.post('http://localhost:3030/Login/update', 
      {username:inputUpdate, product: inputNewPass})
    .then((res) => {
      console.log(res.data)
      setInputUpdate('');
      setInputNewPass('');
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return(
  <>
      <div className="container">
      <h1>Get Users</h1>
      <button onClick={getUsers}>display</button>
      <ul>
      {renderUsers()}
      </ul>
      </div>

      <div className="container">
      <h1>Remove User</h1>
      <input value={inputRemove} onChange={handleChange3}
      placeholder="user"/>
      <button onClick={removeUser}>Delete</button>
      </div>

      <div className="container">
      <h1>AddItemToCart</h1>
      <input value={inputUpdate} onChange={handleChange4}
      placeholder="user"/>
      <input value={inputNewPass} onChange={handleChange5}
      placeholder="new password"/>
      <button onClick={updateCart}>Update</button>
      </div>
  </>
  )
}

export default Admin