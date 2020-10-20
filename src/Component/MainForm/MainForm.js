import React, { Component } from 'react';
import FeatureChoice from './Parts';
import FEATURES from './FEATURES';
import Specifications from './Specs';

export default class MainForm extends Component {

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Specifications
          selected={this.props.selected}
          updateFeature={this.props.updateFeature} />
      </form>
    );
  };
}

