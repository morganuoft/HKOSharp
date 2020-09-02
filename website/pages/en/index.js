/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="https://github.com/ShingZhanho/HKOSharp">View On GitHub</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = (props) => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const QuickLinks = () => (
      <Block layout="fourColumn">
        {[
          {
            title: '[Quick Start]()',
            content: 'See some examples of using HKOSharp',
            image: `${baseUrl}img/undraw_setup.svg`,
            imageAlign: 'top',
          },
          {
            title: '[Documentation]()',
            content: 'Check usage of HKOSharp',
            image: `${baseUrl}img/undraw_docs.svg`,
            imageAlign: 'top',
          },
          {
            title: '[Changlog]()',
            content: 'See changes on different versions',
            image: `${baseUrl}img/undraw_changelog.svg`,
            imageAlign: 'top',
          },
        ]}
        </Block>
    );

    const WhyHKOSharp = () => (
      <Block>
        {[
          {
            content:
              'HKOSharp does all HTTP requests and JSON stuffs for you. You don\'t ' +
              'need to deal with those complicated things. Isn\'t that cool?',
            image: `${baseUrl}img/undraw_import_and_use.svg`,
            imageAlign: 'right',
            title: 'Why HKOSharp?',
          },
        ]}
      </Block>
    );

    const WhatIsHKOSharp = () => (
      <Block background="light">
        {[
          {
            content:
              'HKOSharp is a C# library which provids methods to access' +
              'Hong Kong Observatory\'s Open Data API. ' +
              'You should check **[Hong Kong Observatory\'s Official API documents]' +
              '(https://www.hko.gov.hk/en/weatherAPI/doc/files/HKO_Open_Data_API_Documentation.pdf)**.',
            image: `${baseUrl}img/undraw_what_is_this.svg`,
            imageAlign: 'left',
            title: 'What Is HKOSharp?',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <QuickLinks />
          <WhatIsHKOSharp />
          <WhyHKOSharp />
          
        </div>
      </div>
    );
  }
}

module.exports = Index;
