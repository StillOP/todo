import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import { withTranslation } from "react-i18next";


class AppLink extends React.Component {
     constructor(props) {
         super(props);
         this.handleClick = this.handleClick.bind(this);
  }
    
    handleClick(e) {
        e.preventDefault();
        const { i18n } = this.props;
 
        let newUrl = '/' + i18n.language + this.props.to;
        window.history.pushState(null, null, newUrl);
    }
    
    render() {
        return (
            <Link to={this.props.to} className={this.props.className} onClick={this.handleClick}>{this.props.label}</Link>
        );
    }
}

export default withTranslation()(AppLink);