import React from 'react';
import $ from 'jquery';
import styles from './photowheel.css';

class PhotoWheel extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
    	photos: [],
    	restaurant: 4
    }
    this.clickHandler = this.clickHandler.bind(this);
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

clickHandler() {
  console.log('hi');	
}

	render() {
		return (
	  <div className="hi">test
	  <p className={styles.test}>test</p>
		  {this.state.photos.map((ele) => {
			  return <img src={ele.url} onClick={this.clickHandler} className={styles.image}/>
			})
		  }

	  </div>
		);
  } 
}

export default PhotoWheel;