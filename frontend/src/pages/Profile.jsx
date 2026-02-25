import styles from './Profile.module.css';
// import ProfileSummary from './ProfileSummary';
// import PostCard from './PostCard';

export default function Profile() {
  // mock data for layout
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'john@example.com',
  };

  const posts = [
    {
      id: 1,
      title: 'My First Post',
      content: 'Lorem ipsum dolor sit amet...',
      comments: [
        { id: 1, text: 'Nice post!' },
        { id: 2, text: 'Great read.' },
      ],
    },
  ];

  return (
    <div className={styles.profilePage}>
      <aside className={styles.sidebar}>
        {/* <ProfileSummary user={user} /> */}
      </aside>

      <main className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>Your Posts</h2>

        <div className={styles.postsGrid}>
          {/* {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))} */}
        </div>
      </main>
    </div>
  );
}
