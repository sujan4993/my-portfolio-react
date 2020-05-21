import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src='sujan_medium.jpg'
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap |JavaScript | Ract |Java | Python</p>
                            <div className='social-links'>
                                {/* LinkedIn*/}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"></i>
                                </a>
                                {/* GitHub*/}
                                <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"></i>
                                </a>

                                {/* Youtube*/}
                                <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default LandingPage;