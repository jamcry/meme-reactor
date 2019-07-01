import React from 'react';
import memePlaceholder from './meme_placeholder.jpg'

class MemeGenerator extends React.Component {
  constructor() {
    super();

    this.state = {
      topText: '',
      bottomText: '',
      imgURL: '',
      imgAlt: '',
      allMemeImgs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRandomImg = this.setRandomImg.bind(this);
  }

  // Fetches and save the meme data via imgflip API
  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(responseJSON => {
          const allMemes = responseJSON.data.memes;
          this.setState({ allMemeImgs: allMemes})
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setRandomImg();
  }

  setRandomImg() {
    const randomIndex = Math.floor(Math.random() * (this.state.allMemeImgs.length + 1));
    const randomImg = this.state.allMemeImgs[randomIndex];
    this.setState({ imgURL: randomImg.url, imgAlt: randomImg.name });
  }

  render() {
    return(
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>

          <input 
            type="text"
            placeholder="Top text"
            value={this.state.topText}
            name="topText"
            onChange={this.handleChange}
          />

          <input 
            type="text"
            placeholder="Bottom text"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.handleChange}
          />

          <button>Generate</button>
        </form>

        <div className="meme">
          <img src={this.state.imgURL || memePlaceholder} alt={this.state.imgAlt} />
          <h2 className="top">{ this.state.topText }</h2>
          <h2 className="bottom">{ this.state.bottomText }</h2>
        </div>
      </div>
    );
  }
  
}

export default MemeGenerator;