import { Challenge } from '../../types/game';

export const stateChallenges: Challenge[] = [
  {
    id: 3,
    title: "State Management",
    description: "Create a counter using class component state",
    code: `class Counter extends React.Component {
  ???

  ???() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={???}>
          Increment
        </button>
      </div>
    );
  }
}`,
    solution: `class Counter extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
          Increment
        </button>
      </div>
    );
  }
}`,
    hint: "Use state to store the count and setState to update it",
    completed: false,
    difficulty: 'beginner',
    category: 'state',
    points: 150
  },
  {
    id: 4,
    title: "Controlled Form Component",
    description: "Create a controlled input form using state",
    code: `class Form extends React.Component {
  state = {
    ???
  }

  handleChange = (???) => {
    ???
  }

  render() {
    return (
      <input
        value={???}
        onChange={???}
      />
    );
  }
}`,
    solution: `class Form extends React.Component {
  state = {
    value: ''
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}`,
    hint: "Store the input value in state and update it using setState in the onChange handler",
    completed: false,
    difficulty: 'intermediate',
    category: 'state',
    points: 180
  }
];