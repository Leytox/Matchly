"use server";

export const getMovies = async (
  categories1: string[],
  categories2: string[],
  notes?: string,
) => {
  const movieTitles = await getMoviesRecomendations(
    categories1,
    categories2,
    notes,
  );
  const uniqueMovieTitles = [...new Set(movieTitles)]; // Remove duplicates

  const movies = await Promise.all(
    uniqueMovieTitles.map(async (title) => {
      const data = await fetch(
        `https://www.omdbapi.com/?t=${title}&apiKey=${process.env.OMDB_API_KEY}`,
      );
      const movie = await data.json();
      return movie;
    }),
  );
  return movies;
};

export const getMoviesRecomendations = async (
  categories1: string[],
  categories2: string[],
  notes?: string,
) => {
  console.log(categories1, categories2, notes);
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "user",
              content: `As a movie recommendation expert, suggest 9 movies that would be enjoyable for two people with the following genre preferences:

              Person 1 likes: ${categories1.join(", ")}
              Person 2 likes: ${categories2.join(", ")}

              ${notes ? `Additional preferences: ${notes}` : ""}
              GIVE ONLY THE MOVIE TITLES WITHOUT NUMBERING.
              No other text is needed.
              `,
            },
          ],
        }),
      },
    );
    const data = await response.json();
    return data.choices[0].message.content.split("\n");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get movie recommendations");
  }
};
