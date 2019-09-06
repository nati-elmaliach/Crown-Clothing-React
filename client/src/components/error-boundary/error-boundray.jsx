import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    //process the error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl = 'https://i.imgur.com/oCkEbrA.png'>
            <ErrorImageText>This page lost in thw wind!</ErrorImageText>
          </ErrorImageContainer>
        </ErrorImageOverlay>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
