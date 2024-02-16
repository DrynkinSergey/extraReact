import { Component } from "react";
import { ArticleForm } from "./components/articleform/ArticleForm";
import ArticleList from "./components/articlelist/ArticleList";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    articles: [],
  };

  handleAddArticle = (data) => {
    this.setState((prev) => ({
      articles: [...prev.articles, { title: data.title, id: nanoid() }],
    }));
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <ArticleForm handleAddArticle={this.handleAddArticle} />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
