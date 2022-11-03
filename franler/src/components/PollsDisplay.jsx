/* eslint-disable react/no-array-index-key */
// /* eslint-disable import/extensions */
// import React from 'react';
// import Poll from './Poll.jsx';

// function PollsDisplay() {
//   const allPolls = [];
//   allPolls.push(<div className="pollCard">{Poll()}</div>);
//   console.log(allPolls);
//   return (
//     <div id="pollContainer">
//       TEST
//     </div>
//   );
// }

// export default PollsDisplay;

/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class PollsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
    };
  }

  componentDidMount() {
    fetch('/api/poll')
      .then((res) => res.json())
      .then((polls) => {
        this.setState({ polls });
      });
  }

  render() {
    return (
      <div id="polls">
        {
          this.state.polls.map((poll, index) => (
            <div key={index} className="pollCard">
              <div className="pollTitle">
                {poll.title}
              </div>
              <div className="options">
                {poll.option1}
              </div>
              <div className="options">
                {poll.option2}
              </div>
              <div className="options">
                {poll.option3}
              </div>
              <div className="options">
                {poll.option4}
              </div>
              <div className="options">
                {poll.option5}
              </div>
              <div className="options">
                {poll.option6}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default PollsDisplay;
