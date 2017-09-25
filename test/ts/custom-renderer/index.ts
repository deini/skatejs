import { withComponent, Renderer } from 'skatejs';


const withRenderer = () =>
  class<P> extends HTMLElement implements Renderer<P, Element> {
    rendererCallback(shadowRoot: HTMLElement, renderCallback: () => Element): void {
      shadowRoot.innerHTML = '';
      shadowRoot.appendChild(renderCallback());
    }
  }

const Component = withComponent(withRenderer());


class MyComponent extends Component {
  renderCallback(){
    let el = document.createElement('div');
    el.innerHTML = 'Hello, <slot></slot>!';
    return el;
  }
}

define(MyComponent)
