## Timestamp Microservice

#### User Stories
- I can pass a string as a parameter, and it will check to see whether that string contains either a Unix timestamp or a natural language date (example: January 1, 2016).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or a Unix timestamp, it returns null for those properties.

#### App running on [heroku](https://andydlindsay-ts-microservice.herokuapp.com)

#### Example usage:
#### `https://andydlindsay-ts-microservice.herokuapp.com/February%2014,%201981`
#### `https://andydlindsay-ts-microservice.herokuapp.com/350956800`
#### Example output:
#### `{ "unix": 350956800, "natural": "February 14, 1981" }`

##### Check out my other projects:
[Free Code Camp](https://www.freecodecamp.com/andydlindsay)  
[Github](https://github.com/andydlindsay)  
[CodePen](https://codepen.io/andydlindsay/)  

##### Or find me on social media:
[LinkedIn](https://www.linkedin.com/in/andy-lindsay-17a9762b/)  
[Facebook](https://www.facebook.com/andydlindsay)  