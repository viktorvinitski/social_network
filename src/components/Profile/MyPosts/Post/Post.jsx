import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img
          className={classes.pic}
          src="https://img.favpng.com/18/18/18/computer-icons-icon-design-avatar-png-favpng-X29r5WhWMXVYvNsYXkR4iBgwf.jpg"
          alt=""
        />
        <div className={classes.text}>
          {props.message}
        </div>
      </div>
      <div className={classes.like}>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
