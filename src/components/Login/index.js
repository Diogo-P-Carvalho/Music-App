import React, {Component} from 'react';



class Login extends Component{
    state={
        email: '',
        users: [],
    };

    handleEmail = (e) => {
        this.setState({[e.target.id]: e.target.value});     
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/users')
            .then(response => response.json())
            .then(json => this.setState({ users: json }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const{email, users} = this.state;


        console.log(email);
        console.log(users[0].id);      

        for(var i =0; i < users.length ; i++) {
            if(users[i].email == email) {
    
                window.location = '/logged';
                console.log("Bem vindo de volta ", {email});
            } else {
                console.log("Esse email não existe");
            }
        }
    }

    render(){
        const{email} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" id="email" placeholder="example@example.com" value={email} onChange={this.handleEmail}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button> 
            </form>

        );
    }
}

export default Login;