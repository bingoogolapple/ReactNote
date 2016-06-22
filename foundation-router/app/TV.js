/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict'

import React from 'react';

class TV extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location.query);
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

export {TV as default};