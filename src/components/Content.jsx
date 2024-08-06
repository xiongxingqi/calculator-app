import React, { Component } from 'react';

class Content extends Component {
    state = {  } 
    render() { 
        return (
            <div className="card">
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
       );
    }
}
 
export default Content;