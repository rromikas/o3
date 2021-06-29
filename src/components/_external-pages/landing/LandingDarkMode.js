// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Button, Typography } from '@material-ui/core';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}));
const cmsIcon = 'cmsIcon';
// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(48%)',
            display: { xs: 'none', md: 'block' }
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
                Ett skräddarsytt
              </Typography>

              <Typography variant="h2" sx={{ mb: 1, color: 'common.white' }}>
                CMS-verktyg
              </Typography>

              <Typography variant="p" sx={{ mb: 3, color: 'common.white' }}>
                Eliminera den administrativa kostnaden för ert företag
              </Typography>

              <div className="cmsList">
                <ul>
                  <li>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                    <a>Tillgång via er app eller webben</a>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                    <a>Automatisera er process</a>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className={cmsIcon} />
                    <a>De funktioner ni behöver implementerar vi</a>
                  </li>
                </ul>
              </div>

              <Button size="large" color="inherit" id="cmsButton">
                Läs mer
              </Button>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} sx={{ top: 0, left: 0, position: 'absolute' }}>
            <img alt="light mode" src="/static/home/lightmode.png" />
            <MotionInView threshold={0.3} variants={varFadeInDown} sx={{ top: 0, left: 0, position: 'absolute' }}>
              <img alt="dark mode" src="/static/home/darkmode.png" />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
