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
		console.log(styles);
		return (
	  <div className="hi">
	  <p className={styles.test}>test</p>
		  {this.state.photos.map((ele) => {
			  return <img src={ele.url} className={styles.image}/>
			})
		  }

	  </div>
		);
  } 
}

export default PhotoWheel;