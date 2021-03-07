import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CharacterForm from '../../components/characters/CharacterForm';
import CharacterList from '../../components/characters/CharacterList';
import { getCharacters, postCharacter } from '../../services/character';
import styles from './Characters.css';

export default function Characters() {
  const [characterName, setCharacterName] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [hitPoints, setHitPoints] = useState(0);
  const [tool, setTool] = useState('');
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(null);

  const onCharacterNameChange = ({ target }) => {
    setCharacterName(target.value);
  };
  
  const onGenderChange = ({ target }) => {
    setGender(target.value);
  };
  
  const onSpeciesChange = ({ target }) => {
    setSpecies(target.value);
  };

  const onToolChange = ({ target }) => {
    setTool(target.value);
  };

  const onCharacterSubmit = (e) => {
    console.log('Form submitted');
    e.preventDefault();

    const character = {
      characterName,
      species,
      hitPoints: 30,
      gender
    };

    console.log(character);

    postCharacter(character)
      .then(res => {
        setCharacter(res);
        getCharacters()
          .then(res => {
            setCharacters(res);
          });
      });
  };

  console.log(characters);
  console.log(character);


  return (
    <div className={styles.Characters}>
      <p>
        Welcome to the Character page
        <br/>
        Create a new character or select a previous character.
      </p>
      <CharacterForm
        onCharacterNameChange={onCharacterNameChange}
        onGenderChange={onGenderChange}
        onSpeciesChange={onSpeciesChange}
        onToolChange={onToolChange}
        onCharacterSubmit={onCharacterSubmit}
      />
      <CharacterList
        characters={characters}
      />
      <p>
        <Link to={'quests'}>
          <button>Begin Adventure!</button>
        </Link>
      </p>
    </div>
  );
}
