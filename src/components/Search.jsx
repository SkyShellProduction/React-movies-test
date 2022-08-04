import React, {Component} from "react";
export default class Search extends Component {
    state = {
        search: '',
        type: 'all'
    }
    handleKey = (event) => {
        if(event.key === 'Enter') {
           this.props.handleSearch(this.state.search, this.state.type);
        }
    }
    handleType = (event) => {
      this.setState(() => (
        {type: event.target.getAttribute('data-type')}
        ), () => {
            this.props.handleSearch(this.state.search, this.state.type);
        })
    }
    render () {
        return (
            <div className="row">
                <div className="input-field">
                    <input 
                        type="search" 
                        className="validate" 
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}/>
                    <button className="btn" onClick={() => this.props.handleSearch(this.state.search, this.state.type)}>Search</button>    
                </div>
                <div className="types">
                    <p>
                        <label>
                            <input className="with-gap" name="group3" 
                                type="radio" data-type="all" 
                                onChange={this.handleType} checked={this.state.type === 'all'}/>
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="group3" 
                                type="radio" data-type="movie" 
                                onChange={this.handleType} checked={this.state.type === 'movie'}/>
                            <span>Movies</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="group3" 
                                type="radio" data-type="series" 
                                onChange={this.handleType} checked={this.state.type === 'series'}/>
                            <span>Series</span>
                        </label>
                    </p>
                </div>
            </div>
        )
    }
}