import * as actionTypes from '../actions/actionTypes';

const initialState = {
  news: [],
  featuredNews: [],
  pageNum: 1,
  is_loading: false,
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.RETRIVE_NEWS: {
      return { ...state, news: action.news, featuredNews: action.featuredNews };
    }
    case actionTypes.IS_LOADING: {
      return { ...state, is_loading: action.loading };
    }
    default: {
      return state;
    }
  }
}
