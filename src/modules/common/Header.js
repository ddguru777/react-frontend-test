import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
// Component
import NavBar from './NavBar';

const styles = () => ({
  header: {
    backgroundColor: '#000',
    paddingLeft: '15px',
  },
  heading: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const Header = ({ classes }) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <NavBar />
      </div>
    </Fragment>
  );
};

Header.propTypes = {
  classes: PropTypes.object, // Material UI Injected
};

export default withStyles(styles)(Header);
