var NewItem = React.createClass({
  handleClick: function() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/items.json',
      type: 'POST',
      data: { item: { name: name, description: description} },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },

	render: function() {
    return (
      <div>
        <h1>New Item</h1>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});