import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Button } from "antd";
import "antd/dist/antd.css";

 

const MyPosts = (props) => {

  let postsElement = props.posts.map(item => <Post message={item.message} likesCount={item.likesCount} />)
  let newPostElement = React.createRef()

  
  const onAddPost = () => {
    props.addPost()
}

  const onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
}

  return (
    <div className={classes.post_area}>
      <h3>My posts</h3> 
      <div className={classes.form}>
        <textarea 
          ref={newPostElement} 
          onChange={onPostChange} 
          value={props.newPostText}
        />
        <Button 
          onClick={onAddPost} 
          className={classes.button} 
          type="primary"
        >
          Add post
        </Button>
      </div>
      <div className={classes.posts}>
          {postsElement}
      </div>
    </div>
  );
};

export default MyPosts;
