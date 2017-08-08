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
import phone from './images/phone_cc.svg';
import envelope from './images/envelope_cc.svg';
import lightbulb from './images/lightbulb_cc.svg';
import facebook from './images/logo-facebook.svg';
import instagram from './images/logo-instagram.svg';
import twitter from './images/logo-twitter.svg';
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
        <section className="ArticleWrapperSection">
          <ArticleTeaser name="Hard Truth about Insurance" image={umbrella} views="200" color={backgroundColorForTeasers.Turquoise} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="What are Equities and how they can grow" image={coins} views="3,500" color={backgroundColorForTeasers.Brown} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="Angels and Unicors" image={rocket} views="300" color={backgroundColorForTeasers.Blue} flexi={widthForTeasers.small}/>
        </section>
        <section className="ArticleWrapperSection">
          <ArticleTeaser name="Investment options for Tax Saving under 80 C" image={wallet} views="300" color={backgroundColorForTeasers.Yellow} flexi={widthForTeasers.small}/>
          <ArticleTeaser name="Secret Superpower of Compunding" image={calculator} views="3,500" color={backgroundColorForTeasers.Orange} flexi={widthForTeasers.big}/>
        </section>
        <section className="ArticleWrapperSection">
          <ArticleTeaser name="Money kept in accout loses in Value" image={greece} views="300" color={backgroundColorForTeasers.Green} flexi={widthForTeasers.big}/>
          <ArticleTeaser name="Real Estate" image={house} views="3,500" color={backgroundColorForTeasers.Grey} flexi={widthForTeasers.small}/>
        </section>
      </div>
    );
  }
}

class More extends Component {
  render() {
    return (
      <div className="MoreWrapper">
        <button className="MoreButton">MORE</button>
      </div>
    );
  }
}

class GetStarted extends Component {
  render() {
    return (
        <section className="GetStartedElements">
          <img src={phone} alt="img for getstarted" className="GetStartedImage"/>
          <div className="GetStartedHeading">
              <h1>Save tax in 2 minutes</h1>
              <h2>Saving for 80c is like taking a selfie <br/>literally. Try it for yourself!</h2>
              <button className="GetStartedButton">GET STARTED</button>
          </div>
        </section>
    );
  }
}

class GetInTouch extends Component {
  render() {
    return (
      <div className="GetInTouch">
        <section className="GetInTouchElements">
          <img src={this.props.image} alt="img for GetInTouch" className="GetInTouchImage"/>
          <div className="GetInTouchHeading">
              <h1>{this.props.titleH1}</h1>
              <h2>{this.props.titleH2}</h2>
              <button className="GetInTouchButton">{this.props.ButtonGetStarted}</button>
          </div>
        </section>
        </div>
    );
  }
}

class GetInTouchWrapper extends Component {
  render() {
    return (
      <div className="GetInTouchWrapper">
        <section className="GetInTouchSection">
          <GetInTouch image={envelope} 
            titleH1="Subscribe to Insights" 
            titleH2="Get best of Insights delivered to your inbox" 
            ButtonGetStarted="SUBSCRIBE"
            />
          <GetInTouch image={lightbulb} 
            titleH1="Have a Question?" 
            titleH2="Get advice from experts, for free, in 48 hours" 
            ButtonGetStarted="POST YOUR THOUGHT"
            />
        </section>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="FooterWrapper">
      <div className="Footer">
        <div className="InteractWithCustomer">
          <div className="InteractWithCustomer_column About">
            <span>ABOUT</span>
            <span>About Us</span>
            <span>Taxy</span>
            <span>Calculator</span>
            <span>Contact Us</span>
          </div>
          <div className="InteractWithCustomer_column Contact">
            <span>CONTACT</span>
            <span>Basic Info</span>
            <span>Map</span>
            <span>Contact form</span>
          </div>
          
        </div>
        <div className="SocialMedia">
          <img src={facebook} alt="img for SocialMedia" className="SocialMediaImage"/>
          <img src={twitter} alt="img for SocialMedia" className="SocialMediaImage"/>
          <img src={instagram} alt="img for SocialMedia" className="SocialMediaImage"/>
        </div>  
      </div>
      <span className="Signature">Made with love by Niluap.
          All icons from thenounproject.com
          </span>
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
        <More />
        <GetStarted />
        <GetInTouchWrapper />
        <Footer />
        
      </div>
    );
  }
}

export default App;

