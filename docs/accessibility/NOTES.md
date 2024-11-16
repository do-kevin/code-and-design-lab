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

ARIA only modifies the accessbility tree, so it's developer's responsibility to ensure an element's responsiveness and functionality.

Try to use native HTML elements as much as possible because they already have native semantics and keyboard functionalities. Check out the <select> from MDN.

Google search bar is an autocomplete input.

Roles are core aspects of the ARIA system and shorthand for defining a UI pattern. Adds semantic meaning to an element to allow assitive technology interpret the element in the way that is consistent with the way the user expects a type of widget to behave. For example, `combobox`.

ARIA states have a higher likelihood of frequent changes due to user interaction. For example, `aria-checked`
Properties are less likely to change.

A common usage of aria-label would be for an icon button that closes something like the hamburger button.

```html
<button aria-label="Close" onclick="myDiaglog.close()">
  <!-- insert svg icon here -->
  <svg aria-hidden="true" focusable="false" />
</button>
```

`aria-labelledby` is a relationship attribute because it creates a semantic relationship between elements. It references an id of another element that contains a label text.

<img src="../images/aria-labelledby-tree-example-min.png">

`aria-describedby`, another relationship attribute, links an element to an accessible description by referencing an element's id.

`aria-invalid` indicates user input for an element is incorrect. Typically used in form elements like select menus and textareas.
