import styles from './CreatePost.module.css';
import { useState } from 'react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [published, setPublished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.createPostPage}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Create New Post</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your post..."
              rows={6}
              required
            />
          </div>

          <div className={styles.checkboxRow}>
            <input
              id="published"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            <label htmlFor="published">Publish immediately</label>
          </div>

          <button type="submit" className={styles.button}>
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export { CreatePost };
