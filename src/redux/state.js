// //myPost
// let textPostData = [
//     { id: 1, message: "It's my first post!" },
//     { id: 2, message: "Hi, how are you?"},
//     { id: 3, message: "Hey, why nobody love my?" },
// ]

// //Messages
// let friends = [
//     { id: 1, name: 'Andrew' },
//     { id: 2, name: 'Dmitry' },
//     { id: 3, name: 'Sasha' },
//     { id: 4, name: 'Sveta' },
//     { id: 5, name: 'Valera' },
//     { id: 6, name: 'Viktor' }, 
// ]    
// let messages = [
//     { id: 1, text: 'Lorem ipsum dolor sit.' },
//     { id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?'},
//     { id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
// ]

let state = {
    //myPost
    textPostData: [
        { id: 1, message: "It's my first post!" },
        { id: 2, message: "Hi, how are you?"},
        { id: 3, message: "Hey, why nobody love my?" },
    ],
    //Messages
    friends: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Dmitry' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Viktor' }, 
    ],    
    messages: [
        { id: 1, text: 'Lorem ipsum dolor sit.' },
        { id: 2, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?'},
        { id: 3, text: 'Lorem ipsum dolor sit amet consectetur adipisicing.' },
    ],
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage
    }
    state.textPostData.push(newPost)
    // renderEntireTree()
}

export default state;