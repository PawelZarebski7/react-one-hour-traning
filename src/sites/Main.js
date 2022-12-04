import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = () => {

  const adminName = 'Jan Nowak';

  const [newAdmin, setNewAdmin] = useState('Admin');

  console.log(newAdmin)

  const userList = [
    {
        name: 'Eliza',
        age: 32,
        work: 'FrontDev',
        salary: 150000
    },
    {
        name: 'Joanna',
        age: 22,
        work: 'FrontDev',
        salary: 120000
    },
    {
        name: 'Tomasz',
        age: 42,
        work: 'FullStack',
        salary: 200000
    }
  ]

  let numer = 10500;

  const addSomething = (num) => {
    return(
        console.log(num + 123)
    )
  } 

  return (
    <div>
        <Header/>
        <h1>Strona główna</h1>
        <hr />
        <h4>Administrator: {newAdmin}.</h4>
        <button onClick={() => {alert('Wysłano uwagi do administratora strony')}}>Wyślij uwagi</button>
        <button onClick={() => addSomething(numer)}>Dodaj do 123</button>
        <br /><br />
        <input 
            type="text" 
            placeholder="Zmień administratora" 
            onChange={(e) => setNewAdmin(e.target.value)}
        />
        <hr />
        <h5>Users: </h5>
        {
            userList.map((user, index) => {
                return(
                    <article key={index}>
                        <h4>{user.name}</h4>
                        <h5>{user.age}</h5>
                        <p>{user.work}</p>
                        <p>{user.salary}</p>
                    </article>
                )
            })
        }
        <hr />
        <Footer admin={newAdmin}/>
    </div>
  )
}

export default Main