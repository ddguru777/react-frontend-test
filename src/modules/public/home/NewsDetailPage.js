import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';

import { connect } from 'react-redux';

// Material UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import Header from '../../common/Header';

// Actions
import newsAction from '../../../actions/newsAction';

const Container = styled.section`
  height: 100vh;
`;

const Main = styled.section`
  padding: 15px;
  width: 100%;
`;

const NewsSection = styled.section`
  padding: 5px;
  width: 100%;
`;

const styles = theme => ({
  imageContent: {
    width: '100%',
    height: 'auto !important',
  },
});

class NewsDetailPage extends Component {
  isTokenSource = axios.CancelToken.source();

  state = {};

  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { newsList, history } = this.props;
    const query = history.location.search.split('?')[1].trim();
    const classes = styles();
    return (
      <Container>
        <Header />
        <Main>
          <Grid container spacing={8}>
            <Grid item xs>
              {newsList.length > 0 && (
                <NewsSection>
                  <img
                    className={classes.imageContent}
                    alt="news-content"
                    src={newsList[query].mainImage}
                  />
                  <Typography variant="display1" gutterBottom>
                    {newsList[query].title}
                  </Typography>
                  <p>{newsList[query].summary}</p>
                </NewsSection>
              )}
            </Grid>
          </Grid>
        </Main>
      </Container>
    );
  }
}

NewsDetailPage.propTypes = {
  history: PropTypes.object, // React Router Injected,
  newsList: PropTypes.array,
  getNews: PropTypes.func,
};

const mapStateToProps = state => ({
  newsList: state.news.news,
  pageNum: state.news.pageNum,
});

const mapDispatchToProps = dispatch => ({
  getNews: () => {
    return dispatch(newsAction.onLoadNews());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailPage);
