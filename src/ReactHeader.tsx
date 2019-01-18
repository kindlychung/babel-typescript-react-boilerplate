import React from 'react';

interface IProps {
    version: string
}

export class ReactHeader extends React.Component<IProps> {
    static defaultProps = {
        version: "0.1.0"
    }
    render() {
        return <h1>Awesome app version {this.props.version}</h1>
    }
}