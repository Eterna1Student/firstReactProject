import messages from './Messages.module.css'

const Messages = () => {
    return <div>
        <h2 className='title'>
            DIALOGS
        </h2>
        <div className={messages.content}>
            <div className={messages.friendsList}>
                <div  className={messages.item}>Andrew</div>
                <div  className={messages.item}>Dmitry</div>
                <div  className={messages.item}>Sasha</div>
                <div  className={messages.item}>Sveta</div>
                <div  className={messages.item}>Valera</div>
                <div  className={messages.item}>Viktor</div>                                                                                                                                                                                              
            </div>
            <div className={messages.dialogs}>
                <div className={messages.message}>Lorem ipsum dolor sit.</div>
                <div className={messages.message}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, reiciendis?</div>
                <div className={messages.message}>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            </div>
        </div>

    </div>
}

export default Messages;