var Body = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  render: function() {

    return (
      <div>
        <h1>All Items</h1>
        {this.state.items[0].name}
      </div>
    );
  }
}); 