	import React, { Component } from 'react';
	import { Grid, Row, Col } from 'react-bootstrap';
	import '../css/style.css';

	class ArticleNews extends Component {
		state = {
		loading: true,
		news: []
		};
		
		async componentDidMount() {
		const url = "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=zpIxVfIAA5wqfeauVSdVEyI0tzYWpAct";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ news: data.results, loading: false });
		}
		
		render() {
		console.log(this.state);
		if (this.state.loading) {
			return <div>loading get news article...</div>;
		}
		
		if (!this.state.news) {
			return <div>didn't get a news article</div>;
		}
		function findAndReplace(string, target, replacement) {
	
			var i = 0, length = string.length;
			
			for (i; i < length; i++) {
			
			string = string.replace(target, replacement);
			
			}
			
			return string;
			
		}
		
		const article = this.state.news.map((result) =>(
			<div className="wrapper" key={result.url}>
				
			<div className="card radius shadowDepth1">
				<div className="card__image border-tlr-radius">
			
				<img src={result.thumbnail_standard ? result.thumbnail_standard : "https://pmcdeadline2.files.wordpress.com/2016/10/the-new-york-times-logo-featured.jpg?w=446&h=299&crop=1" } className="border-tlr-radius" alt="" /> 
				</div>
				{/* {console.log(result.multimedia.map((mulmed, i)=>(mulmed.url)))} */}
				<div className="card__content card__padding">

					<div className="card__meta">
						<p>{result.section}</p>
						{/* <time>17th March</time> */}
					</div>

					<article className="card__article">
					
						<h2><a href={'detail/' + findAndReplace(result.url, "/", "_")}>{result.title}</a></h2>

						<p>{result.abstract}</p>
					</article>
				</div>

				<div className="card__action">
					
					<div className="card__author">
						<div className="card__author-content">
							{result.byline}
						</div>
					</div>
				</div>
			</div>
		</div>
			)
		);

		return (
			
			<Grid>
				<Row className="show-grid">
			
					<Col xs={12} md={12}>
					{article}
					</Col>
				</Row>
			</Grid>
		);
		}
	}

	export default ArticleNews;
