import { Suspense } from 'react';
import { SkillExploreHeader } from '@/components/explore/skill-explore-header';
import { SkillFilters } from '@/components/explore/skill-filters';
import { SkillGrid } from '@/components/explore/skill-grid';
import { SkillsLoading } from '@/components/explore/skills-loading';

export default function ExplorePage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6">
      <SkillExploreHeader />
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-64 shrink-0">
          <SkillFilters />
        </div>
        <div className="flex-1">
          <Suspense fallback={<SkillsLoading />}>
            <SkillGrid />
          </Suspense>
        </div>
      </div>
    </div>
  );
}