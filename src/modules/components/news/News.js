import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = theme => ({
  card: {
    width: '100%',
    marginBottom: theme.margin,
  },
});

const News = ({ classes, data }) => {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detail?${data.key}`}>Show More</Link>
      </CardActions>
    </Card>
  );
};

News.propTypes = {
  classes: PropTypes.object, // Material UI Injected
  data: PropTypes.object,
};

export default withStyles(styles)(News);
