import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    class NewComponent extends Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name} is going to unmount`)
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }
    NewComponent.displayName = `WithLogging ${WrappedComponent.name || WrappedComponent.displayName || 'Component'}`
    return NewComponent;
}

export default WithLogging;
