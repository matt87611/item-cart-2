var Item = React.createClass ({
  getInitialState: function() {
	return {
      item: this.props.item
    }
  },

  render: function() {
  	return (
      <tr>
        <td>{this.state.item.name}</td>
        <td>{this.state.item.description}</td>
      </tr>
  	);
  }
});