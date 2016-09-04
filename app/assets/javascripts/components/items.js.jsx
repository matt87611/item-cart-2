var Items = React.createClass ({
  eachItem: function(item) {
    return (<Item item={item} key={item.id} handleDelete={this.handleDelete}/>);
  },

  handleDelete: function(id) {
    this.props.handleDelete(id);
  },

  render: function() {
    return (
      <div>
        {this.props.items.map(this.eachItem)}
      </div>
    );
  }
}); 