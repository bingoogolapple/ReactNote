'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
import CommentBox from './comment/CommentBox';

// var comments = [
//   {"author": "百花弟", "date": "5 分钟前", "text": "天气不错啊!"},
//   {"author": "百花妹", "date": "3 分钟前", "text": "明天出去玩啊!"}
// ];
//
// ReactDOM.render(
//   <CommentBox data={comments} />,
//   document.getElementById('app')
// );

// ReactDOM.render(
//   <CommentBox url="app/comments.json" />,
//   document.getElementById('app')
// );


class App extends React.Component {
  componentDidMount() {
      console.log("App componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("App componentWillReceiveProps");
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  render() {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <Link to="/" className="item">首页</Link>
          <Link to="/tv" className="item" query={{orderBy: 'date'}}>电视</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

class TV extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  componentDidMount() {
      console.log("TV componentDidMount");
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

class Show extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.params);
  }

  render() {
    return (
      <h3>节目 {this.props.params.id}</h3>
    );
  }
}

class Home extends React.Component {
  componentDidMount() {
      console.log("Home componentDidMount");
  }

  componentWillUnmount() {
      console.log("Home componentWillUnmount");
  }

  render() {
    return (
      <div className="ui info message">首页内容</div>
    );
  }
}

class ShowIndex extends React.Component {
  render() {
    return (
      <div className="ui info message">电视节目列表</div>
    );
  }
}

function handleEnter() {
  console.log("进入详情");
}

function handleLeave() {
  console.log("离开详情");
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tv" component={TV}>
        <IndexRoute component={ShowIndex} />
        <Route path="/shows/:id" component={Show} onEnter={handleEnter} onLeave={handleLeave} />
        <Redirect from="shows/:id" to="/shows/:id" />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));


/*
npm install jspm -g
npm init
npm install jspm --save-dev
jspm init
jspm install jquery
jspm install react
jspm install react-dom
jspm install semantic-ui
jspm install css
jspm install react-router


browser-sync start --server --no-notify --files 'index.html, app/**\/*.js'



jspm bundle app/main app/build.js

加上--inject后会在config.js中添加bundles信息，这样就不用在html中添加<script src="app/build.js"></script>
jspm bundle app/main app/build.js --inject
*/
