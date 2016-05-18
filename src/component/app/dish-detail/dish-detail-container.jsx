const React = require('react');
const DishDetail = require('./dish-detail-edit.jsx');
const DishDetailGroup = require('./dish-group-detail.jsx');

const DishDetailContainer = React.createClass({
  displayName: 'DishDetailContainer',
  propTypes: {
    detailDishId: React.PropTypes.number,
  },
  render() {
    const { detailDishId } = this.props;
    return (
      <div className="" style={{ backgroundColor : 'red' }}>
        {detailDishId ?
          <div>
            <DishDetail />
            <DishDetailGroup />
          </div> : null}
      </div>
    );
  },
});

module.exports = DishDetailContainer;
