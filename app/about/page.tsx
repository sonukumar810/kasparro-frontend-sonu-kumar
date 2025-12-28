import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Lightbulb, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About Kasparro
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Built by engineers who understand both AI systems and the future of search.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Kasparro exists to help brands navigate the fundamental shift from traditional search
                    to AI-first search. We believe that the future of discovery happens through conversational
                    AI interfaces, and brands need new tools and strategies to remain visible.
                  </p>
                  <p className="text-muted-foreground">
                    Our mission is to make AI-SEO accessible, actionable, and measurable—giving brands
                    the insights they need to thrive in the AI-first search era.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Philosophy */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Product Philosophy</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Engineering-First Thinking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build products the way we build systems: with clear architecture, thoughtful abstractions,
                  and a focus on correctness and maintainability. Every feature is designed to solve real
                  problems, not just check boxes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Depth Over Breadth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prefer to build fewer features exceptionally well rather than many features poorly.
                  Each audit module is designed to provide genuine insight, not just surface-level metrics.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Actionable Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every insight we provide is designed to lead to action. We don't just tell you what's wrong—
                  we tell you why it matters and how to fix it, with specific, prioritized recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Vision for AI-First Search</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We envision a future where search is fundamentally conversational. Users ask questions
                    in natural language, and AI systems synthesize answers from across the web. In this world,
                    traditional SEO metrics become less relevant.
                  </p>
                  <p className="text-muted-foreground">
                    The new metrics are: <strong>understanding</strong> (how well AI systems understand your content),
                    <strong> authority</strong> (how authoritative you are on your topics), and <strong>citation</strong> (how
                    likely you are to be cited in AI responses).
                  </p>
                  <p className="text-muted-foreground">
                    Kasparro is built to help brands master these new metrics. We're not just building a tool—
                    we're building the foundation for how brands will think about search in the AI era.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder-Engineer Credibility */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Built by Engineers, for Engineers</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Founder-Engineer Approach</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Kasparro is built by engineers who have worked on complex AI systems, search infrastructure,
                  and large-scale platforms. We understand both the technical challenges of AI systems and
                  the strategic challenges brands face.
                </p>
                <p className="text-muted-foreground">
                  This engineering-first approach means we think in systems, not just features. Every decision
                  is made with an understanding of how AI systems actually work, how they process information,
                  and how they make decisions about what to cite and recommend.
                </p>
                <p className="text-muted-foreground">
                  We're not marketers building an SEO tool. We're engineers building an AI-SEO platform
                  because we understand the problem from first principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

