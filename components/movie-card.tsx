import { Star } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";

type MovieCardProps = {
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

export const MovieCard = ({
  Title,
  Year,
  Rated,
  Runtime,
  Genre,
  Director,
  Actors,
  Plot,
  Poster,
  Ratings,
  imdbRating,
}: MovieCardProps) => {
  return (
    <Card className="overflow-hidden md:w-[750px] md:h-[450px]">
      <div className="flex flex-col md:flex-row">
        {/* Poster Section */}

        {Poster && Poster !== "N/A" && (
          <div className="relative w-full hidden md:block md:w-1/3 md:h-[450px]">
            <Image
              src={Poster}
              alt={`${Title} poster`}
              fill
              sizes="100% 100%"
              className="object-cover"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="p-4 flex-1">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h2 className="text-2xl font-bold">{Title}</h2>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <span>{Year}</span>
                <span>•</span>
                <span>{Rated}</span>
                <span>•</span>
                <span>{Runtime}</span>
              </div>
            </div>

            {/* Ratings */}
            <div className="flex flex-wrap gap-2">
              {Ratings.map((rating) => (
                <div
                  key={rating.Source}
                  className="bg-secondary px-3 py-1 rounded-full text-sm"
                >
                  {rating.Source}: {rating.Value}
                </div>
              ))}
            </div>

            {/* Details */}
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Genre:</span> {Genre}
              </p>
              <p>
                <span className="font-semibold">Director:</span> {Director}
              </p>
              <p>
                <span className="font-semibold">Cast:</span> {Actors}
              </p>
            </div>

            {/* Plot */}
            <div>
              <h3 className="font-semibold mb-2">Plot</h3>
              <p className="text-muted-foreground">{Plot}</p>
            </div>

            {/* IMDb Rating */}
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{imdbRating}</span>
              <span className="text-muted-foreground">/ 10</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
