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
  	var displayCaption = this.state.caption ? styles.spanShow : styles.spanHide
	  return (
	  	<div className={styles.photoContainer}>
		    <img onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()} src={this.props.source} 
		    className={styles.image}/><span className={displayCaption}>{this.props.photo.caption}</span>
	    </div>
	  );
  }


}



export default Photo;