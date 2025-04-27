import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-br from-primary/80 to-blue-600/90 px-6 py-12 sm:p-16 shadow-lg">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to start exchanging skills?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
              Join thousands of people who are already exchanging skills and learning from each other
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/register">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/explore">Explore Skills</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}