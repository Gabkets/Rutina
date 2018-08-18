import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/actions-creator';
import { fetchFirebase } from './actions/actions-creator';
import { Configuration } from './services/firebaseRef';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      appName: ''
    }
  }

  componentDidMount() {
    this.props.fetchFirebase();
    Configuration.on('value', snapshot => {
      const configuration = snapshot.val();

      this.setState({
        isToggleOn: false,
        appName: configuration.appName
      });
    });
  }

  render() {
    return (
      <main className="App">
        {this.state.isToggleOn ?
          <p>loading</p>
          : <h1>{this.state.appName}</h1>
        }
      </main>
    );
  }
}

// Suscribes to redux state updates
const mapStateToProps = state => {
  return {
    state: state,
  };
};

// Return an object that uses dispatch to bind action creators
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction()),
 fetchFirebase: () => dispatch(fetchFirebase())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
