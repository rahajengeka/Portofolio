import React, { Component, Suspense, lazy } from 'react';
import InteractiveLanyard from './InteractiveLanyard';

const ReactBitsLanyard = lazy(() => import('./ReactBitsLanyard'));

class LanyardErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('ReactBitsLanyard 3D WebGL error fallback:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <InteractiveLanyard
          image={this.props.frontImage || this.props.image}
          showHelper={false}
        />
      );
    }
    return this.props.children;
  }
}

export default function Lanyard(props) {
  return (
    <LanyardErrorBoundary frontImage={props.frontImage || props.image}>
      <Suspense
        fallback={
          <InteractiveLanyard
            image={props.frontImage || props.image}
            showHelper={false}
          />
        }
      >
        <ReactBitsLanyard {...props} />
      </Suspense>
    </LanyardErrorBoundary>
  );
}
