# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass
- Javascript
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this challenge i used the time to really learn how to use the pre processor SASS , you can see in the css code how i have used it my learnings and how i implememted sass with seperate pages for css elements and also with hjow i used nesteding in my scss code.

see snippets here:


```css
.container{
    max-width: 800px;
    margin: auto;
    background-color: white;
    border-radius: 1rem;

    .container-image{
        background-image: url(/images/drawers.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 250px;
        width: 100%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    .container-info{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    
        .bold{
            color: $Very-Dark-Grayish-Blue;
            font-weight: 700;
        }
        .opacity{
            
            color: $Grayis-Blue;
        }
        
    }
    
}
```
## Author
- Website - [Ashley Waudby](https://00awaudby.github.io/Portfolio/)
- Frontend Mentor - [@00awaudby](https://www.frontendmentor.io/profile/00awaudby)
- Github  - [00awaudby](https://github.com/00awaudby)














































































































































