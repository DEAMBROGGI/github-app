import { useEffect } from 'react';
import './App.css';
import { CommitsContainer } from './commits/commitsContainer';
import { useDispatch } from 'react-redux';
import commitsActions from './redux/actions/commitsActions';
import appActions from './redux/actions/appActions';
import Snack from './componentes/Snackbar';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Grid } from '@mui/material';
import UserPanel from './componentes/userinfo';
import Loading from './componentes/Loading';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(store => store.appReducer.user.owner)
  const userInfo = useSelector(store => store.appReducer.userInfo)
  const userRepo = useSelector(store => store.appReducer.userRepo)

  useEffect(() => {
    dispatch(commitsActions.commentsSocketConection())
    dispatch(appActions.getUser(user))
    dispatch(appActions.getRepo(user))
    // eslint-disable-next-line
  }, [])


  return (
    <div className="App">
      <Snack />
      {
        !userInfo && !userRepo ?
          <Loading /> :
          <Grid container spacing={2} paddingRight={1}>
            <Grid item xs={12} md={12} lg={6} xl={6}>
              <UserPanel />
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={6}>
              <CommitsContainer />
            </Grid>
          </Grid>
      }
    </div>
  );
}

export default App;
