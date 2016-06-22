/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Home extends React.Component {
    componentDidMount() {
        console.log("Home componentDidMount");
        $(ReactDOM.findDOMNode(this)).append("我是追加的内容");
    }

    componentWillUnmount() {
        console.log("Home componentWillUnmount");
    }

    handleChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui info message">首页内容
                <input type="text" onChange={this.handleChange} />
            </div>
        );
    }
}

export {Home as default};