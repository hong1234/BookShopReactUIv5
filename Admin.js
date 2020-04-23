import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Admin extends React.Component {

  state = { 
    title: '',
    content: ''
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {

    event.preventDefault();

    const book = {
      title: this.state.title,
      content: this.state.content
    };

    const options = {
      headers: { 'Content-Type': 'application/json' }
    };

    axios.post(`http://localhost:8000/api/books`, book, options)
      .then(res => {
        //console.log(res);
        console.log(res.data);
        this.setState({
          title: '',
          content: ''
        });
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Book Title:</label>
              <input type="text" className="form-control" name="title" value={ this.state.title } onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label>Book Intro:</label>
              <input type="text" className="form-control" name="content" value={ this.state.content } onChange={this.handleInputChange} />
            </div>
            <button  type="submit" className="btn btn-primary">Add Book</button>
        </form>
        <p><Link to="/">To Shop</Link></p>
      </div>
    )
  }
}
