import * as React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { Box, Grid, Container, Button, Typography } from '@material-ui/core';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import Navbar from '../layouts/main/MainNavbar';
import {
  LandingMinimal,
  LandingDarkMode,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="We make you Different" id="move_top">
      <Navbar id="navbar" />
      <ContentStyle>
        <div id="serviceHeader">
          <div className="serviceHeaderText">
            <h1>Header Text</h1>
            <h2>Header secondary text</h2>
          </div>
        </div>
        <Container>
          <Grid container spacing={0} xs={12} sm={12} md={12} lg={12} id="appleScroll">
            <h1>Just scroll!</h1>
            <div className="intro mac" />
            <div className="intro mac" />
            <div id="mac" className="mac" />
            <div className="content">
              <h2>Apple iMac scrolling effect.</h2>
              <p>Dummy text</p>
            </div>
          </Grid>
          <LandingMinimal />
          <LandingHugePackElements />
          <LandingDarkMode />
          <LandingCleanInterfaces />
          <LandingAdvertisement />
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
