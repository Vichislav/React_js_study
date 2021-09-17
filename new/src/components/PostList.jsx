import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>
                {title}
            </h1>
            {posts.map(post => // map вроде как преобразовывает массив в реакт элемнт (зачем так и не понял)
                <PostItem post={post} key={post.id}/>
            )}
        </div>
       
    );
};

export default PostList;