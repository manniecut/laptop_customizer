import React, { Component } from 'react';
import FeatureChoice from './Parts';
import FEATURES from './FEATURES';

export default class Specifications extends Component {

  render() {
    return Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
        return (
          <FeatureChoice
            item={item}
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
          />
        );
      });
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
  }
}
