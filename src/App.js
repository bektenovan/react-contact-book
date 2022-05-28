import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ContactsList from './components/ContactsList';
import AddContacts from './components/AddContacts';
import axios from 'axios';
import EditContact from './components/EditContacts';
import Details from './components/Details';
import Footer from './components/Footer';
import CaruselIntro from './components/CaruselIntro';


const App = () => {
  const API = 'http://localhost:8000/contacts';
  
const [contacts, setContacts] = useState([]);
const [oneContact, setOneContact] = useState(null)

function handleAddContact(newContact){
 axios.post(API, newContact)
}

async function getContacts(){
  let result = await axios.get(API)
  console.log(result);
  setContacts(result.data)
}
async function deleteContact(id){
  await axios.delete(`${API}/${id}`)
 getContacts();
 }
 async function getOneContact(id){
  let result = await axios.get(`${API}/${id}`) 
  // console.log(result);
  setOneContact(result.data)
  }
  async function updateContacts(id, editedContact){
    await axios.patch(`${API}/${id}`, editedContact)
    getContacts()
  
   }

  return (
     <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<> <CaruselIntro /> <ContactsList getContacts={getContacts} contacts={contacts} deleteContact={deleteContact}/> <Footer />  </>} />
      <Route path='/add' element={ <> <AddContacts handleAddContact={handleAddContact} /> <Footer />  </>}/>
      <Route path='/edit/:id' element={ <><EditContact getOneContact={getOneContact} oneContact={oneContact} updateContacts={updateContacts}/> <Footer /> </>}/>
      <Route path='/details/:id' element={<><Details  getOneContact={getOneContact} oneContact={oneContact} />  <Footer /> </>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;