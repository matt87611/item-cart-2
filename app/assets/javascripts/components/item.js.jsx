var Item = React.createClass ({
  getInitialState: function() {
	return {
      item:     this.props.item,
      editable: false
    }
  },

  handleDelete: function(id) {
    this.props.handleDelete(id);
  },

  handleEdit: function() {
    if (this.state.editable) {
      var name        = this.refs.name.value;
      var description = this.refs.description.value;
      var id          = this.props.item.id;
      var item        = {id: id, name: name, description: description};
      this.props.onUpdate(item);
    }
    this.setState({ editable: !this.state.editable });
  },

  render: function() {
    var name        = this.state.editable ? <input type='text' ref='name'        defaultValue={this.props.item.name}/>        : <h3>{this.props.item.name}</h3>;
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description}/> : <p>{this.props.item.description}</p>;
  	return (
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <button onClick={this.handleDelete.bind(this, this.state.item.id)}>Delete</button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
      </tr>
  	);
  }
});