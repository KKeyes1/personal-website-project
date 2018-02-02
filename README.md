# personal-website-project
Deep Dive Bootcamp Personal Website Project

## Milestone 1 

### Feedback 

Awesome job on Milestone 1, This is the quality I expect from an entry-level programmer that reports to me. Directory structure follows project specifications, the HTML is free of any errors or warnings, and there are no grammatical or spelling mistakes. The only issue I noticed was the disconnect between the purpose and the persona. For the purpose, your target audience is a very small startup, but in the persona, you are targetting a well established Dev Shop. Since the point of your PWP is a portfolio site what type of employer you are targeting does not matter. That being said, remember that the persona builds off the purpose. What you hope to accomplish is well within the scope of the project. Feel free to begin Milestone 2 A

#### Grade tier IV

## Milestone 2&alpha; Feedback
Excellent work here - the plans for your content and UI design are clear and very well defined. This will provide you with a thorough "road map" for your development phase ahead.

A fixed-bottom navbar is a feature that's built into Bootstrap, so that should be very easy to implement on the fly. There is also a built-in collapse function as well that could work for your Contact section: https://getbootstrap.com/docs/4.0/components/collapse/

While Bootstrap does have a built-in carousel, I'm not sure it will provide you with the level of flexibility and custom options you may be looking for. [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/) might be a better tool. It will require some customization with CSS to achieve a full-screen layout. The docs for this tool are great BTW.

The offset box in the Contact section may benefit from some selectively applied CSS Positioning rules. We didn't cover these in class, but here's some good info here: https://goo.gl/dxmZhx and here: https://goo.gl/5BzABZ I might consider using some `relative` positioning on the "Contact Me" box to offset it from it's background wrapper on larger screen widths. You may have to write a little custom JS/jQuery to ensure the element is expanded on the desktop layout and remains automatically collapsed on mobile. This shouldn't be too difficult. 

Your directory structure and code all look great. Build your PWP in a file named `index.php` inside `/public_html`. CSS, image, and JS directories should all be siblings to `/documentation.` inside `/public_html` as well. We won't be using the `/documentation` directory any longer.

Your Milestone 1 passes at [Tier IV](https://bootcamp-coders.cnm.edu/projects/personal/rubric/). You're clear to begin development!

### Edits &amp; Suggestions
- [FontAwesome](https://fontawesome.com/) is a great resource for free iconography. 
