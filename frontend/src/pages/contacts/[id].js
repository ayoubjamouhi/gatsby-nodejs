import React,{useState, useEffect} from "react";
import { Link } from "gatsby";
import Axios from 'axios';
function ProductCatchAll({ params }) {
  const [contact, setContact] = useState({});
  useEffect(()=>{
    fetch('http://localhost:3000/contacts/'+params.id)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setContact(data);
    });
  },[]);
  const handleChange = function(e){
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    })
  };
  const submit = async function(e){
    e.preventDefault();
    await Axios.post('http://localhost:3000/contact', {name: contact.name, age: contact.age});
  }
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>Contact {params.name}</h1>
        <form method="post">
          <div>
            <span>Name</span>
            <input type="text" name="name" value={contact.name} onChange={handleChange}/>
          </div>
          <div>
            <span>Age</span>
            <input type="text" name="age" value={contact.age} onChange={handleChange}/>
          </div>
          <div>
            <button type="submit" onClick={submit}>Add</button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ProductCatchAll