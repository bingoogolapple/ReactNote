/**
 * Created by bingoogolapple on 16/6/22.
 */
'use strict'

import React from 'react';

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

export {Show as default}