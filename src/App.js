import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Article from './components/Article';

export class App extends Component {

    constructor(props) {
      // Pass props to parent class
      super(props);
      // Set initial state
      this.state = {
        articles: [],
        newsArticle : [],
        validate:false
      };
    }
  
    // Lifecycle method
    componentWillMount() {
      this.getArticles(this.props.default);
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps !== this.props) {
        this.setState({ url:'https://newsapi.org/v2/everything?' +
        'q=' + this.props.value + '&' +
        'language=en&' +
        'sortBy=popularity&' +
        'apiKey=097f0f6fb89b43539cbaa31372c3f92d'});
  
        this.getArticles(nextProps.default);
      }
    }
  
    formatDate(date) {
      var time = new Date(date);
      var year = time.getFullYear();
      var day = time.getDate();
      var hour = time.getHours();
      var minute = time.getMinutes();
      var month = time.getMonth() + 1;
      var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
      return composedTime;
    }
  
    getArticles(url) {
      const apiKey = process.env.REACT_APP_API_KEY;
      // Make HTTP reques with Axios
      axios
        .get('https://newsapi.org/v2/everything?' +
        'q=' + this.props.value + '&' +
        'language=en&' +
        'sortBy=popularity&' +
        'apiKey=097f0f6fb89b43539cbaa31372c3f92d')
        .then(res => {
          const articles = res.data.articles;
          // Set state with result
          this.setState({ articles: articles });
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    rendernewsList() {
      return (
        <div className="container App">
          <section>
            <ul className="list-group">
              {this.state.articles.map((news, i) => {
                return (
                  <li className="list-group-item" key={i}>
                  <div className="row resultsdiv1">
                      <div className="d-flex align-items-start">
                          <div className="col-md-3 resultsdiv2">
                              <img className="align-middle img-thumbnail img_width" src={ news.urlToImage } alt="imagefailed" />
                          </div>
                          <div className="ml-3 col-md-9 resultsdiv3">
                              <a href="#" onClick={ () => this.setState({newsArticle: news, validate: true}) }>
                                  <h5 className="text-truncate title-size">
                                      { news.title }
                                  </h5>
                              </a>
                              <small className="text-muted text-truncate">{ news.source.name }</small>
                              <p className="text-truncate para-size">
                                  { news.description }
                              </p>
                          </div>
                      </div>
                  </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      );
    }

    renderindiNews(){
      return (
        <div className="App">
          <Article article =  { this.state.newsArticle } />
        </div>
      );
    }

    render(){
      if(this.state.validate === true){
        return this.renderindiNews();
      }

      else{
        return this.rendernewsList();
      }
    }
    
  }


export default App;
