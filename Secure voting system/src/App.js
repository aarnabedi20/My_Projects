import React, {Component} from 'react'
import {Link} from 'react-router'
import {HiddenOnlyAuth, VisibleOnlyAuth} from './util/wrappers.js'

// UI Components
import LoginButtonContainer from './user/ui/loginButton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutButton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component { //TODO: Add navigation for voting & vote count
    render() {
        const OnlyAuthLinks = VisibleOnlyAuth(() =>
                <span>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/vote" className="pure-menu-link">Vote</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/count" className="pure-menu-link">Vote Count</Link>
        </li>
        <LogoutButtonContainer/>
      </span>
        );

        const OnlyGuestLinks = HiddenOnlyAuth(() =>
                <span>
        <li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>
        <LoginButtonContainer/>
      </span>
        );

        return (
            <div className="App">
                <nav className="navbar pure-menu pure-menu-horizontal">
                    <ul className="pure-menu-list navbar-right">
                        <OnlyGuestLinks/>
                        <OnlyAuthLinks/>
                    </ul>
                    <Link to="/" className="pure-menu-heading pure-menu-link">VoteChain</Link>
                </nav>
                {this.props.children}
            </div>
        );
    }
}

export default App
