"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ChevronDown,
  ChevronUp,
  Loader2,
  Pen,
  PlusCircle,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { getMovies } from "@/server/actions";
import { cn } from "@/lib/utils";
import { MovieCard } from "@/components/movie-card";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const initialCategories = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const additionalCategories = [
  "Western",
  "Biography",
  "History",
  "Musical",
  "Sport",
  "War",
  "Music",
  "Noir",
  "Short",
  "Experimental",
  "Foreign",
  "Superhero",
  "Dystopian",
  "Romantic Comedy",
  "Period Piece",
  "Psychological Thriller",
  "Disaster",
  "Mockumentary",
  "Coming-of-Age",
  "Heist",
  "Political",
  "Religious/Spiritual",
  "Slasher",
  "Supernatural",
  "Teen",
  "Anthology",
  "Erotic",
  "Neo-Noir",
  "Post-Apocalyptic",
  "Vampire",
  "Zombie",
];

type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string }>;
  imdbRating: string;
};

export default function Movies() {
  const [loading, setLoading] = useState(false);
  const [person1Categories, setPerson1Categories] = useState<string[]>([]);
  const [person2Categories, setPerson2Categories] = useState<string[]>([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const displayedCategories = showAllCategories
    ? [...initialCategories, ...additionalCategories]
    : initialCategories;
  const [showNotesInput, setShowNotesInput] = useState(false);
  const [isPerson2, setIsPerson2] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [notes, setNotes] = useState("");
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const { toast } = useToast();
  const activeCategories = isPerson2 ? person2Categories : person1Categories;
  const setActiveCategories = isPerson2
    ? setPerson2Categories
    : setPerson1Categories;

  const handleClearPreferences = () => {
    if (isPerson2) {
      setPerson2Categories([]);
    } else {
      setPerson1Categories([]);
    }
  };
  const handleGetRecommendations = async () => {
    setLoading(true);
    try {
      const results = await getMovies(
        person1Categories,
        person2Categories,
        notes,
      );
      if (!results)
        return toast({
          title: "An error occurred while generating recommendations",
          variant: "destructive",
        });
      setRecommendations(results);
      setIsGenerated(true);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <main className="fullscreen-centered">
      <div className="container flex flex-col items-center px-2 md:px-0">
        {!isGenerated && (
          <>
            <Card className="p-6">
              <div className="flex flex-row items-center justify-between mb-4">
                <div />
                <div className="flex flex-row gap-2 items-center relative">
                  <div className="size-6">
                    <Image
                      src={"/blue.svg"}
                      width={48}
                      height={48}
                      alt={"person"}
                      className={`${isPerson2 ? "grayscale" : ""}`}
                    />
                  </div>
                  <Switch
                    id="person-switch"
                    checked={isPerson2}
                    onCheckedChange={setIsPerson2}
                  />
                  <div className="size-6 absolute right-0 translate-x-8 translate-y-1">
                    <Image
                      src={"/red.svg"}
                      width={48}
                      height={48}
                      alt={"person"}
                      className={`${!isPerson2 ? "grayscale" : ""}`}
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearPreferences}
                  disabled={activeCategories.length === 0}
                  className={
                    activeCategories.length === 0 ? "text-background" : ""
                  }
                >
                  <X /> Clear
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 justify-center items-center">
                {displayedCategories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className={cn(
                      "transition-colors",
                      activeCategories.includes(category)
                        ? isPerson2
                          ? "bg-[#E26058] hover:bg-[#E26058]/90"
                          : "bg-[#8DC9FA] hover:bg-[#8DC9FA]/90"
                        : "",
                    )}
                    onClick={() => {
                      if (activeCategories.includes(category)) {
                        setActiveCategories(
                          activeCategories.filter((c) => c !== category),
                        );
                      } else {
                        setActiveCategories([...activeCategories, category]);
                      }
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAllCategories(!showAllCategories)}
                >
                  {showAllCategories ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
            </Card>

            {!showNotesInput ? (
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => setShowNotesInput(true)}
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Additional Notes
              </Button>
            ) : (
              <div className="mt-8 w-full md:w-[750px] flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="notes" className="flex gap-1 items-center">
                    <Pen size={16} /> Additional Notes
                  </Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setShowNotesInput(false);
                      setNotes("");
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Input
                  id="notes"
                  placeholder="We prefer movies from the last 10 years..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            )}

            <Button
              className="mt-8"
              size="lg"
              onClick={handleGetRecommendations}
              disabled={
                loading ||
                (!person1Categories.length && !person2Categories.length)
              }
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Getting
                  Recommendations...
                </>
              ) : (
                <>
                  Get Recommendations <Sparkles />
                </>
              )}
            </Button>
          </>
        )}
        {isGenerated && (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-2 justify-center text-center">
              Movie Recommendations
            </h1>
            <div className="flex flex-1 gap-4 flex-wrap items-center justify-center">
              {recommendations.map((movie) => (
                <MovieCard key={movie.Title} {...movie} />
              ))}
            </div>
            <Button
              className="mt-8"
              size="lg"
              onClick={() => {
                setIsGenerated(false);
                setRecommendations([]);
                setPerson1Categories([]);
                setPerson2Categories([]);
                setNotes("");
              }}
            >
              New Recommendations <Sparkles />
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
