import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import NavBar from '../../components/Navigation/NavBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { AuthUserContext } from '../../components/Session';
import SignOut from '../../components/SignOut';
// import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header() {
  return (
  <div>
    <AuthUserContext.Consumer>
      {
        authUser => authUser ? <NavigationAuth /> : <NonAuthNavigation />
      }
    </AuthUserContext.Consumer>
  </div>
  )
}

 function NavigationAuth() {
    const classes = useStyles();
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            World News
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href='/account'
              style={{ textDecoration: 'none' }}
              className={classes.toolbarLink}
            >
              Account
            </Link>
          </Button>
          <Button variant="outlined" size="small">
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href='/admin'
              style={{ textDecoration: 'none' }}
              className={classes.toolbarLink}
            >
              Admin
            </Link>
          </Button>
          <SignOut />
        </Toolbar>
        <NavBar />
        </Container>
    </React.Fragment>
    )
  };

  export function NonAuthNavigation() {
    const classes = useStyles();
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            World News
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href='/signin'
              style={{ textDecoration: 'none' }}
              className={classes.toolbarLink}
            >
              Sign in
            </Link>
          </Button>
        </Toolbar>
        <NavBar />
        </Container>
    </React.Fragment>
    )
  };
