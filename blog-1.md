# The Significance of Union and Intersection Types in TypeScript

Before we dive into union and intersection types in TypeScript, let's briefly introduce TypeScript. TypeScript is a statically typed version of JavaScript that helps developers write safer and more maintainable code. Among its features, union and intersection types are useful tools for improving type safety and flexibility.

## Union Types (|)

A Union type allows a variable to hold one of several possible types. This is denoted using the | symbol. With Union types, we can specify multiple types for a variable, and the variable can be any of the types in the union.

The key advantage is that TypeScript ensures that only methods and properties that exist on all possible types are accessible. If we try to access a property that doesn't exist on one of the types in the union, TypeScript will raise a compile-time error.

Union types are particularly useful when a function can accept different types of inputs, yet we want to restrict what that input can be.

### Example:

```typescript
let userId: string | number;
userId = "abc123"; // safe
userId = 456; // safe
// userId = true; // Error: Type 'true' is not assignable to type 'string | number'.
```

In this example, userId can either be a string or a number. It's a good choice when we need a variable to handle multiple types but still want to maintain type safety.

## Intersection Types (&)

On the other hand, Intersection types combine multiple types into one using the & symbol. This means a variable must meet the requirements of all the types involved, having all the properties and methods from each type.

Intersection types are useful for creating complex objects that need to follow multiple interfaces or extend several classes. We can also combine union and intersection types to create more complex data structures that include values from different types.

### Example:

```typescript
interface User {
  name: string;
}

interface Admin {
  role: string;
}

let userAdmin: User & Admin = {
  name: "Rahim Bhai",
  role: "admin",
};

// but we can't do like below example
let userAdmin: User & Admin = {
  name: "Rahim Bhai",
  role: "admin",
  // hasWife: false // Error: Property 'hasWife' does not exist on type 'User & Admin'
};
```

In this example, userAdmin has both the name property from User and the role property from Admin. This is useful when we need an object to implement multiple interfaces or combine multiple types into one.

## Conclusion

Union and Intersection types are useful tools in TypeScript for creating flexible and complex data structures. Union types allow a variable to hold one of several types, while Intersection types combine multiple types into one. These features help build type-safe and maintainable applications.
