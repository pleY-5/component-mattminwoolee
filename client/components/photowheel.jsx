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
    method: 'GET',
    url: '/photos',
    data: {id: this.state.restaurant},
    success: (data) => {
      this.setState({
        photos: data
      });
    },
    error: (err) => (
      console.log(err)
    )
  });

}

clickHandler() {
  console.log('hi');	
}

onHover() {

}

	render() {
		return (
	  <div className={styles.container} onClick={() => this.props.clickHandler()}>
	  <p className={styles.test}>test</p>
	  <br></br>
	    <div className={styles.container}>
		  {this.state.photos.map((ele, i) => {
		  	if(i <= 2) {
		  		if(i === 1) {
				    return <img src={ele.url} onClick={this.clickHandler} className={styles.image}/>
		  		} else {
				    return <img src={ele.url} onClick={this.clickHandler} className={styles.image}/>	  			
		  		}
		  	} 
			})
		  }
      </div>
	  </div>
		);
  } 
}

export default PhotoWheel;