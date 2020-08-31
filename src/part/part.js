import React from 'react';
// import slugify from 'slugify';

export default class Part extends React.Component{

    // If need be Delete this component
    
    render(){
        return(
            <div key={this.props.key}
            // key={itemHash} 
            className="feature__item">
            <input
              type="radio"
              id={this.props.key}
            //   id={itemHash}
              className="feature__option"
              name={this.props.name}
            //   name={slugify(feature)}
                checked={this.props.checked}
            //   checked={item.name === this.props.state[feature].name}
                onChange={e => this.props.updateFeature(e.target.value,e.target)}
            //   onChange={e => this.props.updateFeature(feature, item)}
            />
            <label 
            htmlFor={this.props.key}
            // htmlFor={itemHash} 
            className="feature__label">
                {this.props.itemName} ({this.props.currency})
              {/* {item.name} ({USCurrencyFormat.format(item.cost)}) */}
            </label>
          </div>
        )
    }

}