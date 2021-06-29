// material
import { alpha, useTheme, experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Button, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

import diagramIllustration from '../../../assets/Img/Diagram.svg';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === 'light'
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${theme.palette.grey[300]} 100%)`
      : 'none'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    maxWidth: 320,
    paddingRight: 4,
    borderRadius: 12
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12
    }
  }
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 }
};
const variantScreenCenter = {
  initial: COMMON,
  animate: { ...COMMON, opacity: 1 }
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 }
};

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const isRTL = theme.direction === 'rtl';

  const screenLeftAnimate = variantScreenLeft;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  Interface Starter Kit
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Det bästa av <br />
                  två världar
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? 'text.secondary' : 'common.white'
                  }}
                >
                  We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Button size="large" color="inherit" variant="outlined">
                  View All Components
                </Button>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8} dir="ltr">
            <div className="diagramIllustrationWrapper">
              <div className="diagramText">
                <div className="diagramTextSec1">
                  <h1>Kodning</h1>
                  <h2>Test</h2>
                  <ul>
                    <li>
                      <a>Test</a>
                    </li>
                    <li>
                      <a>Test</a>
                    </li>
                    <li>
                      <a>Test</a>
                    </li>
                  </ul>
                </div>
                <div className="diagramTextSec2">
                  <h1>Different</h1>
                  <h2>Test</h2>
                  <ul>
                    <li>
                      <a>Test</a>
                    </li>
                    <li>
                      <a>Test</a>
                    </li>
                    <li>
                      <a>Test</a>
                    </li>
                  </ul>
                </div>
                <div className="diagramTextSec3">
                  <h1>Wordpress</h1>
                  <h2>Test</h2>
                  <ul>
                    <li>
                      <a>Test</a>
                    </li>
                    <li>
                      <a>Test</a>
                    </li>
                    <li>
                      <a>Test</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
