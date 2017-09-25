import { h } from 'preact'
import { withComponent, props, define, PropOptions } from 'skatejs'

export const Component = withComponent()

export type Props = {
  myArray: string[]
  myBoolean: boolean
}

export class MyComponent extends Component<Props> {
  static readonly is = 'my-cmp'
  static readonly props = {
    myArray: props.array,
    myBoolean: props.boolean,
  }
  myBoolean: boolean
  myArray: string[]
  private someNonPublicApiProp = 'Who are you?'

  renderCallback() {
    return <button onClick={_ => this._changeProps()}>Hello World</button>
  }

  private _changeProps() {
    // as Props casting is needed as there is absolutely no way how to differently create
    // type definitions for setter and getter
    this.props = { myBoolean: true } as Props
    // or just directly
    this.myBoolean = true

    console.log(this.props) // { myArray: [], myBoolean: true }

    this.props = { myArray: ['hello'] } as Props
    // or just directly
    this.myArray = ['hello']

    console.log(this.props) // { myArray: ['hello'], myBoolean: true }

    // this will not trigger re-render
    this.someNonPublicApiProp = 'Im David'
  }
}

export default define(MyComponent)
