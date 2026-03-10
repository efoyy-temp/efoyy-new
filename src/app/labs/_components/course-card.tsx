"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
    title: string;
    instructor: string;
    thumbnail: string;
    rating: number;
    reviews: number;
    duration: string;
    lessons: number;
    progress?: number;
    category: string;
    slug: string;
}

export function CourseCard({
    title,
    instructor,
    thumbnail,
    rating,
    reviews,
    duration,
    lessons,
    progress,
    category,
    slug,
}: CourseCardProps) {
    return (
        <Link href={`/labs/courses/${slug}`}>
            <Card className="group overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                        {category}
                    </Badge>
                </div>
                <CardHeader className="p-4">
                    <h3 className="line-clamp-2 text-lg font-bold transition-colors group-hover:text-primary">
                        {title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{instructor}</p>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Star className="size-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium text-foreground">{rating}</span>
                            <span>({reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="size-4" />
                            <span>{duration}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 border-t bg-muted/50 p-4">
                    <div className="flex w-full items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                            <BookOpen className="size-4" />
                            <span>{lessons} Lessons</span>
                        </div>
                        {progress !== undefined && (
                            <span className="font-semibold text-primary">{progress}%</span>
                        )}
                    </div>
                    {progress !== undefined && (
                        <Progress value={progress} className="h-2" />
                    )}
                </CardFooter>
            </Card>
        </Link>
    );
}
