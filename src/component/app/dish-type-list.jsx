const React = require('react');

const DishTypeList = React.createClass({
  displayName: 'DishTypeList',
  propTypes: {
    dataTypeList: React.PropTypes.array,
  },
  render() {
    const { dataTypeList } = this.props;
    return (<div className="">
      {dataTypeList.map(dishType =>
        <section className="" key={dishType.id} >
          <a>{dishType.name}</a>
        </section>)}
    </div>);
  },
});

module.exports = DishTypeList;
