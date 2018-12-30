class App extends React.Component {
  state = {
    text: [
      "you will have a lot of luck",
      "you will have a lot of money",
      "you will be lucky in love"
    ],
    items: 3,
    show: "press button to see your future",
    value: ""
  };

  handleShow = () => {
    this.setState({
      show: this.state.text[Math.floor(Math.random() * this.state.items)]
    });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAdd = e => {
    const text = [...this.state.text];
    text.push(this.state.value);
    this.setState({
      text,
      items: this.state.items + 1
    });

    alert(`You now have ${this.state.items} options: ${text}`);
  };

  render() {
    return (
      <>
        <button onClick={this.handleShow}> tell me my future</button>

        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>add</button>
        <h1>{this.state.show}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
