var Body = React.createClass ({

  render: function() {
    return (
      <div>
        <h1>All Items</h1>
        <tr>
          <td>Name</td>
          <td>Description</td>
        </tr>
        <Items items={this.props.items}/>
      </div>
    );
  }
}); 