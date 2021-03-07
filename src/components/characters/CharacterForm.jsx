import React from 'react';
import styles from './CharacterForm.css';

export default function CharacterForm() {
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
          <form>
            <label htmlFor="character-name-input">
              <input
                id="character-name-input"
                type="text"
                placeholder="Character Name"
              />
            </label>
            <label htmlFor="gender-input">
              <input
                id="gender-input"
                type="text"
                placeholder="Gender"
              />
            </label>
            <label htmlFor="species-select">
              <select
                name="species"
                id="species-select"
                type="text"
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
                type="text">
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
