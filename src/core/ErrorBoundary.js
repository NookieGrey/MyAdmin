import React from "react";

// only one usage of classes because
// componentDidCatch can't be implemented by hooks yet
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <code>{this.state.error.stack}</code>;
    }

    //normal flow
    return this.props.children;
  }
}
