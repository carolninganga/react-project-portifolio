import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class landingPage extends Component {
    render() {
        return (
            <div style={{width: '100', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                        src="https://cdn.glitch.com/823d971b-2ee5-4e17-bb98-ec24b973c4c0%2Fcaroline.JPG?v=1593078287303"
                        alt="profilePic"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr />
                        <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS</p>
                        <div className="social-links">
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-linkedin-square" aria-hidden="true" />
                            </a>
                          
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-github-square" aria-hidden="true" />
                            </a>
                            
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-instagram-square" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                </Cell>   
            </Grid>   
            </div>
        )
    }
}

export default landingPage;