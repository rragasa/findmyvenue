import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Search from './components/Search';

const App = () => {
  return (
    <Fragment>
      <Typography variant="h4" component="h1" gutterBottom>
        Find my venue
      </Typography>
      <div>
        <Search />
    </div>
    </Fragment>
  );
}

export default App;
