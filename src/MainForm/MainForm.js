import React, { Component } from 'react';
import FeatureChoice from './FeatureChoice';
import '../App.css';

export default class MainForm extends Component {

  render() {
    return Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
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
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        </form>
      );
    });
  }
}
