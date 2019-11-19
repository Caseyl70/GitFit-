import axios from "axios";
const wger = axios.create({
  baseURL: 'https://wger.de/api/v2/',
  data: '{"key": "value"}',
  timeout: 5000,
  headers: {'Authorization': "Token 47f64f4058e0c8b98a9c6c605ac58a2537148c76", "Accept": "application/json"}
});

export default {
  // logs in user
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },

  // signs up user, then logs them in
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  // checks to see if user is logged in, then returns the user
  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  // checks to see if the user is logged in and and admin, then returns the user
  isAdmin: function() {
    return axios.get("/api/users/logout")
  },

  // logs out the user
  logout: function() {
    return axios.get("/api/users/logout")
  },

  // api that gets Muscle Group exercises
  MuscleGroups: () => {
    const options = {
      headers: {'Authorization': 'Token 47f64f4058e0c8b98a9c6c605ac58a2537148c76'}
    };
    return axios.get('https://wger.de/api/v2/muscle/', options);
  },

  MuscleWorkouts: () => {
    const options = {
      headers: {'Authorization': 'Token 47f64f4058e0c8b98a9c6c605ac58a2537148c76'}
    };
    return axios.get('https://wger.de/api/v2/set/', options);
  },

  MuscleExercises: () => {
    const options = {
      headers: {'Authorization': 'Token 47f64f4058e0c8b98a9c6c605ac58a2537148c76'}
    };
    return axios.get('https://wger.de/api/v2/exercise/', options);
  },

  MuscleLogs: () => {
    const options = {
      headers: {'Authorization': 'Token 47f64f4058e0c8b98a9c6c605ac58a2537148c76'}
    };
    return axios.get('https://wger.de/api/v2/exercisecategory/', options);
  }

};

