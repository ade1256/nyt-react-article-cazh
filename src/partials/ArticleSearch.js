import React, { Component } from 'react';
import '../css/style.css';

class ArticleSearch extends Component {
  state = {
    loading: true,
    result: []
  };
  
  async componentDidMount() {
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&api-key=zpIxVfIAA5wqfeauVSdVEyI0tzYWpAct";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ result: data.response.docs, loading: false });
  }
  
  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    
    if (!this.state.result) {
      return <div>didn't get a article</div>;
    }
    return (
      <div>
      {/* <p>Total : {this.state.result.length}</p> */}
      {this.state.result.map((result) =>(
        <div key={result._id} className="post-article">
          <div className="title">{result.headline.main}</div>
          <div className="snippet">{result.snippet}</div>
        </div>  
      )
    )}
    </div>
  );
}
}

export default ArticleSearch;
