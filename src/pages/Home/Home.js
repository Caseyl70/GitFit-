import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm"
import Exercise from "../../components/Exercises"
import "./Home.scss";


class Home extends Component {

  state = {
    loggedIn: false,
    exercises: [],

  };

  componentDidMount() {
    this.getMuscles();
    this.getExercises();
    this.getWorkouts();
    this.getExercise();
    this.loggedIn();
    
  }

  getMuscles = () => {
    console.log("Hello World")
    API.MuscleGroups().then(data => {
      console.log(data);
      this.setState({ muscle: data.data.results }) 
    }).catch(err => {
      console.log(err)
    });
  }

  getExercises = () => {
    console.log("Got Exercises")
    API.MuscleWorkouts().then(data => {
      console.log(data);
      this.setState({ set: data.data.results })
    }).catch(err => {
      console.log(err)
    })
  }

  getWorkouts = () => {
    console.log("Workout Logs")
    API.MuscleLogs().then(data => {
      console.log(data);
      this.setState({ category: data.data.results })
    }).catch(err => {
      console.log(err)
    })
  }

  getExercise = () => {
    console.log("Workout Logs")
    API.MuscleExercises().then(data => {
      console.log(data);
      this.setState({ exercises: data.data.results })
    }).catch(err => {
      console.log(err)
    })
  }

  loggedIn = () => {
    API.isLoggedIn().then(user => {
      if (user.data.loggedIn) {
        this.setState({
          loggedIn: true
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="homeBox">
        {
          this.state.exercises?
          <SearchForm 
          datalist = {this.state.exercises}
          musclelist = {}
          name = "exercises"
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          />
          :
            <div />
        }
        
        {this.state.loggedIn ? (
          <Button onClick={e=> {this.getJoke()}} color="warning" block>Get New Joke</Button>
        ) : (<></>)}
      </div>
    );
  }
}

export default Home;