const React = require('react');

const CountEditor = React.createClass({
  displayName: 'CountEditor',
  propTypes: {
    onChange: React.PropTypes.func,
    count: React.PropTypes.number,
    stepNum: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      count: 0,
    };
  },
  subtract(event, count) {
    const { stepNum, onChange } = this.props;
    onChange(event, count - stepNum);
  },
  add(event, count) {
    const { stepNum, onChange } = this.props;
    onChange(event, count + stepNum);
  },
  render() {
    const { count } = this.props;
    return (<div className="">
      <p>
        <span onClick={event => this.subtract(event, count)}>-</span>
        ( {count} )
        <span onClick={event => this.add(event, count)}>+</span>
      </p>
    </div>);
  },
});

module.exports = CountEditor;
