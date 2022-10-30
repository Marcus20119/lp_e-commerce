import Frame1 from '~/components/Frame1';
import Frame2 from '~/components/Frame2';
import Frame3 from '~/components/Frame3';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

export default App;
