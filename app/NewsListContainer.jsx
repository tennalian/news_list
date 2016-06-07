import React from 'react';
import NewsList from './NewsList';

class NewsListContainer extends React.Component{
	render(){
        return(
            <div className="news-list">
                <div className="page-header col-md-12">
                    <h1>News List</h1>
                </div>
                <NewsList url="/data.json" />
                <div className="clearfix"></div>
            </div>
        )
    }
}

export default NewsListContainer;
// https://klops.ru/api/get_popular?period=three_days
