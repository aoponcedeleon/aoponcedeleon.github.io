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

const devConLink = "https://tranquil-dusk-99466.herokuapp.com/";
const githubFinderLink = "https://github-finder371.netlify.com/";

const Projects =()=> {
    return(
        <Fragment>
            <div id="projects">
            <div className="large text-center p-3">Projects</div>
             <div style={{
            backgroundColor:'#f4f4f4',
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gridGap: "1rem"
            }}>
            
            <div className="card text-center">
                <i className="fas fa-terminal fa-7x"></i>
                <h1><a className="on-white" href={devConLink}>DevConnector</a></h1>
                <br />
                <Text>Fully functioning sort of social media for Developers to stay connected.</Text>
                <Text>Implemented with ReactJS with Redux, NodeJS together with MongoDB</Text>
                <a className="on-white text-success" href="https://github.com/aoponcedeleon/backtofront">Github Link</a>
            </div>
            <div className="card text-center">
                <i className="fab fa-github-alt fa-7x"></i>
                <h1><a className="on-white" href={githubFinderLink}>Github Finder</a></h1>
                <br />
                <Text>Web App for searching Github Users</Text>
                <Text>Implemented with ReactJS and Github API</Text>
                <a className="on-white text-success" href="https://github.com/aoponcedeleon/github-finder">Github Link</a>
            </div>
            <div className="card text-center">
                <i className="fas fa-biohazard fa-7x"></i>
                <h1>PvZ</h1>
                <br />
                <Text>Plants vs Zombies clone made for a class</Text>
                <Text>Implemented with Java OOP and graphics were made in Photoshop</Text>
                <a className="on-white text-success" href="https://github.com/aoponcedeleon/PvZ">Github Link</a>
            </div>
            <div className="card text-center">
                <i className="fas fa-folder-open fa-7x"></i>
                <h1>EasyFSR</h1>
                <br />
                <Text>Web APP made to easily store a faculty's service records and documents. Made collaboratively with my section for a course</Text>
                <Text>Implemented with ReactJS and Redux.</Text>
                <a className="on-white text-success" href="https://github.com/rrsilaya/easyfsr">Github Link</a>
            </div>
            <div className="card text-center">
                <i className="fas fa-ellipsis-h fa-7x"></i>
                <h1>WIP</h1>
                <Text>Am also currently working on other exciting stuff!</Text>
            </div>

        </div>
        </div>
        </Fragment>
    )
}

export default Projects;