import * as React from 'react';

interface IProps {
  error?: string;
}

export class ValidationComponent extends React.Component<IProps, {}> {
  public render() {
    let wrapperClass: string = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass = `${wrapperClass} has-error`;
    }

    return (
      <div className={wrapperClass}>
        {this.props.children}
      </div>
    );
  }
};
