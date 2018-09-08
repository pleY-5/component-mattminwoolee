import React from 'react';
import $ from 'jquery';
import styles from './photowheel.css';

class PhotoWheel extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
    	photos: [],
    	restaurant: 1
    }
	}

componentWillMount() {
  this.getData();
}

getData() {
  $.ajax({
    method: 'POST',
    url: '/photos',
    data: {result: this.state.restaurant},
    success: (data) => {
      this.setState({
        photos: data
      });
    }
  });

}

	render() {
		return (
	  <div>hi</div>
	  {
	    for(var i = 0; i < 5; i++) {
		    <img src={this.state.photos[i]}>
	    }
    }
		);
  } 
}

export default PhotoWheel;