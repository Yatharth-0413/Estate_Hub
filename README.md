# Estate-Hub

## Overview

Estate-Hub is a full-stack real estate web application designed to help users find, list, and manage properties. The application includes a variety of features such as real-time messaging, notifications, and user authentication.

![Example Image](https://github.com/Yatharth-0413/estate_hub/blob/master/Homepage.png)

## Features

- **User Authentication:** Secure login and registration using JWT.
- **Real-time Messaging:** Implemented with Socket.io for instant communication.
- **Property Listings:** Users can view, add, edit, and delete property listings.
- **Favorites:** Save favorite properties for quick access.
- **Interactive Maps:** View property locations on an interactive map.
- **Notifications:** Real-time notifications using Zustand.
- **Responsive Design:** Fully responsive and mobile-friendly interface.

## LISTPAGE
![Example Image](https://github.com/Yatharth-0413/estate_hub/blob/master/ListPage.png)
## PROPERTY-DETAIL PAGE
![Example Image](https://github.com/Yatharth-0413/estate_hub/blob/master/PropertyDetail.png)
## PROFILE PAGE
![Example Image](https://github.com/Yatharth-0413/estate_hub/blob/master/Profile.png)


## Tech Stack

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **SCSS:** A preprocessor scripting language that is interpreted or compiled into CSS.
- **Zustand:** A small, fast, and scalable bearbones state-management solution using simplified flux principles.
- **React Router:** Declarative routing for React applications.

### Backend

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A document database, which stores data in flexible, JSON-like documents.

### Real-Time Communication

- **Socket.io:** A library that enables real-time, bidirectional, and event-based communication.

### Authentication & Security

- **JWT (JSON Web Tokens):** For secure authentication.
- **Bcrypt:** A library to help you hash passwords.


## Usage
### User Registration and Login:  
    Users can register and log in to access their account.

### Property Listings:
    Users can browse through property listings, view details, and save their favorite properties.

### Real-time Messaging:
    Logged-in users can send and receive real-time messages.

### Interactive Map:
    Properties are displayed on an interactive map for easy location identification.

### Notifications:
    Users receive real-time notifications for important updates.

## Folder Structure

# Estate-Hub Directory ( Rough-Structure )

| Directory/File          |
|-------------------------|
| Estate-Hub/             |
| ├── backend/             |
| │   ├── controllers/     |          |
| │   ├── routes/          |
| │   ├── middleware/      |
| │   └── server.js        |
| ├── frontend/            |
| │   ├── src/             |
| │   │   ├── components/  |
| │   │   ├── pages/       |
| │   │   ├── context/     |
| │   │   ├── hooks/       |
| │   │   ├── App.js       |
| │   │   ├── index.js     |
| │   │   ├── styles/      |
| │   │   └── assets/      |
| │   └── public/           |
| │       └── index.html   |
| └── README.md            |



# Contributing
- Fork the repository.
- Create a new branch: git checkout -b feature-branch
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin feature-branch
- Open a pull request.
