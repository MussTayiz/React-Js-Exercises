import React, { useState } from 'react';

function ContactListApp() {

    const [list, setList] = useState({name: "asd", phoneNumber: "123"})
 
    return (
        <>
            <h1>Contact List App</h1>
            <br />
            <ul>
            {
            Object.entries(list).forEach((item, index) => {
                console.log(item)
            })}
            </ul>
        </>
    )
}

export default ContactListApp