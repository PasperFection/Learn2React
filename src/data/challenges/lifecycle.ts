import { Challenge } from '../../types/game';

export const lifecycleChallenges: Challenge[] = [
  {
    id: 5,
    title: "Component Mounting",
    description: "Implement componentDidMount to fetch data",
    code: `class UserList extends React.Component {
  state = {
    users: []
  }

  ??? {
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
    hint: "componentDidMount is called after the component is mounted to the DOM",
    completed: false,
    difficulty: 'intermediate',
    category: 'lifecycle',
    points: 200
  },
  {
    id: 6,
    title: "Component Updates",
    description: "Implement shouldComponentUpdate to optimize rendering",
    code: `class PureComponent extends React.Component {
  ???(nextProps) {
    return ???;
  }

  render() {
    return <div>{this.props.value}</div>;
  }
}`,
    solution: `shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }`,
    hint: "shouldComponentUpdate should return true if the component needs to re-render",
    completed: false,
    difficulty: 'advanced',
    category: 'lifecycle',
    points: 250
  }
];