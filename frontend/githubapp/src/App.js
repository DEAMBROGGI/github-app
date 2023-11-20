import { useEffect } from 'react';
import './App.css';
import { CommitsContainer } from './commits/commitsContainer';
import { useDispatch, useSelector } from 'react-redux';
import commitsActions from './redux/actions/commitsActions';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(commitsActions.commentsSocketConection())
  }, [])


  return (
    <div className="App">
      <CommitsContainer />
    </div>
  );
}

export default App;
