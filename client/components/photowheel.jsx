import React from 'react';
import $ from 'jquery';
import styles from './photowheel.css';
import Arrow from './arrow.jsx';

class PhotoWheel extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
    	photos: [],
    	restaurant: 4,
    	0: false,
    	1: false,
    	2: false,
    	index: 0
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
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
    },
    error: (err) => (
      console.log(err)
    )
  });

}

clickHandler() {
  console.log('hi');	
}

toggleHover(e) {
	const id = e.target.id;
  this.setState({
    [id]: !this.state[id]
  })
}

previousPicture() {
  var curr = this.state.index;
  var length = this.state.photos.length
  if (curr === 0) {
  	return;
  }
  var index = 0;
  if (curr > 0) {
    index = curr - 1;
  } else {
    index = 0;	
  }

  this.setState({
    index: index 	
  })  
}

nextPicture() {
  var curr = this.state.index;
  var length = this.state.photos.length
  if (curr === length-3) {
  	return;
  }
  var index = 0;
  if (curr < length) {
  	index = curr + 1;
  } 

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
				      return <span><Arrow direction="left" clickHandler={this.previousPicture}/><img onMouseEnter={(e) => this.toggleHover(e)} onMouseLeave={(e) => this.toggleHover(e)} id={i} src={this.state.photos[this.state.index].url} caption={ele.caption} postdate={ele.postdate} onClick={this.clickHandler} className={styles.image}/><span className={styles.span}>hi</span></span>
		  		  } else if (i === 1) {
				      return <span><img onMouseEnter={(e) => this.toggleHover(e)} onMouseLeave={(e) => this.toggleHover(e)} id={i} src={this.state.photos[this.state.index + 1].url} caption={ele.caption} postdate={ele.postdate} onClick={this.clickHandler} className={styles.image}/><span className={styles.span}>hi</span></span>  			
		  		  } else if (i === 2) {
				      return <span><img onMouseEnter={(e) => this.toggleHover(e)} onMouseLeave={(e) => this.toggleHover(e)} id={i} src={this.state.photos[this.state.index + 2].url} caption={ele.caption} postdate={ele.postdate} onClick={this.clickHandler} className={styles.image}/><Arrow direction="right" clickHandler={this.nextPicture}/><span className={styles.span}>hi</span></span>
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