import { Component } from "react";

// A08WithComp.js
function A08WithComp(Comp, args) {

  return class InnerComp extends Component {
    state = {
      age: 100,
    }
    changeAge = () => this.setState({age: 200});

    render(){
      return (
        <div>
          <h3>Inner Component / {args}</h3>
          <div>
            Name: {this.props.name}
          </div>

          <Comp age={this.state.age} changeAge={this.changeAge} {...this.props} />
        </div>
      )
    }
  }

}
export default A08WithComp;
