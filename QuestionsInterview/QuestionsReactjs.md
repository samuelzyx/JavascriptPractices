Could you tell me more about you, your expertise, what kind of frameworks you handle?

Difference between class based components and function components?
Class components: Allow state defined in the constructor or the setState method, they normally execute different steps in the lifecycle component like componentDidMount, componentWillUnmount, redux, etc. The methods could define especific logic related to the component.

Function components: Not allowe by defect the state they need to receive the props, use pure function, according the props they render the result, use of hooks like useState, useEffect to make secondary effects.

How work reactjs and react virtual dom?
React js is a library than can help you to bring functionality to the html and css front end application, how? react js permmit to write html with css inside the javascript language in order to render specific parts of the view called components and with the library that is reactjs comes some tools called hooks than can help you to perform use of data in the front end like states and regarding the virtual dom, is the way that reactjs put an layer beetween the final dom and the code that are processing, in that way reactjs lets say proccess all the changes, all the states, all the dom before to present the result in the final dom, detecting errors, performance, etc.