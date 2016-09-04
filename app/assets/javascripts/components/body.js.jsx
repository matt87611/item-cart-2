var Body = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  handleSubmit: function(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  removeItem: function(id) {
    var newItems = this.state.items.filter((item) => {
    return item.id != id; });
    this.setState({ items: newItems });
  },


  handleDelete: function(id) {
    $.ajax({
      url: '/items/' + id + '.json',
      type: 'DELETE',
      success:() => {
        this.removeItem(id);
      }
    });
  },

  render: function() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <h1>All Items</h1>
        <tr>
          <td>Name</td>
          <td>Description</td>
        </tr>
        <tbody>
          <Items items={this.state.items} handleDelete={this.handleDelete}/>
        </tbody>
      </div>
    );
  }
});