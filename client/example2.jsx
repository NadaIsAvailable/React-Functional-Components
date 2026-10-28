const React = require('react');
const { useState } = React;
const { createRoot } = require('react-dom/client');

const HelloUser = (props) => {
    // let username = props.username;
    const [username, setUsername] = useState(props.username);

    return (
        <div>
            <p>Hello {username}</p>
            <label>Change Name:</label>
            <input
                type="text"
                value={username}
                // onChange={(e) => {
                //     username = e.target.value;
                // }}
                onChange={(e) => setUsername(e.target.value)}
            ></input>
        </div>
    );
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <div>
            <HelloUser username="Kevin" />
            {/* <HelloUser username="Mary" /> */}
            {/* <HelloUser username="Jim" /> */}
        </div>
    );
};

window.onload = init;