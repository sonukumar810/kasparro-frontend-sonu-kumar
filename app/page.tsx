import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Brain, Search, TrendingUp, Zap, Shield, Target, Layers } from 'lucide-react';

export default function Home() {
  const modules = [
    { name: 'Content Relevance', icon: Target },
    { name: 'Entity Authority', icon: Shield },
    { name: 'Contextual Signals', icon: Search },
    { name: 'Semantic Structure', icon: Layers },
    { name: 'Trust & EEAT', icon: Shield },
    { name: 'AI Citation Readiness', icon: Brain },
    { name: 'Conversational Optimization', icon: Zap },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            AI-Native SEO for the
            <br />
            AI-First Search Era
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kasparro helps brands optimize for ChatGPT, Gemini, Perplexity, and other AI search platforms.
            Get discovered when AI answers user questions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/app/dashboard">Run AI-SEO Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/platform">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* Why AI-SEO is Different */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why AI-SEO is Different from Traditional SEO
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Traditional SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Optimize for keyword rankings</li>
                    <li>• Focus on search volume</li>
                    <li>• Build backlinks for authority</li>
                    <li>• Target specific queries</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    AI-SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Optimize for AI understanding</li>
                    <li>• Focus on semantic depth</li>
                    <li>• Build entity authority</li>
                    <li>• Target conversational intent</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Modules Overview */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Seven Core Audit Modules
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our comprehensive audit evaluates your brand across seven critical dimensions
            of AI search visibility.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{module.name}</CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How Kasparro Works */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How Kasparro Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Input Assembly</h3>
                    <p className="text-muted-foreground">
                      We collect and structure your brand data, content, and signals from across the web.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Context Pack Creation</h3>
                    <p className="text-muted-foreground">
                      We build a comprehensive context pack that represents your brand's AI search profile.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Multi-Module Audit</h3>
                    <p className="text-muted-foreground">
                      Seven specialized modules analyze different aspects of your AI search visibility.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Actionable Insights</h3>
                    <p className="text-muted-foreground">
                      Receive detailed scores, issues, and recommendations to improve your AI visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Ready to Optimize for AI Search?</CardTitle>
              <CardDescription className="text-base">
                Run a comprehensive AI-SEO audit and see how your brand performs in the AI-first search era.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="gap-2">
                <Link href="/app/dashboard">
                  Start Your Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
