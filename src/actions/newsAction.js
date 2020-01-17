import * as actionTypes from './actionTypes';
import NewsAPI from '../api/NewsAPI';
import * as c from '../api/Constants';

const isLoading = loading => ({
  type: actionTypes.IS_LOADING,
  loading,
});

const onLoadNewsSuccess = (news, featuredNews) => ({
  type: actionTypes.RETRIVE_NEWS,
  news,
  featuredNews,
});

const onLoadNews = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true));

      let news = [];
      let featuredNews = [];

      let bCached = false;

      // If previous result has already been saved to browser, do not call NY API
      if (localStorage.getItem('news') && localStorage.getItem('featuredNews')) {
        news = JSON.parse(localStorage.getItem('news'));
        featuredNews = JSON.parse(localStorage.getItem('featuredNews'));

        if (news.length !== 0 && featuredNews !== 0) {
          bCached = true;
        }
      }

      if (!bCached) {
        const result = await NewsAPI.onRetrieveNews();

        // Parsiong json result from NYTimes API
        for (let i = 0; i < result.response.docs.length; i++) {
          const newsItem = {
            key: i,
            title: result.response.docs[i].headline.main,
            pub_date: result.response.docs[i].pub_date,
            summary: result.response.docs[i].snippet,
            mainImage:
              result.response.docs[i].multimedia.length === 0
                ? ''
                : `${c.SITE_URL}/${result.response.docs[i].multimedia[0].url}`,
          };
          news.push(newsItem);

          if (newsItem.mainImage !== '' && featuredNews.length < 3) {
            featuredNews.push(newsItem);
          }
        }
      }

      // Cache api result
      localStorage.setItem('news', JSON.stringify(news));
      localStorage.setItem('featuredNews', JSON.stringify(featuredNews));

      dispatch(onLoadNewsSuccess(news, featuredNews));
      dispatch(isLoading(false));

      return news;
    } catch (error) {
      return error;
    }
  };
};

export default { onLoadNews };
