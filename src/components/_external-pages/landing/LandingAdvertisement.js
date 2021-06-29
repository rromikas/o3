// material
import { experimentalStyled as styled, withStyles } from '@material-ui/core/styles';
import { Button, Box, Container, Grid, TextField, FilledInput, Typography } from '@material-ui/core';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

// ----------------------------------------------------------------------

const StyledInput = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
      background: 'transparent'
    },
    '& label.Mui-focused': {
      color: '#919EAB'
    },
    '& .MuiFilledInput-root': {
      '&:hover': {
        backgroundColor: 'transparent',
        background: 'transparent'
      }
    }
  }
})(TextField);

const InputWrapper = (props) => {
  return (
    <div
      {...props}
      style={{
        borderRadius: 15,
        boxShadow: 'inset 8px 8px 8px #b44755, inset -8px -8px 8px #eb596d',
        filter: 'none',
        paddingLeft: 7
      }}
    ></div>
  );
};

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(20),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    height: '500px',
    paddingTop: '0px',
    alignItems: 'center'
  }
}));

const contactFormIcon = 'contactFormIcon';

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {
  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <Grid md={6} lg={6}>
          <div className="contactFormText">
            <Typography variant="h2" sx={{ mb: 1, color: 'common.white' }}>
              Vi hjälper er med att
            </Typography>
            <ul>
              <li>
                <IoMdCheckmarkCircleOutline className={contactFormIcon} />
                <a>Tillgång via er app eller webben</a>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline className={contactFormIcon} />
                <a>Automatisera er process</a>
              </li>
              <li>
                <IoMdCheckmarkCircleOutline className={contactFormIcon} />
                <a>De funktioner ni behöver implementerar vi</a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid container spacing={4} xs={12} sm={12} md={7} lg={5} id="form">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InputWrapper>
              <StyledInput
                label="Namn"
                id="formInput"
                variant="filled"
                formControlProps={{
                  fullWidth: true
                }}
                InputProps={{
                  disableUnderline: true,
                  type: 'text'
                }}
              />
            </InputWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InputWrapper>
              <StyledInput
                label="Email"
                id="formInput"
                variant="filled"
                formControlProps={{
                  fullWidth: true
                }}
                InputProps={{
                  disableUnderline: true,
                  type: 'text'
                }}
              />
            </InputWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InputWrapper>
              <StyledInput
                label="Test"
                id="formInput"
                variant="filled"
                formControlProps={{
                  fullWidth: true
                  // paddingLeft: '20px'
                }}
                InputProps={{
                  disableUnderline: true,
                  type: 'text'
                }}
              />
            </InputWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InputWrapper>
              <StyledInput
                label="Hemsideadress"
                id="formInput"
                variant="filled"
                formControlProps={{
                  fullWidth: true
                }}
                InputProps={{
                  disableUnderline: true,
                  type: 'text'
                }}
              />
            </InputWrapper>
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={12}>
            <InputWrapper>
              <StyledInput
                rows={4}
                fullWidth
                multiline
                label="Hur kan vi hjälpa till?"
                id="formut"
                variant="filled"
                className="message"
                type="text"
                InputProps={{
                  disableUnderline: true,
                  type: 'text'
                }}
              />
            </InputWrapper>
          </Grid>
          <Button size="large" variant="contained" id="formButton">
            Skicka
          </Button>
        </Grid>
      </ContentStyle>
    </Container>
  );
}
