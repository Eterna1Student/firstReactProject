import React from 'react';
import myPost from './myPost.module.css'
import Post from './Post/post'


const MyPost = (props) => {

    let postsElement = props.appState.textPostData.map((text, index) => <Post message={text.message} id={text.id} key={index}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }


    return (
        <div className={myPost.myPost}>
            <span className={myPost.title}>
                My Post
            </span>
            <textarea ref={newPostElement} name="myPost" placeholder='your news...' className={myPost.text}></textarea>
            <button className={myPost.sendBtn} onClick={addPost}>
                Send
            </button>
            {postsElement }
        </div>
    )
}

export default MyPost;