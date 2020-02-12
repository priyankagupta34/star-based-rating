import React, { Component } from 'react'
import './StarRateSysComponent.css'

export default class StarBasedRating extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedStar: -1,
            onfocusStar: -1
        }
        this.removingHoveredStars = this.removingHoveredStars.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.removingHoveredStars);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.removingHoveredStars);
    }

    removingHoveredStars(event) {
        if (!event.srcElement.classList.contains('general_StarRateComponent')) {
            this.setState({
                ...this.state,
                onfocusStar: -1
            })
        }
    }

    selectStarForRating(index, event) {
        this.setState({
            ...this.state,
            selectedStar: index
        }, () => {
            this.props.onSelectRatingStars(index + 1);
        })
    }

    selectStarForRatingOnFocus(index, event) {
        event.stopPropagation();
        this.setState({
            ...this.state,
            onfocusStar: index
        })
    }

    render() {
        const stars = [];
        for (let i = 0; i < this.props.totalStars; i++) {
            stars.push(i);
        }
        let selectedStars = [];
        for (let i = 0; i <= this.state.selectedStar; i++) {
            selectedStars.push(i);
        }
        let onfocusStars = [];
        for (let i = 0; i <= this.state.onfocusStar; i++) {
            onfocusStars.push(i);
        }

        return (
            <div className="stars_StarRateComponent">
                {stars.map((item, index) => (
                    <div key={index}
                        onClick={this.selectStarForRating.bind(this, index)}
                        onMouseMove={this.selectStarForRatingOnFocus.bind(this, index)}
                        className={
                            (selectedStars.includes(index) && ' selected_StarRateComponent ') +
                            (onfocusStars.includes(index) && ' hovered_StarRateComponent ') +
                            ' general_StarRateComponent '
                        }>&#9733;</div>
                ))
                }
            </div>
        )
    }
}
