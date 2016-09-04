var Body = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  handleSubmit: function(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
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
          <Items items={this.state.items}/>
        </tbody>
      </div>
    );
  }
}); 