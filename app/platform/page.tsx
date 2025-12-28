import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Database, FileText, TrendingUp, Brain, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PlatformPage() {
  const auditModules = [
    'Content Relevance',
    'Entity Authority',
    'Contextual Signals',
    'Semantic Structure',
    'Trust & EEAT Signals',
    'AI Citation Readiness',
    'Conversational Optimization',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            The Kasparro Platform
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            A comprehensive AI-SEO audit system that evaluates your brand across seven critical dimensions
            of AI search visibility.
          </p>
        </section>

        {/* Audit Pipeline Flow */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Audit Pipeline Flow</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Input</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Website content</li>
                      <li>• Brand data</li>
                      <li>• Backlink profile</li>
                      <li>• Entity information</li>
                      <li>• Industry context</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Modules</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {auditModules.map((module, i) => (
                        <li key={i}>• {module}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Output</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Module scores</li>
                      <li>• Key insights</li>
                      <li>• Identified issues</li>
                      <li>• Actionable recommendations</li>
                      <li>• Overall visibility score</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Data Kasparro Consumes */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">What Data Kasparro Consumes</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Data</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Page content and structure</li>
                  <li>• Semantic markup</li>
                  <li>• Topic coverage</li>
                  <li>• Content depth and quality</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Brand Signals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Entity recognition data</li>
                  <li>• Authority metrics</li>
                  <li>• Trust indicators</li>
                  <li>• Industry positioning</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technical Signals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Structured data markup</li>
                  <li>• Site architecture</li>
                  <li>• Content organization</li>
                  <li>• Semantic HTML usage</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>External Signals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Backlink profile</li>
                  <li>• Citation patterns</li>
                  <li>• Knowledge graph presence</li>
                  <li>• Industry mentions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What Outputs Brands Receive */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Outputs Brands Receive</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Visibility Scores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive scoring across all seven modules, plus overall AI visibility and trust scores.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Key Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Actionable insights about your brand's strengths and weaknesses in AI search visibility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    Issues & Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Prioritized list of issues with severity ratings and specific, actionable recommendations for improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How Kasparro Differs */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            How Kasparro Differs from Traditional SEO Tools
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-First Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Traditional SEO tools optimize for keyword rankings. Kasparro optimizes for how AI systems
                  understand, process, and cite your content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Semantic Understanding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We evaluate semantic depth, entity relationships, and contextual signals—not just keyword density.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conversational Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our audits assess how well your content answers conversational queries, which is how users
                  interact with AI search interfaces.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Citation Readiness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We measure how likely your content is to be cited by AI systems, which is the new metric
                  of search success.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Ready to See Your AI Visibility?</CardTitle>
              <CardDescription className="text-base">
                Run a comprehensive audit and get actionable insights for improving your AI search presence.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/app/dashboard">
                <button className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Start Audit
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}

