import React from 'react';
import loadData from './load';


class DetailItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          newsList: null,
        };
    }
    componentWillMount(){
        var initialData = loadData(this.props.url);
        var list = [];
        var id = this.props.id;
        initialData.news.filter(function(item){
             if (item.id == id){
                list = item
             }
        });
        console.log(list);
        this.setState({
            newsList: list
        });
    }
    render(){
        var item = this.state.newsList;
        return(
            <div>
                <img src={item.image} />
                <h1>{item.title}</h1>
                <p><small>{item.date}</small></p>
                <p>{item.text}</p>
            </div>
        )
    }
}

export default DetailItem;
