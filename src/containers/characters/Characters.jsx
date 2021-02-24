import React from 'react';
import CharacterForm from '../../components/characters/CharacterForm';
import CharacterList from '../../components/characters/CharacterList';
import styles from './Characters.css';

export default function Characters() {
  return (
    <div className={styles.Characters}>
      <p>
        Welcome to the Character page
        <br/>
        Create a new character or select a previous character.
      </p>
      <CharacterForm />
      <CharacterList />
      <p>
        <button>Begin Adventure!</button>
      </p>
    </div>
  );
}
