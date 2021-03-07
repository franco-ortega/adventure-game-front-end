/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterDetails.css';

export default function CharacterDetails({ characterName, species, gender, hitPoints }) {
  return (
    <div className={styles.CharacterDetails}>
      <p>
        {characterName} ({species})
        <br/>
        {gender}
        <br/>
        Hit Points: {hitPoints}
        <br/>
        Tool: compass
        <br/>
        Gems: blue (5), red (1), yellow (2)
      </p>
    </div>
  );
}

CharacterDetails.propTypes = {
  characterName: PropTypes.string.isRequired, 
  species: PropTypes.string.isRequired, 
  gender: PropTypes.string.isRequired, 
  hitPoints: PropTypes.number.isRequired, 
  
};
