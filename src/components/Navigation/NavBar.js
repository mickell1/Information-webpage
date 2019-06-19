import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

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
    mainFeaturedPost: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
      position: 'relative',
      padding: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
      marginTop: theme.spacing(3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link
            color="inherit"
            variant="body2"
            to='/'
            className={classes.toolbarLink}
          >
            Technology
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/photos'
            className={classes.toolbarLink}
          >
            Photos
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/'
            className={classes.toolbarLink}
          >
            Culture
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/'
            className={classes.toolbarLink}
          >
            Business
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/'
            className={classes.toolbarLink}
          >
            Politics
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/'
            className={classes.toolbarLink}
          >
            Opinion
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/'
            className={classes.toolbarLink}
          >
            Science
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/'
            className={classes.toolbarLink}
          >
            Travel
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/courses-list'
            className={classes.toolbarLink}
          >
            CoursesList
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to='/contact'
            className={classes.toolbarLink}
          >
            Contact
          </Link>
        </Toolbar>
        </div>
    )
}
export default NavBar;