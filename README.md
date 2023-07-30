

# NoSQL Social Media API

## Overview

In this project, we designed and implemented a social media API using MongoDB, a NoSQL database. The API allows users to create, read, update, delete users and thoughts. Additionally, users can add and remove friends to their friend list and react to thoughts.

The main goal of this project was to create a robust backend API capable of handling the complex data relationships often found in social media platforms, including users, friends, and thoughts (analogous to posts or comments), as well as "reactions" to those thoughts. We leveraged MongoDB's flexible and schema-less structure to handle these diverse data requirements effectively and efficiently.

## Challenges

Throughout the project, we encountered a few challenges related to the asynchronous nature of JavaScript and handling errors effectively. We used promises and the async/await syntax to handle these asynchronous operations, and rigorous testing was performed to ensure the API responded with appropriate error messages when issues occurred.

One of the main challenges was setting up the routes correctly, especially when dealing with more complex routes such as adding and removing friends. We had to consider the appropriate HTTP method to use and how to structure the endpoints. This was further complicated by the need to update a user's friend list stored in MongoDB.

Another challenging aspect was managing the MongoDB connections, particularly ensuring that the connection is properly closed after the API server stops running. We tackled this issue by correctly setting up the MongoDB connection and ensuring that the connection closes when the Node.js process ends.

Despite these challenges, the project provided a great opportunity to learn about NoSQL databases, particularly MongoDB, and how to implement complex data relationships in a flexible, schema-less database.

## Installation & Usage

N/A , please view the linked video for an overview of the user experience.

## License

This project is licensed under the terms of the MIT license.

## Contact

For any queries, please feel free to contact me through my [GitHub](https://github.com/Jlevbury).


