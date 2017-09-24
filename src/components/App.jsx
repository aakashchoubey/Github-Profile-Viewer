import React,{Component} from'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx'
import Search from "./github/Search.jsx";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'choubeyaakash77',
            userData: [],
            userRepos: [],
            perPage: 10
        }
    }

    // Get User Data from Github
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientID+'&client_secret='+this.props.clientSecret,
            datatype: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
                //console.log(data);
            }.bind(this),
            error: function(xhr,status,error){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });
    }

    // Get User Repos
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientID+'&client_secret='+this.props.clientSecret+'&sort=created',
            datatype: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos: data});
                //console.log(data);
            }.bind(this),
            error: function(xhr,status,err){
                this.setState({username: null});
                alert(status+' : '+err);
            }.bind(this)
        });
    }

    handleFormSubmit(username){
        this.setState({username: username},function(){
            this.getUserData();
            this.getUserRepos();
        });
        //console.log(username);
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }

    render() {
        return (
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
                <Profile {...this.state}/>
            </div>
        )
    }
}

App.propTypes = {
    clientID: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientID: 'bdda3bbc6dd7e175cf32',
    clientSecret: 'e13aaf4a9cfdb14fce3619e74f4fe817e6cf2c7d'
};

export default App