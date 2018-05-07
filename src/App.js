import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import { MainMenu } from './components/MainMenu'
import { NormalLoginForm } from './components/register/NormalLoginForm'
import { MainContent } from './components/MainContent'
import { Form } from 'antd';

const { Footer, Sider } = Layout;


class App extends Component {

  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }


  render() {

    
    const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

    return (
      <div className="App">
         <Layout style={{height: '100%'}}>
            <MainMenu />
            <Layout>
              <MainContent/>
              <Sider width="350">
                  <h3 style={{color: 'white'}}>Prihlásenie</h3>
                  <WrappedNormalLoginForm />
              </Sider>
            </Layout>
            <Footer>
              <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
            </Footer>
         </Layout>
      </div>
    );
  }
}

export default App;
