const React = require('react');
const DishTypeList = require('../../component/app/dish-type-list.jsx');
const DishList = require('../../component/app/dish-list.jsx');
const ShoppingCart = require('../../component/app/shopping-cart/shopping-cart.jsx');
const DishDetailContainer = require('../../component/app/dish-detail/dish-detail-container.jsx');
const _ = require('lodash');
const jsonStatic = require('../../../data/json');
const Application = React.createClass({
  displayName: 'Application',
  getInitialState() {
    return {
      json : jsonStatic,
      detailDishId: undefined,
    };
  },
  onChange(count, dishId) {
    const { json } = this.state;
    const dish = _.find(json.data.dishList, {
      id : dishId,
    });
    if (dish) {
      dish.count = count;
      this.setState({
        json,
      });
    }
  },
  showDetailEditView(detailDishId) {
    this.setState({
      detailDishId,
    });
  },
  render() {
    const { json, detailDishId } = this.state;
    return (
      <div className="app" style={{ height: '100%' }}>
        <DishTypeList dataTypeList={json.data.dishTypeList} />
        <DishList data={json.data} onChange={this.onChange} showDetailEditView={this.showDetailEditView} />
        <ShoppingCart data={json.data} />
        <DishDetailContainer detailDishId={detailDishId} />
      </div>
    );
  },
});
module.exports = Application;
