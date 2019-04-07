
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTopics } from '../../store/news/actions'
import { NewsCards } from './../../components/organisms'

class NewsContainer extends Component {
  componentDidMount = () => this.props.dispatch(fetchTopics())

  render = () =>
    <NewsCards articles={this.props.news.articles} />
}

const mapStateToProps = state => state.newsList

export default connect(mapStateToProps)(NewsContainer)
