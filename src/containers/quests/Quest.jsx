import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Quest.css';

export default function Quest() {
  return (
    <div className={styles.Quest}>
      Quest Page
      <p>
        <Link to={'quests/forest'}>
          Quest #1: Forest
        </Link>
      </p>
      <p>
        <Link to={'quests/swamp'}>
          Quest #2: Swamp
        </Link>
      </p>
      <p>
        <Link to={'quests/volcano'}>
          Quest #3: Volcano
        </Link>
      </p>
    </div>
  );
}
