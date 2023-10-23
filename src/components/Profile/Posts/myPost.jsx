import myPost from './myPost.module.css'
import Post from './Post/post'


const MyPost = () => {
    return (
        <div className={myPost.myPost}>
            <span className={myPost.title}>
                My Post
            </span>
            <textarea name="myPost" placeholder='your news...' className={myPost.text}></textarea>
            <button className={myPost.sendBtn}>
                Send
            </button>
            <Post message="It's my first post!" />
            <Post message="Hi, how are you?" />
            <Post message="Hey, why nobody love my?" />
        </div>
    )
}

export default MyPost;