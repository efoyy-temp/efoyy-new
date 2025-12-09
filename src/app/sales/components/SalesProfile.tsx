"use client";

import React from "react";
import { useAuth } from "../context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const SalesProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return null; // or a loading skeleton
  }

  //  @ts-expect-error this is fine
  const { firstName, lastName, picture, weeklyTarget, weeklySales } = user;
  const progress = weeklyTarget > 0 ? (weeklySales / weeklyTarget) * 100 : 0;

  return (
    <Card className="mb-8 ">
      <CardHeader className="p-3">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage
              src={picture}
              alt={`${firstName} ${lastName}`}
              className="object-cover"
            />
            <AvatarFallback>
              {firstName[0]}
              {lastName[0]}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>
              {firstName} {lastName}
            </CardTitle>
            <CardDescription>Sales Agent</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-3">
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <h3 className="text-sm font-medium">This Week Progress</h3>

            <span>
              {weeklySales ?? 0} /{" "}
              <span className="text-foreground">{weeklyTarget ?? 0}</span>
            </span>
          </div>
          <Progress
            value={progress}
            indicatorClassName="bg-green-500"
            className="bg-secondary"
          />
        </div>
      </CardContent>
    </Card>
  );
};
