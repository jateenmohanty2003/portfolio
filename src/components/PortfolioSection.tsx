import Hero from './Hero';
import Reveal from './Reveal';
import { AboutMe } from './AboutMe';
import SuperPower from './SuperPower';
import SelectedWork from './SelectedWork';
import IhaveWorked from './IhaveWorked';
import PeopleSay from './PeopleSay';
import Footer from './Footer';

const PortfolioSection = () => {
  return (
    <>
      <main id='home'>
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal>
          <AboutMe />
        </Reveal>
        <Reveal threshold={0.05}>
          <SuperPower />
        </Reveal>
        <Reveal threshold={0.05}>
          <SelectedWork />
        </Reveal>
        <Reveal threshold={0.07}>
          <IhaveWorked />
        </Reveal>
        <Reveal>
          <PeopleSay />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
};

export default PortfolioSection;
