import { Challenge } from '../../types/game';

export const basicsChallenges: Challenge[] = [
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
    title: "Props in Class Components",
    description: "Create a class component that accepts and displays a name prop",
    code: `class Greeting extends React.Component {
  render() {
    return <h1>Hello, ???</h1>;
  }
}`,
    solution: `class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`,
    hint: "Access props using this.props in class components",
    completed: false,
    difficulty: 'beginner',
    category: 'basics',
    points: 120
  }
];