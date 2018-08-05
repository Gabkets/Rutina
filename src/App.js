import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/actions-creator';

class App extends Component {
  simpleAction = (event) => {
   this.props.simpleAction();
  }
  render() {
    return (
      <main className="App">
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>
          {JSON.stringify(this.props)}
        </pre>
      </main>
    );
  }
}

// Suscribes to redux state updates
const mapStateToProps = state => ({
 ...state
})

// Return an object that uses dispatch to bind action creators
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
