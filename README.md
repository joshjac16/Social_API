# Social_API


In this project, I built an API for a social network web application where users can share their thoughts, react to friends'
thoughts, and create a friend list. The API is built using Express.js for routing, MongoDB as the database, and Mongoose ODM.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Technologies used

* Express.js
* MongoDB
* Mongoose


## Getting Started 


1. Clone repository 


```bash
git clone (repo url)
```

2. Install dependencies:

```bash
npm i
```

3. Set up the MongoDB database:
    *   Install MongoDB on your local machine if you haven't already.
    *   Create a MongoDB database for the project.
    *   Update the connection string in the application code to point to your MongoDB database.

4. Run Application 

```bash
npm start
```

