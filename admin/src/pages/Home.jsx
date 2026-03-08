import styles from './Home.module.css';
import { AdminWelcome } from '../components/AdminWelcome';
import { QuickActions } from '../components/QuickActions';
import { AdminNavigation } from '../components/AdminNavigation';
import { PublicSiteLink } from '../components/PublicSiteLink';

const PUBLIC_SITE_URL = '#'; // replace later

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <AdminWelcome />
        <QuickActions />
        <AdminNavigation />
        <PublicSiteLink url={PUBLIC_SITE_URL} />
      </div>
    </>
  );
};

export { Home };
