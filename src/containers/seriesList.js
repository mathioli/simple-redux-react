'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class SeriesList extends Component {
  renderList() {
      return this.props.series.map(show => {
        return(
          <li key={show.title}>{show.title}</li>
        );
      });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    series: state.shows,
  };
}

export default connect(mapStateToProps)(SeriesList);
