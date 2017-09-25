import React,{Component} from'react';
import Repo from './Repo.jsx'

class ShowMore extends Component{
    render(){
        //console.log(this.props.perPage+"..."+this.props.publicRepos);
        //console.log(this.props.userRepos.length);
        if(this.props.publicRepos<=this.props.perPage){
            return null;
        }
        return (
            <a href="#" onClick={this.props.showMoreClick.bind(this)} className="btn btn-primary show-more-btn">Show More</a>
        )
    }
}

class RepoList extends Component{

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <ul className="list-group">
                    {
                        this.props.userRepos.map(repo => {
                            return <Repo
                                repo={repo}
                                key={repo.id}
                                {...this.props}
                            />
                        })
                    }
                </ul>
                <br />
                <ShowMore {...this.props} showMoreClick={this.props.showMoreClick.bind(this)}/>
            </div>
        )
    }
}

export default RepoList