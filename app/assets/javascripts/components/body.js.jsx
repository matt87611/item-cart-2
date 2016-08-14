var Body = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  eachItem: function(item) {
    return (<Item item={item} key={item.id}/>);
  },

  render: function() {
    return (
      <div>
        <h1>All Items</h1>
        <tr>
          <td>Name</td>
          <td>Description</td>
        </tr>
        {Items}
      </div>
    );
  }
}); 