import React, {Fragment} from 'react';
import Skills from './Skills';
import Projects from './Projects';
import ScrollAnimation from 'react-animate-on-scroll';
import "./App.css";
import Modal from 'react-modal';
import {
  Box,
  Image,
  Text,
  Flex
} from 'rebass';
import ContactForm from './ContactForm';

Modal.setAppElement('#root')

const avatarDest = "https://avatars2.githubusercontent.com/u/28593720?s=400&u=99b29f4ebeb377b6275c7847b3dd69de3fdd1137&v=4";
const githubDest = "https://github.com/aoponcedeleon";
const twitterDest = 'https://twitter.com/allenponsiii';
const facebookDest = 'https://www.facebook.com/allen.p.deleon/';


const Profile = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  return (
    <Fragment className='body-content'>
        <Flex
        sx={{
            px: 3,
            py: 5,
            backgroundImage: 'url(https://images.unsplash.com/20/dusty-sky.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80)',
            backgroundSize: 'cover',
            color: 'white',
            bg: 'gray',
            flexWrap:'wrap'
            
        }}
        >
          <Box p={2} width={[1,1/3]} sx={{
            textAlign: 'right',
            '@media screen and (max-width: 666px)': {
              float: 'none',
              textAlign: 'center',
            }
          }}>
            <Image src={avatarDest} variant='avatar' sx={{
                width: '40%',
                height: 'auto',
                borderRadius: '100%',
                margin: '1rem .5rem',
                '@media screen and (max-width: 666px)': {
                  width: '50%',
                  margin: '1rem .5rem'
                },

                '@media screen and (max-width: 900px)': {
                  width: '50%',
                  margin: '1rem .5rem'
                }
            }}/>
          </Box>
          <Box px={5} width={[1,2/3]} sx={{
            margin: 'auto',
            textAlign: 'left',
            '@media screen and (max-width: 666px)': {
              textAlign: 'center',
              p:'2'
            }
            
            }}>
          <div id="profile">
          <Text className="x-large p-1 name-strong"><strong>
            <div>
              Hi, I'm Allen!
            </div>
            
            
            </strong></Text>
          <div className='badge badge-success'>Hireable <i className='fas fa-check' /></div>
          <div className='badge badge-primary'>Freelance</div>
          <div className='badge badge-dark'>Web Developer</div>
          <div className='badge badge-dark'>Web Designer</div>
          <div className='badge badge-dark'>Programmer</div>
          <Text p={2}><em>BS Computer Science</em> &nbsp; ● &nbsp; University of The Philippines</Text>
          <div>
            <a href={githubDest} ><i className="fab fa-github fa-2x p" /></a>
            <a href={twitterDest} ><i className="fab fa-twitter fa-2x p" /></a>
            <a href={facebookDest} ><i className="fab fa-facebook-f fa-2x p" /></a>
          </div>
        </div>
          </Box>
        
      </Flex>
      
      <div className='about-section' id="about">
        <Flex mx={-3} flexWrap='wrap'>
            <Box px={2} py={[5,5]} my={3} width={[1,1/3]} height={2}  color="white" sx={{
              fontSize: '3rem',
              lineHeight: '1.2',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              <Text sx={{
              textAlign: 'right',
              '@media screen and (max-width: 666px)': {
                textAlign: 'center'
              }
            }}> About Me</Text>
            </Box>
            <Box className="two" px={5} py={[1,4]} my={[1,4]} width={[1,2/3]}  color='white' sx={{
              textAlign: 'left',
              '@media screen and (max-width: 666px)': {
                textAlign: 'center'
              }
            }}>
                <Text >I am a Philippines based Developer. I mainly have experience in Full-Stack Web Development and Game Development.</Text>
                <br/>
                <Text>I also have experience editing, handling, and managing the outputs and release of various publication designs for my school organizations (YES UP, CPS Triangle, UPLB Men's Basketball Team).</Text>
                <Text >It's certainly a dream of mine to be part of web developers or game developers who emphasize the latest technologies and innovation while collaborating to the fullest extent</Text>
                <br/>
                <Text>
                    I also like to play basketball and <em>a lot</em> of video games! I like to grind in CSGO, Dota, and LoL while also
                    trying to play the latest AAA Games out there. Big fan of Basketball and I try to play as much with my friends there as possible! 
                    I am also naturally inclined to my team so whatever criticisms or help I may get or give, I understand that it is for the shared goal 
                    of the team that I am in. Given this, I also try to soak in all the learnings I can in a certain environment as possible!
                </Text>
                <br />
                <div className="btn" onClick={() => setModalIsOpen(true)}>
                  Contact
                </div>
                <Modal closeTimeoutMS={400} isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}
                  style={{
                    overlay: {
                      backgroundColor: 'grey'
                    },
                    content : {
                      top                   : '50%',
                      left                  : '50%',
                      right                 : 'auto',
                      bottom                : 'auto',
                      width: '75%',
                      marginRight           : '-50%',
                      transform             : 'translate(-50%, -50%)'
                    }
                  }}
                >
                  <div className='btn btn-danger' style={{float: 'right', top: '0'}} onClick={() => setModalIsOpen(false)}>
                  &times; </div>
                  <ContactForm />
                  <br/>
                  
                </Modal>
                <Text className="lead">Details:</Text>
                <Text>aoponcedeleon@up.edu.ph</Text>
                <Text>+639771037244</Text>
                <br />
                <br />
                
            </Box>
            
            
        </Flex>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#f4f4f4" points="0,100 100,0 100,100"/>
      </svg> */}

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon class="svg--sm" fill="#f4f4f4" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
        <polygon class="svg--lg" fill="#f4f4f4" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
      </svg> */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio='none'>
        <path fill="#f3f3f3" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,224C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
      </div>
      


      <ScrollAnimation animateIn="fadeIn" duration="1.8">     
      <div style={{backgroundColor:'#f4f4f4'}} id="education">
        <Flex
           flexWrap='wrap' 
        >
            <Text className="lead text-right one" px={3} py={4} my={3} color="#333333" width={[1,1/3]} sx={{
              '@media screen and (max-width: 666px)': {
                textAlign: 'center',
                fontSize: '3rem'
              }

            }}><i className="fas fa-user-graduate" />   Education</Text>
            <Box className="text-left two" px={5} py={3} my={4} color='#333333' width={[1,2/3]} sx={{
              '@media screen and (max-width: 666px)': {
                textAlign: 'left'
              }
            }}>
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
            <Text className="lead text-right" px={3} py={4} my={3} color="#333333" width={[1,1/3]} sx={{
              '@media screen and (max-width: 666px)': {
                textAlign: 'center',
                fontSize: '3rem'
              }
            }}><i className="fas fa-briefcase" />   Work</Text> 
            <Box className="text-left four" px={5} py={4} my={3} color='#333333' width={[1,2/3]}>
                <Text className='lead'>Chatbot PH</Text>
                <Text className='text-dark'><em>Full Stack Developer Intern</em> ● June 2019 - July 2019</Text>
                <Text className='text-dark'>Mainly dove into tasks relating to Front-End Development but also were given Back-End tasks. Also learned a significant amount about implementing chatbots</Text><br/>
                <Text className='text-dark'>Deepened my knowledge in ReactJS, Redux, Context API, Python, Messenger API for Chatbots</Text>
            </Box> 
        </Flex>
      </div>
      </ScrollAnimation> 
      <ScrollAnimation animateIn="fadeIn" duration="1.8"><Skills /></ScrollAnimation>      
      <ScrollAnimation animateIn="fadeIn" duration="1.8"><Projects /></ScrollAnimation>
      
    </Fragment>

  );
}



export default Profile