import { AuditModule } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, CheckCircle2, Info, Lightbulb } from 'lucide-react';

interface ModuleDetailsProps {
  module: AuditModule;
}

export function ModuleDetails({ module }: ModuleDetailsProps) {
  const scorePercentage = (module.score / module.maxScore) * 100;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-600';
      case 'high':
        return 'bg-orange-600';
      case 'medium':
        return 'bg-yellow-600';
      case 'low':
        return 'bg-blue-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{module.name}</h1>
        <p className="text-muted-foreground mb-4">{module.description}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${
              scorePercentage >= 80 ? 'text-green-600' :
              scorePercentage >= 60 ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {module.score}
            </span>
            <span className="text-muted-foreground">/ {module.maxScore}</span>
          </div>
          <div className="w-64 h-3 bg-muted rounded-full">
            <div
              className={`h-3 rounded-full ${
                scorePercentage >= 80 ? 'bg-green-600' :
                scorePercentage >= 60 ? 'bg-yellow-600' :
                'bg-red-600'
              }`}
              style={{ width: `${scorePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {module.insights.map((insight, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{insight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Issues */}
      {module.issues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Issues & Flags
            </CardTitle>
            <CardDescription>
              {module.issues.length} issue{module.issues.length !== 1 ? 's' : ''} found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {module.issues.map((issue) => (
                <div key={issue.id} className="border-l-4 border-l-primary pl-4 py-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getSeverityColor(issue.severity)}>
                      {issue.severity}
                    </Badge>
                    <span className="font-semibold">{issue.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{issue.description}</p>
                  {issue.affectedPages && (
                    <p className="text-xs text-muted-foreground">
                      Affects {issue.affectedPages} page{issue.affectedPages !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {module.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                  {index + 1}
                </div>
                <span className="text-sm text-muted-foreground">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

