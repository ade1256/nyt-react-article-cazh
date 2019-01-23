import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../css/style.css';

class ResultSearch extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			loading: true,
            result: [],
        image: [] };
          
        }
        
        componentDidMount() {
            fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ this.props.match.params.search +"&api-key=zpIxVfIAA5wqfeauVSdVEyI0tzYWpAct")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        loading: false,
                        result: data.response.docs,
                        image: data.response.docs
                    });
				}
            )	
        }
        
        
        
        
        
        render() {
           
            
            if (this.state.loading) {
                return <div>loading...</div>;
            }
            
            if (!this.state.result) {
                return <div>didn't get a article</div>;
            }
            function findAndReplace(string, target, replacement) {
	
                var i = 0, length = string.length;
                
                for (i; i < length; i++) {
                
                string = string.replace(target, replacement);
                
                }
                
                return string;
                
            }
            
           
            const article = this.state.result.map((result) =>(
                
                <div className="wrapper" key={result._id}>
                
                <div className="card radius shadowDepth1">
                <div className="card__image border-tlr-radius">
				
                {/* <img src={this.state.image ? "https://static01.nyt.com/"+this.state.image : "https://pmcdeadline2.files.wordpress.com/2016/10/the-new-york-times-logo-featured.jpg?w=446&h=299&crop=1" } className="border-tlr-radius" />  */}

                <img src="https://pmcdeadline2.files.wordpress.com/2016/10/the-new-york-times-logo-featured.jpg?w=446&h=299&crop=1" className="border-tlr-radius" alt=""   />
                </div>
                {/* {console.log(result.multimedia.map((mulmed, i)=>(mulmed.url)))} */}
                <div className="card__content card__padding">
                
				<div className="card__meta">
                <p>{result.type_of_material}</p>
                {/* <time>17th March</time> */}
				</div>
                
				<article className="card__article">
                <h2><a href={'http://localhost:3000/detail/' + findAndReplace(result.web_url, "/", "_")}>{result.headline.main}</a></h2>
                
                <p>{result.snippet}</p>
				</article>
                </div>
                
                <div className="card__action">
				
				<div className="card__author">
                {/* <img src="http://lorempixel.com/40/40/sports/" alt="user" /> */}
                <div className="card__author-content">
                {result.byline.original}
                </div>
				</div>
                </div>
                </div>
                </div>
            )
        );
        console.log(this.props.match.params.search);
        console.log(this.props.match.params.sort);
        return (
            <Grid>
            <Row className="show-grid">
            <Col xs={12} md={12}>
                <a href="/article">Back to search again</a>
			</Col>
			<Col xs={12} md={12}>
			{article}
			</Col>
            </Row>
            </Grid>
        );
	}
}

export default ResultSearch;
