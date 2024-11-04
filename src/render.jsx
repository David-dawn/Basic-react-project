// Define MyComponent
class MyComponent extends React.Component {
    constructor(props) {
      super(props); // Call the parent constructor with props
    }
  
    render() {
      return <h1>My First React Component!</h1>; // Render the h1 tag
    }
  }
  
  // Render MyComponent to the DOM
  ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));