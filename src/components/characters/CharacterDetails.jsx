/* eslint-disable max-len */
import React from 'react';
import styles from './CharacterDetails.css';

export default function CharacterDetails() {
  return (
    <div className={styles.CharacterDetails}>
      <p>
        Santiago (elf)
        <br/>
        Tool: compass
        <br/>
        Gems: blue (5), red (1), yellow (2)
      </p>
    </div>
  );
}
