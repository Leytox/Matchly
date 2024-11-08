# MatchMedia
![AI giving two people a recommendation about media content](https://github.com/user-attachments/assets/0f106d4f-e10a-4552-b516-7e22b19b548b)
A full-stack web application that helps users find personalized movie, book, and music recommendations based on their preferences.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Movie, Book, and Music Recommendation System is a web application built using NextJS and ChakraUI. It allows users to select their preferences for movies, books, and music, and the application then provides personalized recommendations based on the combined preferences.

## Features

- **Movie Recommendations**: Users can select their preferred movie genres, and the application will retrieve and display a list of recommended movies that match their preferences.
- **Book Recommendations**: Users can select their preferred book genres, and the application will retrieve and display a list of recommended books that match their preferences.
- **Music Recommendations**: Users can select their preferred music genres, and the application will retrieve and display a list of recommended songs/artists that match their preferences.
- **Responsive Design**: The application is designed to be responsive and accessible on various devices, from desktop to mobile.
- **Intuitive User Interface**: The application uses ChakraUI to provide a clean and modern user interface that is easy to navigate.

## Technologies Used

- **Front-end**: NextJS, Shadcn, React
- **APIs**: OMDB, Google Books API, Spotify API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js(v23 and higher) or Bun (v1.1 or higher)
- npm or yarn or bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Leytox/MatchMedia.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MatchMedia
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```
   GROQ_API_KEY=your_groq_api_key
   OMDB_API_KEY=your_omdb_api_key
   GOOGLE_BOOKS_API_KEY=your_google_books_api_key
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   ```

   Replace the placeholders with your actual API keys and credentials.

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

   The application should now be running at `http://localhost:3000`.

## Usage

1. Upon launching the application, users will see two panels where they can select their preferred movie, book, and music genres.
2. After selecting their preferences, users can click the "Find Recommendations" button to retrieve and display personalized recommendations for movies, books, and music.
3. The application will show the recommended items with relevant details, such as titles, descriptions, and ratings (where available).

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push your changes to your fork
5. Submit a pull request

## License

This project is licensed under the MIT License
