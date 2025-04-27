"use client";

import { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

export function SkillFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState('any');
  const [distance, setDistance] = useState([50]);
  
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedRating('any');
    setDistance([50]);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 gap-1 text-xs"
          onClick={resetFilters}
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </Button>
      </div>
      
      <Accordion type="multiple" defaultValue={['categories', 'rating', 'location']} className="w-full">
        <AccordionItem value="categories" className="border-b">
          <AccordionTrigger className="py-3 text-sm font-medium">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`} 
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <Label 
                    htmlFor={`category-${category.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="rating" className="border-b">
          <AccordionTrigger className="py-3 text-sm font-medium">Rating</AccordionTrigger>
          <AccordionContent>
            <RadioGroup 
              value={selectedRating} 
              onValueChange={setSelectedRating}
              className="space-y-2 pt-1"
            >
              {ratings.map((rating) => (
                <div key={rating.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={rating.value} id={`rating-${rating.value}`} />
                  <Label 
                    htmlFor={`rating-${rating.value}`}
                    className="text-sm cursor-pointer"
                  >
                    {rating.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="location" className="border-b">
          <AccordionTrigger className="py-3 text-sm font-medium">Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-1">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-sm">Distance</Label>
                  <span className="text-sm text-muted-foreground">
                    {distance[0]} miles
                  </span>
                </div>
                <Slider
                  value={distance}
                  max={100}
                  step={5}
                  onValueChange={setDistance}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Exchange Type</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-person" />
                    <Label htmlFor="in-person" className="text-sm cursor-pointer">
                      In-person
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remote" defaultChecked />
                    <Label htmlFor="remote" className="text-sm cursor-pointer">
                      Remote
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="hybrid" />
                    <Label htmlFor="hybrid" className="text-sm cursor-pointer">
                      Hybrid
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="availability" className="border-b">
          <AccordionTrigger className="py-3 text-sm font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              <div className="flex items-center space-x-2">
                <Checkbox id="weekdays" />
                <Label htmlFor="weekdays" className="text-sm cursor-pointer">
                  Weekdays
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="weekends" />
                <Label htmlFor="weekends" className="text-sm cursor-pointer">
                  Weekends
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="evenings" />
                <Label htmlFor="evenings" className="text-sm cursor-pointer">
                  Evenings
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mornings" />
                <Label htmlFor="mornings" className="text-sm cursor-pointer">
                  Mornings
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button className="w-full">Apply Filters</Button>
    </div>
  );
}

const categories = [
  { id: 'technology', name: 'Technology' },
  { id: 'languages', name: 'Languages' },
  { id: 'arts', name: 'Arts & Design' },
  { id: 'music', name: 'Music' },
  { id: 'academic', name: 'Academic' },
  { id: 'fitness', name: 'Fitness' },
  { id: 'business', name: 'Business' },
  { id: 'cooking', name: 'Cooking' },
  { id: 'lifestyle', name: 'Lifestyle' },
];

const ratings = [
  { value: 'any', label: 'Any rating' },
  { value: '4+', label: '4 stars & above' },
  { value: '3+', label: '3 stars & above' },
  { value: '2+', label: '2 stars & above' },
];