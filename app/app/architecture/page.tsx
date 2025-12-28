'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Package, FileText, Layers, ArrowRight } from 'lucide-react';
import { SystemComponent } from '@/lib/types';

const systemComponents: SystemComponent[] = [
  {
    id: 'input-assembler',
    name: 'InputAssembler',
    description: 'Collects and structures brand data, content, and signals from multiple sources',
    type: 'input',
  },
  {
    id: 'context-pack',
    name: 'ContextPack',
    description: 'Builds a comprehensive context representation of the brand for AI systems',
    type: 'processor',
    dependencies: ['input-assembler'],
  },
  {
    id: 'content-relevance',
    name: 'Content Relevance Module',
    description: 'Evaluates content alignment with AI search intent',
    type: 'processor',
    dependencies: ['context-pack'],
  },
  {
    id: 'entity-authority',
    name: 'Entity Authority Module',
    description: 'Measures brand authority in AI knowledge graphs',
    type: 'processor',
    dependencies: ['context-pack'],
  },
  {
    id: 'contextual-signals',
    name: 'Contextual Signals Module',
    description: 'Analyzes contextual markers for AI understanding',
    type: 'processor',
    dependencies: ['context-pack'],
  },
  {
    id: 'semantic-structure',
    name: 'Semantic Structure Module',
    description: 'Assesses content structure for AI parsing',
    type: 'processor',
    dependencies: ['context-pack'],
  },
  {
    id: 'trust-signals',
    name: 'Trust & EEAT Module',
    description: 'Evaluates trust and authority indicators',
    type: 'processor',
    dependencies: ['context-pack'],
  },
  {
    id: 'citation-readiness',
    name: 'AI Citation Readiness Module',
    description: 'Measures likelihood of AI citation',
    type: 'processor',
    dependencies: ['context-pack'],
  },
  {
    id: 'conversational-opt',
    name: 'Conversational Optimization Module',
    description: 'Assesses optimization for conversational AI',
    type: 'processor',
    dependencies: ['context-pack'],
  },
  {
    id: 'output-surfaces',
    name: 'Output Surfaces',
    description: 'Dashboard, reports, and API endpoints for audit results',
    type: 'output',
    dependencies: [
      'content-relevance',
      'entity-authority',
      'contextual-signals',
      'semantic-structure',
      'trust-signals',
      'citation-readiness',
      'conversational-opt',
    ],
  },
];

const getComponentIcon = (type: string) => {
  switch (type) {
    case 'input':
      return Database;
    case 'processor':
      return Package;
    case 'output':
      return FileText;
    default:
      return Layers;
  }
};

const getComponentColor = (type: string) => {
  switch (type) {
    case 'input':
      return 'bg-blue-600';
    case 'processor':
      return 'bg-purple-600';
    case 'output':
      return 'bg-green-600';
    default:
      return 'bg-gray-600';
  }
};

export default function ArchitecturePage() {
  const inputComponents = systemComponents.filter((c) => c.type === 'input');
  const processorComponents = systemComponents.filter((c) => c.type === 'processor');
  const outputComponents = systemComponents.filter((c) => c.type === 'output');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">System Architecture</h1>
        <p className="text-muted-foreground">
          Frontend representation of Kasparro's system components and data flow
        </p>
      </div>

      {/* System Flow */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">System Flow</h2>
        <div className="space-y-8">
          {/* Input Layer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              Input Layer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inputComponents.map((component) => {
                const Icon = getComponentIcon(component.type);
                return (
                  <Card key={component.id}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg ${getComponentColor(component.type)} flex items-center justify-center`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <CardTitle className="text-lg">{component.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{component.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-8 w-8 text-muted-foreground" />
          </div>

          {/* Processing Layer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-600" />
              Processing Layer
            </h3>
            <div className="mb-4">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">ContextPack</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Builds comprehensive context representation from input data
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {processorComponents
                .filter((c) => c.id !== 'context-pack')
                .map((component) => {
                  const Icon = getComponentIcon(component.type);
                  return (
                    <Card key={component.id}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg ${getComponentColor(component.type)} flex items-center justify-center`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <CardTitle className="text-lg">{component.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{component.description}</CardDescription>
                        {component.dependencies && (
                          <div className="mt-3 text-xs text-muted-foreground">
                            Depends on: {component.dependencies.join(', ')}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-8 w-8 text-muted-foreground" />
          </div>

          {/* Output Layer */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-600" />
              Output Layer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {outputComponents.map((component) => {
                const Icon = getComponentIcon(component.type);
                return (
                  <Card key={component.id}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-lg ${getComponentColor(component.type)} flex items-center justify-center`}>
                          <Icon className="h-4 w-4 text-white" />
                        </div>
                        <CardTitle className="text-lg">{component.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{component.description}</CardDescription>
                      {component.dependencies && (
                        <div className="mt-3 text-xs text-muted-foreground">
                          Aggregates from: {component.dependencies.length} modules
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* System Understanding */}
      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle>System Understanding</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">InputAssembler</h4>
            <p className="text-sm text-muted-foreground">
              The InputAssembler collects raw data from multiple sources: website content, backlink profiles,
              entity information, and industry context. It structures this data into a format that can be
              processed by the audit modules.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">ContextPack</h4>
            <p className="text-sm text-muted-foreground">
              The ContextPack is a unified representation of the brand's AI search profile. It combines
              all input data into a coherent context that audit modules can analyze. This is the central
              data structure that flows through the system.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Audit Modules</h4>
            <p className="text-sm text-muted-foreground">
              Seven specialized modules analyze different aspects of AI search visibility. Each module
              receives the ContextPack, performs its analysis, and produces scores, insights, issues,
              and recommendations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Output Surfaces</h4>
            <p className="text-sm text-muted-foreground">
              The dashboard, audit views, and API endpoints aggregate results from all modules to provide
              a comprehensive view of the brand's AI search visibility. This is where users interact
              with the system and make decisions based on the audit results.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

