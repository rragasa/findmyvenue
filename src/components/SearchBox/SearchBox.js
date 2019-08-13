import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {location: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state.location);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  render() {
    const {location} = this.state;
    return (
      <div className="component-container">
        <header className="App-header">
          <Typography
            variant="h4"
            component="h4" gutterBottom>Find my venue</Typography>
        </header>
        <form onSubmit={this.handleSubmit}>
        <Paper>
          <Box display="flex">
            <InputBase
              className="space-left"
              placeholder="Explore venues..."
              inputProps={{ 'aria-label': 'Explore venues' }}
              value={location}
              fullWidth
              margin="dense"
              onChange={e => this.handleChange(e)}
            />
            <IconButton onClick={this.handleSubmit} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </Paper>
      </form>
      </div>
    );
  }
}

export default SearchBox;