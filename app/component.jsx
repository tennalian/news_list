import React from 'react';
class Rss extends React.Component{
    constructor(props) {
        super(props);
        this.showDetail = this.showDetail.bind(this);
        this.backToList = this.backToList.bind(this);

        this.state = {
          news: [],
          open: null
        };
    }
    componentDidMount(){
        this.setState({
            news: this.props.data
        });
    }
    showDetail(e){
        e.preventDefault();
        this.setState({
            open: e.currentTarget.dataset.id
        });
    }
    backToList(e){
        e.preventDefault();
        this.setState({
            open: null
        });
    }
    render(){
        if (this.state.open == null){
            return(
                <div className="news-list container">
                    <div className="row">
                        <div className="page-header col-md-12">
                            <h1>News List</h1>
                        </div>
                        {this.state.news.map((item, i) =>
                            <News key={item.id} id={item.id} date={item.date} title={item.title} image={item.image} decription={item.shortdecription} more={this.showDetail}/>
                        )}
                        <div className="clearfix"></div>
                    </div>
                </div>
            )
        }
        else{
            const id = this.state.open;
            const back = this.backToList;
            var title, date, text, image;
            this.state.news.filter(function(item){
                if (item.id == id){
                    title = item.title;
                    date = item.date;
                    text = item.text;
                    image = item.image;
                }
            })
            return (
                <div className="news-detail container">
                    <div className="row">
                        <div className="page-header col-md-12">
                            <h1>{title}</h1>
                        </div>
                        <div className="col-md-12">
                            <p><small>{date}</small></p>
                            <img src={image} />
                            <p>{text}</p>
                            <p><a href="#" className="btn btn-default" role="button" onClick={back}>Back</a></p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            )
        }
    }
}

class News extends React.Component{
    render(){
        return(
            <div className="col-sm-6 col-md-4 news-item ">
                <div className="thumbnail">
                    <img src={this.props.image} />
                    <div className="caption">
                        <p><small>{this.props.date}</small></p>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.decription}</p>
                        <p><a href="#" className="btn btn-success" role="button" data-id={this.props.id} onClick={this.props.more}>More</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rss;
