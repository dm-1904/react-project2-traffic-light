import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    count: 0
  }

  changeStateFunction = () => {
    this.state.count < 2 ? this.setState({count: this.state.count+1}) : this.setState({count: 0})
  }

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle black ${this.state.count === 2 ? 'red' : ''}`}></div>
          <div className={`circle black ${this.state.count === 1 ? 'yellow' : ''}`}></div>
          <div className={`circle black ${this.state.count === 0 ? 'green' : ''}`}></div>
        </div>
        <button className="next-state-button"
          onClick={this.changeStateFunction}
        >Next State</button>
      </div>
    );
  }
}
