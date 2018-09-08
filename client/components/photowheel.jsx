import React from 'react';
import $ from 'jquery';
import styles from './photowheel.css';

class PhotoWheel extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
    	photos: [],
    	restaurant: 2
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
	  <div>
		  {this.state.photos.map((ele) => {
			  <img src={ele}/>
			})
		  }

	  </div>
		);
  } 
}

export default PhotoWheel;