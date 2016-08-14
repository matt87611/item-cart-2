var Items = React.createClass ({
  getInitialState: function() {
    return { items: this.props.items }
  },

  eachItem: function(item) {
    return (<Item item={item} key={item.id}/>);
  },

  render: function() {
    return (
      <div>
        {this.state.items.map(this.eachItem)}
      </div>
    );
  }
}); 