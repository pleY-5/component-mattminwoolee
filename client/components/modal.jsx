import React from 'react';
import styles from './modal.css';
import Arrow from './arrow.jsx';

class Modal extends React.Component {
  constructor(props) {
  	super(props);
  	// this.state = {
  	// 	index: 1
  	// }
  	this.previousPicture = this.previousPicture.bind(this);
  	this.nextPicture = this.nextPicture.bind(this);
  }
  
// componentDidMount() {
// 	this.findIndex();
// }


findIndex() {
	// var newIndex = 0;
	// if(this.props.zero) {
	// 	newIndex = 0;
	// } else if (this.props.one) {
 //    newIndex = 1;
	// } else if (this.props.two) {
 //    newIndex = 2;
	// }
	// this.setState({
	// 	index: newIndex
	// })
}

previousPicture() {
	// var index = this.state.index;
 //  var length = this.props.photos.length;
 //  if (index === 0) {
 //  	return;
 //  }
 //  index -= 1;
 //  this.setState({
 //    index: index 	
 //  })  
}

nextPicture() {
	// var index = this.state.index;
 //  var length = this.props.photos.length
 //  if (index === length-3) {
 //  	return;
 //  }
 //  index += 1;
 //  this.setState({
 //    index: index 	
 //  })  
}

	render() {
    if(!this.props.isOpen) {
    	return null;
    } else {
	    return(
	      <div className={styles.modal}>
	        <span className={styles.closeModal} onClick={() => this.props.closeModal()}>Close X</span>
	        <div className={styles.modalBox}>
            <div className={styles.photoBox}>
            	<Arrow direction="left" clickHandler={this.previousPicture}/>
              <img className={styles.image} src={this.props.photos[this.props.index].url}/>
              <Arrow direction="right" clickHandler={this.nextPicture}/>
            </div>
            <div className={styles.userBox}>
              <div> User </div>
              <div> Caption </div>
            </div>  
	        </div>
	      </div>  
	    );	
    }
	}
}

export default Modal;