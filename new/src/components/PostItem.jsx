import React from "react";

const PostItem = (props) => { //props это набор свойств (примерно как аргументы) мы можем задавать их в App.js и обращаться к ним тут ниже будет показано

    return (
        <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong> 
          <div>
          {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    );
};
export default PostItem;