import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ArticleNews from './ArticleNews';
import '../css/style.css';

class ArticleSearch extends Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			keyword: '',
			sort: '',
			loading: true,
			result: [] };
			this.handleChange = this.handleChange.bind(this);
			this.handleChangeSort = this.handleChangeSort.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}
		
		handleChange(event) {
			this.setState({keyword: event.target.value });
		}
		handleChangeSort(event) {
			this.setState({sort: event.target.value });
		}
		
		handleSubmit(event) {
			this.setState({keyword: event.target.value});
			this.props.history.push('/article/'+this.state.keyword+'/'+this.state.sort);
			event.preventDefault();
		}
		componentDidUpdate(prevProps){
			if (this.props.state !== prevProps.keyword) {
				this.fetchData(this.props.state);
				this.setState({keyword: this.state.keyword,sort: this.state.sort});
				
			}						
			console.log('componentDidUpdate : '+this.state.keyword);
			
		}
		
		render() {
			
			return (
				<Grid>
				<Row className="show-grid">
				<Col xs={12} md={12}>
				<h4>Search :</h4>
				<form onSubmit={this.handleSubmit}>
				<label>keyword </label>
				<input type="text" value={this.state.keyword} onChange={this.handleChange} />
				<label>Sort by : </label>
				
				<select onChange={this.handleChangeSort}>
				<option value=''>- urutkan -</option>
				<option value='newest'>Newest</option>
				<option value='oldest'>Oldest</option>
				
				</select>
				<input type="submit" value="Submit" />
				</form>
				</Col>
				<br/>
				<br/>
				<br/>
				<br/>
				<Col xs={12} md={12}>
				<p>Baca berita terbaru :</p>
				<ArticleNews/>
				</Col>
				</Row>
				</Grid>
			);
		}
	}
	
	export default ArticleSearch;
	