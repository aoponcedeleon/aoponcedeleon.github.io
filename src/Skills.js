import React, {Fragment} from 'react';
import "./App.css";
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex
} from 'rebass';

const Skills =()=> {
    return(
        <Fragment>
            <div id="skills">
            <div className="large text-center p-3">Skills and Programming Languages</div>
             <div style={{
            backgroundColor:'#f4f4f4',
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridGap: "1rem"
            }}>
            
            <div className="card text-center">
                <i className="fab fa-react fa-7x"></i>
                <h1>ReactJS</h1>
                <Text>along with Redux/Context API and other component libraries</Text>
            </div>
            <div className="card text-center">
                <i className="fab fa-html5 fa-7x"></i>
                <h1>HTML5</h1>
                <Text>What started it all.</Text>
            </div>
            <div className="card text-center">
                <i className="fab fa-css3-alt fa-7x"></i>
                <h1>CSS3</h1>
                <Text>Layouts and <em>some</em> knowledge in CSS Animations</Text>
            </div>
            <div className="card text-center">
                <i className="fab fa-js fa-7x"></i>
                <h1>JavaScript</h1>
                <Text>Vanilla JavaScript. (Mainly learned from CodeAcademy days)</Text>
            </div>
            <div className="card text-center">
                <i className="fab fa-java fa-7x"></i>
                <h1>Java</h1>
                <Text>with main experience in Game Development and Solver Applications (Netbeans/Vanilla Java)</Text>
            </div>
            
            <div className="card text-center">
                <i className="fab fa-python fa-7x"></i>
                <h1>Python</h1>
                <Text>main experience being AI Solutions and Applications</Text>
            </div>
            <div className="card text-center">
                <i className="far fa-registered fa-7x"></i>
                <h1>RStudio</h1>
                <Text>main experience being Data Problem Solvers (Regression, Spline Interpolation, Simplex Solver, etc.)</Text>
            </div>
            <div className="card text-center">
                <i className="fas fa-copyright fa-7x"></i>
                <h1>C/C++</h1>
                <Text>Main PL we used in College. Tackled pointers, solution solvers, and other applications</Text>
            </div>
            <div className="card text-center">
                <i className="fab fa-github-alt fa-7x"></i>
                <h1>Git</h1>
                <Text>Main version control solution I use is Github</Text>
            </div>
            <div className="card text-center">
                <i className="fab fa-node fa-7x"></i>
                <h1>NodeJS</h1>
                <Text>Fundamentals of Back-End Development</Text>
            </div>
            <div className="card text-center">
                <i className="fab fa-adobe fa-7x"></i>
                <h1>Photoshop | Premiere</h1>
                <Text>Experience in creating Publications and Videos for the public relations</Text>
            </div>
            <div className="card text-center">
                <i className="fas fa-ellipsis-h fa-7x"></i>
                <h1>WIP</h1>
                <Text>Am also currently learning other languages</Text>
            </div>

        </div>
        </div>
        </Fragment>
    )
}

export default Skills;