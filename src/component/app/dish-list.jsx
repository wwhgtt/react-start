const React = require('react');
const _ = require('lodash');
const Dish = require('./dish.jsx');

const DishList = React.createClass({
  displayName: 'DishList',
  propTypes: {
    data: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func,
    showDetailEditView: React.PropTypes.func,
  },

  renderDishByIds(dishIdArray) {
    const { data, onChange, showDetailEditView } = this.props;
    const dishList = data.dishList;
    return dishIdArray.map(id => {
      const dish = _.find(dishList, { id });
      return (
        <Dish
          key={dish.id} dataDish={dish}
          onChange={(event, count) => onChange(count, dish.id)}
          showDetailEditView={showDetailEditView}
        />
      );
    });
  },

  render() {
    const { data } = this.props;
    return (<div className="">
      {
        data.dishTypeList.map(dishType =>
          <div key={dishType.id}>
            <h2>{dishType.name}</h2>
            {this.renderDishByIds(dishType.dishIds)}
          </div>)
      }
    </div>);
  },
});

module.exports = DishList;
