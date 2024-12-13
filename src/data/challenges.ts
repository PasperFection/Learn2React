import { Challenge } from '../types/game';

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Your First Class Component",
    description: "Create a simple class component that renders 'Hello, World!'",
    code: `class Welcome extends ??? {
  ???() {
    return <h1>Hello, World!</h1>;
  }
}`,
    solution: `class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}`,
    hint: "Remember, class components need to extend React.Component and implement a render method",
    completed: false,
    difficulty: 'beginner',
    category: 'basics',
    points: 100
  },
  {
    id: 2,
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
    id: 3,
    title: "Lifecycle Methods",
    description: "Implement componentDidMount to fetch data",
    code: `class UserList extends React.Component {
  state = {
    users: []
  }

  ??? {
    // Fetch users when component mounts
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}`,
    solution: `componentDidMount() {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }`,
    hint: "The componentDidMount lifecycle method is called after the component is mounted to the DOM",
    completed: false,
    difficulty: 'intermediate',
    category: 'lifecycle',
    points: 200
  }
  // ... More challenges will be added in the next action
];