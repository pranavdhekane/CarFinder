export interface Car {
    id: number;
    name: string;
    brand: string;
    price: number;
    fuel: string;
    seating: number;
    image: string;
}

// Fetch all cars 
export async function getCars(): Promise<Car[]> {
    try {
        // const res = await fetch("http://localhost:4000/cars");
        const res = await fetch("https://raw.githubusercontent.com/pranavdhekane/CarFinder/refs/heads/main/db.json");
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        return data.cars;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
}

// Get wishlist from localStorage
export function getWishlist(): number[] {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
}

// Add a car to wishlist
export function addToWishlist(carId: number): number[] {
    const wishlist = getWishlist();
    if (!wishlist.includes(carId)) {
        wishlist.push(carId);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
    return wishlist;
}

// Remove a car from wishlist
export function removeFromWishlist(carId: number): number[] {
    const wishlist = getWishlist().filter((id) => id !== carId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    return wishlist;
}

// Toggle wishlist item 
export function toggleWishlist(carId: number): number[] {
    const wishlist = getWishlist();
    if (wishlist.includes(carId)) {
        return removeFromWishlist(carId);
    } else {
        return addToWishlist(carId);
    }
}
