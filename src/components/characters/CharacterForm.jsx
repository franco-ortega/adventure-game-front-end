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
          <form action="">
            <label htmlFor="">
              <input type="text"/>
            </label>
            <label htmlFor="">
              <input type="text"/>
            </label>
            <label htmlFor="">
              <select type="text">
                <option value="dwarf">Dwarf</option>
                <option value="elf">Elf</option>
                <option value="gnome">Gnome</option>
                <option value="halfling">Halfling</option>
                <option value="human">Human</option>
                <option value="orc">Orc</option>
              </select>
            </label>
            <label htmlFor="">
              <select type="text">
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
