import React from 'react';
import Features from '../features/features';


export default class MainForm extends React.Component{
    render(){
        return(
            <div>
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    <Features features={this.props.features} 
                        state={this.props.state}
                        updateFeature={this.props.updateFeature}
                    />
                </form> 
            </div>
        )
    }
}