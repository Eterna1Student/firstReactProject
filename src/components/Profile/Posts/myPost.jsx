import myPost from './myPost.module.css'
import Post from './Post/post'


const MyPost = () => {

    let textPostData = [
        { id: 1, message: "It's my first post!" },
        { id: 2, message: "Hi, how are you?"},
        { id: 3, message: "Hey, why nobody love my?" },
    ]

    let postsElement = textPostData.map(text => <Post message={text.message} id={text.id}/>);

    return (
        <div className={myPost.myPost}>
            <span className={myPost.title}>
                My Post
            </span>
            <textarea name="myPost" placeholder='your news...' className={myPost.text}></textarea>
            <button className={myPost.sendBtn}>
                Send
            </button>
            {postsElement }
        </div>
    )
}

export default MyPost;