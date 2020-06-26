import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
      if(this.state.redirect){
        return <Redirect to="/" />;
      }
    if (this.state.hasError) {
      return (
        <h1>
          Oops an error occured with this listing.{" "}
          <Link to="/">Go back Home</Link>. Or Wait for five seconds.
        </h1>
      );
    }
    // Else pass through all component comming through, put the Error boundary above the component if no error it passes through it
    return this.props.children;
  }
}
