import { SkillCard } from '@/components/skills/skill-card';

// This would normally fetch data from an API
// For now, we're using mock data
const getSkills = () => {
  return featuredSkills;
};

export function SkillGrid() {
  const skills = getSkills();
  
  return (
    <div>
      <p className="text-muted-foreground mb-6">
        Showing <span className="font-medium text-foreground">{skills.length}</span> results
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="animate-fade-in">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Mock data - in a real app, this would come from a database
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