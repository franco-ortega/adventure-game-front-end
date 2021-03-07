import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetails from './CharacterDetails';
import styles from './CharacterList.css';

export default function CharacterList({ characters }) {

  const charactersElements = characters.map(character => (
    <li key={character.id}>
      <CharacterDetails {...character} />
    </li>
  ));

  return (
    <ul className={styles.CharacterList}>
      {charactersElements}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};
