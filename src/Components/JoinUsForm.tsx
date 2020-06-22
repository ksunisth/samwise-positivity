import React from 'react';
import styles from '../css/JoinUsForm.module.css';

export default (): React.ReactElement => (
  <div className={styles.Form}>
    <div>
      <h3>Want to join our team? Send us a message!</h3>
      <p>
        In your message, mention what you want to contribute
        (i.e.: frontend development, UX design, content writing),
        and someone from our team will reach out.
      </p>
      <form>
        <input className={styles.Name} type="textbox" placeholder="Name" />
        <input className={styles.Email} type="email" placeholder="Email" />
        <input className={styles.TextArea} type="textarea" placeholder="Type your message..." />
      </form>
      <button className={styles.Button} type="submit">Submit</button>

    </div>
  </div>
);
