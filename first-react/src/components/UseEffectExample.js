import React, { useState, useEffect } from 'react';

function UseEffectExample() {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("Mustafa")

    // component mount
    useEffect( () => {
        console.log("State guncellendi.")
    }, []) // buradaki [] ler component mount edildigi ani yakalamak icin kullaniliyor.

    useEffect( () => {
        console.log("State guncellendi.")
    }, [number]) // parantez yok ise herhangi bir state guncellenirse calisir
    // parantez var ve icinde bir state parametresi girilmis ise sadece ilgili state dinlenir

    
    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Increase</button>
        </>
    );
}

export default UseEffectExample;
