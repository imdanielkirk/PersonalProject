import React from "react";
import axios from "axios";

class MovieService extends React.Component {
  static gettickets() {
    const url = `/project/webscrape/Tickets`;
    const config = {
      type: "GET"
    };
    return axios(url, config);
  }

  static getcurrentmovies() {
    const url = "/project/webscrape/Web"
    const config = {
      type: "GET"
    }
    return axios(url, config)
  }

  static getmovietrailers() {
    const url = `/project/webscrape/Trailer`
    const config = {
      type: "GET"
    }
    axios.defaults.withCredentials = true;
    return axios(url, config)
  }

  static loginUser(data, onSuccess, onError) {
    return {
      type: "POST",
      payload: axios
        .post(`/api/account/register`, data, { withCredentials: true })
        .then(onSuccess)
        .catch(onError)
    };
  }

  static apigettrailerbyid(id, onSuccess, onError) {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ecb01088d60b983e89731fa1e9b3ad7d&language=en-US`;
    const config = {
      type: "GET"
    }
    axios(url, config)
      .then(onSuccess)
      .catch(onError)
  }

  static apigetcurrentmovie() {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=ecb01088d60b983e89731fa1e9b3ad7d&language=en-US&page=1`
    const config = {
      type: "GET"
    }
    return axios(url, config)
  }

  static register(data) {
    return {
      type: "POST",
      payload: axios.post("/project/webscrape", data, { withCredentials: true })
        .then(resp => {
          sessionStorage.setItem("userId", resp.data.Item);
          console.log(resp.data.Item)
        })
        .catch(error => console.log(error))
    }
  }

  static getbyid(id) {
    const url = `/project/webscrape/${id}`;
    const config = {
      type: "GET"
    }
    return axios(url, config)
  }

  static update(id, data) {
    const url = `/project/webscrape/${id}`;
    const config = {
      type: "PUT",
      data: data
    }
    return axios(url, config)
  }

  static delete(id) {
    const url = `/project/webscrape/${id}`
    const config = {
      type: "DELETE"
    }
    return axios(url, config);
  };
}


export default MovieService;
