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

## What is an interface?

a way to define a type for an object

let take a look at an object:

```javaScript
    let person: {
        name: string;
        age: number;
        activeAvenger: boolean;
        powers: string[];
    } = {
        name: 'Peter Parker',
        age: 20,
        activeAvenger: true,
        powers: ['wall-crawl', 'spider-sense']
    }
```

it’s already fairly verbose and adds clutter to our code.

## How to define an interface?

```javaScript
    interface Hero {
        name: string;
        age: number;
        activeAvenger: boolean;
        powers: string[];
    }
```

## Can you use type in an interface

```javaScript
    type ComicUniverse = 'Marvel' | 'DC'

    interface Hero {
    name: string;
    age: number;
    activeAvenger: boolean;
    powers: string[];
    universe: ComicUniverse;
    }
```

## What is a Type Assertion

At its core definition, type assertions allow you to override the inferred type by the editor. In other words, it is a way for you to tell the compiler that you know more about the type than it does.

For example, if we have a type called TodoItem and an empty object:

```javaScript
    interface TodoItem {
        label: string
        complete: boolean
    }

    const futureTodoItem = {}

    futureTodoItem.label = 'Install VueDX extension'
    futureTodoItem.complete = false
```

TypeScript by default, will infer that futureTodoItem is simply an empty object that should not have any properties in it and will report errors stating as such. But we know it should be a TodoItem type, so we can tell TypeScript this by using the as keyword to override the default behavior.

```javaScript
    interface TodoItem {
        label: string
        complete: boolean
    }

    const futureTodoItem = {} as TodoItem

    futureTodoItem.label = 'Install VueDX extension'
    futureTodoItem.complete = false
```

## TypeScript Generics

```JavaScript
function createList(item: number): number[] {
    const newList: number[] = []
  
    newList.push(item)
  
    return newList
}

const numberList = createList(123)
```

With this, you get type safety, but the function is rather limiting isn’t it? And if we were to rename it properly, we’d probably want to call it addNumberToNumberList, but this wouldn’t be very reusable then. So the question is, how would we make this more reusable?

In TypeScript, this is solved with the concept of “Generics.” At a high level, they allow you to define a dynamic type that is reused in the function later on. The key marker that generics are being used is when a function is appended with the <> bracket, which allows you to pass in a type rather than a JavaScript value that is passed in parentheses instead. So the code we had before would become:

```JavaScript
function createList<CustomType>(item: CustomType): CustomType[] {
    const newList: CustomType[] = []
  
    newList.push(item)
  
    return newList
}

const numberList = createList<number>(123)
```

Before we move on though, I do want to note that even though it’s incredibly confusing to new users and can make for difficult to read code, it is a convention in the TypeScript community to use single letter variables — starting with T — when defining custom types in generics.

So out in other code bases, the same code above would look like this:

```JavaScript
function createList<T>(item: T): T[] {
    const newList: T[] = []
  
    newList.push(item)
  
    return newList
}

const stringList = createList<T>(123)
```

## Computed & Methods with Custom Types

### Custom Types with Computed Properties

Here we have a standard single file component where the language in the script block is marked for TypeScript.

When it comes to computed properties, the key thing to remember is that you want to focus on what the computed property is returning. In other words, using our example, we need to define what type that secondEvent will end up returning.

To do this, we use the syntax of the : and the following it with the custom type the function should return:

```JavaScript
<script lang="ts">
import { defineComponent } from 'vue'
import { EventItem } from '../types'

export default defineComponent({
  data() {
    return {
      events: [] as EventItem[]
    }
  },
  computed: {
    secondEvent(): EventItem {
      return this.events[1]
    }
  }
})
</script>
```

### Custom Types with Methods

```JavaScript
<script lang="ts">
import { defineComponent } from 'vue'
import { EventItem } from '../types'

export default defineComponent({
  data() {
    return {
      events: [] as EventItem[]
    }
  },
  methods: {
    addEvent(newEvent) {
      this.events.push(newEvent)
    }
  }
})
</script>
```

When it comes to adding custom types to methods, there are two key things to keep in mind:

1. Do we need to add types to the parameters being passed into the method?
2. Do we need to add types to whatever is being returned by the method?

#### Adding Custom Types to the Parameter of a Method

In this particular function, our focus is on add a custom type to the parameter newEvent, which should a type of EventItem. And we can accomplish this by using the : syntax:

```JavaScript
addEvent(newEvent: EventItem) {
  this.events.push(newEvent)
}
```

#### Adding Custom Types to the Return Value of a Method

For this scenario, let’s change up the method to fetching the second event:

```JavaScript
secondEvent() {
  return this.events[1]
}

```

If you’re thinking this looks similar to the computed properties example we saw earlier, you’d be correct! The solution to typing your method’s return value is exactly the same.

```JavaScript
secondEvent(): EventItem {
  return this.events[1]
}

```
