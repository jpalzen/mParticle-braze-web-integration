import './App.css';
import UserAttributes from './components/UserAttributes';
import CustomEvents from './components/CustomEvents';
import CustomAttributes from './components/CustomAttributes';
import Purchases from './components/Purchases';
import React from 'react';
import mParticle from '@mparticle/web-sdk';
import braze from '@mparticle/web-braze-kit';

const mParticleConfig = {
  isDevelopmentMode: true,
  logLevel:"verbose"
}

class App extends React.Component {

  state = {
    showUserA: false,
    showCustomA: false,
    showCustomE: false,
    showPurchases: false,
  }

  handleUserAClick = (e) => {
    this.setState({
      showUserA: !this.state.showUserA,
      showCustomA: false,
      showCustomE: false,
      showPurchases: false,
    });
  }
  handleCustomAClick = (e) => {
    this.setState({
      showCustomA: !this.state.showCustomA,
      showUserA: false,
      showCustomE: false,
      showPurchases: false,
    });
  }
  handleCustomEClick = (e) => {

    this.setState({
      showCustomE: !this.state.showCustomE,
      showCustomA: false,
      showUserA: false,
      showPurchases: false,
    });
  }
  handlePurchaseClick = (e) => {

    this.setState({
      showPurchases: !this.state.showPurchases,
      showCustomA: false,
      showCustomE: false,
      showUserA: false,
    });
  }



  componentDidMount = () => {
    braze.register(mParticleConfig);
    mParticle.init(process.env.REACT_APP_MPARTICLE_API_KEY, mParticleConfig);

    /*braze.initialize(process.env.REACT_APP_BRAZE_API_KEY, {
      baseUrl: process.env.REACT_APP_BRAZE_ENDPOINT,
    });
    
    braze.automaticallyShowInAppMessages();
    braze.openSession();*/
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Braze Web SDK Integration</h1>
        </header>

        {/*<a href="https://js.appboycdn.com/web-sdk/latest/doc/module-appboy.html" target="_blank" rel="noopener noreferrer">Link to Web SDK Documentation (Main ClassName Methods)</a>
        <a href="https://js.appboycdn.com/web-sdk/latest/doc/ab.User.html" target="_blank" rel="noopener noreferrer">Link to Web SDK Documentation (getUser() SubclassName Methods)</a>
    */}
        <a href="https://sweeney.braze.com/dashboard/app_usage/61d45c609c8bb41ce2323f91?locale=en" rel="noopener noreferrer" target="_blank">Link to Braze Dashboard</a>




        <div className="App-body">

          <button className="specialButton" onClick={this.handleUserAClick}>Set User Attributes</button>

          <button className="specialButton" onClick={this.handleCustomAClick}>Set Custom Attributes</button>

          <button className="specialButton" onClick={this.handleCustomEClick}>Log Custom Events</button>

          <button className="specialButton" onClick={this.handlePurchaseClick}>Log Purchases</button>


        </div>
        <div className="Input-forms">
          {this.state.showUserA ? <UserAttributes display={this.state.showUserA} /> : ""}
          {this.state.showCustomA ? <CustomAttributes display={this.state.showUserA} /> : ""}
          {this.state.showCustomE ? <CustomEvents display={this.state.showUserA} /> : ""}
          {this.state.showPurchases ? <Purchases display={this.state.showUserA} /> : ""}


        </div>

      </div>

    )
  };

};

export default App;
