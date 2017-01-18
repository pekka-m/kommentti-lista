import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './App';
import { fetchComments, setCommentActive } from '../../actions/commentActions';
import { setFilter } from '../../actions/filterActions';

const filterComments = (comments, filter) => {
  if (filter) {
    return comments.filter(comment => comment.name.toLowerCase().includes(filter.toLowerCase()));
  }
  return comments;
};

const mapStateToProps = state => ({
  comments: filterComments(state.comments.comments, state.filter.filter),
  fetching: state.comments.fetching,
  fetched: state.comments.fetched,
  error: state.comments.error,
  filtering: state.filter.filtering,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchComments,
  setFilter,
  setCommentActive,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
