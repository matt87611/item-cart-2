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

  onUpdate: function(item) {
    $.ajax({
      url: '/items/' + item.id + '.json',
      type: 'PUT',
      data: { item: item },
      success: () => {
        this.updateItems(item);
      }
    })
  },

  updateItems: function(item) {
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item);

    this.setState({items: items });
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
          <Items items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.onUpdate}/>
        </tbody>
      </div>
    );
  }
});