import React, { Component } from 'react'

export class Article extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.article);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group-flush">
                <li className="list-group-item">
                  <h1>{ this.props.article.title }</h1>
                </li>
                <li className="list-group-item">
                  <small className="text-muted">Published At: { this.props.article.publishedAt }</small>
                </li>
                <li className="list-group-item">
                  <div>
                    <img className="responsive articleImg"
                      src={ this.props.article.urlToImage } />
                  </div>
                </li>
                <li className="list-group-item">
                    <h4>Content:</h4><br/>
                    <div><p>{ this.props.article.content }</p></div>
                </li>
                <li className="list-group-item">
                  <div>
                    <a href={ this.props.article.url } target="_blank">
                      <input type="button" class="btn btn-lg btn-block btn-outline-primary"
                                value="View the entire article"/>
                    </a>
                  </div>
                </li>
            </ul>
          </div>
          <div class="col-md-3">
            <ul class="list-group flush mt-2"></ul>
          </div>
        </div>
      </div>
    );   
  }
}

export default Article