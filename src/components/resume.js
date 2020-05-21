import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    state = {  }
    render() { 
        return (
            <div> 
               <Grid>
                   <Cell col={4}>
                       <div style={{testAlign:'center'}}>
                           <img
                           src="sujan.jpg"
                           alt="avatar"
                           style={{height:'200px'}}
                           />
                       </div>
                       <h2 style={{paddingTop:'2em'}}>Sujan Adhikari</h2>
                       <h4 style={{color:'gray'}}>Programmer</h4>
                       <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                       <hr  style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                       <h5>Address</h5>
                       <p>1 Bharatpur, Chitwan Nepal</p>
                       <h5>Phone</h5>
                       <p>0977-9849383175</p>
                       <h5>Email</h5>
                       <p>sujan@gmail.com</p>
                       <h5>Web</h5>
                       <p>sujan4993.com</p>
                       <hr  style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                   </Cell>
                   <Cell className="resume-right-col" col={8}>
                       <h2>Education</h2>

                       <Education
                       startYear={2009}
                       endYear ={2013}
                       collegeName="nec,Pokhara University"
                       collegeDescription="Nepal Engineering College, popularly known as nec, was established in 1994 as a not-for-profit social academic institute under an initiative of seven philanthropists. The foundation of nec was laid by a group of visionary Nepalese professionals and academicians who realized the need of an institution."
                       degree="Bachelor in Engineering"

                       />
                       <Education
                       startYear={2015}
                       endYear ={2019}
                       collegeName="NCIT, Pokhara University"
                       collegeDescription="Nepal College of Information  Technology – NCIT, established in 2001, runs Pokhara University-affiliated Bachelor’s and Master’s programs – BE, BBA, ME, MSc & MCIS. Our  Engineering Degrees are approved by  the Nepal Engineering Council. It has  produced over a thousand engineers  since its establishment."
                       degree="Masters in Engineering"
                       />
                       <hr style={{borderTop:'3px solid #e22947'}}/>
                       <h3>Experience</h3>
                       <Experience
                        startYear ={2016}
                        endYear = {2019}
                        jobName = "Assistant Professor"
                        jobDescription ="An assistant professor is an entry-level university teaching position below that of associate professor and full professor. You can find work as an assistant professor in any department at a college or university."
                        organization ="Lumbini ICT College"
                       />
                       <Experience
                        startYear ={2019}
                        endYear = {2020}
                        jobName = "Developer"
                        jobDescription ="A developer is an individual that builds and create software and applications. He or she writes, debugs and executes the source code of a software application. A developer is also known as a software developer, computer programmer, programmer, software coder or software engineer."
                        organization="Creators Institute"
                       />
                       <hr style={{borderTop:'3px solid #e22947'}}/>
                       <h3>Skills</h3>
                       <Skills
                        skill="Java"
                        progress={100}
                       />
                       <Skills
                        skill="HTML/CSS"
                        progress={70}
                       />
                       <Skills
                        skill="JavaScript"
                        progress={80}
                       />
                       <Skills
                        skill="NodeJS"
                        progress={50}
                       />
                       <Skills
                        skill="React"
                        progress={50}
                       />
                    </Cell>                  
                </Grid> 
            </div>
         );
    }
}
 
export default Resume;