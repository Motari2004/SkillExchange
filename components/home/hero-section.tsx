"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative bg-gradient-to-b from-primary/5 to-background pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-32 lg:pb-40">
      <div className="container mx-auto px-4 sm:px-6 lg:flex lg:items-center lg:gap-16">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl animate-fade-in">
          <div className="hidden sm:mb-8 sm:flex">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-foreground/80 ring-1 ring-muted-foreground/20 hover:ring-muted-foreground/40 transition-all">
              Join the community of 10,000+ skill exchangers.{" "}
              <Link href="/about" className="whitespace-nowrap font-semibold text-primary">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Exchange Skills, <span className="text-primary">Grow Together</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A platform where you can share your expertise and learn from others. Teach what you know, learn what you need, and make meaningful connections.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="What do you want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-base"
              />
            </div>
            <Button size="lg" className="shrink-0">
              Find Skills
            </Button>
          </div>
          <div className="mt-8 flex gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
            <Button variant="ghost" size="lg" className="gap-2 group" asChild>
              <Link href="/how-it-works">
                How It Works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 animate-slide-up">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 z-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute -right-4 -bottom-4 z-0 h-60 w-60 rounded-full bg-blue-400/10 blur-3xl"></div>
            
            {/* Hero image mockup */}
            <div className="relative z-10 overflow-hidden rounded-xl border bg-card/70 backdrop-blur-sm shadow-xl">
              <div className="px-6 pt-6">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    Featured Exchange
                  </div>
                  <div className="flex -space-x-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 border-2 border-white text-xs font-medium text-blue-800">
                      JS
                    </div>
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 border-2 border-white text-xs font-medium text-green-800">
                      EN
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium">JavaScript for English</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  I'll teach you JavaScript programming in exchange for English conversation practice
                </p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-medium text-white">
                      A
                    </div>
                    <span className="ml-2">Alex Chen</span>
                  </div>
                  <span className="mx-2">&bull;</span>
                  <span>4.9 ★ (24 reviews)</span>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button size="sm" className="w-full">Message</Button>
                  <Button size="sm" variant="outline" className="w-full">Profile</Button>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 divide-x">
                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-medium">Teaching</p>
                  <p className="text-xs text-muted-foreground">JavaScript, React</p>
                </div>
                <div className="px-4 py-3 text-center">
                  <p className="text-sm font-medium">Learning</p>
                  <p className="text-xs text-muted-foreground">English (Conversation)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}