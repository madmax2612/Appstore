import React from 'react'
import { useStyles } from './Styles'

export const Loader=()=>{

const classes=useStyles();

return(
  <div className={classes.root}>
  Loader Here
  </div>
)

}