import * as React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Grid, Container } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';

import logoTop from '../../assets/Img/logo-top.png';
import logoScrolled from '../../assets/Img/logo-scrolled.png';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  background: 'red',
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

const useStyles = styled((theme) => ({
  formControl: {
    margin: theme.spacing(1)
  },
  selectEmpty: {
    marginTop: theme.spacing(9),
    minWidth: 400
  }
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [issue, setIssue] = React.useState('');
  const handleChange = (event) => {
    setIssue(event.target.value);
  };

  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');

  return (
    <AppBar color={isHome ? 'transparent' : 'default'} sx={{ boxShadow: 0 }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...{
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          }
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <RouterLink to="/">
            <img src={isOffset ? logoScrolled : logoTop} height="40px" alt="Made Different Logo" />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          <div className="evalueringModule">
            <Button
              variant="containedEvaluering"
              id="evalBtn"
              onClick={handleClickOpen}
              sx={{
                bgcolor: 'transparent',
                color: 'white',
                '&:hover': { bgcolor: 'transparent' },
                ...{
                  bgcolor: '#475261',
                  color: '#FFFF',
                  '&:hover': { bgcolor: '#606c7c' }
                }
              }}
            >
              Kostnadsfri evaluering
            </Button>
            <Dialog
              open={open}
              fullWidth
              maxWidth="md"
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              id="evalModule"
            >
              <DialogContent id="evalContent">
                <Grid item xs={12} sm={6} md={6} lg={4} id="dialogText">
                  <DialogContentText>
                    <h1>Låt oss hjälpa er</h1>
                    <h3>Lorem ipsum this is a text and I do not know what to type.</h3>
                    <ul>
                      <li>Vi ser till att</li>
                      <li>Vi hjälper er att hitta rätt</li>
                      <li>Vi kan göra detta...</li>
                    </ul>
                  </DialogContentText>
                </Grid>
                <Grid container spacing={4} xs={10} sm={10} md={6} lg={6} id="evalForm">
                  <Grid item xs={12} sm={6} md={6} lg={5}>
                    <TextField id="name" label="Namn" type="text" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={5}>
                    <TextField id="email" label="Email" type="email" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={5}>
                    <TextField id="business" label="Företag" type="text" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={5}>
                    <TextField id="website" label="Hemsida" type="text" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <FormControl variant="filled">
                      <InputLabel id="demo-simple-select-filled-label">Hur kan vi hjälpa till?</InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="formSelect"
                        autoWidth
                        value={issue}
                        fullWidth
                        onChange={handleChange}
                      >
                        <MenuItem value="Webbutveckling">Webb-utveckling</MenuItem>
                        <MenuItem value="Apputveckling">App-utveckling</MenuItem>
                        <MenuItem value="Google Ads">Google Ads</MenuItem>
                        <MenuItem value="CMS">CMS-utveckling</MenuItem>
                        <MenuItem value="Annat">Annat</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12} md={10} lg={10}>
                    <TextField
                      id="message"
                      label="Meddelande"
                      type="text"
                      fullWidth
                      multiline
                      rows={3}
                      variant="standard"
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Stäng</Button>
                <Button onClick={handleClose}>Skicka</Button>
              </DialogActions>
            </Dialog>
          </div>

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
