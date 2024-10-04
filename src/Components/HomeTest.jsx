import '../CSS/Slider.css';
import { Component } from "react";
class Slider extends Component{
//  imgStyle={
//     width: '200px',
//     hight: '400px',
//     transition: 'transform 0.5s ease-in-out' // Add transition for smooth animation
//   }
        state ={
            index:0,
            imgArr: [
            "./img/home-book-1.png",
            "./img/home-book-2.png",
            "./img/home-book-3.png",
            "./img/home-book-4.png",
            ]
        };

          slideLeft = () => {
            this.setState((prevState) => ({
              index: (prevState.index - 1 + this.state.imgArr.length) % this.state.imgArr.length
            }));
          };

        slideRight = () => {
          this.setState((prevState) => ({
            index: (prevState.index + 1) % this.state.imgArr.length
          }));
        };

  //   slideLeft = () => {
  //   if (this.state.index === 0) {
  //     this.setState({index: this.state.imgArr.length - 1 });
  //   }else{
  //     this.setState({index: this.state.index -1});
  //   }
  // };

  // slideRight = () => {
  //   if (this.state.index === this.state.imgArr.length - 1) {
  //     this.setState({ index: 0});
  //   }else{
  //     this.setState({index:this.state >index +1});
  //   }
  // };

  render() {
    const {index, imgArr} =this.state;
    // const imageStyle ={
    //   ...this.imgStyle, transform: `translate(-${index * 200}px)`//Calculate the translation based on the index
    // }
    return (
      <div>
        <button onClick={this.slideLeft}>Previous</button>
        <div className="image-container">
          <div>
            <img className="small-container"
              // style={imageStyle}
              id="image"
              src={imgArr[index]}
              alt={`Slider ${index}`}
            />
          </div>
        </div>
        <button onClick={this.slideRight}>Next</button>

      </div>
    );
  }
}

export default Slider;