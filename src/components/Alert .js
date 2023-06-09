import React from 'react';

function Alert(props) {
  const captalized = (mgs) => {
    const lower = mgs.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // style={{position:'fixed',top:50,width:'100%'}} -> This code is used to show alert below navbar with scorlling
    props.alert && <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{captalized(props.alert.type)}</strong>: {props.alert.mgs}
    </div>
  )
}

export default Alert 