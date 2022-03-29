import PropTypes from 'prop-types'

function User(props){ // User({name, surname, isLoggedIn}) seklindede kullanilabilir
    
    if (!props.isLoggedIn) {
        return <div>Giris Yapmadiniz...</div>
    }

    return(
        <>
            <h2> Giris Basarili... </h2>
            { props.friends &&
                props.friends.map((friend, index) => (
                  <div key={index}> 
                    {index} - { friend } 
                  </div>
                ))
            }
            <br/>
            {props.age}
            <br/>
            {props.address.title} {props.address.zip}

        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn: false
}

export default User
