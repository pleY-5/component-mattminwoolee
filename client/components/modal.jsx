import React from 'react';
import styles from './modal.css';
import Arrow from './arrow.jsx';

class Modal extends React.Component {
  constructor(props) {
  	super(props);
  }

	render() {
		var userIndex = 0;
  	for(var i = 0; i < this.props.users.length; i++) {
  		if(this.props.users[i].user_id === this.props.photos[this.props.index].user) {
        userIndex = i;
        break;
  		}
  	}

    if(!this.props.isOpen) {
    	return null;
    } else {
	    return(
	      <div className={styles.modal}>
	        <span className={styles.closeModal} onClick={() => this.props.closeModal()}>Close X</span>
	        <div className={styles.modalBox}>
            <div className={styles.photoBox}>
            	<Arrow direction="left" modal="true" clickHandler={this.props.prevPic}/>
              <img className={styles.image} src={this.props.photos[this.props.index].url}/>
              <Arrow direction="right" modal="true" clickHandler={this.props.nextPic}/>
            </div>
            <div className={styles.userBox}>
              <div className={styles.userProfile}>
                <img className={styles.avatar} src={this.props.users[userIndex].avatar}/>
                <span className={styles.userName}>{this.props.users[userIndex].name}</span><br></br>
                <div>
	                <span className={styles.userFriends}>Friends{this.props.users[userIndex].friends}</span>
	                <span className={styles.userReviews}>Reviews{this.props.users[userIndex].reviews}</span>
                </div>
              </div>
              <div className={styles.userCaption}> 
              {this.props.photos[this.props.index].caption}
              </div>
            </div>  
	        </div>
	      </div>  
	    );	
    }
	}
}

export default Modal;