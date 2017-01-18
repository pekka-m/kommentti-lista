import React, { Component } from 'react';
import Comments from '../comments/Comments';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const { error, fetching, comments, setFilter, setCommentActive, filtering } = this.props;
    const status = () => {
      if (fetching) {
        return 'Fetching comments...';
      }
      if (error) {
        return error;
      }
      if (filtering) {
        return 'Filtering comments...';
      }
      return 'OK';
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{status()}</h2>
        </div>
        <div className="App-intro">
          <input onChange={e => setFilter(e.target.value)} />
          <Comments comments={comments} onClick={id => setCommentActive(id)} />
        </div>
      </div>
    );
  }
}

export default App;
