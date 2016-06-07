import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class NewsItem extends React.Component{
    render(){
        let id = this.props.id;
        return(
            <div className="col-sm-6 col-md-4 news-item">
                <div className="thumbnail">
                    <img src={this.props.image} />
                    <div className="caption">
                        <p><small>{this.props.date}</small></p>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.decription}</p>
                        <p><Link to={`/detail/${id}`} className="btn btn-success">More</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
