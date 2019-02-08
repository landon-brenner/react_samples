// A simple autocomplete component
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Autocomplete extends Component {
  // Example of prop types / default props at top of class declaration
  // This pattern makes props consumed by this component self-documenting
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  }

  static defaultProps = {
    suggestions: [
      'Cornelius',
      'Ethel',
      'Francis',
      'Xavier'
    ],
  }

  state = {
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  }

  // Event fired when input value is changed (controlled input)
  handleChange = e => {
    const { suggestions } = this.props
    const userInput = e.target.value

    const filteredSuggestions = suggestions.filter( s => {
      return s.toLowerCase().indexOf(userInput.toLowerCase()) !== -1
    })

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.target.value,
    })
  }

  // Event fired when user clicks a suggestion
  // Update user input and reset state
  handleClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.target.innerText
    })
  }

  // Event fired when user presses key down - Enter, up, down
  handleKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  }

  render() {
    const {
      userInput,
      showSuggestions,
      filteredSuggestions,
      activeSuggestion,
    } = this.state

    let suggestionsListComponent;

     if (showSuggestions && userInput) {
       if (filteredSuggestions.length) {
         suggestionsListComponent = (
           <ul className="suggestions">
             {filteredSuggestions.map((suggestion, index) => {
               let className;

               // Flag the active suggestion with a class
               if (index === activeSuggestion) {
                 className = "suggestion-active";
               }

               return (
                 <li
                   className={className}
                   key={suggestion}
                   onClick={this.handleClick}
                 >
                   {suggestion}
                 </li>
               );
             })}
           </ul>
         );
       } else {
         suggestionsListComponent = (
           <div className="no-suggestions">
             <em>No suggestions</em>
           </div>
         );
       }
     }

    return (
      <>
        <input
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </>
    )
  }
}

export default Autocomplete
