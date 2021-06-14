import React from "react";

import Main from './main.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
    console.log("Local Storage:")
    console.log(localStorage);
  }

  render() {
    return (
      <Main />
    );
  }
};

export default App;
