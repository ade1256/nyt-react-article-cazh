import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../css/style.css';

class BookResultSearch extends Component {
	constructor(props) {
		super(props);
        
		this.state = { 
			loading: true,
            result: [],
        };
        
    }
    
    async componentDidMount() {
        const url = "https://api.nytimes.com/svc/books/v3/lists/current/"+ this.props.match.params.category +".json?api-key=zpIxVfIAA5wqfeauVSdVEyI0tzYWpAct";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ result: data.results.books, loading: false });
        console.log(this.state);	
    }
    
    
    
    
    
    render() {
        
        
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        
        if (!this.state.result) {
            return <div>didn't get a article</div>;
        }
        
        
        
        const buku = this.state.result.map((result) =>(
            <div className="book read" key={result.primary_isbn13}>
            <div className="cover">
            <img src={result.book_image ? result.book_image : "https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg"} alt="" />
            </div>
            <div className="description">
            <p className="title"><a href={result.amazon_product_url}>{result.title}</a><br/>
            <span className="author">{result.author}</span></p>
            </div>
            </div>
        )
    );
    console.log(this.props.match.params.category);
    return (
        <Grid>
        <Row className="show-grid">
        <Col xs={12} md={12}>
        <a href="/books">Back to search again</a>
        </Col>
        <Col xs={12} md={12}>
        {/* {"https://api.nytimes.com/svc/books/v3/lists/current/"+ this.props.match.params.category +".json?api-key=zpIxVfIAA5wqfeauVSdVEyI0tzYWpAct"} */}
        <br/>
        {buku}
        </Col>
        </Row>
        </Grid>
    );
}
}

export default BookResultSearch;
