'use client';

import { useAppStore } from '@/lib/store';
import { cn } from '@/lib/utils';
import { AuditModule } from '@/lib/types';
import { CheckCircle2, Circle } from 'lucide-react';

interface AuditModuleSidebarProps {
  modules: AuditModule[];
}

export function AuditModuleSidebar({ modules }: AuditModuleSidebarProps) {
  const { selectedModuleId, setSelectedModule } = useAppStore();

  return (
    <div className="w-64 border-r bg-muted/30 p-4 space-y-2">
      <h2 className="font-semibold mb-4">Audit Modules</h2>
      {modules.map((module) => {
        const isSelected = selectedModuleId === module.id;
        const scorePercentage = (module.score / module.maxScore) * 100;
        const hasIssues = module.issues.length > 0;

        return (
          <button
            key={module.id}
            onClick={() => setSelectedModule(module.id)}
            className={cn(
              'w-full text-left p-3 rounded-lg transition-colors',
              isSelected
                ? 'bg-primary text-primary-foreground'
                : 'bg-background hover:bg-muted'
            )}
          >
            <div className="flex items-start justify-between mb-1">
              <span className={cn('text-sm font-medium', isSelected && 'text-primary-foreground')}>
                {module.name}
              </span>
              {hasIssues && (
                <Circle className={cn('h-4 w-4 flex-shrink-0', isSelected ? 'text-primary-foreground' : 'text-muted-foreground')} />
              )}
              {!hasIssues && (
                <CheckCircle2 className={cn('h-4 w-4 flex-shrink-0', isSelected ? 'text-primary-foreground' : 'text-green-600')} />
              )}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className={cn('text-xs', isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                {module.score}/{module.maxScore}
              </span>
              <div className={cn(
                'flex-1 h-1.5 rounded-full',
                isSelected ? 'bg-primary-foreground/20' : 'bg-muted'
              )}>
                <div
                  className={cn(
                    'h-1.5 rounded-full',
                    scorePercentage >= 80 ? 'bg-green-600' : scorePercentage >= 60 ? 'bg-yellow-600' : 'bg-red-600'
                  )}
                  style={{ width: `${scorePercentage}%` }}
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

