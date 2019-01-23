import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ArticleNews from './ArticleNews';
import '../css/style.css';

class Book extends Component {
	constructor(props) {
		super(props);
        
		this.state = { 
			category: '',
			loading: true,
            result: [] };
            this.handleChangeCategory = this.handleChangeCategory.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
		handleChangeCategory(event) {
			this.setState({category: event.target.value });
		}
        
		handleSubmit(event) {
			this.setState({category: event.target.value});
			this.props.history.push('/books/'+this.state.category);
			event.preventDefault();
		}
        componentDidUpdate(prevProps){
            if (this.props.state !== prevProps.category) {
                this.fetchData(this.props.state);
                this.setState({category: this.state.category});
                
            }						
            console.log('componentDidUpdate : '+this.state.category);
            
		}
        
        render() {
            
            return (
                <Grid>
                <Row className="show-grid">
                <Col xs={12} md={12}>
                <h4>Search :</h4>
                <form onSubmit={this.handleSubmit}>
                <label>Kategori : </label>
                {/* <input type="text"  onChange={this.handleChangeSort} /> */}
                <select onChange={this.handleChangeCategory}>
                <option value=''>- kategori -</option>
                <option value='hardcover-fiction'>Hardcover Fiction</option>
                <option value='e-book-fiction'>E-book Fiction</option>
                {/* <option value='relevance'>Relevance</option> */}
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
    
    export default Book;
    