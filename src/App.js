import "./App.css";
import React from "react";
import image from "./assets/profilePhoto.jpg";
class App extends React.Component {
  state = {
    person: {
      fullName: "yousra",
      bio: "it is bio",
      imgSrc: image,
      profession: "pharmacy student",
    },
    shows: false,
    seconds: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.seconds += 1;
    }, 1000);
  }
  componentDidUpdate() {
    clearInterval(this.interval);
    this.state.seconds = 0;
  }
  render() {
    return (
      <div
        className="container"
        style={{
          padding: "30px",
          margin: "25% 25%",
          width: "50%",
          height: "50%",
          border: "3px solid tomato",
          textAlign: "center",
        }}
      >
        {this.state.shows && (
          <div>
            <img
              src={this.state.person.imgSrc}
              style={{
                width: "450px",
                height: "350px",
              }}
            />
            <h1>
              <b>NAME :</b>
              {this.state.person.fullName}
            </h1>
            <h4>
              <b>BIO :</b>
              {this.state.person.bio}
            </h4>
            <h4>
              <b>PROFESSION :</b>
              {this.state.person.profession}
            </h4>
          </div>
        )}

        <button
          onClick={() => {
            this.state.shows
              ? this.setState({ shows: false })
              : this.setState({ shows: true });
          }}
          style={{
            padding: "10px 15px",
            border: "2px solid tomato",
            backgroundColor: "white",
          }}
        >
          click me!
        </button>
        <p>
          the profile displayed <b>{this.state.seconds}</b> s
        </p>
      </div>
    );
  }
}

export default App;
