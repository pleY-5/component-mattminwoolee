import React from 'react';
import styles from './arrow.css';

const Arrow = (props) => {
	console.log(props)
  if(props.direction === 'right') {
	  return(
		  <span
		    className={styles.arrowright}
		    onClick={() => props.clickHandler()}>
		  </span>
	  );
  } else {
    return(
		  <span
		    className={styles.arrowleft}
		    onClick={() => props.clickHandler()}>
		  </span>
	  );	
  }


};

export default Arrow;
  