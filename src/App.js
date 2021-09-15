import React from "react";

class App extends React.Component {
  component() {
    const apiUrl = `https://daily-thoughts-app.herokuapp.com/api/register/`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return <div>Connection</div>;
  }
}
export default App;
