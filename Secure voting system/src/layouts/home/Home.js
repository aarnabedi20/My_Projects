import React, {Component} from 'react'
import {Link} from 'react-router'
import {HiddenOnlyAuth, VisibleOnlyAuth} from '../../util/wrappers.js'
import {Carousel} from 'react-bootstrap'

import "../../css/site.css"
import "../../css/home.css"

import LoginButtonContainer from '../../user/ui/loginButton2/LoginButtonContainer'

class Home extends Component {
    render() {
        const OnlyGuestLinks = HiddenOnlyAuth(() =>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={1000} height={200} alt="Vote" src="/home/votehead.jpg" />
                        <Carousel.Caption>
                            <h2>Welcome to VoteChain</h2>
                            <Link to="/signup" className="pure-button">Get Started</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1>Main Menu</h1>
                <span>
                    <p>
                        You are not signed in to VoteChain. Please sign in below:
                </p>
                    <ul className="pure-menu-list">
                        <LoginButtonContainer />
                        <br />
                        <p>
                            Don't have an account yet? Sign up using the button below:
                    </p>
                        <li className="pure-menu-item">
                            <Link to="/signup" className="pure-button">Sign up</Link>
                        </li>


                    </ul>
                </span>
            </div>
        );
        const OnlyAuthLinks = VisibleOnlyAuth(() =>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img width={1000} height={200} alt="Vote" src="/home/votehead.jpg" />
                        <Carousel.Caption>
                            <h2>Welcome to VoteChain</h2>
                            <Link to="/vote" className="pure-button">Vote Now</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1000} height={200} alt="Vote" src="/home/map.jpg" />
                        <Carousel.Caption>
                            <h2>Worldwide elections have started</h2>
                            <p><Link to="/vote" className="pure-button">Vote Now</Link></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1>Main Menu</h1>
                <span>
                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><Link to="/profile" className="pure-button">Profile</Link></li><br/>
                        <li className="pure-menu-item"><Link to="/vote" className="pure-button">Vote</Link></li><br/>
                        <li className="pure-menu-item"><Link to="/count" className="pure-button">Vote Count</Link></li>
                    </ul>
                </span>
            </div>
        );
        return (
            <main className="container">
                <div className="pure-g">
                    <div className="pure-u-1-1 homeMenu">
                        <br />

                        <OnlyGuestLinks/>
                        <OnlyAuthLinks/>




                    </div>
                </div>
            </main>
        )
    }
}

export default Home
