import React from 'react';
import styles from './arrow.css';

const Arrow = ({direction, clickHandler}) => {
	var classname = direction === 'right' ? styles.arrowright : styles.arrowleft;
	  return(
		  <span
		    className={classname}
		    onClick={() => clickHandler()}>
		  </span>
	  );
};

export default Arrow;
  