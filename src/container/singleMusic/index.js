import React, { Component } from 'react';
import 'whatwg-fetch';
import MusicInfo from '../../components/mInfo';


class SingleMusic extends Component {
  state = {
        infos: []
    }

    componentDidMount() {
        const { ID } = this.props.match.params;
        console.log(ID);
        fetch(`http://localhost:8080/api/musics/${ID}`)
            .then(response => response.json())
            .then(json => this.setState({ infos: json }));
    }

    render() {      
        const{infos} = this.state;
        console.log(infos);
        return(
            <div>             
                <MusicInfo list={this.state.infos}/>
            </div>
        )
    }
}

export default SingleMusic
