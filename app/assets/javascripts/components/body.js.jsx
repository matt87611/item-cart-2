var Body = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  render: function() {

    var itemsList = this.state.items.map(function(item) {
      return (
        <h2>item.name</h2>
      );
    });

    return (
      <div>
        <h1>All Items</h1>
        {itemsList}
      </div>
    );
  }
}); 