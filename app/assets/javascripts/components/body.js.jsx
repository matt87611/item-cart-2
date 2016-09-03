var Body = React.createClass ({

  render: function() {
    return (
      <div>
        <NewItem />
        <h1>All Items</h1>
        <tr>
          <td>Name</td>
          <td>Description</td>
        </tr>
        <tbody>
          <Items items={this.props.items}/>
        </tbody>
      </div>
    );
  }
}); 