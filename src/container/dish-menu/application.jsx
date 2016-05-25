const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../../action/dish-menu/dish-menu');

const DishMenuApplication = React.createClass({
  displayName: 'DishMenuApplication',
  propTypes: {
    // MapedActionToProps
    fetchMenuData: React.PropTypes.func.isRequired,
  },
  componentDidMount() {
    this.props.fetchMenuData();
  },
  render() {
    return (
      <div className="application">

      </div>
    );
  },
});
module.exports = connect(state => state, actions)(DishMenuApplication);
