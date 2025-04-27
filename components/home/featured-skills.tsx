"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Code, 
  Languages, 
  Music, 
  PenTool, 
  BookOpen, 
  Dumbbell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SkillCard } from '@/components/skills/skill-card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function FeaturedSkills() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  // Check scroll position
  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftScroll(scrollLeft > 0);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      // Check initial scroll position
      checkScroll();
      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 320; // Approximate card width + gap
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? featuredSkills 
    : featuredSkills.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Skills</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Discover popular skills that people are exchanging on our platform
            </p>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0" asChild>
            <Link href="/explore">
              View all skills <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Badge 
            variant={activeCategory === 'all' ? 'default' : 'outline'} 
            className="cursor-pointer text-sm py-1.5 px-3"
            onClick={() => setActiveCategory('all')}
          >
            All Categories
          </Badge>
          {categories.map(category => (
            <Badge 
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className="cursor-pointer text-sm py-1.5 px-3 gap-1.5"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </Badge>
          ))}
        </div>

        <div className="relative">
          {/* Left scroll button */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm",
              !showLeftScroll && "hidden"
            )}
            onClick={() => handleScroll('left')}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Skills container */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-4 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredSkills.map((skill) => (
              <div key={skill.id} className="snap-start">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm",
              !showRightScroll && "hidden"
            )}
            onClick={() => handleScroll('right')}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const categories = [
  { id: 'technology', name: 'Technology', icon: <Code className="h-4 w-4" /> },
  { id: 'languages', name: 'Languages', icon: <Languages className="h-4 w-4" /> },
  { id: 'arts', name: 'Arts & Design', icon: <PenTool className="h-4 w-4" /> },
  { id: 'music', name: 'Music', icon: <Music className="h-4 w-4" /> },
  { id: 'academic', name: 'Academic', icon: <BookOpen className="h-4 w-4" /> },
  { id: 'fitness', name: 'Fitness', icon: <Dumbbell className="h-4 w-4" /> },
];

const featuredSkills = [
  {
    id: 1,
    title: 'JavaScript for English Conversation',
    description: 'I can teach you JavaScript programming in exchange for English speaking practice',
    teacherName: 'Alex Chen',
    teacherRating: 4.9,
    reviewCount: 24,
    teaching: ['JavaScript', 'React'],
    learning: ['English (Conversation)'],
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    category: 'technology',
  },
  {
    id: 2,
    title: 'Spanish Lessons for Graphic Design',
    description: 'Native Spanish speaker offering lessons in exchange for graphic design skills',
    teacherName: 'Maria Gonzalez',
    teacherRating: 4.8,
    reviewCount: 19,
    teaching: ['Spanish'],
    learning: ['Graphic Design', 'Illustrator'],
    image: 'https://images.pexels.com/photos/6210787/pexels-photo-6210787.jpeg',
    category: 'languages',
  },
  {
    id: 3,
    title: 'Piano Lessons for Photography Tips',
    description: 'Classically trained pianist offering lessons for photography help',
    teacherName: 'David Park',
    teacherRating: 4.7,
    reviewCount: 15,
    teaching: ['Piano', 'Music Theory'],
    learning: ['Photography', 'Editing'],
    image: 'https://images.pexels.com/photos/6054846/pexels-photo-6054846.jpeg',
    category: 'music',
  },
  {
    id: 4,
    title: 'Yoga Instruction for Web Development',
    description: 'Certified yoga instructor looking to learn web development basics',
    teacherName: 'Emily Johnson',
    teacherRating: 5.0,
    reviewCount: 32,
    teaching: ['Yoga', 'Meditation'],
    learning: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg',
    category: 'fitness',
  },
  {
    id: 5,
    title: 'French Cooking for Math Tutoring',
    description: 'Learn authentic French cuisine in exchange for help with college-level math',
    teacherName: 'Pierre Dubois',
    teacherRating: 4.6,
    reviewCount: 11,
    teaching: ['French Cooking', 'Baking'],
    learning: ['Calculus', 'Statistics'],
    image: 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg',
    category: 'academic',
  },
  {
    id: 6,
    title: 'Digital Illustration for Korean Language',
    description: 'Professional illustrator seeking to learn Korean language basics',
    teacherName: 'Taylor Wilson',
    teacherRating: 4.9,
    reviewCount: 27,
    teaching: ['Digital Illustration', 'Character Design'],
    learning: ['Korean Language'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    category: 'arts',
  },
  {
    id: 7,
    title: 'Guitar Lessons for Fitness Training',
    description: 'Experienced guitarist offering lessons in exchange for personal fitness training',
    teacherName: 'James Rodriguez',
    teacherRating: 4.7,
    reviewCount: 14,
    teaching: ['Guitar', 'Music Theory'],
    learning: ['Fitness', 'Strength Training'],
    image: 'https://images.pexels.com/photos/92080/pexels-photo-92080.jpeg',
    category: 'music',
  },
  {
    id: 8,
    title: 'Data Science for Chinese Language',
    description: 'Data scientist willing to teach Python and ML basics for Mandarin lessons',
    teacherName: 'Sarah Kim',
    teacherRating: 4.8,
    reviewCount: 21,
    teaching: ['Python', 'Data Science', 'Machine Learning'],
    learning: ['Mandarin Chinese'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    category: 'technology',
  },
];