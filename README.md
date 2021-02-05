# understanding-ts

## What is type?

In its simplest form, type allows you to define an alias that refers to a specific way that the data should be shaped. For example, in the last lesson, we were faced with a problem where wanted to confine our buttonStyles variables to certain CSS classes based on a design system.

```javaScript
let buttonStyles: string = 'primary'
```

Given our knowledge at this point, the best we could do was limit it to a string. However, through the use of type, we can accomplish our goal.

## How to use type?

Similar to declaring a variable, you use type as a declaration of the variable type.

```javaScript
type buttonType = 'primary'
```

similar to standard type declaration, we can apply this type to our initial example:

```javaScript
let buttonStyles: buttonType = 'primary'
```

## How to define multiple values?

```javaScript
type buttonType = 'primary' | 'secondary' | 'success' | 'danger'
```

And now when we apply it, we can ensure that all buttonType variables have the correct value!

```javaScript
// TypeScript will report an error because this doesn't exist in the type!
const errorBtnStyles: buttonType = 'error'

// This variable is type safe!
const dangerBtnStyles: buttonType = 'danger'
```
