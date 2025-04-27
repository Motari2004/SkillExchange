import { CheckCircle2, MessageSquare, UserPlus, Handshake } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">How SkillExchange Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Exchange your skills with others in four simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connect steps with line on larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-muted-foreground/20 -translate-y-1/2 z-0" />
              )}
              
              <div className="bg-background rounded-lg p-6 border shadow-sm relative z-10 h-full flex flex-col items-center text-center transform transition-all hover:-translate-y-1 hover:shadow-md animate-fade-in">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {step.icon}
                </div>
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-xs font-bold text-primary-foreground mb-2">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: "Create Your Profile",
    description: "List the skills you can teach and the skills you want to learn from others."
  },
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: "Find Matches",
    description: "Discover people who want to learn what you teach and can teach what you want to learn."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Connect & Discuss",
    description: "Message potential matches to discuss how you can help each other and arrange sessions."
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Exchange Skills",
    description: "Meet virtually or in-person to exchange knowledge, then rate and review your experience."
  }
];