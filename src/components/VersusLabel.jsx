import React from 'react';

export default class VersusLabel extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = false;
    }
    render() {
        return <label className='matcher-versus-label'> Versus </label>
    }
};