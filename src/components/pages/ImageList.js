
var React = require('react');
var Image = require('./Image');
 
var createReactClass = require('create-react-class');


var ImageList = createReactClass({
  displayName: 'ImageList',

  getDefaultProps: function getDefaultProps() {
    return {
      defautImgWrapper: 'clearfix'
    };
  },

  getInitialState: function getInitialState() {
    return {
      wrapperClass: this.props.wrapperClass || this.props.defautImgWrapper,
      imageData: this.props.imageData
    };
  },

  handleClick: function handleClick(data) {
    if (this.props.handleClickImage) {
      this.props.handleClickImage(data);
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.imageData !== this.state.imageData) {
      this.setState({ imageData: nextProps.imageData });
    }
  },

  render: function render() {
    var that = this;
    var imageList = [];
  //   var key;
  //   for (key in this.state.imageData) {
  //   if (this.childContextTypesstate.imageData.hasOwnProperty(key)) {
  //     console.log(key + " = " + this.state.imageData[key]);
  //   }
  //  }   
  Object.keys(this.state.imageData).forEach(function (data, i) {
      imageList.push(React.createElement(Image, { key: i,
        data: data,
        imgClass: that.props.imgClass,
        gridClass: that.props.gridClass,
        handleClick: that.handleClick }
        ));
    });

    return React.createElement(
      'div',
      { className: this.state.wrapperClass },
      imageList
    );
  }

});

module.exports = ImageList;