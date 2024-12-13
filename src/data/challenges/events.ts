import { Challenge } from '../../types/game';

export const eventsChallenges: Challenge[] = [
  {
    id: 7,
    title: "Event Handling",
    description: "Create a button that changes text on click",
    code: `class ToggleButton extends React.Component {
  state = {
    isOn: false
  }

  ??? = () => {
    ???
  }

  render() {
    return (
      <button onClick={???}>
        {this.state.isOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}`,
    solution: `handleClick = () => {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  }`,
    hint: "Use an event handler method and setState to toggle the state",
    completed: false,
    difficulty: 'beginner',
    category: 'events',
    points: 150
  }
];