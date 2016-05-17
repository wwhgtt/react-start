const React = require('react');
const Dropdown = require('../../base-ui/dropdown/dropdown.jsx');
const Dish = require('../dish.jsx');
const ShoppingCart = React.createClass({
  displayName: 'ShoppingCart',
  propTypes: {
    data: React.PropTypes.object,
  },
  renderBuy(dishList) {
    return dishList.map(dish => {
      if (dish.count > 0) {
        return (
          <div key={dish.id}>
            <Dropdown>
              <Dropdown.Trigger onClick={(event, toggleActive) => toggleActive()} >
                <Dish dataDish={dish} onChange={() => {}} />
              </Dropdown.Trigger>
              <Dropdown.Overlay>
                <span>Dish详细信息</span>
              </Dropdown.Overlay>
            </Dropdown>
          </div>
        );
      }
      return null;
    });
  },
  render() {
    const { data } = this.props;
    const dishList = this.renderBuy(data.dishList);
    return (
      <div
        className=""
        style={{ backgroundColor: 'gray',
          color: '#fff', position: 'fixed', bottom: 0, right: 0,
          width: '30%', fontSize: '20%',
          }}
      >
        <h1>购物车信息</h1>
        {dishList}
      </div>);
  },
});

module.exports = ShoppingCart;
