import React from 'react';
import CharacterDetails from './CharacterDetails';
import styles from './CharacterList.css';

export default function CharacterList() {
  return (
    <div className={styles.CharacterList}>
      A list of previous characters:
      <CharacterDetails />
    </div>
  );
}
