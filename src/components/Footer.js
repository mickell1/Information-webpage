import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));


function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built using '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' with React.'}
    </Typography>
  );
}

const classes = useStyles();

function Footer() {
  
  return <footer className={classes.footer}>
    <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        In Development
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Mickell Crawford
      </Typography>
      <MadeWithLove />
    </Container>
  </footer>
}

export default Footer;

