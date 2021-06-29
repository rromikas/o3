import * as React from 'react';
import { Box, Grid, Container, Button, Typography } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
// components
import Page from '../components/Page';
import Navbar from '../layouts/main/MainNavbar2';
import dialogD1 from './digitalDialog1';
import {
  LandingMinimal,
  LandingDarkMode,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements
} from '../components/_external-pages/landing';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import ButtonBase from '@material-ui/core/ButtonBase';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

const cmsIcon = 'cmsIcon';
const serviceIcon = 'serviceIcon';
const readMoreIcon = 'readMoreIcon';

// ----------------------------------------------------------------------

export default function LandingPage() {
  const [activeSection, setActiveSection] = React.useState(0);

  const sections = [
    { title: 'Digital Marknadsföring', component: Section1 },
    { title: 'Webbutveckling', component: Section2 },
    { title: 'All digital närvaro', component: Section3 }
  ];

  const Section = sections[activeSection].component;

  return (
    <RootStyle title="Different - Tjänster" id="move_top" className="serviceBody">
      <Navbar id="navbar" />
      <ContentStyle>
        <div id="serviceHeader">
          <div className="serviceHeaderText">
            <Typography variant="h1" sx={{ mb: 3 }}>
              Den perfekta lösningen
            </Typography>
            <Typography>Vi hjälper er att stå ut i den digitala världen</Typography>
          </div>
        </div>
        <Container id="serviceContainer">
          <Grid container spacing={0} xs={12} sm={12} md={12} lg={12} id="services">
            <Grid item xs={0} sm={0} md={1.5} />
            {sections.map((s, i) => (
              <Grid
                onClick={() => setActiveSection(i)}
                key={`tab-i`}
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                className={'service ' + (activeSection === i ? 'active-service' : '')}
                id="serviceOne"
              >
                <h3>{s.title}</h3>
              </Grid>
            ))}
          </Grid>

          <Section />

          <Grid
            container
            spacing={0}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            id="servicesDevelopment"
            className="servicesDevelopment"
          >
            <Grid item xs={12} sm={6} md={6} lg={4} className="serviceInfoText" id="digitalInfoText">
              <ContentStyle id="contentStyleServices">
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  Ett relevant meddelande...
                </Typography>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Digital marknadsföring
                </Typography>
                <Typography>
                  We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
                </Typography>
              </ContentStyle>
            </Grid>
            <Grid container spacing={0} xs={12} sm={12} md={5} lg={6} id="digitalServicesInfo">
              <Row>
                <Col lg="4" className="digitalBox" id="digitalBox1">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Google Ads
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
                <Col lg="4" className="digitalBox" id="digitalBox2">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Youtube Ads
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
              </Row>
              <Row>
                <Col lg="4" className="digitalBox" id="digitalBox1">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Google Analytics
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
                <Col lg="4" className="digitalBox" id="digitalBox2">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Advanced Remarketing
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
              </Row>
            </Grid>
          </Grid>

          <Grid container spacing={0} xs={12} sm={12} md={12} lg={12} id="servicesAll">
            <Grid item xs={12} sm={6} md={6} lg={4} className="serviceInfoText" id="digitalInfoText">
              <ContentStyle id="contentStyleServices">
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  Ett relevant meddelande...
                </Typography>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Digital marknadsföring
                </Typography>
                <Typography>
                  We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
                </Typography>
              </ContentStyle>
            </Grid>
            <Grid container spacing={0} xs={12} sm={12} md={5} lg={6} id="digitalServicesInfo">
              <Row>
                <Col lg="4" className="digitalBox" id="digitalBox1">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Google Ads
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
                <Col lg="4" className="digitalBox" id="digitalBox2">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Youtube Ads
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
              </Row>
              <Row>
                <Col lg="4" className="digitalBox" id="digitalBox1">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Google Analytics
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
                <Col lg="4" className="digitalBox" id="digitalBox2">
                  <a>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                  </a>
                  Advanced Remarketing
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Col>
              </Row>
            </Grid>
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
