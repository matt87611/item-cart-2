var Item = React.createClass ({
  getInitialState: function() {
	return {item: this.props.item}
  },

  render: function() {
  	return (
      <h2>item.name</h2>
  	);
  }
});