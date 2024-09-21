import React,{useState} from 'react';
import axios from 'axios';
import './home.css';
const Home = () => {
    const [data,setdata]=useState({
      firstname:"",
      lastname:"",
      email:"",
      number:""
    })
    const {firstname,lastname,email,number}={...data}
    const changehandler =e=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submithandler = async(e) =>{
        e.preventDefault();
        await axios.post('https://formsubmission-3297b-default-rtdb.firebaseio.com/reg.json',data).then(()=>alert("Data Added"))
        setdata({
            firstname:"",
            lastname:"",
            email:"",
            number:""
        })
    }
  return (
    <div>
      <div className='head'>
        <h3 className='textmod'>Register Form</h3>
      </div>
      <div className='container'>
      <form onSubmit={submithandler} autoComplete='off'>
      <div className="form-floating mb-3">
          <input type="text" className="form-control" name='firstname' id="floatingInput" value={firstname} onChange={changehandler} placeholder="firstname"/>
          <label for="floatingInput">First name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name='lastname' id="floatingInput" value={lastname} onChange={changehandler} placeholder="Lastname"/>
          <label for="floatingInput">Last name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" name='email' id="floatingInput" value={email} onChange={changehandler} placeholder="email"/>
          <label for="floatingInput">email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name='number' id="floatingInput" value={number} onChange={changehandler} placeholder="mobile"/>
          <label for="floatingInput">Mobile number</label>
        </div>
        <input class="btn btn-primary" type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
  )
}

export default Home
