import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";

import { getCars, getWishlist, Car, removeFromWishlist } from "@/components/functions";
import { Button } from "./ui/button";

export default function WishList() {
  const [wishlistCars, setWishlistCars] = useState<Car[]>([]);

  useEffect(() => {
    const wishlistIds = getWishlist();

    getCars().then((allCars) => {
      const filtered = allCars.filter((car) => wishlistIds.includes(car.id));
      setWishlistCars(filtered);
    });
  }, []);

  const handleRemoveFromWishlist = (id: number) => {
    removeFromWishlist(id);

    const updatedWishlist = getWishlist();
    getCars().then((allCars) => {
      const filtered = allCars.filter((car) => updatedWishlist.includes(car.id));
      setWishlistCars(filtered);
    });
  };

  return (
    <div className="p-4 min-h-[60dvh]">
      <h2 className="text-2xl font-semibold mb-4">Your Wishlist</h2>
      {wishlistCars.length === 0 ? (
        <p >No cars in your wishlist yet!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {wishlistCars.map((car) => (
            <Card key={car.id} className="border border-gray-300">
              <CardHeader>
                <CardTitle>{car.name}</CardTitle>
                <CardDescription>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-cover"
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Brand: {car.brand}</p>
                <p>Fuel: {car.fuel}</p>
                <p>Seating: {car.seating}</p>
                <p>Price: ₹{car.price.toLocaleString()}</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleRemoveFromWishlist(car.id)}
                  className="w-full"
                >
                  Remove from Wishlist
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
