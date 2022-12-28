var React = require('react');
var  Text =  require('react');

var createReactClass = require('create-react-class');
var $ = require('jquery');
var Image = createReactClass({
  displayName: 'Image',

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     imageUrl: ""
  //   };
  //   this.UserList();
  // },

  // UserList() {
  //   $.getJSON('https://dog.ceo/api/breed/' + this.state.data + '/images/random', (data) => {
  //     if(data.message) {
  //       this.setState({ imageUrl: [data.message] });
  //     }
  //   }
  //     );
  //   // $.getJSON('https://dog.ceo/api/breeds/list/all')
  //   //   .then(({ 
  //   //     results 
  //   //   }) => this.setState({ person: [results] }));
  // },

  getDefaultProps: function getDefaultProps() {
    return {
      defautImgGrid: 'col col-4 px2 py2',
      defautImgClass: 'imageList__img'
    };
  },

  getInitialState: function getInitialState() {
    return {
      imgGrid: this.props.gridClass || this.props.defautImgGrid,
      imgClass: this.props.imgClass || this.props.defautImgClass,
      data: this.props.data
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.state.data) {
      this.setState({ data: nextProps.data });
    }
  },

  handleClick: function handleClick() {
    this.props.handleClick(this.state.data);
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.state.imgGrid,
        onClick: this.handleClick },
      React.createElement(
        'div',
        { className: this.state.imgClass },
        React.createElement('img', { src: this.state.imageUrl }),
      ),
      <label for="myInput">{ this.state.data }</label>
    );
  }, 

  componentDidMount() {
    $.getJSON("https://dog.ceo/api/breed/whippet/images/random", (data) => {
    this.setState({imageUrl: data.message})
  }
  );
  }

});   

module.exports = Image;

// async function UserList1() {
  
  
// };