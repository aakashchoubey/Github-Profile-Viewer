import React,{Component} from'react';

class Search extends Component{
    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert('Please Enter a Username');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
        console.log('Searching '+username+'...');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Search Github Users</label>
                    <input type="text" ref="username" className="form-control" />
                </form>
            </div>
        )
    }
}
export default Search