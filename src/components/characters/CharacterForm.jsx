import React from 'react';
import PropTypes from 'prop-types';
import styles from './CharacterForm.css';

export default function CharacterForm({
  onCharacterNameChange,
  onGenderChange,
  onSpeciesChange,
  onToolChange,
  onCharacterSubmit
}) {
  return (
    <div className={styles.CharacterForm}>
      <p>
        Create a character.    
      </p>
      <main>
        <section>
          <div>Character Name:</div>
          <div>Gender (optional):</div>
          <div>Species:</div>
          <div>Tool:</div>
        </section>
        <section>
          <form onSubmit={onCharacterSubmit}>
            <label htmlFor="character-name-input">
              <input
                id="character-name-input"
                type="text"
                placeholder="Character Name"
                onChange={onCharacterNameChange}
              />
            </label>
            <label htmlFor="gender-input">
              <input
                id="gender-input"
                type="text"
                placeholder="Gender"
                onChange={onGenderChange}
              />
            </label>
            <label htmlFor="species-select">
              <select
                name="species"
                id="species-select"
                type="text"
                onChange={onSpeciesChange}
              >
                <option value="">--Select Species--</option>
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
                <option value="orc">Orc</option>
              </select>
            </label>
            <label htmlFor="tool-select">
              <select
                name="tool"
                id="tool-select"
                type="text"
                onChange={onToolChange}
              >
                <option value="">--Select Tool--</option>
                <option value="compass">Compass</option>
                <option value="shield">Shield</option>
                <option value="torch">Torch</option>
              </select>
            </label>
            <button>Create Character</button>
          </form>
        </section>
      </main>
    </div>
  );
}

CharacterForm.propTypes = {
  onCharacterNameChange: PropTypes.func.isRequired,
  onGenderChange: PropTypes.func.isRequired,
  onSpeciesChange: PropTypes.func.isRequired,
  onToolChange: PropTypes.func.isRequired,
  onCharacterSubmit: PropTypes.func.isRequired 
};
