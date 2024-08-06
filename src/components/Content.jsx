import React, { Component } from 'react';

class Content extends Component {
    state = {  } 
    render() { 
        return (
            <div class="card">
                <div class="card-body">
                    {this.props.children}
                </div>
            </div>
       );
    }
}
 
export default Content;