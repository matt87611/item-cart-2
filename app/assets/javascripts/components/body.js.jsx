class Body extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.getJSON('/items/show', (response) => { this.setState({ items: response }) });
  }

  render() {
    return (
      <div>
        <h1>All Items</h1>
      </div>
    );
  }
}; 