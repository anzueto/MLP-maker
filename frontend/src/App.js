import React from 'react';
import './App.scss';
import Intro from './components/Intro';
import Ctas from './components/Ctas';
import Secc1 from './components/Secc1';
import Secc2 from './components/Secc2';
import Footer from './components/Footer';
import Model from './components/Model';


class App extends React.Component {
  render() {
    return (

      <div className="columns">
        <div className="column">

          <Model />
          <Intro />
          <Ctas />
          <Secc1 />
          <Secc2 />

          <Footer />

          <div className="buttons">
            <a className="button is-primary">Download</a>
          </div>
        </div>

        <div className="column">

          <h1 className="title">Bulma</h1>
          <p className="subtitle">
            Modern CSS framework based on{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
          </p>

        </div>

      </div>
    );
  }

}

export default App;
