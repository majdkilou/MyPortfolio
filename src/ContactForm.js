import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import './SideBar.css';
import { MdOutlineArrowCircleUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-up';
import { db } from './Firebase';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { collection, addDoc } from 'firebase/firestore';
import {
  ContactFormContainer,
  TextWrapper,
  ContactRow,
  Colum1,
  Colum2,
  Social,
} from './ContactFormElement';
import { CardContent, Typography, Card, TextField } from '@mui/material';
import { animateScroll as scroll } from 'react-scroll';

const ContactForm = () => {
  const [firstename, setFirstName] = useState('');
  const [lastename, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const MAX_LENGTH = 1000;
  const MIN_LENGHT = 10;
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');
  useEffect(() => {
    // Set errorMessage only if text is equal or bigger than MAX_LENGTH
    if (message.length >= MAX_LENGTH || message.length > MIN_LENGHT) {
      setErrorMessage('The input has exceeded the maximum number of character');
    }
  }, [message]);

  useEffect(() => {
    // Set empty erroMessage only if text is less than MAX_LENGTH
    // and errorMessage is not empty.
    // avoids setting empty errorMessage if the errorMessage is already empty
    if (message.length < MAX_LENGTH && errorMessage) {
      setErrorMessage('your message is too short');
    }
  }, [message, errorMessage]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  // PUSHING VALUES TO FIREBASE DATABASE
  const sendCollectionRef = collection(db, 'messages');
  const [loader, setLoader] = useState(false);
  const creatSend = async () => {
    setLoader(true);

    await addDoc(sendCollectionRef, {
      Firstname: firstename,
      Lastname: lastename,
      Email: email,
      Message: message,
    })
      .then(() => {
        setLoader(false);
        setLastName('');
        setFirstName('');
        setEmail('');
        setMessage('');
        setPhone('');

        alert('Your Message has been sent');
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
  };
  return (
    <>
      <ContactFormContainer id="contactme">
        <ContactRow>
          <Colum1>
            <TextWrapper>
              <Typography>
                <h1 className="contact-title">Contact me</h1>
              </Typography>
              <Typography>
                If you have any questions or need further information, please
                feel free to contact me.
              </Typography>
            </TextWrapper>
          </Colum1>
          <Colum2>
            <Card style={{ backgroundColor: '#1d1d1d' }}>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid
                    xs={12}
                    sm={6}
                    item
                    sx={{
                      '& > :not(style)': { color: 'primary' },
                    }}
                  >
                    <TextField
                      sx={{
                        '& .MuiFilledInput-input': { color: 'white' },
                        '& .MuiFormLabel-root': { color: 'white' },
                      }}
                      id="outlined-basic"
                      label="First Name"
                      variant="filled"
                      placeholder="Enter First Name"
                      fullWidth
                      style={{ backgroundColor: '#2b2b2b', color: '#888' }}
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
                      value={firstename}
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      sx={{
                        '& .MuiFilledInput-input': { color: 'white' },
                        '& .MuiFormLabel-root': { color: 'white' },
                      }}
                      id="outlined-basic"
                      label="Last Name"
                      variant="filled"
                      placeholder="Enter Last Name"
                      fullWidth
                      style={{ backgroundColor: '#2b2b2b' }}
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
                      value={lastename}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      sx={{
                        '& .MuiFilledInput-input': { color: 'white' },
                        '& .MuiFormLabel-root': { color: 'white' },
                      }}
                      type="email"
                      id="outlined-basic"
                      label="Email"
                      variant="filled"
                      placeholder="Enter Email"
                      fullWidth
                      style={{ backgroundColor: '#2b2b2b' }}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      value={email}
                    />
                  </Grid>

                  <Grid xs={12} item>
                    <TextField
                      sx={{
                        '& .MuiFilledInput-input': { color: 'white' },
                        '& .MuiFormLabel-root': { color: 'white' },
                      }}
                      id="outlined-basic"
                      label="Phone"
                      variant="filled"
                      placeholder="Enter Your Number"
                      fullWidth
                      style={{ backgroundColor: '#2b2b2b', marginTop: '1rem' }}
                      onChange={(event) => {
                        setPhone(event.target.value);
                      }}
                      value={phone}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField
                      sx={{
                        '& .MuiFilledInput-input': { color: 'white' },
                        '& .MuiFormLabel-root': { color: 'white' },
                      }}
                      id="outlined-basic"
                      label="Message"
                      multiline
                      rows={4}
                      required
                      variant="filled"
                      placeholder="Type Your Message"
                      fullWidth
                      style={{ backgroundColor: '#2b2b2b' }}
                      onChange={(event) => {
                        setMessage(event.target.value);
                      }}
                      value={message}
                    />
                    <Grid xs={12} item class="send-spacer">
                      <LoadingButton
                        disabled={!errorMessage}
                        onClick={creatSend}
                        endIcon={<SendIcon />}
                        variant="contained"
                        style={{
                          background: loader ? 'aqua' : ' rgb(81, 1, 105)',
                        }}
                      >
                        Send
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Colum2>
          <ScrollToTop showUnder={600} duration={600}>
            <MdOutlineArrowCircleUp
              onClick={toggleHome}
              label="Scroll"
              class="scroll-spacer"
            />
          </ScrollToTop>
          <Social>
            <a
              href="https://www.facebook.com/glory.kilou1"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <FacebookIcon />
              </i>
            </a>
            <a
              href="https://twitter.com/KilouMajd"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <TwitterIcon />
              </i>
            </a>
            <a
              href="https://www.instagram.com/majdkilou/"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <InstagramIcon />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/majd-kilou-13a07a222/"
              target="_blank"
              className="icon-circle"
            >
              <i className="icon">
                <LinkedInIcon />
              </i>
            </a>
          </Social>
        </ContactRow>
      </ContactFormContainer>
    </>
  );
};

export default ContactForm;
