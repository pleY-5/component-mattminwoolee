import React from 'react';
import styles from './photo.css'

class Photo extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  caption: false
  	}
  }

  toggleHover() {
  	this.setState({
  		caption: !this.state.caption
  	})
  }

  render() {
  	var userIndex = 0;
  	for(var i = 0; i < this.props.users.length; i++) {
  		if(this.props.users[i].user_id === this.props.photo.user) {
        userIndex = i;
        break;
  		}
  	}
  	var displayCaption = this.state.caption ? styles.spanShow : styles.spanHide
	  if(this.props.users.length === 0) {
		  return (
		  	<div className={styles.photoContainer}>
			    <img onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()} src={this.props.photo.url} 
			    className={styles.image}/><span className={displayCaption}>{this.props.photo.caption}</span>
		    </div>
		  );
    } else {
	    return (
		  	<div className={styles.photoContainer}>
			    <img onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()} src={this.props.photo.url} 
			    className={styles.image}/><span className={displayCaption}><img className={styles.avatar} src={this.props.users[userIndex].avatar}/>{this.props.photo.caption} {" "}<span className={styles.description}>by {this.props.users[userIndex].name}</span></span>
		    </div>
	    );
    }
  }


}



export default Photo;