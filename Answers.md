1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1. .map, .filter, .find                 spread method
2. Describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
2. Actions: Upon invocation, these send an object to the reducer with two keys: a type and some data. The reducer receives this object and modifies the state according to the action's type. The store is the single state objects from which all components can receive state and mutate the state accordingly.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
3. App state: one state from which any component can pull info. Component state: only accessible by specific components and their children. Use app state for info that will be displayed throughout the website. Use component state for small things, like a form that adds a new object onto the app state. 
4. What is middleware?
4. Middleware is used in asyncronous programming. It can stop an action temporarily and execute another function at that stopping point.

5. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
5. We can run action creators asyncronously so that we can dispatch CRUD actions to a server.
6. Which react-redux method links up our components with our redux store?
6. connect()