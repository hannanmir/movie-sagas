import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Genres from '../Genres/Genres.jsx';
import { Button } from '@material-ui/core';

class Details extends Component{
    // displays the details for the clicked movie
    render() {
        return(
            <div className="detail">
                <h2>{this.props.reduxState.detailsReducer.title}</h2>
                <p>Genre(s):
                    { this.props.reduxState.genreIdReducer.map((genre) => {
                        return(
                            <Genres genre={genre} key={genre}/>
                        )
                    })}
                </p>
                <img src={this.props.reduxState.detailsReducer.poster} alt={this.props.reduxState.detailsReducer.title} />
                <p>{this.props.reduxState.detailsReducer.description}</p>
                <Button variant="contained" size="small" color="primary" onClick= {() => this.props.history.push('/')}>Back to Movies</Button>
            </div>
        )
    }
}

const putReduxDataProps = (reduxState) => {
    return {
      reduxState
    }
}

export default connect(putReduxDataProps)(withRouter(Details));