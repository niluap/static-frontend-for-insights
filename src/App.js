import React, { Component } from 'react';
import lighthouse_PA from './images/lighthouse_PA.svg';
import './App.css';

class MainHeader extends Component {
  render() {
    return (
      <div className="MainHeader">
        <div className="MainHeaderButtonWrapper">
          <button className="MainHeaderButton">LOGIN</button>
        </div>
        <section className="MainHeaderSection">
          <div>
          <h1>Insights</h1>
          <h4>Make Better Choices with Money</h4>
          </div>
          <div>
            <img src={lighthouse_PA} alt="lighthouse" className="HeaderLogo"/>
          </div>
        </section>
      </div>
    );
  }
}

class SmallHeader extends Component{
  render() {
    return (
      <div className="SmallHeader">
        
        
          <h1>Our insights</h1>
          <h4>Get all your financial questions answered with articles <br/>
            from finance gurus.</h4>
          
          <div></div>
          
      </div>
    );
  }
}

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <button className="NavigationButton">All</button>
        <button className="NavigationButton">Mutual Fund</button>
        <button className="NavigationButton">Equities</button>
        <button className="NavigationButton">Real Estate</button>
        <button className="NavigationButton">Stocks</button>
        <button className="NavigationButton">Insurance</button>
      </div>
    );
  }
}
const backgroundColorForTeasers = {
   "Turquoise": "rgb(113,210,181)",
    "Brown": "rgb(196,173,143)",
    "Blue": "rgb(101,192,233)",
    "Yellow": "rgb(249,172,17)",
    "Orange": "rgb(235, 127, 88)",
    "Green": "rgb(167, 205, 165)",
    "Grey": "rgb(135, 157, 154)",
};

const widthForTeasers = {
   "small": "1 1 0em",
    "big": "2 2 2em",
    };

class ArticleTeaser extends Component {
  
  render() {
    return (
      <div className="ArticleTeaser" style={{backgroundColor: this.props.color, flex: this.props.flexi}}>
        <h1>teasers for {this.props.name}</h1>
      </div>
    );
  }
}


class ArticleWrapper extends Component {
  render() {
    return (
      <div className="ArticleWrapper">
        <section>
          <ArticleTeaser name="Umberlla" color={backgroundColorForTeasers.Turquoise} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="Money" color={backgroundColorForTeasers.Brown} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="Rocket" color={backgroundColorForTeasers.Blue} flexi={widthForTeasers.small}/>
        </section>
        <section>
          <ArticleTeaser name="Wallet" color={backgroundColorForTeasers.Yellow} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="Calc" color={backgroundColorForTeasers.Orange} flexi={widthForTeasers.big}/>
        </section>
        <section>
          <ArticleTeaser name="Greece" color={backgroundColorForTeasers.Green} flexi={widthForTeasers.big}/>
          <ArticleTeaser name="House" color={backgroundColorForTeasers.Grey} flexi={widthForTeasers.small}/>
        </section>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h1>Footer</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <SmallHeader />
        <NavigationBar />
        <ArticleWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;

