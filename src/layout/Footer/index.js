import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline />
      <footer className={classes.footer}>
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
    </React.Fragment>
  );
}