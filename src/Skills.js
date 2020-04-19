import React, {Fragment} from 'react';
import "./App.css";
import {
  Box,
  Text,
  Flex
} from 'rebass';

const Skills =()=> {
    return(
        <Fragment>
            <div className="large text-center p-3" id="skills">Skills and Programming Languages</div>
            <Flex flexWrap='wrap'  sx={{
                      textAlign: 'center',
                      width: '85%',
                      margin: 'auto',
                      boxShadow: '6px 6px 15px #888888'
            }}>
             
            
            <Box px={2} py={2} className="card text-center" width={[1, 1/2, 1/3]}>
          
                <i className="fab fa-react fa-7x"></i>
                <Text as='h1' >ReactJS< /Text>
                <Text>along with Redux/Context API and other component libraries</Text>
            
            </Box>
            <Box px={2} py={2}  className="card text-center" width={[1, 1/2, 1/3]}>
               
                <i className="fab fa-html5 fa-7x"></i>
                <Text as='h1' >HTML5< /Text>
                <Text>What started it all.</Text>
                
            </Box>
            <Box px={2} py={2}  className="card text-center" width={[1, 1/2,  1/3]}>
                
                <i className="fab fa-css3-alt fa-7x"></i>
                <  Text as='h1' >CSS3< /Text>
                <Text>Layouts and <em>some</em> knowledge in CSS Animations</Text>
            </Box>
            <Box px={2} py={2}  className="card text-center" width={[1, 1/2,  1/3]}>
       
                <i className="fab fa-js fa-7x"></i>
                <  Text as='h1' >JavaScript< /Text>
                <Text>Vanilla JavaScript. (Mainly learned from CodeAcademy days)</Text>
            
            </Box>
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="fab fa-java fa-7x"></i>
                <  Text as='h1' >Java< /Text>
                <Text>with main experience in Game Development and Solver Applications (Netbeans/Vanilla Java)</Text>
            </Box>
            
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="fab fa-python fa-7x"></i>
                <  Text as='h1' >Python< /Text>
                <Text>main experience being AI Solutions and Applications</Text>
            </Box>
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="far fa-registered fa-7x"></i>
                <  Text as='h1' >RStudio< /Text>
                <Text>main experience being Data Problem Solvers (Regression, Spline Interpolation, Simplex Solver, etc.)</Text>
            </Box>
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="fas fa-copyright fa-7x"></i>
                <  Text as='h1' >C/C++< /Text>
                <Text>Main PL we used in College. Tackled pointers, solution solvers, and other applications</Text>
            </Box>
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="fab fa-github-alt fa-7x"></i>
                <  Text as='h1' >Git< /Text>
                <Text>Main version control solution I use is Github</Text>
            </Box>
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="fab fa-node fa-7x"></i>
                <  Text as='h1' >NodeJS< /Text>
                <Text>Fundamentals of Back-End Development</Text>
            </Box>
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="fab fa-adobe fa-7x"></i>
                <  Text as='h1' >Photoshop | Premiere< /Text>
                <Text>Experience in creating Publications and Videos for the public relations</Text>
            </Box>
            <Box px={2} py={2} className="card text-center" width={[1, 1/2,  1/3]}>
                <i className="fas fa-ellipsis-h fa-7x"></i>
                <  Text as='h1' >WIP< /Text>
                <Text>Am also currently learning other languages</Text>
            </Box>

     
        </Flex>
        </Fragment>
    )
}

export default Skills;