# star-based-rating

[![npm version][npm-main]][npm-main]
[![license][license]][license]


## Install

```bash
npm install star-based-rating --save
```

## Demo

<a href="https://imgflip.com/gif/3oucfx"><img src="https://i.imgflip.com/3oucfx.gif" title="made at imgflip.com"/></a>


## Props

<small><b>I have kept minimal configurations. 
Less configurations Less confusions. You can edit them as well</b></small>
```javascript
<StarBasedRating 
    onSelectRatingStars={this.selectStarHandler.bind(this)} 
    totalStars={10} />   
    
// onSelectRatingStars:  Total Number of stars you want to display    
// totalStars:  Method that you want to run after selecting                                       
```
#
<small><b>How simple is this !! </b></small> :blush:
#


## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import StarBasedRating from 'star-based-rating'

class App extends React.Component {

 selectStarHandler(totalStarsSelected) {

        /* totalStarsSelected param is giving you 
        selected number of stars and what you want to do with it */

    }

    render() {
        return (
            <div>
                <StarBasedRating 
                onSelectRatingStars={this.selectStarHandler.bind(this)} 
                totalStars={10} />
            </div>
        )
    }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

**MIT Licensed**

#
:smiley:

[npm-main]: http://badge.fury.io/js/react-star-rating-component.svg
[npm-image]: https://img.shields.io/npm/v/express-paginate.svg?style=flat
[license]: https://img.shields.io/apm/l/react


    
