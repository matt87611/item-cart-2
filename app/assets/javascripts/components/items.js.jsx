var Items = React.createClass ({
  eachItem: function(item) {
    return (<Item item={item} key={item.id} handleDelete={this.handleDelete} onUpdate={this.onUpdate}/>);
  },

  handleDelete: function(id) {
    this.props.handleDelete(id);
  },

  onUpdate: function(item) {
    this.props.onUpdate(item);
  },

  render: function() {
    return (
      <div>
        {this.props.items.map(this.eachItem)}
      </div>
    );
  }
}); 