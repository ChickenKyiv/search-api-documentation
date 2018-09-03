/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('Chicken Kyiv Logos_Transparent background.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);
const MainPage = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{textAlign: 'center'}}>

        <div className = "tableofcontents">
          <strong>Search API </strong>- abstract version, without connecting to database.
        <br/><strong>Check models for current project you can find here:</strong>
          You should recreate a samlpe logic from from scratch. But spend time and make it adjustable. Keep in mind that main function for this server is to return data only. We didn't add new database items, not deleting them.
          It should be not very difficult, huh? Create a separated repo in our code repository, where we'll keep schemas for this project.

          This will help us. You should make this schema with help of our other team members. So you'll need to create a plan and separate roles, tasks, so one will create types, other queries, etc. Later you'll merge them and test how it work together.

          Keep in mind that we like to change schemes a lot, so you should be aware about this.

          You should also create a simple explanation document - readme file that will explain how everything works. This will help you later and will speed up the process of other developers, involved to development process.

      </div>


  </div>
);
const FeatureCallout = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Table of contents</h2>
        <div className = "tableofcontents">

      <ul>
        <li><a href="/search-api-documentation/docs/intro">Intro</a></li>
        <li><a href="/search-api-documentation/docs/db-schema">DB Schema</a></li>
        <li><a href="/search-api-documentation/docs/search-api-releases/search-api-releases">Search API Releases</a></li>
          <ul>
          <li><a href="/search-api-documentation/docs/search-api-releases/release-0">Release #0</a></li>
          <li><a href="/search-api-documentation/docs/search-api-releases/release-1">Release #1</a></li>
          <li><a href="/search-api-documentation/docs/search-api-releases/release-2">Release #2</a></li>
          <li><a href="/search-api-documentation/docs/search-api-releases/release-3">Release #3</a></li>
          <li><a href="/search-api-documentation/docs/search-api-releases/release-4">Release #4</a></li>
          </ul>
        <li><a href="/search-api-documentation/docs/search-api-tests/search-api-tests">Search API tests</a></li>
        <ul>
          <li><a href="/search-api-documentation/docs/search-api-tests/how-to-test-search-api">How To test Search API?</a></li>
        </ul>
        <li><a href="/search-api-documentation/docs/search-form-tests">Search Form Tests</a></li>
        <li><a href="/search-api-documentation/docs/database-tables-models/database-tables-models">Database Tables/ Models</a></li>
          <ul>
          <li><a href="/search-api-documentation/docs/database-tables-models/ingredients">Ingredients</a></li>
          <li><a href="/search-api-documentation/docs/database-tables-models/recipe-names">Recipe Names</a></li>
          <li><a href="/search-api-documentation/docs/database-tables-models/attribute/README">Attribute</a></li>
              <ul>
            <li><a href="/search-api-documentation/docs/database-tables-models/attribute/allergy">Allergy</a></li>
            <li><a href="/search-api-documentation/docs/database-tables-models/attribute/diet">Diet</a></li>
            <li><a href="/search-api-documentation/docs/database-tables-models/attribute/holiday">Holiday</a></li>
            <li><a href="/search-api-documentation/docs/database-tables-models/attribute/cuisine">Cuisine</a></li>
            <li><a href="/search-api-documentation/docs/database-tables-models/attribute/course">Course</a></li>
            </ul>
            </ul>
        <li><a href="/search-api-documentation/docs/simple-queries/simple-queries">Simple Queries</a></li>
          <ul>
          <li><a href="/search-api-documentation/docs/simple-queries/ingredients-by-name">Ingredients By Name</a></li>
          <li><a href="/search-api-documentation/docs/simple-queries/attributes-by-name">Attributes By Name</a></li>
          <li><a href="/search-api-documentation/docs/simple-queries/recipes-by-name">Recipes By Name</a></li>
          <li><a href="/search-api-documentation/docs/simple-queries/recipe-cases">Recipe Cases</a></li>
          <li><a href="/search-api-documentation/docs/simple-queries/attributes-that-will-return-one-or-more-recipes">Attributes that will return one or more recipes</a></li>
          <li><a href="/search-api-documentation/docs/simple-queries/recipes-plus-attributes">Recipes + Attributes</a></li>
          </ul>
      </ul>
      </div>


  </div>
);
const FeatureCallout2 = props => (

  <div className = "ogg" style={{textAlign: 'left'}}>
    <div className="wrapper">
      <div className="gridBlock">
        <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
          <div className="blockImage">
            <img src="/recipe-app-react-native/img/54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png">

            </img>
          </div>
          <div className="blockContent"><h2><div><span><p>Description</p>
    </span></div></h2><div><span><p>
        Build with: Angular, Ionic Framework v.1
      <ul>
        <h3>Basic functionality:</h3>
        <li>Screen with recipes list</li>
        <li>Recipe details</li>
        <li>Basic grocery list</li>
        <li>Login screen.</li>
    </ul>



      </p>
    </span></div></div></div>
      </div>
    </div>
  </div>
);
const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Release #1 completed(Free Menu) ^ Build with: Angular, Ionic Framework v.1 Note: soon I’ll redo an app from scratch.',
        image: imgUrl('54A84DCB-F7EE-49E3-8DA1-1EF07F873622.png'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="showcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
           {/* <TryOut /> */}

          <MainPage />
          <FeatureCallout />

           {/* <LearnHow /> */}

          {/* <Description />  */}
           {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
