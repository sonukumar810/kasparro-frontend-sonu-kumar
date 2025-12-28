'use client';

import { useAppStore } from '@/lib/store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Brand } from '@/lib/types';

interface BrandSelectorProps {
  brands: Brand[];
}

export function BrandSelector({ brands }: BrandSelectorProps) {
  const { selectedBrandId, setSelectedBrand } = useAppStore();

  return (
    <Select
      value={selectedBrandId || undefined}
      onValueChange={setSelectedBrand}
    >
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="Select a brand" />
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            {brand.name} ({brand.domain})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

