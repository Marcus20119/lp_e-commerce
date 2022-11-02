import { Fragment } from 'react';
import Frame1 from '~/components/Frame1';
import Frame2 from '~/components/Frame2';
import Frame3 from '~/components/Frame3';
import Frame4 from '~/components/Frame4';
import Frame5 from '~/components/Frame5';
import Frame6 from '~/components/Frame6';
import Frame7 from '~/components/Frame7';
import Frame8 from '~/components/Frame8';
import Frame9 from '~/components/Frame9';
import styles from './App.module.scss';

function App() {
  return (
    <Fragment>
      <div className={styles.App}>
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <Frame6 />
        <Frame7 />
        <Frame8 />
      </div>
      <Frame9 />
    </Fragment>
  );
}

export default App;
