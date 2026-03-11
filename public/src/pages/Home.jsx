import styles from './Home.module.css';
import { FeaturedPost } from '../components/FeaturedPost';
import { LatestFood } from '../components/LatestFood';
import { Favorites } from '../components/Favorites';
import { Story } from '../components/Story';

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
