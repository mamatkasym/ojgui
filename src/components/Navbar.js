import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './css/navbar.scss'
import { connect } from "react-redux";
import StyledLink from './Component'
import UserMenu from "./user/UserMenu";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showUserMenu: false,
        }
    }

    handleLogout = (event) => {
        this.props.logout();
    }


    render() {
        const login_nav = (
            <div className="authBar">
                <ul>
                    <StyledLink to='/register' className='link'>
                        <li>Register</li>
                    </StyledLink>
                    <StyledLink to='/login' className='link'>
                        <li>Login</li>
                    </StyledLink>
                </ul>
            </div>
        );

        const logout_nav = (
            <div className='authBar'>
                <UserMenu username={this.props.username}/>
            </div>
        );
        return(
                <nav className='navbar'>
                    <ul>
                        <StyledLink to='' className='link'><li>Home</li></StyledLink>
                        <StyledLink to='/problems' className='link'><li> Problems </li></StyledLink>
                        <StyledLink to='/contests' className='link'><li>  Contests </li> </StyledLink>
                        <StyledLink to='/articles' className='link'><li> Articles </li></StyledLink>
                       <StyledLink to='/blogs' className='link'>  <li> Blogs </li></StyledLink>
                    </ul>

                    { this.props.isAuthenticated ? logout_nav : login_nav }
                </nav>
        )
    }
}



const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        username: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return{
        logout: () => dispatch({type: 'LOGOUT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
