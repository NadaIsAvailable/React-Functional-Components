const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const SongContainer = (props) => {
    const [songs, setSongs] = useState(props.songs);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const loadSongsFromServer = async () => {
            console.log('loading songs...');
            const res = await fetch('/getSongs');
            const data = await res.json();
            setSongs(data);
        };

        loadSongsFromServer();
    }, [reload]);

    if (songs.length === 0) {
        return <>
            <h3>No Songs Yet</h3>
        </>;
    }

    const songList = songs.map((s) => {
        return <div key={s.title}>
            <h2>{s.artist} - <i>{s.title}</i></h2>
        </div>;
    });

    return <div>
        <h1>My Favorite Songs!</h1>
        <button onClick={() => setReload(!reload)}>Reload Songs</button>
        {songList}
    </div>;
};

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<SongContainer songs={[]} />);
};

window.onload = init;