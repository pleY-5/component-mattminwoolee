import React from 'react';
import $ from 'jquery';
import styles from './photowheel.css';
import Arrow from './arrow.jsx';
import Photo from './photo.jsx';
import Modal from './modal.jsx';

class PhotoWheel extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
    	photos: [],
    	users: [],
    	restaurant: 16,
    	index: 0,
      0: false,
      1: false,
      2: false,
      isModalOpen: false,
      currentModalPicture: 0
    }
    this.previousPicture = this.previousPicture.bind(this);
    this.nextPicture = this.nextPicture.bind(this);
    this.defaultPicture = this.defaultPicture.bind(this);
    this.showModal = this.showModal.bind(this);
    this.detectModalNumber = this.detectModalNumber.bind(this);
    this.previousModalPicture = this.previousModalPicture.bind(this);
    this.nextModalPicture = this.nextModalPicture.bind(this);
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
//----------Carousel Pictures--------------
previousPicture() {
	var index = this.state.index;
  var length = this.state.photos.length;
  if (index === 0) {
  	return;
  }
  index -= 1;
  this.setState({
    index: index, 	
  })  
}

nextPicture() {
	var index = this.state.index;
  var length = this.state.photos.length;
  if (index === length-3) {
  	return;
  }
  index += 1;
  this.setState({
    index: index,
  })  
}

defaultPicture(e) {
  this.setState({
    [e.target.id]: !this.state[e.target.id]
  });
}

//-----------------Modal Picture-----------
previousModalPicture() {
  var index = this.state.currentModalPicture;
  var length = this.state.photos.length;
  if (index === 0) {
    return;
  }
  index -= 1;
  this.setState({
    currentModalPicture: index 
  })  
}

nextModalPicture() {
  var index = this.state.currentModalPicture;
  var length = this.state.photos.length;
  if (index === length-1) {
    return;
  }
  index += 1;
  this.setState({
    currentModalPicture: index
  })  
}

showModal(e) {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  })
}

detectModalNumber(e) {
  var num = parseInt(e.target.id) + this.state.index;
  this.setState({
    currentModalPicture: num
  })
}

	render() {
    var shouldDefault = !this.state['0'] && !this.state['1'] && !this.state['2'] ? true : false
		return (
    <div className={styles.modalContainer}>
  	  <div className={styles.header}>Yelp<br></br>
  	    <div className={styles.test}>Restaurant Name</div>
  	    <br></br>
  	      <div className={styles.container}>
  		    {this.state.photos.map((ele, i) => {
  		  	  	if (i === 0) {
  				      return <span>
                  <Arrow direction="left" clickHandler={this.previousPicture}/>
                  <Photo num={i} shouldDefault={shouldDefault} photo={this.state.photos[this.state.index]} 
                    users={this.state.users} defaultPicture={this.defaultPicture} showModal={this.showModal} detectModal={this.detectModalNumber}/>
                </span>
  		  		  } else if (i === 1) {
  				      return <span>
                  <Photo num={i} shouldDefault={shouldDefault} photo={this.state.photos[this.state.index + 1]} users={this.state.users} 
                    middle={true} defaultPicture={this.defaultPicture} showModal={this.showModal} detectModal={this.detectModalNumber}/>
                </span>  			
  		  		  } else if (i === 2) {
  				      return <span>
                  <Photo num={i} shouldDefault={shouldDefault} photo={this.state.photos[this.state.index + 2]} users={this.state.users} 
                    defaultPicture={this.defaultPicture} showModal={this.showModal} detectModal={this.detectModalNumber}/>
                  <Arrow direction="right" clickHandler={this.nextPicture}/>
                </span>
  		  	    }
  		    })
  		    }
        </div>
  	  </div>
      <Modal prevPic={this.previousModalPicture} nextPic={this.nextModalPicture} closeModal={this.showModal} isOpen={this.state.isModalOpen} 
        photos={this.state.photos} users={this.state.users} index={this.state.currentModalPicture}/>
    </div>
		);
  } 
}

export default PhotoWheel;