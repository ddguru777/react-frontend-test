import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  wrapper: {
    marginTop: 85,
  },
  logo: {
    paddingBottom: 20,
    height: 100,
  },
  sadFaceIcon: {
    maxHeight: 400,
    marginTop: theme.margin,
  },
  button: {
    color: '#fff',
    marginTop: theme.margin * 2,
    marginBottom: theme.margin,
  },
});

const NoMatchPage = ({ classes }) => (
  <div className={`container ${classes.wrapper}`}>
    <div className="row">
      <div className="col-md-8">
        <Typography variant="display3" gutterBottom>
          404
        </Typography>
        <Typography variant="title" gutterBottom color="textSecondary">
          This is an error.
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          The requested URL /hosting was not found on this server.
        </Typography>
        <Typography variant="body1" gutterBottom color="textSecondary">
          This is all we know.
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Go Back
        </Button>
      </div>
    </div>
  </div>
);

NoMatchPage.propTypes = {
  location: PropTypes.object, // react router
  classes: PropTypes.object, // Material UI Injecte
};

export default withStyles(styles)(NoMatchPage);
