import styles from './Home.module.css';
import { FeaturedPost } from '../components/FeaturedPost/FeaturedPost';
import { LatestFood } from '../components/LatestFood/LatestFood';
import { Favorites } from '../components/Favorites/Favorites';
import { Story } from '../components/Story/Story';

const Home = () => {
  return (
    <div className={styles.container}>
      <FeaturedPost />
      <LatestFood />
      <Favorites />
      <Story />
    </div>
  );
};

export { Home };
