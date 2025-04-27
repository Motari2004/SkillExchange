// User types
export interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  imageUrl?: string;
  createdAt: Date;
  teachingSkills: UserSkill[];
  learningSkills: UserSkill[];
  rating: number;
  reviewCount: number;
}

export interface UserSkill {
  id: string;
  name: string;
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
}

// Skill exchange types
export interface SkillExchange {
  id: string;
  teacherId: string;
  learnerId: string;
  status: 'pending' | 'active' | 'completed' | 'canceled';
  teacherSkill: string;
  learnerSkill: string;
  createdAt: Date;
  updatedAt: Date;
  messages: Message[];
  reviews?: Review[];
}

// Message types
export interface Message {
  id: string;
  exchangeId: string;
  senderId: string;
  content: string;
  createdAt: Date;
  read: boolean;
}

// Review types
export interface Review {
  id: string;
  exchangeId: string;
  reviewerId: string;
  receiverId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

// Skill categories
export const skillCategories = [
  'technology',
  'languages',
  'arts',
  'music',
  'academic',
  'fitness',
  'business',
  'cooking',
  'lifestyle',
  'other'
] as const;

export type SkillCategory = typeof skillCategories[number];

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: 'message' | 'exchange_request' | 'exchange_accepted' | 'exchange_rejected' | 'review';
  content: string;
  relatedId?: string;
  read: boolean;
  createdAt: Date;
}