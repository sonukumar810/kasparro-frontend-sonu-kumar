// Core data types for Kasparro platform

export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  maxScore: number;
  insights: string[];
  issues: AuditIssue[];
  recommendations: string[];
}

export interface AuditIssue {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  affectedPages?: number;
}

export interface BrandSnapshot {
  brandId: string;
  aiVisibilityScore: number;
  trustEeatScore: number;
  nonBrandedKeywordCoverage: number;
  lastAuditTimestamp: string;
}

export interface AuditData {
  brandId: string;
  modules: AuditModule[];
  generatedAt: string;
}

export interface SystemComponent {
  id: string;
  name: string;
  description: string;
  type: 'input' | 'processor' | 'output';
  dependencies?: string[];
}

