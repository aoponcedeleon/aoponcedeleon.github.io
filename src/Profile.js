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
            backgroundImage: 'url(https://source.unsplash.com/random/1920x1080?stars)',
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
                <Text >I am a Philippines based Developer. I mainly have experience in Front-end Development and Full-Stack as well.</Text>
                <br/>
                <Text >It's certainly a dream of mine to be part of web developers or game developers who emphasize the latest technologies and innovation while collaborating to the fullest extent</Text>
                <br/>
                <Text className="lead">Contact</Text>
                <Text>aoponcedeleon@up.edu.ph | allenpdl75@gmail.com</Text>
                <Text>+639771037244</Text>
            </Box>
            
        </Box>
      </div>
    </Fragment>

  );
}



export default Profile