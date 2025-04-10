import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "./ui/button";
import { getCars, Car, toggleWishlist, getWishlist } from "@/components/functions";
import { Slider } from "@/components/ui/slider";

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;
  const [wishlist, setWishlist] = useState<number[]>(getWishlist());

  const [searchTerm, setSearchTerm] = useState("");
  const [fuelFilter, setFuelFilter] = useState("All");
  const [seatingFilter, setSeatingFilter] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([300000, 1000000]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    getCars().then(setCars);
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFuel = fuelFilter === "All" || car.fuel === fuelFilter;
    const matchesSeating = seatingFilter === "All" || car.seating === parseInt(seatingFilter);
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1];

    return matchesSearch && matchesFuel && matchesSeating && matchesPrice;
  });

  // Pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleUpdateWishlist = (carId: number) => {
    toggleWishlist(carId);
    setWishlist(getWishlist());
  };

  return (
    <>
      <div className="text-center py-8 px-4">
        <h2 className="text-3xl font-semibold mb-2">Search Your Ideal Car</h2>
        <p className="text-gray-600 text-md max-w-xl mx-auto">
          Explore a wide range of cars tailored to your preferences. Use filters to narrow down your search and save your favorites to the wishlist.
        </p>
      </div>
      <div className="p-4 flex gap-4 items-center justify-center">
        <Input
          placeholder="Search by name or brand..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/3 text-sm"
        />

        <Button
          className={`px-4 py-2 rounded-2xl transition-all duration-200
    ${showFilters ? "bg-blue-400 border border-blue-100 hover:bg-blue-500" : "bg-black text-white hover:bg-gray-800"}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </Button>

      </div>

      {showFilters && (
        <div className="flex flex-wrap sm:flex-row gap-4 items-center justify-center mt-2 px-4">
          <Select defaultValue="All" onValueChange={setFuelFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Fuels</SelectItem>
              <SelectItem value="gasoline">Gasoline</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="All" onValueChange={setSeatingFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Seating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Seating</SelectItem>
              <SelectItem value="3">3 Seater</SelectItem>
              <SelectItem value="5">5 Seater</SelectItem>
              <SelectItem value="7">7 Seater</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-col items-center">
            <Slider
              value={priceRange}
              onValueChange={(val: [number, number]) => setPriceRange(val)}
              min={300000}
              max={1000000}
              step={10000}
              className="w-[300px] text-gray-400"
            />
            <div className="text-sm mt-2 text-center">
              ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </div>
          </div>
        </div>
      )}

      {
        filteredCars.length != cars.length ? (
          <div className="flex justify-center items-center py-5 text-3xl ">
            {`Found ${filteredCars.length} Cars`}
          </div>
        ) : (<></>)
      }

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {currentCars.map((car) => (
          <Card key={car.id} className="border-2 border-gray-300 w-full ">
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
                onClick={() => handleUpdateWishlist(car.id)}
                className="w-full"
              >
                {wishlist.includes(car.id)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex p-5 justify-center">
        <Pagination className="border-black border-2 rounded-xl bg-black text-white w-fit px-5 p-3">
          <PaginationContent>
            {/* Previous button */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
              />
            </PaginationItem>

            {/* Current page */}
            <PaginationItem >
              <PaginationLink href="#" className="w-full px-2">
                {`${currentPage} / ${totalPages}`}
              </PaginationLink>
            </PaginationItem>

            {/* Next button */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
