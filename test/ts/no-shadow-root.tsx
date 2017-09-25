import { withComponent, define } from 'skatejs'

const withRenderer = () => class extends HTMLElement {}
export const Component = withComponent(withRenderer())

export class MyComponent extends Component {
  static readonly is = 'my-cmp'
  get renderRoot() {
    return this
  }
  renderCallback() {
    return `
      <div>
        <h1>Hello World</h1>
      </div>
    `
  }
}

export default define(MyComponent)
