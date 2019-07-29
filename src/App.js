import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Venues from './components/Venues';

const App = () => {
  return (
    <Fragment>
      <Typography variant="h4" component="h1" gutterBottom>
        Find my venue
      </Typography>
      <div>
        <Venues />
    </div>
    </Fragment>
  );
}

export default App;
