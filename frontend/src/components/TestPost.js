import React, { useState } from 'react';
import Axios from "axios";

function TestPost() {
  const [form, setForm] = useState({name: 'Name', age: 14});
  const submit = async function(e){
    e.preventDefault();
    await Axios.post('http://localhost:3000/contact', form);
  }
  const handleChange = function(e){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return <div>
    <form method="post">
      <div>
        <span>Name</span>
        <input type="text" name="name" value={form.name} onChange={handleChange}/>
      </div>
      <div>
        <span>Age</span>
        <input type="text" name="age"  value={form.age} onChange={handleChange}/>
      </div>
      <div>
        <button type="submit" onClick={submit}>Add</button>
      </div>
    </form>
  </div>
}

export default TestPost;
