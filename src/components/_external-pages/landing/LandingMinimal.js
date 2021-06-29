import React from 'react';

// material
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import BackdropFilter from 'react-backdrop-filter';
import { BsFillOctagonFill } from 'react-icons/bs';
//
import { varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

export default function Cards() {
  return (
    <section className="theCards">
      <Box className="headerText" sx={{ mb: { xs: 10, md: 25 } }}>
        <MotionInView variants={varFadeInUp}>
          <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
            Riktig
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInDown}>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Webbutveckling och Google Ads
          </Typography>
        </MotionInView>
      </Box>
      <BackdropFilter
        className="bluredForm onnota"
        filter="blur(5px) sepia(20%)"
        canvasFallback
        html2canvasOpts={{
          allowTaint: true
        }}
        onDraw={() => {
          console.log('Rendered !');
        }}
      >
        {/* card1 */}
        <div className="theCard">
          <div className="theIcon">
            <img src="/static/icons/google-ads.svg" id="icon" alt="Google Ads" />
          </div>
          <div className="theminiT">
            <h3>Google Ads</h3>
          </div>
          <div className="theMiniD">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="theList">
            <ul>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Arbetat med hundratals konton</a>
              </li>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Vet Googles interna best practice</a>
              </li>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Vet Googles interna best practice</a>
              </li>
            </ul>
          </div>
          <Button size="large" color="inherit" id="cardBtn">
            Läs mer
          </Button>
        </div>
      </BackdropFilter>

      <BackdropFilter
        className="bluredForm onnota"
        filter="blur(2px) sepia(0%)"
        canvasFallback
        html2canvasOpts={{
          allowTaint: true
        }}
        onDraw={() => {
          console.log('Rendered !');
        }}
      >
        {/* card1 */}
        <div className="theCard">
          <div className="theIcon">
            <img src="/static/icons/google-ads.svg" id="icon" alt="Google Ads" />
          </div>
          <div className="theminiT">
            <h3>Utveckling</h3>
          </div>
          <div className="theMiniD">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="theList">
            <ul>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Arbetat med hundratals konton</a>
              </li>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Vet Googles interna best practice</a>
              </li>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Vet Googles interna best practice</a>
              </li>
            </ul>
          </div>
          <Button size="large" color="inherit" id="cardBtn">
            Läs mer
          </Button>
        </div>
      </BackdropFilter>

      <BackdropFilter
        className="bluredForm onnota"
        filter="blur(5px) sepia(20%)"
        canvasFallback
        html2canvasOpts={{
          allowTaint: true
        }}
        onDraw={() => {
          console.log('Rendered !');
        }}
      >
        {/* card1 */}
        <div className="theCard">
          <div className="theIcon">
            <img src="/static/icons/google-ads.svg" id="icon" alt="Google Ads" />
          </div>
          <div className="theminiT">
            <h3>All digital närvaro</h3>
          </div>
          <div className="theMiniD">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="theList">
            <ul>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Arbetat med hundratals konton</a>
              </li>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Vet Googles interna best practice</a>
              </li>
              <li>
                <BsFillOctagonFill className="listIcon" />
                <a>Vet Googles interna best practice</a>
              </li>
            </ul>
          </div>
          <Button size="large" color="inherit" id="cardBtn">
            Läs mer
          </Button>
        </div>
      </BackdropFilter>
    </section>
  );
}
