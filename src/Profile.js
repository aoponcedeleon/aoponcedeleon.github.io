import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import "./App.css";
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
  Flex
} from 'rebass';

const avatarDest = "https://avatars2.githubusercontent.com/u/28593720?s=400&u=99b29f4ebeb377b6275c7847b3dd69de3fdd1137&v=4";
const githubDest = "https://github.com/aoponcedeleon";
const twitterDest = 'https://twitter.com/allenponsiii';
const facebookDest = 'https://www.facebook.com/allen.p.deleon/';


const Profile = () => {
  return (
    <Fragment>
        <Box
        sx={{
            px: 3,
            py: 5,
            backgroundImage: 'url(https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2050&q=80)',
            backgroundSize: 'cover',
            color: 'white',
            bg: 'gray',
            
        }}
        >
        <Flex className="all-center">
        <Image src={avatarDest} variant='avatar' sx={{
            width: '10rem',
            height: '10rem',
            borderRadius: '100%'
        }}/>
        <div className="card text-center">
          <Text className="large p-1">Allen O. Ponce de Leon</Text>
          <div className='badge badge-success'>Hireable <i className='fas fa-check' /></div>
          <div className='badge badge-primary'>Freelance</div>
          <div className='badge badge-dark'>Part-time</div>
          <Text className="lead" >BS Computer Science</Text>
          <Text className="lead" >University of The Philippines</Text>  
          <div>
            <a href={githubDest} ><i className="fab fa-github fa-2x p" /></a>
            <a href={twitterDest} ><i className="fab fa-twitter fa-2x p" /></a>
            <a href={facebookDest} ><i className="fab fa-facebook-f fa-2x p" /></a>
          </div>
        </div>
        </Flex>
      </Box>
      <div style={{backgroundColor:'#333333'}}>
        <Box
            sx={{
            display: 'grid',
            gridGap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
            }}
        >
            <Text className="large text-right" px={3} py={6} color="white"><i className="fas fa-info-circle" />   About Me</Text>
            <Box className="text-left two" px={5} py={6} color='white'>
                <Text >I am a Philippines based Developer. I mainly have experience in Full-Stack Web Development and Game Development.</Text>
                <br/>
                <Text >It's certainly a dream of mine to be part of web developers or game developers who emphasize the latest technologies and innovation while collaborating to the fullest extent</Text>
                <br/>
                <Text className="lead">Contact</Text>
                <Text>aoponcedeleon@up.edu.ph | allenpdl75@gmail.com</Text>
                <Text>+639771037244</Text>
            </Box>
            
        </Box>
      </div>


      <div style={{backgroundColor:'#f4f4f4'}}>
        <Box
            sx={{
            display: 'grid',
            gridGap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRow: 'auto',
            }}
        >
            <Text className="lead text-right one" px={3} py={4} my={3} color="#333333"><i className="fas fa-user-graduate" />   Education</Text>
            <Box className="text-left two" px={5} py={4} my={3} color='#333333'>
                <Text className='lead'>College</Text>
                <Text className='text-dark'>University of The Philippines Los Banos</Text>
                <Text className='text-dark'><em>BS Computer Science</em> ● 2015 - Present</Text>
                <Text>Mainly crafted majority of my portfolio in my stay in UP. The university taught us not only one major of software development, but gave us fundamentals in different disciplines such as Game Development, Web Development, Data Science, etc.</Text>
                <br/>
                <Text className='lead'>High School</Text>
                <Text className='text-dark'>Rogationist College</Text>
                <Text className='text-dark'>2012 - 2015</Text>
                <Text>Coding courses in high school were mostly the basics. I had to study on my own if I had to get deeper knowledge about development at this point.</Text>
            </Box>  
            <Text className="lead text-right" px={3} py={4} my={3} color="#333333"><i className="fas fa-briefcase" />   Work</Text> 
            <Box className="text-left four" px={5} py={4} my={3} color='#333333'>
                <Text className='lead'>Chatbot PH</Text>
                <Text className='text-dark'><em>Full Stack Developer Intern</em> ● June 2019 - July 2019</Text>
                <Text className='text-dark'>Mainly dove into tasks relating to Front-End Development but also were given Back-End tasks. Also learned a significant amount about implementing chatbots</Text><br/>
                <Text className='text-dark'>Deepened my knowledge in ReactJS, Redux, Context API, Python, Messenger API for Chatbots</Text>
            </Box> 
        </Box>
      </div>
    </Fragment>

  );
}



export default Profile