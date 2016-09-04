var Item = React.createClass ({
  getInitialState: function() {
	return {
      item: this.props.item
    }
  },

  handleDelete: function(id) {
    this.props.handleDelete(id);
  },

  render: function() {
  	return (
      <tr>
        <td>{this.state.item.name}</td>
        <td>{this.state.item.description}</td>
        <button onClick={this.handleDelete.bind(this, this.state.item.id)}>Delete</button>
      </tr>
  	);
  }
});