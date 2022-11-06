import React,{useRef} from 'react'
import CONTACT from '../models/contact_class'

const FormNewContact= ({add})=> {

    const name=useRef("")
    const lastName=useRef("")
    const email=useRef("")

    function addContact(e){
      e.preventDefault()
      const newCont=new CONTACT (
          name.current.value,
          lastName.current.value,
          email.current.value
    )
      add(newCont)
    }

  return (
    <form onSubmit={addContact}>
        <p>New Contact</p>
        <label>Name</label>
        <input type="text" name="name" ref={name}></input>
        <label>Last Name</label>
        <input type="text" name="last-name" ref={lastName}></input>
        <label>Email</label>
        <input type="text" name="email" ref={email}></input>
        <button type="submit">Agregar</button>
    </form>
  )
}

export default FormNewContact
