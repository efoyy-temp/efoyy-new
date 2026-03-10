"use client";

import { CheckCircle2, PlayCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Lesson {
    id: string;
    title: string;
    duration: string;
    isCompleted: boolean;
    isLocked: boolean;
}

interface LessonPlayerProps {
    lessons: Lesson[];
    currentLessonId: string;
    onLessonSelect: (id: string) => void;
}

export function LessonPlayer({ lessons, currentLessonId, onLessonSelect }: LessonPlayerProps) {
    const currentLesson = lessons.find(l => l.id === currentLessonId);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 h-[calc(100vh-8rem)] overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-md shadow-2xl">
            <div className="lg:col-span-3 flex flex-col">
                <div className="relative aspect-video w-full bg-black/90 flex items-center justify-center">
                    {/* Placeholder for Video Player */}
                    <div className="flex flex-col items-center gap-4 text-muted-foreground">
                        <PlayCircle className="size-20 opacity-20" />
                        <p className="text-lg font-medium">Video Content for {currentLesson?.title}</p>
                    </div>
                </div>
                <div className="p-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-4">{currentLesson?.title}</h1>
                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p>
                            In this lesson, we explore the core concepts of the topic. We'll cover everything from the basic principles to advanced implementations.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border-l border-border/40 flex flex-col h-full bg-card/50">
                <div className="p-4 border-b border-border/40">
                    <h2 className="font-bold">Course Content</h2>
                    <p className="text-xs text-muted-foreground mt-1">12 / 24 Lessons completed</p>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="p-2 space-y-1">
                        {lessons.map((lesson) => (
                            <button
                                key={lesson.id}
                                disabled={lesson.isLocked}
                                onClick={() => onLessonSelect(lesson.id)}
                                className={cn(
                                    "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all",
                                    currentLessonId === lesson.id
                                        ? "bg-primary/20 text-primary border border-primary/20"
                                        : "hover:bg-muted/50",
                                    lesson.isLocked && "opacity-50 cursor-not-allowed"
                                )}
                            >
                                {lesson.isCompleted ? (
                                    <CheckCircle2 className="size-5 text-primary shrink-0" />
                                ) : lesson.isLocked ? (
                                    <Lock className="size-5 shrink-0" />
                                ) : (
                                    <PlayCircle className="size-5 shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate">{lesson.title}</p>
                                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
