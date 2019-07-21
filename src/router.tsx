import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Header, Footer, Contact } from './components';
import TheDifferencePage from './components/TheDifferencePage';
import HomePage from './components/Home/HomePage';

import { ParallaxProvider } from 'react-scroll-parallax';
import Lottie from 'react-lottie';

import animationData from './images/sylo-logo-animation.json';

interface IState {
  isLoading: boolean;
}

export class AppRouter extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { isLoading: true };
  }
  // fake authentication Promise
  private authenticate() {
    return new Promise(resolve => setTimeout(resolve, 0));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      this.setState({ isLoading: false });
      console.log(this.state.isLoading);
    });
  }

  public render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <HashRouter>
        {this.state.isLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <ParallaxProvider>
            <div className="">
              <Header />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/difference" component={TheDifferencePage} />
                <Route path="/contact" component={Contact} />
                <Route component={HomePage} />
              </Switch>
              <Footer />
            </div>
          </ParallaxProvider>
        )}
      </HashRouter>
    );
  }
}
