var Items = React.createClass ({
  eachItem: function(item) {
    return (<Item item={item} key={item.id}/>);
  },

  render: function() {
    return (
      <div>
        {this.props.items.map(this.eachItem)}
      </div>
    );
  }
}); 