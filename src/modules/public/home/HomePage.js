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
import News from '../../components/news/News';
import FeaturedNews from '../../components/news/FeaturedNews';

// Actions
import newsAction from '../../../actions/newsAction';

const Container = styled.section`
  height: 100vh;
`;

const Main = styled.section`
  flexgrow: 1;
  padding: 15px;
`;

const NewsSection = styled.section`
  padding: 5px;
`;

class HomePage extends Component {
  isTokenSource = axios.CancelToken.source();

  state = {};

  componentDidMount() {
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { newsList, featuredNewsList } = this.props;
    return (
      <Container>
        <Header />
        <Main>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={8}>
              <Typography variant="display1" gutterBottom>
                Latest News
              </Typography>
              <NewsSection>
                {newsList.map(item => {
                  return <News key={`news_${item.title}`} data={item} />;
                })}
              </NewsSection>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="display1" gutterBottom>
                Featured List
              </Typography>
              <NewsSection>
                {featuredNewsList.map(item => {
                  return <FeaturedNews key={`fn_${item.title}`} data={item} />;
                })}
              </NewsSection>
            </Grid>
          </Grid>
        </Main>
      </Container>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object, // React Router Injected
  getNews: PropTypes.func,
  newsList: PropTypes.array,
  featuredNewsList: PropTypes.array,
};

const mapStateToProps = state => ({
  newsList: state.news.news,
  featuredNewsList: state.news.featuredNews,
  pageNum: state.news.pageNum,
});

const mapDispatchToProps = dispatch => ({
  getNews: () => {
    return dispatch(newsAction.onLoadNews());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
