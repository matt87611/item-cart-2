var Items = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  render: function() {
    return (
      <div>
        {this.state.items.map(this.eachItem)}
      </div>
    );
  }
}); 