"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from people who have successfully exchanged skills on our platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 py-4">
                  <Card className="border-0 shadow-none bg-transparent animate-fade-in">
                    <CardContent className="p-6 relative">
                      <Quote className="absolute h-16 w-16 -top-2 -left-2 text-primary/5 rotate-180" />
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                        <div className="md:col-span-2">
                          <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-3">
                          <blockquote className="text-lg italic mb-4 relative">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="flex flex-col">
                            <div className="font-medium text-lg">{testimonial.name}</div>
                            <div className="flex text-muted-foreground">
                              <div>{testimonial.exchange}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm shadow-sm"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  index === currentIndex ? "bg-primary" : "bg-muted"
                )}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sarah Johnson",
    quote: "I was struggling with learning Spanish for my new job. Through SkillExchange, I connected with Miguel who taught me Spanish in exchange for my graphic design expertise. It's been an incredible win-win arrangement!",
    exchange: "Exchanged Graphic Design for Spanish",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
  },
  {
    name: "Michael Chen",
    quote: "As a software developer wanting to improve my public speaking skills, I found Emily on SkillExchange. I helped her build her portfolio website while she coached me through presentation techniques. My confidence has increased tremendously!",
    exchange: "Exchanged Web Development for Public Speaking",
    image: "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg"
  },
  {
    name: "Rachel Kim",
    quote: "SkillExchange connected me with David, an amazing piano teacher. In return, I taught him Korean language basics. We both achieved our learning goals while making a great friendship along the way.",
    exchange: "Exchanged Korean Language for Piano Lessons",
    image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg"
  }
];