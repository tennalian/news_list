import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import DetailItem from './DetailItem';

class DetailContainer extends React.Component{
    render(){
        return (
            <div className="news-detail">
            	<p><Link to="/">Back to News List</Link></p>
            	<div className="col-md-6 col-xs-12 thumbnail">
            		<div className="caption">
               			<DetailItem url="/data.json" id={this.props.params.newsId} />
               			<p><Link to='/' className="btn btn-default">Back</Link></p>
              		</div>
               </div>
               <div className="clearfix"></div>
            </div>
        )
    }
}



export default DetailContainer;
