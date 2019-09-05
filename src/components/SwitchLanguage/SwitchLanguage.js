import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Dropdown, Image } from 'react-bulma-components';
import { Link, Route, Switch } from "react-router-dom";
import * as utilities from '../../utilities';


class SwitchLanguage extends Component{

    constructor(){
        super();
        this.state = {
            languages:  [],
            selected: 'active',
            visualising: undefined,
            class:"flags-lst is-not-up",
        }
    }

    changeVisualising = visualising => {
        this.setState({ visualising });
        let newlang = visualising;
        this.setState(prevState => ({ value: newlang }));
        this.props.i18n.changeLanguage(newlang);

        let newUrl = '/' + newlang + '/' + utilities.getPathName();
        //window.history.pushState(null, null, newUrl);*/
        
        console.log("Pathname " + utilities.getPathName());

        window.location.href = newUrl;

    };

componentDidMount () {
    let size = 16;
    let locale = utilities.getRequestedLocale();


    fetch('https:///ws.atonline.com/_rest/Language:local')
        .then(data => {
        return data.json();
    }).then(data => {
        let languages = data.data.map((lang) => (
            <Dropdown.Item hoverable="true" value={lang.Language__} key={lang.Language__}>
            <Image
            src={"https://www.atonline.com/img/flag-icons/" + lang.Language__ + ".png"}
            alt={lang.Local_Name}
            size={size}
            />
            {lang.Local_Name}
            </Dropdown.Item>
        )
                                     )

        for(let i = 0; i < languages.length; i++) {
            if(languages[i].key == locale) {
                let top = languages[0];
                let sTop = languages[i];

                languages[0] = sTop;
                languages[i] = top;

            }
        }
        console.log(languages);

        this.setState({languages:languages});
    })

};

render() {
    return (
        <Dropdown value={this.state.visualising} className={this.state.class} onChange={this.changeVisualising}>
            {this.state.languages}
        </Dropdown>
    );
}
}

export default withTranslation()(SwitchLanguage);