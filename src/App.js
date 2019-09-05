import React, { Component } from 'react';
import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import { withRouter } from "react-router";
import * as utilities from './utilities';


class App extends Component {
    constructor(){
        super();
        this.state = {
            locale: ''
        }
    }

    componentDidMount () {
        const {match} = this.props;
        const { t, i18n } = this.props;
        const getCurrentLng = i18n.language || window.localStorage.i18nextLng || '';
        const locale = utilities.getRequestedLocale();

        fetch('https:///ws.atonline.com/_rest/User/@')
            .then(data => {
            return data.json();
        }).then(data => {
            console.log(data)
        });

        
        i18n.changeLanguage(locale);

        this.setState({
            locale: locale
        });
    }

    render()  {
        //const { t, i18n } = this.props;
        return  (
            <div>
                <BrowserRouter /*basename={i18n.language}*/>
                    <Navbar />
                    <Footer />
                </BrowserRouter>
            </div>

        );
    }

}

export default withTranslation("translations")(App);