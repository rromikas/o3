import * as React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { experimentalStyled as styled } from '@material-ui/core/styles';

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

const Section = () => {
  const [open, setOpen] = React.useState(-1);

  const handleClickOpen = (index) => () => {
    setOpen(index);
  };

  const handleClose = () => {
    setOpen(-1);
  };

  const cmsIcon = 'cmsIcon';
  const serviceIcon = 'serviceIcon';
  const readMoreIcon = 'readMoreIcon';

  const services = [
    [
      {
        btnId: 'serviceButton2',
        title: 'Google Ads',
        description:
          'Let Google help apps determine location. This means sending anonymous location data to Google, evenwhen no apps are running. Let Google help apps determine location. This means sending anonymouslocation data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
      },
      {
        btnId: 'serviceButton2',
        title: 'Google Analytics',
        description:
          'Let Google help apps determine location. This means sending anonymous location data to Google, evenwhen no apps are running. Let Google help apps determine location. This means sending anonymouslocation data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
      }
    ],
    [
      {
        btnId: 'serviceButton2',
        title: 'Youtube Ads',
        description:
          'Let Google help apps determine location. This means sending anonymous location data to Google, evenwhen no apps are running. Let Google help apps determine location. This means sending anonymouslocation data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
      },
      {
        btnId: 'serviceButton',
        title: 'Avancerad remarketing',
        description:
          'Let Google help apps determine location. This means sending anonymous location data to Google, evenwhen no apps are running. Let Google help apps determine location. This means sending anonymouslocation data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
      }
    ]
  ];

  return (
    <Grid container spacing={0} xs={12} sm={12} md={12} lg={12} id="servicesDigital" className="servicesDigital">
      <Grid item xs={12} sm={6} md={6} lg={4} className="serviceInfoText" id="digitalInfoText">
        <ContentStyle id="contentStyleServices">
          <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
            Ett relevant meddelande...
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Webbutveckling
          </Typography>
          <Typography>
            We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!
          </Typography>
        </ContentStyle>
      </Grid>
      <Grid container spacing={0} xs={12} sm={12} md={5} lg={7} id="digitalServicesInfo">
        {services.map((row, i) => (
          <Row key={`row-${i}`}>
            {row.map((col, coli) => (
              <Col lg="4" className="digitalBox" id="digitalBox1" key={`row-${i}-col-${coli}`}>
                <Button id={col.btnId} onClick={handleClickOpen(i * row.length + coli)}>
                  <a>
                    <IoMdCheckmarkCircleOutline className={serviceIcon} />
                  </a>
                  {col.title}
                  <MdKeyboardArrowRight className={readMoreIcon} />
                </Button>
                <Dialog
                  open={open === i * row.length + coli}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{col.title}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">{col.description}</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Stäng
                    </Button>
                    {i === 1 && coli === 1 ? (
                      <Button onClick={handleClose} color="primary" autoFocus>
                        {col.title}
                      </Button>
                    ) : (
                      <Button onClick={handleClickOpen(i * row.length + coli + 1)} color="primary" autoFocus>
                        Keep reading
                      </Button>
                    )}
                  </DialogActions>
                </Dialog>
                <dialogD1 />
              </Col>
            ))}
          </Row>
        ))}
      </Grid>
    </Grid>
  );
};

export default Section;
