# POUR

1. Perceivable
   Web content is presented to users in ways that are perceivable such as providing alt text on images or adding transcriptions/captions.

2. Operable
   UI components and navigation content are operable by keyboard and mouse.

3. Understandable
   UI should be understandable and show expected behavior. Make things predictable. Buttons are interactive and links navigates the user.

4. Robust
   Content must be robust enough for a variety of users and assistive technologies that consume it.

# WCAG

There are 3 levels of wcag conformance.

1. A: basic
2. AA: Minimum level
3. AAA: Advanced level

# WebAIM

WCAG doc site can be overwhelming. WebAIM is much easier to parse through.

https://webaim.org

# More

1 in 4 Americans have some form of disability. There are 4 categories of disabilities:

1. Visual: Blindness, low vision, color-blindness
2. Auditory: Deafness and hard-of-hearing
3. Motor: Inability to use a mouse, slow response time, limited fine motor control
4. Cognitive: Learning disabilities, distractibility, inability to remember, focus on large amounts of info

# Legal

Not making content accessible can be costly for a business. For example, Domino Pizza got sued when a blind customer could not order food usin their site/app.

And Websites and Software Applications Accessibility Act was introduced to the US Senate.

# As developers

ARIA allows us to tweak the accessbility tree to ensure presentation and behavior intact.

We can create components that are accessible and wouldn't have been possible with just native HTML elements. For example, tablists or accordions.

Can add extra descriptions and label text only exposed to assistive technologies. `aria-describedby`

"NO ARIA is better than Bad Aria": Incorrect usage of ARIA could cause more accessbility barriers.

The Authoring Practices Guide (APG) offers valuable principles for proper ARIA implementation and improving web accessbility.

WAI-ARIA

- provides a framework for the guidelines like a superset

Accessbility Tree:

- a modified DOM tree the browser provides to the assistive technology

## Useful commands

ctrl + options + U: brings up a list of links

ctrl + option + cmd + G: navigate by image

<img src="../images/emulate-screen-reader-commands-min.png">
