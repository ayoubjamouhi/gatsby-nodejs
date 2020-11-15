import React,{useState, useEffect} from 'react';
import { Link } from 'gatsby';

export default function ContactsComp() {
  const [contacts, setContacts] = useState([]);
  useEffect(()=>{
    /*async function fetchData() {
      const contacts = await Axios.get('http://localhost:3000/contacts');
      console.log(contacts);
      setContacts(contacts);
    }*/
    fetch('http://localhost:3000/contacts')
      .then(res => res.json())
      .then(data =>
        setContacts(data)
        );

  }, []);

  return (
    <div>
      <table>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Age</td>
            <td>url</td>
          </tr>
      {contacts.map(contact => {
        return (
          <tr>
            <td></td>
            <td>{contact.name}</td>
            <td>{contact.age}</td>
            <td><Link to={"/contacts/"+contact._id}>Link</Link></td>
          </tr>
        );
      })}
      </table>
    </div>
)};
