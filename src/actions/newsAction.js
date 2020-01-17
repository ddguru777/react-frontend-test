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

      const result = await NewsAPI.onRetrieveNews();

      dispatch(isLoading(false));

      const news = [];
      const featuredNews = [];

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

      localStorage.setItem('news', JSON.stringify(news));
      localStorage.setItem('news', JSON.stringify(featuredNews));

      dispatch(onLoadNewsSuccess(news, featuredNews));

      return news;
    } catch (error) {
      return error;
    }
  };
};

export default { onLoadNews };
