import { notFound } from "next/navigation";
import { RideDetails } from "@/components/ride-details";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock function to fetch ride data - in real app this would be an API call
async function getRideData(id: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Mock data - in real app this would come from your database/API
  const mockRide = {
    id: "ride-123",
    status: "completed",
    bookingTime: "2024-01-15T14:30:00Z",
    startTime: "2024-01-15T14:35:00Z",
    endTime: "2024-01-15T15:15:00Z",
    pickup: {
      address: "123 Main Street, Downtown",
      coordinates: { lat: 40.7128, lng: -74.006 },
      landmark: "Near Central Park",
    },
    dropoff: {
      address: "456 Oak Avenue, Uptown",
      coordinates: { lat: 40.7589, lng: -73.9851 },
      landmark: "Times Square Area",
    },
    driver: {
      id: "driver-456",
      name: "John Smith",
      photo: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
      totalRides: 1250,
      phone: "+1 (555) 123-4567",
      vehicle: {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "Silver",
        licensePlate: "ABC-1234",
      },
    },
    trip: {
      distance: 8.5, // in miles
      duration: 40, // in minutes
      route: "Via Highway 101 and Main Street",
    },
    pricing: {
      baseFare: 3.5,
      distanceFare: 12.75,
      timeFare: 8.2,
      surgePricing: 0,
      taxes: 2.45,
      tips: 5.0,
      discount: 0,
      total: 31.9,
    },
    payment: {
      method: "Credit Card",
      status: "paid",
      transactionId: "txn_1234567890",
    },
    rating: {
      customerRating: 5,
      driverRating: 4.9,
      feedback:
        "Great ride! Driver was very professional and the car was clean.",
    },
    rideType: "Standard",
    vehicleCategory: "Sedan",
  };

  return mockRide;
}

export default async function RideHistoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const ride = await getRideData((await params).id);

  if (!ride) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="mt-20">
        <Suspense fallback={<RideDetailsSkeleton />}>
          <RideDetails ride={ride} />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

function RideDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Skeleton className="h-8 w-64" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
        <Skeleton className="h-48" />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  
  return {
    title: `Ride Details - ${(await params).id}`,
    description: "View your ride history and details",
  };
}
