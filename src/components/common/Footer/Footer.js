import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

class Footer extends Component{

    render() {
        const { t } = this.props;
        return (
            <div className="container is-fluid">
                <footer className="footer">
                    <div className="container">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <a className="title is-4" href="/#">Pied Piper</a>
                                </div>
                            </div>
                            <div className="level-right">
                                <Link to="/features" className="level-item">{t("footer_privacy_policies")}</Link>
                                <Link to="/terms_conditions" className="level-item">{t("footer_terms_conditions")}</Link>
                                <Link to="/contact_us" className="level-item">{t("footer_contact_us")}</Link>
                            </div>
                        </div>
                        <hr />
                        <div className="columns">
                            <div className="column">
                            <div className="buttons">
                                <a className="button" href="/#">
                                    <img src="/images/icons/twitter.svg" alt="" />
                                </a>
                                <a className="button" href="/#">
                                    <img src="/images/icons/facebook.svg" alt="" />
                                </a>
                                <a className="button" href="/#">
                                    <img src="/images/icons/instagram.svg" alt="" />
                                </a>
                            </div>
                            </div>
                            <div className="column has-text-centered has-text-right-tablet">
                            <p className="subtitle is-6">{t("copyright")}</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default withTranslation()(Footer);