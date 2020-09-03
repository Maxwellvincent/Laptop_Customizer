import React from 'react'
import slugify from 'slugify';
import Part from '../part/part';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });


export default class Features extends React.Component {
    

    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <Part key={itemHash}
                  hash={itemHash} 
                  className="feature_item" 
                  name={slugify(feature)} 
                  checked={item.name === this.props.state[feature].name}
                  updateFeature={this.props.updateFeature}
                  // onChange={e => this.props.updateFeature(feature, item)}
                  // itemName={item.name}
                  item={item}
                  feature={feature}
                  currency={USCurrencyFormat.format(item.cost)}
                  />

                // TRIED TO MAKE ANOTHER COMPONENT ^^^ ONCHANGE WASNT WORKING
                // Change radio type to button
                // or create a new componenet for features

                // <div key={itemHash} className="feature__item">
                //   <input
                //     type="radio"
                //     id={itemHash}
                //     className="feature__option"
                //     name={slugify(feature)}
                //     checked={item.name === this.props.state[feature].name}
                //     onChange={e => this.props.updateFeature(feature, item)}
                //   />
                //   <label htmlFor={itemHash} className="feature__label">
                //     {item.name} ({USCurrencyFormat.format(item.cost)})
                //   </label>
                // </div>
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

        return(
            <div>
                {features}
            </div>
        )
    }
}