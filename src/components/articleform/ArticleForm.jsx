import React, { Component } from "react";

export class ArticleForm extends Component {
  state = {
    title: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddArticle(this.state);
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleTitleChange}></input>
        <button> Add article</button>
      </form>
    );
  }
}
