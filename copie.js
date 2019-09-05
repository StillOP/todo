import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { withTranslation } from "react-i18next";
import SwitchLanguage  from '../../SwitchLanguage/SwitchLanguage';
import Home from '../../home/Home';
import Form from '../../login/Form';
import { Button, Columns, Container } from "react-bulma-components";
// import NavbarItem from "./NavbarItem";
// import NavbarBurger from "./NavbarBurger";
import AppLink from '../AppLink';

const NavbarItem = props => (
  <a className="navbar-item is-capitalized" href={`#${props.page}`}>
    {props.page}
  </a>
);
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
  >
    <span />
    <span />
    <span />
  </button>
);

class Navbar extends Component {
  state = {
    activeMenu: false,
   // value: "en-US",
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    const { t } = this.props;
    let { pages = [] } = this.props;
    let navbarItems = pages.map(page => <NavbarItem page={page} key={page} />);
    return (
        <div>
            <div className="is-fluid"> 
                <nav className="navbar">
                    <div className="container">
                      <div className="navbar-brand">
                          <Link to="/" className="navbar-item" href="/#"> {t('navbar.home')}</Link>
                          <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false"  data-target="navMenu" href="/#">
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                          </a>
                      </div>
                      <div id="navMenu" className="navbar-menu">
                          <div className="navbar-start">
                              <AppLink to="/about" className="navbar-item" label={t("navbar.rest_documentation")} />
                              <Link to="/locale/topics" className="navbar-item">{t("navbar.news")}</Link>
                              <Link to="/contact" className="navbar-item">{t("navbar.contact")}</Link>
                          {/* 
                              <div className="navbar-item has-dropdown is-hoverable"><a className="navbar-link" href="/#">ICO</a>
                                  <div className="navbar-dropdown">
                                  <a className="navbar-item navbar-item-dropdown" href="/#">Whitepaper</a>
                                  <a className="navbar-item navbar-item-dropdown" href="/#">Token</a>
                                  </div>
                              </div>
                          */}
                          </div>
                          <div className="navbar-end">
                              <div className="navbar-item">
                              <SwitchLanguage />
                              <div className="buttons">
                                  <Link to="/login" className="navbar-item">
                                  <Button className="button is-light" href="/#">{t("log_in")}</Button>
                                  </Link>
                                  <Link to="/account" className="navbar-item">
                                  <Button className="button is-primary" href="/#">Account</Button>
                                  </Link>
                              </div>
                              </div>
                          </div>
                          <NavbarBurger
                              active={this.state.activeMenu}
                              toggleMenu={this.toggleMenu}
                          />
                          <div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
                              <div className="navbar-start">{navbarItems}</div>
                          </div>
                      </div>
                    </div>
                </nav>
            </div>
            <div className="container App">
                    
                <div className="main-route-place">
                <Switch>
                    <Route exact path="/" component={IndexHome} />
                    <Route path="/about" component={About} />
                    <Route path="/locale/topics" component={Topics} />
                    <Route path="/login" component={Login} />
                </Switch>
                </div>

            </div>
        </div>
        
    );
  }
}

class IndexHome extends Component {
 
    render()  {
      return (
        <Home />
      );
    }
  }
   
  class About  extends Component {
  
  
  
    render() {
  
      return (
        <div>
          <h2>About</h2>
          <p>About contents</p>
          <Container>
            <Columns>
              <Columns.Column size="one-fifth">20%</Columns.Column>
              <Columns.Column>80%</Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column size="one-quarter">
                <div className="single-box">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="feather feather-server">
                          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                          <line x1="6" y1="6" x2="6" y2="6"></line>
                          <line x1="6" y1="18" x2="6" y2="18"></line>
                        </svg>
                    </div>
                    <h3>Secure</h3>
                    <p>The Service is operated by security professionals</p>
                </div>
              </Columns.Column>
              <Columns.Column size="one-quarter">
                <div className="single-box">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"  className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
                    </div>
                    <h3>Secure</h3>
                    <p>The Service is operated by security professionals</p>
                </div>
              </Columns.Column>
              <Columns.Column size="one-quarter">
                <div className="single-box">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
                    </div>
                    <h3>Secure</h3>
                    <p>The Service is operated by security professionals</p>
                </div>
              </Columns.Column>
              <Columns.Column size="one-quarter">
                <div className="single-box">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
                    </div>
                    <h3>Secure</h3>
                    <p>The Service is operated by security professionals</p>
                </div>
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column size="one-third">33.333333333%</Columns.Column>
              <Columns.Column>66.666666667%</Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column size="half">50%</Columns.Column>
              <Columns.Column>Also 50%</Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column size="two-thirds">66.666666667%</Columns.Column>
              <Columns.Column>33.333333333%</Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column size="three-quarters">75%</Columns.Column>
              <Columns.Column>25%</Columns.Column>
            </Columns>
          </Container>
        </div>
      );
    }
  }
   
  class Topics extends Component {
    render( ) {
      return (
        <div>
          <h2>Topics</h2>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/rendering`}>
                Rendering with React
              </Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/components`}>Components</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/props-v-state`}>
                Props v. State
              </Link>
            </li>
          </ul>
   
          <div className="secondary-route-place">
            <Route
              path={`${this.props.match.url}/:topicId`}
              component={Topic} />
            <Route
              exact
              path={this.props.match.url}
              render={() =>
                <h3>
                  Please select a topic.
                </h3>
              }
              />
          </div>
        </div>
      );
    }
  }
   
  class Topic extends Component {
    render()  {
      return (
        <div>
          <h3>
            {this.props.match.params.topicId}
            <Button color="info" outlined rounded size="large">
              Our Button
            </Button>
          </h3>
        </div>
      );
    }
  }
  
  class Login extends Component {
    render()  {
      return (
        <Form />
      );
    }
  }

Navbar.propTypes = {
  //pages: PropTypes.array.isRequired,
  //color: PropTypes.string,
};
export default withTranslation()(Navbar);