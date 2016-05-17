const React = require('react');
const CountEditor = require('./count-editor.jsx');
const DISH = require('../../DISH.js');

const Dish = React.createClass({
  displayName: 'Dish',
  propTypes: {
    dataDish: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    showDetailEditView: React.PropTypes.func,
  },
  render() {
    const { dataDish, onChange, showDetailEditView } = this.props;
    return (<div>
      <span style={{ marginRight: '20px' }}>{dataDish.name}</span>
      <div style={{ display: 'inline-block' }}>
        {dataDish.type === DISH.SINGLE ?
          <CountEditor onChange={onChange} count={dataDish.count} stepNum={dataDish.stepNum} /> :
          <span onClick={event => showDetailEditView(dataDish.id)}>进入套餐详情</span>
        }
      </div>
    </div>);
  },
});

module.exports = Dish;
