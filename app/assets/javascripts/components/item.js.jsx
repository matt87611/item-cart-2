var Item = React.createClass ({
  getInitialState: function() {
	return {item: this.props.item}
  },

  render: function() {
  	return (
      <tr>
        <td>item.name</td>
        <td>item.description</td>
      </tr>
  	);
  }
});