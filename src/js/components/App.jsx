import React from 'react';
import { connect } from 'react-redux';
import { func} from 'prop-types';

import * as actions from '../actions';
import Hr from './Hr/Hr';


export class App extends React.Component {
  static propTypes = {

    fetchData: func.isRequired

  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {

    return (
      <div className="app">
        <Hr />
      </div>
    );
  }
}

function mapStateToProps() {
  return {
  };
}

export default connect(mapStateToProps, { fetchData: actions.fetchData })(App);
