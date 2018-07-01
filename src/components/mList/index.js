import React from 'react';
import { Link } from 'react-router-dom';
import '../../app.css';

const MusicListItem = ({musics}) => (   
        <div className="row justify-content-center music-list no-gutters" key={musics.id}>
            <div className="col-2">
                {musics.track}
            </div>
            <div>
                <Link className="col-2 link" to={`/musics/${musics.id}`}>    
                    {musics.artist} 
                </Link>
            </div>
        </div>       
)

const MusicsList = (props) => {
    return(
        <div>
            <div className="row justify-content-center music-list-title no-gutters">
                <div className="col-2 text-center mar">Title</div>
                <div className="col-2 text-center">Artist</div>
            </div>
            {props.list.map(musics =>(
                <MusicListItem musics={musics} key={musics.id}/>
            ))}
        </div>
    )
}

export default MusicsList;