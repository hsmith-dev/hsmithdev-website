import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '2D Platformer',
    Svg: require('@site/static/img/platformer_background.svg').default,
    description: (
      <>
        A Mushroom Themed 2D Combat-Platformer, launching on Steam, GOG, XBox, Playstation and Nintendo Switch in 2023! Stay tuned for more details within our Blog!
      </>
    ),
  },
  {
    title: 'Music Mobile Game',
    Svg: require('@site/static/img/music_mobile_mockup.svg').default,
    description: (
      <>
        We have an eye catching and ear awakening game, coming to Mobile shortly after our launch on Kickstarter, stay tuned to hear more on our blog soon!
      </>
    ),
  },
  {
    title: 'More Games Planned',
    Svg: require('@site/static/img/controller.svg').default,
    description: (
      <>
        Stay tuned to learn more about our future projects, we plan to have a monthly update to our blog on game progress.
      </>
    ),
  },
];

const TeamMemberList = [
  {
    title: 'Alistair',
    team_url: 'https://github.com/alistair-dev',
    Img: 'https://github.com/alistair-dev.png',
    description: (
      <>
        Game Artineer
      </>
    ),
  },
  {
    title: 'Bre',
    team_url: 'https://github.com/bre-artineer',
    Img: 'https://github.com/bre-artineer.png',
    description: (
      <>
        Game Artineer
      </>
    ),
  },
  {
    title: 'Harrison',
    team_url: 'https://hsmith.dev',
    Img: 'https://github.com/hsmith-dev.png',
    description: (
      <>
        Software Engineer
      </>
    ),
  },
  {
    title: 'Marta',
    team_url: 'https://github.com/MartaOGallardo',
    Img: 'https://github.com/MartaOGallardo.png',
    description: (
      <>
        Game Artineer
      </>
    ),
  },

  {
    title: 'Sean',
    team_url: 'https://github.com/Sean-Ziegler',
    Img: 'https://github.com/Sean-Ziegler.png',
    description: (
      <>
        Game Artineer
      </>
    ),
  },
];


const ContributorList = [
  {
    title: 'Lead Photographer, Ricci Anderson',
    team_url: 'https://riccianderson.com',
  },
  
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function TeamMember({Img, title, description, team_url}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img className="circular--profile" src={Img}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={team_url}><h3>{title}</h3></a>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ContributorMember({title, team_url}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center padding-horiz--md">
        <a href={team_url}><h5>{title}</h5></a>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="container">
          <h1 className="hero__title" text-align="center">Our Projects</h1>
          
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <br/>
        <br/>
        <div className="container">
          <h1 className="hero__title" >Meet the Team</h1>
          <div className="row">
            {TeamMemberList.map((props, idx) => (
              <TeamMember key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className="container" text-align="center" >
          <div className="row">
          {ContributorList.map((props, idx) => (
              <ContributorMember key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
