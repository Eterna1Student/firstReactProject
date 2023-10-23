import messages from './Messages.module.css'

const Messages = () => {
    return <div>
        <h2 className='title'>
            DIALOGS
        </h2>
        <div className={messages.content}>
            <ul className={messages.friendsList}>
                <li to='#'>Andrew</li>
                <li to='#'>Dmitry</li>
                <li to='#'>Sasha</li>
                <li to='#'>Sveta</li>
                <li to='#'>Valera</li>
                <li to='#'>Viktor</li>
            </ul>
            <div className={messages.dialogs}>
                <div className='myMessage'>
                    <figure className=''>
                        <figcaption></figcaption>
                    </figure>
                    <p className="text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, doloremque!
                    </p>
                </div>
                <div className='friendMessage'>
                    <figure className=''>
                        <figcaption></figcaption>
                    </figure>
                    <p className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat corrupti ducimus omnis, ut neque quidem.
                    </p>
                </div>
            </div>
        </div>

    </div>
}

export default Messages;