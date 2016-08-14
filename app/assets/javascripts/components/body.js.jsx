var Body = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  eachItem: function(item) {
    return (<Item>item={item}</Item>);
  },

  render: function() {
    return (
      <div>
        <h1>All Items</h1>
        <h3>
          <tr>
            <td>Name</td>
            <td>Description</td>
          </tr>
        </h3>
        {this.state.items.map(this.eachItem)}
      </div>
    );
  }
}); 