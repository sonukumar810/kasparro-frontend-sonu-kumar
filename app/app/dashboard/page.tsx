'use client';

import { useEffect } from 'react';
import { BrandSelector } from '@/components/dashboard/BrandSelector';
import { ScoreCard } from '@/components/dashboard/ScoreCard';
import { useAppStore } from '@/lib/store';
import brandsData from '@/data/brands.json';
import snapshotsData from '@/data/brand-snapshots.json';
import { BrandSnapshot } from '@/lib/types';

export default function DashboardPage() {
  const { selectedBrandId, setSelectedBrand } = useAppStore();
  const brands = brandsData as any[];
  const snapshots = snapshotsData as BrandSnapshot[];

  // Auto-select first brand on mount
  useEffect(() => {
    if (!selectedBrandId && brands.length > 0) {
      setSelectedBrand(brands[0].id);
    }
  }, [selectedBrandId, setSelectedBrand, brands]);

  const currentSnapshot = snapshots.find((s) => s.brandId === selectedBrandId);
  const currentBrand = brands.find((b) => b.id === selectedBrandId);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          High-level brand snapshot and AI visibility metrics
        </p>
      </div>

      <div className="mb-6">
        <BrandSelector brands={brands} />
      </div>

      {currentSnapshot && currentBrand ? (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{currentBrand.name}</h2>
            <p className="text-sm text-muted-foreground">
              {currentBrand.domain} • {currentBrand.industry}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <ScoreCard
              title="AI Visibility Score"
              score={currentSnapshot.aiVisibilityScore}
              description="Overall visibility in AI search systems"
            />
            <ScoreCard
              title="Trust / EEAT Score"
              score={currentSnapshot.trustEeatScore}
              description="Expertise, Experience, Authoritativeness, Trust"
            />
            <ScoreCard
              title="Non-Branded Keyword Coverage"
              score={currentSnapshot.nonBrandedKeywordCoverage}
              description="Coverage of non-branded search queries"
            />
            <div className="border rounded-lg p-6 bg-card">
              <h3 className="text-sm font-medium mb-2">Last Audit</h3>
              <p className="text-2xl font-bold mb-1">
                {formatDate(currentSnapshot.lastAuditTimestamp)}
              </p>
              <p className="text-xs text-muted-foreground">Timestamp</p>
            </div>
          </div>

          <div className="mt-8 p-6 border rounded-lg bg-muted/30">
            <h3 className="font-semibold mb-2">Quick Actions</h3>
            <p className="text-sm text-muted-foreground mb-4">
              View detailed audit results or explore the system architecture.
            </p>
            <div className="flex gap-4">
              <a
                href="/app/audit"
                className="text-sm text-primary hover:underline font-medium"
              >
                View Full Audit →
              </a>
              <a
                href="/app/architecture"
                className="text-sm text-primary hover:underline font-medium"
              >
                System Architecture →
              </a>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Select a brand to view its snapshot</p>
        </div>
      )}
    </div>
  );
}

