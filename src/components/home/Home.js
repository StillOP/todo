import React, { Component } from 'react';
import { withTranslation } from "react-i18next";
import { Columns, Container } from "react-bulma-components";
import InlineSVG from 'svg-inline-react';


class Home extends Component {

    state = {
      value: "en-US"
    };
  
    render()  {
      const { t } = this.props;

        return (
            <div className="main-banner">
                
                <h1>{t("atonline_main_title")}</h1>
                <p>{t("atonline_main_desc")}</p>

                <div>
                  <h2>{t("navbar.home")}</h2>
                  <p>{t("home.p")}</p>
                  <Container>

                    <Columns>
                      <Columns.Column size="one-quarter">
                        <SingleBox featureTitle={t('home.feature_secure')} featureDetail={t('home.feature_secure_p')} svg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>' />
                      </Columns.Column>
                      <Columns.Column size="one-quarter">
                        <SingleBox featureTitle={t('home.feature_serverless')} featureDetail={t('home.feature_serverless_p')} svg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>' />
                      </Columns.Column>
                      <Columns.Column size="one-quarter">
                        <SingleBox featureTitle={t('home.feature_scalable')} featureDetail={t('home.feature_scalable_p')} svg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>' />
                      </Columns.Column>
                      <Columns.Column size="one-quarter">
                        <SingleBox featureTitle={t('home.feature_simple')} featureDetail={t('home.feature_simple_p')} svg='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-branch"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>' />
                      </Columns.Column>
                    </Columns>

                  </Container>
                </div>

            </div>
        );
    };
};

function SingleBox({ featureTitle = '', featureDetail = '', svg = '' }) {

  return  <div className="single-box bg-eb6b3d">
              <div className="icon">
                <InlineSVG src={svg} />
              </div>
              <h3>{featureTitle}</h3>
              <p>{featureDetail}</p>
          </div>
}

export default withTranslation()(Home);