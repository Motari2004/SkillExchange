import { Users, BookOpen, MessageSquare, Star } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export function Stats() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">The SkillExchange Community</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of people who are already exchanging skills and learning from each other
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden border-muted">
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-primary/10 p-2">
                    {stat.icon}
                  </div>
                  <CardDescription>{stat.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardTitle className="text-4xl font-bold">{stat.value}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    icon: <Users className="h-5 w-5 text-primary" />,
    description: "Active Members",
    value: "10,000+"
  },
  {
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    description: "Skills Exchanged",
    value: "25,400+"
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    description: "Messages Sent",
    value: "158,000+"
  },
  {
    icon: <Star className="h-5 w-5 text-primary" />,
    description: "5-Star Reviews",
    value: "4,700+"
  }
];