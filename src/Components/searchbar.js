import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props) {
      super(props);
      this.state = {
        searchterm: ''
      };
  }


  render() {
    return (
     <div>
      <input
      className ="col-md-8"
      onChange = {event => this.setState = ({searchterm: event.target.value})}/>
    </div>
    );
  }
}

export default SearchBar;
