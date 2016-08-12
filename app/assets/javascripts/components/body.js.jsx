var Body = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  eachItem: function(item) {
    return (<Item item={item} />);
  },

  render: function() {
    return (
      <div>
        <h1>All Items</h1>
        {this.state.items.map(this.eachItem)}
      </div>
    );
  }
}); 