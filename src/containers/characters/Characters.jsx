import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterForm from '../../components/characters/CharacterForm';
import CharacterList from '../../components/characters/CharacterList';
import styles from './Characters.css';

export default function Characters() {
  const [characterName, setCharacterName] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [hitPoints, setHitPoints] = useState(0);
  const [tool, setTool] = useState('');

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
        <Link to={'quests'}>
          <button>Begin Adventure!</button>
        </Link>
      </p>
    </div>
  );
}
