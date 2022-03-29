import React, { useEffect, useState } from 'react';

function ComponentUnmount() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Component mount - unmount edildi.')
        
        const interval = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)

        return (() => clearInterval(interval))
    })
    return (
            <>
                <h1>Count: {count} </h1>
            </>
        )
}

export default ComponentUnmount;
