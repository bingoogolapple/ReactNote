/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict';

import 'semantic-ui/semantic.min.css!';
import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {

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

    componentDidMount() {
        console.log("App componentDidMount");
    }


    componentWillReceiveProps() {
        console.log("App componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log("App shouldComponentUpdate");
        return true;
    }

    componentWillUpdate() {
        console.log("App componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("App componentDidUpdate");
    }


    componentWillUnmount() {
        console.log("App componentWillUnmount");
    }
}

export {App as default};