import React from 'react';
import loadData from './load';
import NewsItem from './NewsItem';

class NewsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          news: [],
        };
    }
    componentDidMount(){
        var initialData = loadData(this.props.url);
        this.setState({
            news: initialData.news
        });
    }
    render(){
        return(
            <div>
                {this.state.news.map((item, i) =>
                    <NewsItem key={item.id} id={item.id} date={item.date} title={item.title} image={item.image} decription={item.shortdecription} more={this.showDetail}/>
                )}
                <div className="clearfix"></div>
            </div>
        )
    }
}



export default NewsList;
