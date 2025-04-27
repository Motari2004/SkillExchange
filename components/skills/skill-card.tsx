import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Star } from 'lucide-react';

interface Skill {
  id: number;
  title: string;
  description: string;
  teacherName: string;
  teacherRating: number;
  reviewCount: number;
  teaching: string[];
  learning: string[];
  image: string;
  category: string;
}

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="w-[300px] overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={skill.image}
          alt={skill.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{skill.teacherRating}</span>
            <span className="text-xs text-muted-foreground">({skill.reviewCount})</span>
          </div>
          <Badge variant="outline" className="text-xs capitalize">
            {skill.category}
          </Badge>
        </div>
        <CardTitle className="mt-2 line-clamp-1 text-base">{skill.title}</CardTitle>
        <CardDescription className="line-clamp-2 text-sm">
          {skill.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center text-sm">
          <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
            {skill.teacherName.charAt(0)}
          </div>
          <span className="ml-2 text-sm">{skill.teacherName}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs font-medium">Teaching</p>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {skill.teaching.join(', ')}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium">Learning</p>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {skill.learning.join(', ')}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild size="sm" className="w-full">
          <Link href={`/skills/${skill.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}