// components/FormToggle.js
import React, { useState } from 'react';
import styles from './FormToggle.module.css'; // Importing CSS module

const FormToggle = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={handleToggleForm}>
        {isFormVisible ? 'Book Now' : 'Book Now'}
      </button>
      
      {isFormVisible && (
        <form className={styles.form}>
          <h2>Sample Form</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FormToggle;
