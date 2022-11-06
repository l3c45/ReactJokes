import React ,{useState}from "react";
import CONTACT from "../models/contact_class";
import Contact from "./Contact";
import FormNewContact from "./FormNewContact";

const ContactList = () => {

    const user1=new CONTACT("lucas","zarate","wds@gfg.com",false)
    const user2=new CONTACT("tomas","zarate","wds@gfg.com",false)
    const user3=new CONTACT("martina","zarate","wds@gfg.com",false)
    const user4=new CONTACT("sofia","zarate","wds@gfg.com",false)

    const [contactList, setContactList] = useState([user1,user2,user3,user4])
 
   
    const newCont=( contact )=>{
        const temp=[...contactList]
        temp.push(contact)
        setContactList(temp)
    }

    const removeContact = (contact)=>{
        const temp=[...contactList]
        const newArr=temp.filter(item=>item !== contact)
        setContactList(newArr)
    }

    const toggleStatus = (contact)=>{
        const temp=[...contactList]
        const i= temp.indexOf(contact)
        temp[i].status=!temp[i].status
        setContactList(temp)
    }

    return (
        <div className="container">
        <h1>Lista de contactos</h1>

        {contactList.map((item,index)=>{
           return  <Contact className="contact"
                            key={index}
                            contact={item}
                            remove={removeContact}
                            toggle={toggleStatus}> 
                    </Contact>
            
         })
        }
    
        <FormNewContact add={newCont}>
        </FormNewContact>
            
        </div>
    )
}

export default ContactList
