import React from 'react';
import $ from 'jquery';
import styles from './photowheel.css';
import Arrow from './arrow.jsx';
import Photo from './photo.jsx';

class PhotoWheel extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
    	photos: [],
    	users: [],
    	restaurant: 4,
    	index: 0
    }
    this.previousPicture = this.previousPicture.bind(this);
    this.nextPicture = this.nextPicture.bind(this);
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
      data = data.map(ele => {return ele.user});
      $.ajax({
		    method: 'GET',
		    url: '/users',
		    data: {users: data},
		    success: (result) => {
		      this.setState({
		        users: result
		      });
		    },
		    error: (err) => (
		      console.log(err)
		    )
      });
    },
    error: (err) => (
      console.log(err)
    )
  });
}

previousPicture() {
	var index = this.state.index;
  var length = this.state.photos.length;
  if (index === 0) {
  	return;
  }
  index -= 1;
  this.setState({
    index: index 	
  })  
}

nextPicture() {
	var index = this.state.index;
  var length = this.state.photos.length
  if (index === length-3) {
  	return;
  }
  index += 1;
  this.setState({
    index: index 	
  })  
}

	render() {
		return (
	  <div className={styles.header} onClick={() => this.props.clickHandler()}>Yelp<br></br>
	    <div className={styles.test}>Restaurant Name</div>
	    <br></br>
	      <div className={styles.container}>
		    {this.state.photos.map((ele, i) => {
		  	  if (i <= 2) {
		  	  	if (i === 0) {
				      return <span><Arrow direction="left" clickHandler={this.previousPicture}/><Photo photo={this.state.photos[this.state.index]} users={this.state.users}/></span>
		  		  } else if (i === 1) {
				      return <span><Photo photo={this.state.photos[this.state.index + 1]} users={this.state.users}/></span>  			
		  		  } else if (i === 2) {
				      return <span><Photo photo={this.state.photos[this.state.index + 2]} users={this.state.users}/><Arrow direction="right" clickHandler={this.nextPicture}/></span>
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