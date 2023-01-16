import './App.css';
import React from 'react';

function App() {

  let [name, setName] = React.useState("");
  let [age,setAge] = React.useState("");
  let [email, setEmail] = React.useState("")

  function handleSubmit(event){
    event.preventDefault();
    console.log(name, age, email)
  }

  return (
    <div className="App">
      <h1>User's Data</h1>
      <p>Please Fill The Below Data</p>
      <form onSubmit={handleSubmit}>
        <label>Please Enter Your Name : </label><br/>
        <input value={name} type="text" name="FullName" onChange={(event)=>setName(event.target.value)} />
        <br />
        <label>Please Enter Your Age  : </label><br />
        <input value={age} type="number" name="Age" onChange={(event)=>setAge(event.target.value)}/>
        <br />
        <label>Please Enter Your Email : </label><br />
        <input value={email} type="email" name="email" onChange={(event)=>setEmail(event.target.value)}/>
        <br />
        <input className="submitBtn" type="submit" value="Add"  />
      </form>
    </div>
  );
}

export default App;
