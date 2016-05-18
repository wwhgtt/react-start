const React = require('react');
const findDOMNode = require('react-dom').findDOMNode;
const DOM = require('dom-helpers');
const Dropdown = React.createClass({
  displayName: 'Dropdown',
  propTypes: {
    children: React.PropTypes.array.isRequired,
  },
  getInitialState() {
    return {
      isActive: false,
    };
  },
  componentDidMount() {
    const that = this;
    this.onDocumentClick = evt => {
      if (DOM.contains(findDOMNode(that), evt.target)) {
        // Nothing
      } else {
        if (this.state.isActive) {
          this.deactive();
        }
      }
    };
    document.body.addEventListener('click', this.onDocumentClick);
    // DOM.on(document, 'click', this.onDocumentClick);
  },
  componentWillUnmount() {
    document.body.removeEventListener('click', this.onDocumentClick);
    // DOM.off(document, 'click', this.onDocumentClick);
  },
  active() {
    this.setState({ isActive:true });
  },
  deactive() {
    this.setState({ isActive:false });
  },
  toggleActive() {
    this.setState({ isActive:!this.state.isActive });
  },
  cloneChildren(children) {
    const wrappedEventHandle = eventHandle => evt => eventHandle(evt, this.toggleActive, this.active, this.deactive);
    const propsConvertor = props => {
      const convertedProps = {};
      for (let key in props) {
        if (/^on/.test(key)) {
          convertedProps[key] = wrappedEventHandle(props[key]);
        } else if (key !== 'children') {
          convertedProps[key] = props[key];
        }
      }
      return convertedProps;
    };
    const trigger = React.cloneElement(children[0], propsConvertor(children[0].props), children[0].props.children);
    const overlay = React.cloneElement(children[1], propsConvertor(children[1].props), children[1].props.children);
    return [trigger, overlay];
  },
  render() {
    const [trigger, overlay] = this.cloneChildren(this.props.children);
    const { isActive } = this.state;
    return (
      <div className="dropdown">
        {trigger}
        {isActive ? overlay : false}
      </div>
    );
  },
});

Dropdown.Trigger = React.createClass({
  displayName: 'DropdownTrigger',
  propTypes: {
    children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.array]),
  },
  render() {
    const { children, ...props } = this.props;
    return (
      <a className="trigger" {...props}>{children}</a>
    );
  },
});

Dropdown.Overlay = React.createClass({
  displayName: 'DropdownOverlay',
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    const { children, ...props } = this.props;
    return (
      <div className="overlay" {...props} >{children}</div>
    );
  },
});

module.exports = Dropdown;
