import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcomeMsg = <h2 className="welcome-message">
        Welcome {props.username} </h2>
    
    const loginPrompt = <h2 className="login-prompt">
        Please log in to continue </h2>

    return(props.isLoggedIn ? welcomeMsg : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting