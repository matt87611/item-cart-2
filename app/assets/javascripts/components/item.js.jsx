var Item = React.createClass ({
  getInitialState: function() {
	return {item: this.props.item}
  },

  render: function() {
  	return (
      <tr>
        <td><h3>item.name</h3></td>
        <td><h3>item.description</h3></td>
      </tr>
  	);
  }
});