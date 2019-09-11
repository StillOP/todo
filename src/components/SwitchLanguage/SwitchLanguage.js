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
        };
        
        this.setLanguages = this.setLanguages.bind(this);
        //this.setLanguagesChange = this.setLanguagesChange.bind(this);
    }

    changeVisualising = visualising => {
        this.setState({ visualising });
        let newlang = visualising;
        this.setState(prevState => ({ value: newlang }));
        this.props.i18n.changeLanguage(newlang);

        this.setLanguagesChange(this, null);
        
    };

    setLanguagesTab(tab, path) {
        let size = 16;
        let locale = utilities.getRequestedLocale();
        
        let returnTab = tab.map((lang) => (
            <Dropdown.Item hoverable="true" value={lang.Language__} key={lang.Language__} style={this.itemStyle}>
                <Link to={'/' + lang.Language__ + '/' + path}>
                    <div style={this.linkStyle}>
                    <Image
                        src={"https://www.atonline.com/img/flag-icons/" + lang.Language__ + ".png"}
                        alt={lang.Local_Name}
                        size={size}
                    />
                        {lang.Local_Name}
                    </div>
                </Link>
            </Dropdown.Item>
            )
        );    
        
        for(let i = 0; i < returnTab.length; i++) {
            if(returnTab[i].key == locale) {
                let top = returnTab[0];
                let sTop = returnTab[i];

                returnTab[0] = sTop;
                returnTab[i] = top;
            }
        }
            
        let localeName = utilities.getLocaleName(locale);
            
        returnTab[0] = (
            <Dropdown.Item hoverable="true" value={locale} key={locale}>
                <Image
                    src={"https://www.atonline.com/img/flag-icons/" + locale + ".png"}
                    alt={localeName}
                    size={size}
                />
                    {localeName}
            </Dropdown.Item>
        );
        
        return returnTab;
        
    }

    setLanguagesChange(instance, pathName) {
        let finalPath = pathName == null ? utilities.getPathName() : pathName;
        let languages = this.setLanguagesTab(instance.pMap, finalPath); 
        
        instance.setState({languages:languages});
    }



    setLanguages() {
        
        fetch('https:///ws.atonline.com/_rest/Language:local')
            .then(data => {
                return data.json();
            }).then(data => {
                this.pMap = data.data;
                let languages = this.setLanguagesTab(data.data, utilities.getPathName());
            
            //console.log(languages);

            this.setState({languages:languages});
        })
    }

    wrapper(e) {
        this.setLanguagesChange(this, utilities.getPathNameA(e.target.getAttribute('href')));
    }

    
    componentDidMount () {
        this.setLanguages();
        let appLinks = document.getElementsByClassName('app-link');
        
        for(let i = 0; i < appLinks.length; i++) {
            appLinks[i].addEventListener('click', this.wrapper.bind(this));
        }
    };

    render() {
        return (
            <Dropdown value={this.state.visualising} className={this.state.class} onChange={this.changeVisualising}>
                {this.state.languages}
            </Dropdown>
        );
    }

    pMap = [];

    itemStyle = {
        paddingTop: '1px',
        paddingBottom: '1px'
    };

    linkStyle = {
        
        width: '114%'
       
    };

}

export default withTranslation()(SwitchLanguage);