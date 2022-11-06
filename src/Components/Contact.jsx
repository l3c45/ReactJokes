import React,{useState} from "react";
import '../App.css';
import {FaTrashAlt,FaToggleOff,FaToggleOn,FaPlusCircle}  from "react-icons/fa";

const Contact =({contact,remove,toggle})=>{

    const [open, setOpen] = useState(false)

    const openContact= () => {
     
     setOpen(!open)

        }

    return (
        <div className= {open?"contact open":"contact"}>
            <h2>Name : {contact.name} </h2> 
            <FaPlusCircle onClick={()=>openContact()} 
                            className="icon-plus"/>
            <h3>Surname : {contact.surname}</h3>
            <h3>Email : {contact.email}</h3>
            <h4>{contact.status?"Conectado":"Desconectado"}</h4>
            <FaTrashAlt onClick={()=>remove(contact)}
                        className="icon-trash" 
                        style={{color:"red"}}/> 


           { !contact.status ?
            
            <FaToggleOff 
             onClick={()=>toggle(contact)}
            className="icon-toogle" 
            />

            :

            <FaToggleOn
             onClick={()=>toggle(contact)}
            className="icon-toogle" 
            />}


           
        </div>
    )
}

export default Contact