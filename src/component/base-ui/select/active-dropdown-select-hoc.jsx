const React = require('react');
const Dropdown = require('../dropdown/dropdown.jsx');
module.exports = function ActiveDropdownSelectHoc(Component) {
  const ActiveDropdownSelect = React.createClass({
    displayName: 'ActiveDropdownSelect',
    propTypes: {
      optionsData: React.PropTypes.array.isRequired,
      OptionComponent: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]).isRequired,
      onChange: React.PropTypes.func.isRequired,
      selectLabel: React.PropTypes.string,
      filterCheckboxData: React.PropTypes.array,
    },
    onChange(event, optionData) {
      const { onChange } = this.props;
      onChange(optionData);
    },
    getTriggerChildren(optionsData) {
      const { selectLabel } = this.props;
      const selectedOptionLabel = optionsData.filter(option => option.isSelected).map(option => option.label);
      if (selectedOptionLabel.length) {
        return [
          <label className="select-label" key="select-label">{selectLabel}</label>,
          <span className="option-label" key="option-label">{selectedOptionLabel}</span>,
        ];
      }
      return [
        <label className="select-label" key="select-label">{selectLabel}</label>,
        <span className="option-label" key="option-label">请选择</span>,
      ];
    },
    render() {
      const { optionsData, OptionComponent, onChange, filterCheckboxData } = this.props;
      const triggerChildren = this.getTriggerChildren(optionsData);
      return (
        <Dropdown>
          <Dropdown.Trigger onClick={(event, toggleActive) => toggleActive()} >
            {triggerChildren}
          </Dropdown.Trigger>
          <Dropdown.Overlay>
            <Component
              optionsData={optionsData} onChange={onChange}
              OptionComponent={OptionComponent} filterCheckboxData={filterCheckboxData}
            />
          </Dropdown.Overlay>
        </Dropdown>
      );
    },
  });
  return ActiveDropdownSelect;
};
