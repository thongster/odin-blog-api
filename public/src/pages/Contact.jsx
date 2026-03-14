import styles from './Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for your message!');
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.subtitle}>
          Questions, food tips, or travel recommendations? Send a message below.
        </p>
      </div>

      <p className={styles.text}>
        Vietnam Food Adventures is a community of people sharing their favorite
        food experiences across Vietnam — from street food stalls and local
        markets to hidden restaurants and unforgettable meals.
      </p>

      <p className={styles.text}>
        If you'd like to contribute your own food adventure, you can create a
        post directly through the admin dashboard. Once logged in, you’ll be
        able to write and publish your own stories, discoveries, and favorite
        dishes.
      </p>

      <p className={styles.text}>
        For general questions, recommendations, or food tips, feel free to send
        a message using the form below.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your email" />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Share a recommendation, question, or food discovery..."
          />
        </div>

        <button className={styles.button}>Send Message</button>
      </form>
    </section>
  );
};

export { Contact };
