'use client';

import { useEffect, useMemo } from 'react';
import { AuditModuleSidebar } from '@/components/dashboard/AuditModuleSidebar';
import { ModuleDetails } from '@/components/dashboard/ModuleDetails';
import { useAppStore } from '@/lib/store';
import { getAuditData } from '@/lib/data-loader';

export default function AuditPage() {
  const { selectedBrandId, selectedModuleId, setSelectedModule } = useAppStore();
  
  const audit = useMemo(() => getAuditData(selectedBrandId), [selectedBrandId]);

  // Auto-select first module on mount
  useEffect(() => {
    if (!selectedModuleId && audit && audit.modules.length > 0) {
      setSelectedModule(audit.modules[0].id);
    }
  }, [selectedModuleId, setSelectedModule, audit]);

  if (!audit) {
    return (
      <div className="flex h-[calc(100vh-73px)] items-center justify-center">
        <p className="text-muted-foreground">Please select a brand from the dashboard</p>
      </div>
    );
  }

  const selectedModule = audit.modules.find((m) => m.id === selectedModuleId);

  return (
    <div className="flex h-[calc(100vh-73px)]">
      <AuditModuleSidebar modules={audit.modules} />
      {selectedModule ? (
        <ModuleDetails module={selectedModule} />
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Select a module to view details</p>
        </div>
      )}
    </div>
  );
}

