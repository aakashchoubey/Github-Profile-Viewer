import React,{Component} from'react';
import RepoList from './RepoList.jsx'

class Profile extends Component{

    render() {
        return (
            <div>
                <div className="card">
                    <h3 className="card-header">{this.props.userData.name}</h3>
                    <div className="card-block">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="card-img-top img-thumbnail" src={this.props.userData.avatar_url} />
                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="card-title">{this.props.userData.login}</h4>
                                        <span className="card-subtitle bg-primary text-white">{this.props.userData.public_repos + ' Repos'}</span>
                                        <span className="card-subtitle bg-success text-white">{this.props.userData.public_gists + ' Gists'}</span>
                                        <span className="card-subtitle bg-info text-white">{this.props.userData.followers + ' Followers'}</span>
                                        <span className="card-subtitle bg-danger text-white">{this.props.userData.following + ' Following'}</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Username : </strong>
                                                  {this.props.userData.login}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Location : </strong>
                                                  {this.props.userData.location}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Email : </strong>
                                                  {this.props.userData.email}
                                            </li>
                                            <li className="list-group-item">
                                                <strong>Bio : </strong>
                                                {this.props.userData.bio}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <br />
                                <a href={this.props.userData.html_url} target="_blank" className="btn btn-primary">Visit Profile</a>
                            </div>
                        </div>
                        <hr />
                        <h3 className="card-title">User Repositories</h3>
                        <RepoList userRepos={this.props.userRepos} perPage={this.props.perPage} showMoreClick={this.props.showMoreClick.bind(this)} publicRepos={this.props.userData.public_repos}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile