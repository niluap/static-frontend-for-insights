import React, { Component } from 'react';
import lighthouse_PA from './images/lighthouse_PA.svg';
import clock from './images/clock_cc.svg';
import umbrella from './images/umbrella_cc.svg';
import coins from './images/coins_cc.svg';
import rocket from './images/rocket_cc.svg';
import wallet from './images/wallet_cc.svg';
import calculator from './images/calculator_cc.svg';
import greece from './images/greece_cc.svg';
import house from './images/house_cc.svg';
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
    "big": "2 2 1em",
    };


class ArticleTeaser extends Component {
  
  render() {
    return (
      <div className="ArticleTeaser" style={{backgroundColor: this.props.color, flex: this.props.flexi}}>
        <section className="ArticleTeaserElements">
          
              <img src={this.props.image} alt="img for teaser" className="TeaserImage"/>
              <div className="TeaserHeading">
                <h1>{this.props.name}</h1>
              
          </div>
          <div className="Views">
            <img src={clock} alt="clock" className="ViewsImage"/> <p>{this.props.views} Views </p>
          </div>
        </section>
      </div>
    );
  }
}


class ArticleWrapper extends Component {
  render() {
    return (
      <div className="ArticleWrapper">
        <section>
          <ArticleTeaser name="Hard Truth about Insurance" image={umbrella} views="200" color={backgroundColorForTeasers.Turquoise} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="What are Equities and how they can grow" image={coins} views="3,500" color={backgroundColorForTeasers.Brown} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="Angels and Unicors" image={rocket} views="300" color={backgroundColorForTeasers.Blue} flexi={widthForTeasers.small}/>
        </section>
        <section>
          <ArticleTeaser name="Investment options for Tax Saving under 80 C" image={wallet} views="300" color={backgroundColorForTeasers.Yellow} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="Secret Superpower of Compunding" image={calculator} views="3,500" color={backgroundColorForTeasers.Orange} flexi={widthForTeasers.big}/>
        </section>
        <section>
          <ArticleTeaser name="Money kept in accout loses in Value" image={greece} views="300" color={backgroundColorForTeasers.Green} flexi={widthForTeasers.big}/>
          <ArticleTeaser name="Real Estate" image={house} views="3,500" color={backgroundColorForTeasers.Grey} flexi={widthForTeasers.small}/>
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

