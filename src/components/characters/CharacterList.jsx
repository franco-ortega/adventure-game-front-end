import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetails from './CharacterDetails';
import styles from './CharacterList.css';
import { useSession } from '../../state/AuthContext';

export default function CharacterList({ characters }) {
  const session = useSession();

  const charactersElements = characters
    .filter(character => (character.userId === session.id))
    .map(character => (
      <li key={character.id}>
        <CharacterDetails {...character} />
      </li>
    ));
  console.log(characters);

  return (
    <ul className={styles.CharacterList}>
      {charactersElements}
    </ul>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
};
