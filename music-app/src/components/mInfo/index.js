import React from 'react';


const MusicInfoItem = ({musics}) => (
    <div key={musics.id}>        
        {musics.artist} - {musics.track} - {musics.album} 
    </div>
)
const MusicInfo = (props) => {
    return(
        <div className="text-center">          
                {props.list.map(musics =>(
                    <MusicInfoItem musics={musics} key={musics.id}/>
                ))}
        </div>
    )
}

export default MusicInfo;