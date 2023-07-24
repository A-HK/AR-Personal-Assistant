import Link from "next/link";

import Layout from "../containers/Layout";
import Services from "../components/Services/Services";
import SpotifyMusic from "./use-cases/music/music";
import MusicFeatures from "../components/Features/MusicFeatures";
import UserJourney from "../components/UserJourney/UserJourney";
import musicData from "../data/MusicList";
import musicGenreData from "../data/MusicGenreData";
import yogaData from "../data/YogaData";
import * as styles from "../styles/spotify.module.css";


const Music = () => {
  return (
    <Layout>
      <MusicFeatures />
      <div className={styles.ctaButton}>
          <Link href={'/use-cases/music/music'} className={styles.serviceLink}>
            <button className="primary-btn">Get Started</button>
          </Link>
      </div>
      <UserJourney journeyData={musicData} />
      <Services servicesData={musicGenreData} />
    </Layout>
  );
};

export default Music;
