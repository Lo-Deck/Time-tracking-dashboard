# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats


### Screenshot

![screenshot desktop](https://github.com/Lo-Deck/Time-tracking-dashboard/blob/main/screenshot/Time%20tracking%20dashboard-desktop.png).
![screenshot mobile](https://github.com/Lo-Deck/Time-tracking-dashboard/blob/main/screenshot/Time%20tracking%20dashboard-mobile.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Time-tracking-dashboard).
- Live Site URL: [Website](https://lo-deck.github.io/Time-tracking-dashboard/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to take data with fetch API, and extract them and use it in order to have a dynamic website.

```js

fetch('./data.json').then( res => res.json())
                    .then( (data) =>  {
                        array = data;
                    });

hours.forEach( (item, index) => { 

    item.innerText = `${array[index].timeframes.daily.current}hrs`;

});  

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.