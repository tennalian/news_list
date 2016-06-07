import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import NewsListContainer from './NewsListContainer';
import DetailContainer from './DetailContainer';
import './styles.scss';

class App extends React.Component{
	render(){
        return(
            <div className="news-list container">
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={NewsListContainer}/>
			<Route path="/" component={NewsListContainer} />
			<Route path="/detail/:newsId" component={DetailContainer} />
		</Route>
	</Router>
), document.getElementById('app'))


