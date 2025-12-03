"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clock,
  Star,
  Phone,
  Car,
  CreditCard,
  Download,
  MessageSquare,
  Navigation,
  DollarSign,
  Route,
  Timer,
} from "lucide-react";
import { format } from "date-fns";

type RideData = {
  id: string;
  status: string;
  bookingTime: string;
  startTime: string;
  endTime: string;
  pickup: {
    address: string;
    coordinates: { lat: number; lng: number };
    landmark: string;
  };
  dropoff: {
    address: string;
    coordinates: { lat: number; lng: number };
    landmark: string;
  };
  driver: {
    id: string;
    name: string;
    photo: string;
    rating: number;
    totalRides: number;
    phone: string;
    vehicle: {
      make: string;
      model: string;
      year: number;
      color: string;
      licensePlate: string;
    };
  };
  trip: {
    distance: number;
    duration: number;
    route: string;
  };
  pricing: {
    baseFare: number;
    distanceFare: number;
    timeFare: number;
    surgePricing: number;
    taxes: number;
    tips: number;
    discount: number;
    total: number;
  };
  payment: {
    method: string;
    status: string;
    transactionId: string;
  };
  rating: {
    customerRating: number;
    driverRating: number;
    feedback: string;
  };
  rideType: string;
  vehicleCategory: string;
};

export function RideDetails({ ride }: { ride: RideData }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 hover:bg-green-200 text-green-800";
      case "cancelled":
        return "bg-red-100 hover:bg-red-200 text-red-800";
      case "in-progress":
        return "bg-blue-100 hover:bg-blue-200 text-blue-800";
      default:
        return "bg-gray-100 hover:bg-gray-200 text-gray-800";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM dd, yyyy 'at' h:mm a");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Ride Details</h1>
            <Badge className={getStatusColor(ride.status)}>
              {ride.status.charAt(0).toUpperCase() + ride.status.slice(1)}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm font-semibold">
            Ride ID: {ride.id}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Route className="h-5 w-5" />
                  Trip Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <p className="font-medium">Pickup</p>
                      <p className="text-gray-600">{ride.pickup.address}</p>
                      <p className="text-sm text-gray-500">
                        {ride.pickup.landmark}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Drop-off</p>
                      <p className="text-gray-600">{ride.dropoff.address}</p>
                      <p className="text-sm text-gray-500">
                        {ride.dropoff.landmark}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                      <Navigation className="h-4 w-4" />
                      Distance
                    </div>
                    <p className="font-semibold">{ride.trip.distance} mi</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                      <Timer className="h-4 w-4" />
                      Duration
                    </div>
                    <p className="font-semibold">{ride.trip.duration} min</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                      <Car className="h-4 w-4" />
                      Vehicle
                    </div>
                    <p className="font-semibold">{ride.vehicleCategory}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mb-1">
                      <DollarSign className="h-4 w-4" />
                      Total
                    </div>
                    <p className="font-semibold">
                      {formatCurrency(ride.pricing.total)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Driver Information */}
            <Card>
              <CardHeader>
                <CardTitle>Driver Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={ride.driver.photo || "/placeholder.svg"}
                      alt={ride.driver.name}
                    />
                    <AvatarFallback>
                      {ride.driver.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {ride.driver.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{ride.driver.rating}</span>
                      <span>•</span>
                      <span>
                        {ride.driver.totalRides.toLocaleString()} rides
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>

                <div className="bg-secondary/80 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Vehicle Details</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Make & Model:</span>
                      <p className="font-medium">
                        {ride.driver.vehicle.year} {ride.driver.vehicle.make}{" "}
                        {ride.driver.vehicle.model}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Color:</span>
                      <p className="font-medium">{ride.driver.vehicle.color}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">License Plate:</span>
                      <p className="font-medium">
                        {ride.driver.vehicle.licensePlate}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Base fare</span>
                    <span>{formatCurrency(ride.pricing.baseFare)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Distance ({ride.trip.distance} mi)</span>
                    <span>{formatCurrency(ride.pricing.distanceFare)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time ({ride.trip.duration} min)</span>
                    <span>{formatCurrency(ride.pricing.timeFare)}</span>
                  </div>
                  {ride.pricing.surgePricing > 0 && (
                    <div className="flex justify-between">
                      <span>Surge pricing</span>
                      <span>{formatCurrency(ride.pricing.surgePricing)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Taxes & fees</span>
                    <span>{formatCurrency(ride.pricing.taxes)}</span>
                  </div>
                  {ride.pricing.tips > 0 && (
                    <div className="flex justify-between">
                      <span>Tip</span>
                      <span>{formatCurrency(ride.pricing.tips)}</span>
                    </div>
                  )}
                  {ride.pricing.discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-{formatCurrency(ride.pricing.discount)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatCurrency(ride.pricing.total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trip Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Trip Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Booked</p>
                  <p className="font-medium">{formatDate(ride.bookingTime)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Started</p>
                  <p className="font-medium">{formatDate(ride.startTime)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="font-medium">{formatDate(ride.endTime)}</p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Payment method</p>
                  <p className="font-medium">{ride.payment.method}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    {ride.payment.status.charAt(0).toUpperCase() +
                      ride.payment.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Transaction ID</p>
                  <p className="font-mono text-sm">
                    {ride.payment.transactionId}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Rating & Feedback */}
            <Card>
              <CardHeader>
                <CardTitle>Your Rating</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${star <= ride.rating.customerRating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">
                    {ride.rating.customerRating}/5
                  </span>
                </div>
                {ride.rating.feedback && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Your feedback</p>
                    {/* <p className="text-sm italic">"{ride.rating.feedback}"</p> */}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Report Issue
                </Button>
                <Button className="w-full" variant="outline">
                  Book Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
