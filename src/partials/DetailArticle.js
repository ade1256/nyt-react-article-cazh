import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/style.css';

class DetailArticle extends Component{
    constructor(props) {
		super(props);

		this.state = { 
			loading: true,
            result: [],
            image: null
        };
          
        }
        
         
       async componentDidMount() {
            function findAndReplace(string, target, replacement) {
 
                var i = 0, length = string.length;
                
                for (i; i < length; i++) {
                
                  string = string.replace(target, replacement);
                
                }
                
                return string;
                
               }
               console.log("https://api.nytimes.com/svc/news/v3/content.json?url="+ findAndReplace(this.props.match.params.url, "_", "/") +"&api-key=zpIxVfIAA5wqfeauVSdVEyI0tzYWpAct");
               const url = "https://api.nytimes.com/svc/news/v3/content.json?url="+ findAndReplace(this.props.match.params.url, "_", "/") +"&api-key=zpIxVfIAA5wqfeauVSdVEyI0tzYWpAct";
               const response = await fetch(url);
               const data = await response.json();
               this.setState({ result: data.results,image: data.results[0].multimedia[3].url, loading: false });
            console.log(this.state);	
        }
       
        
        render() {
            const article = this.state.result.map((hasil,index) =>(
                <div className="detail-article" key={hasil.url}>
				
			<div className="card radius shadowDepth1">
				<div className="card__image border-tlr-radius">
			
				<img src={this.state.image ? this.state.image : "https://pmcdeadline2.files.wordpress.com/2016/10/the-new-york-times-logo-featured.jpg?w=446&h=299&crop=1" } className="border-tlr-radius" alt="" /> 
				</div>
				{/* {console.log(result.multimedia.map((mulmed, i)=>(mulmed.url)))} */}
				<div className="card__content card__padding">

					<div className="card__meta">
						<p>{hasil.section}</p>
						{/* <time>17th March</time> */}
					</div>

					<article className="card__article">
					
						<h2>{hasil.title}</h2>

						<p>{hasil.abstract}</p>
					</article>
				</div>

				<div className="card__action">
					
					<div className="card__author">
						<div className="card__author-content">
							{hasil.byline}
						</div>
					</div>
				</div>
			</div>
		</div>
            ));
           
            
            return(
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            {article}
                        </Col>
                    </Row>
                </Grid>
            );
        }
}
export default DetailArticle;