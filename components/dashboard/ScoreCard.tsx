import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

interface ScoreCardProps {
  title: string;
  score: number;
  maxScore?: number;
  description?: string;
  trend?: number;
}

export function ScoreCard({ title, score, maxScore = 100, description, trend }: ScoreCardProps) {
  const percentage = (score / maxScore) * 100;
  const getColorClass = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className={`text-3xl font-bold ${getColorClass()}`}>
            {score}
          </span>
          <span className="text-muted-foreground">/ {maxScore}</span>
          {trend !== undefined && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
              <TrendingUp className="h-4 w-4" />
              <span>{trend > 0 ? '+' : ''}{trend}</span>
            </div>
          )}
        </div>
        <div className="mt-4 w-full bg-muted rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              percentage >= 80 ? 'bg-green-600' : percentage >= 60 ? 'bg-yellow-600' : 'bg-red-600'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

