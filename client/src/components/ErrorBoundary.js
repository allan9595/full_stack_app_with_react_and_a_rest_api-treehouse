import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
