import React from 'react'

const Like = (props) => {
    console.log(props)
    let classes = "fa fa-heart"
    classes += (!props.liked)? '-o' : ''
    return ( 
        <i onClick={props.onLike} className={classes} style={{cursor: "pointer"}}></i>
     );
}
 
export default Like;