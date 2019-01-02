import React from 'react';

import classes from "./Progressbar.module.css"

const progressBar = (props)=>(<div className={classes["lds-hourglass"]}>Loading </div>);

export default progressBar;