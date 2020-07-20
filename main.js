import { ToyReact, Component } from "./ToyReact";
class MyComponent extends Component {
  render() {
    return (
      <div>
        Cool
        <div>
          {true}
          {this.children}
        </div>
      </div>
    );
  }
}
let a = (
  <MyComponent name="23" id="23">
    <span>Hello</span>
    <span>Hello</span>
    <span>Hello</span>
  </MyComponent>
);
ToyReact.render(a, document.body);
