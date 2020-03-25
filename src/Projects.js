import React, {Fragment} from 'react';
import "./App.css";
import BG from './bg1.svg'
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex
} from 'rebass';


import WebDev from './webdev1.svg';

const devConLink = "https://tranquil-dusk-99466.herokuapp.com/";
const githubFinderLink = "https://github-finder371.netlify.com/";

const Projects =()=> {
    return(
        <Fragment >
            <div id="projects">
            <Flex sx={{bg: "#c4c4c4"}}>
                <Box m={5} width={1/2}>
                <img style={{width:'75%',height:'80%',margin: '2rem', float:'right'}}src={WebDev} alt="WEb Dev"></img>
                </Box>
                <Box p={3} width={2/3} sx={{textAlign:'center', margin: 'auto'}}>
                <div className="text-left">
                <Text className="x-large p-1 name-strong"><strong>Projects</strong></Text>
                <Text className="p-1 lead">Check out some of my designs and projects so far!<br/> Contact me now and let's collaborate on a new project!</Text>
                </div>

                </Box>
                
            </Flex>
            <img src={BG} alt="BG"></img>
            
            <div style={{
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