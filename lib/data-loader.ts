// Data loader utility for audit data
import brand1Audit from '@/data/audit-data/brand-1.json';
import { AuditData } from './types';

const auditDataMap: Record<string, AuditData> = {
  'brand-1': brand1Audit as AuditData,
  // Add more brands as needed
  'brand-2': brand1Audit as AuditData, // Using brand-1 as fallback
  'brand-3': brand1Audit as AuditData, // Using brand-1 as fallback
};

export function getAuditData(brandId: string | null): AuditData | null {
  if (!brandId) return null;
  return auditDataMap[brandId] || auditDataMap['brand-1'];
}

