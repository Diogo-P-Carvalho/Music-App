import React, {Component} from 'react';
import 'whatwg-fetch';
import MusicsList from '../../components/mList';
import {Link} from 'react-router-dom';

class Musics extends Component{
    state = {
        musics: [],
      }
    
      componentDidMount(){
        fetch('http://localhost:8080/api/musics')
          .then((response) => response.json())
          .then(json => this.setState({musics:json}))
      }

    render(){       
        return(
            <div>
                <Link className="link login" to="/login"><p>Login</p></Link>
                <MusicsList list={this.state.musics} />
            </div>
        )
    }
}

export default Musics;