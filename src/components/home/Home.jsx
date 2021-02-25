/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Signup from '../auth/Signup';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.Home}>
      <header>
        <h2>Welcome to Thillop</h2>
      </header>
      <main>
        <p>
            Thillop is a quiet town on the outskirts of Dalria. Unfortunately, a plague of bollywurgs devoured most of the crops this summer. Farmers still had enough food to feed their families but barely had any leftover to sell at the markets. However, the moneylenders accept no excuse for failed payments on farm loans. They have threatened to take the farms of those who do not pay. Still, not all is lost. Not yet. There are rumors of valuable gems to be found in the fairy lands beyond the valley. However, the rumors also tell of dangers that lurk in such places. But a little danger has never stopped you, right?
        </p>
        <p>
            The moneylenders are coming to collect in 2 weeks. 5 gems will save your farm. If you find even more gems, you can help your neighbors too.
        </p>
        <p>
            Elves are swift. Dwarves are sturdy but slow. Halflings are delicate but have a knack for finding things.
        </p>
        <p>
            Additionally, your family has one tool that can aid you on your quests. You get to pick that family tool. The compass will keep you from getting lost. The shield will help to protect you from danger. The torch will help you find gems.
        </p>
        <p>
            Be sure to return within 14 days, or it will be too late. Don&lsquo;t die either; otherwise, all hope will be lost. Be sure to collect at least 5 gems, too, or the farm will be taken away no matter what. Finally, each quest can only be attempted once.
        </p>
        <p>
            Are you ready?!
        </p>
      </main>
      <Link to={'characters'}>
        <button>Proceed</button>
      </Link>
      <Signup />
    </div>
  );
}
