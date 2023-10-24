import { NavLink } from 'react-router-dom';
import messages from './Messages.module.css'

const Friend = (props) => {
    let path = '/dialogs/' + props.id;
    return (

        <div className={messages.item + '' + messages.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const TextMessage = (props) => {
    return (
        <div className={messages.message}>{props.message}</div>
    )
}

const Messages = (props) => {
    return <div>
        <h2 className='title'>
            DIALOGS
        </h2>
        <div className={messages.content}>
            <div className={messages.friendsList}>
                <Friend name="Andrew" id="1" />
                <Friend name="Dmitry" id="2" />
                <Friend name="Sasha" id="3" />
                <Friend name="Sveta" id="4" />
                <Friend name="Valera" id="5" />
                <Friend name="Viktor" id="6" />
            </div>

            <div className={messages.dialogs}>
                <TextMessage message='Lorem ipsum dolor sit.'/>
                <TextMessage message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?'/>
                <TextMessage message='Lorem ipsum dolor sit amet consectetur adipisicing.'/>
            </div>
        </div>

    </div>
}

export default Messages;