// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/polls");
// }
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Vote, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit">
                🚀 Now Live - Start Polling Today
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Create, Vote, and
                <span className="text-accent"> Discover</span> – Your Polling
                Experience Awaits!
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Transform opinions into insights with our intuitive polling
                platform. Create engaging polls, gather real-time feedback, and
                visualize results that drive meaningful decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/signup">Get Started Free</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent"
                >
                  <Link href="/polls">View Live Polls</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Instant setup</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-card rounded-2xl p-8 shadow-2xl border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-card-foreground">
                      What's your favorite programming language?
                    </h3>
                    <Badge variant="secondary">Live Poll</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>JavaScript</span>
                        <span className="text-accent font-medium">45%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-accent rounded-full w-[45%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Python</span>
                        <span className="text-secondary font-medium">35%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary rounded-full w-[35%]"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>TypeScript</span>
                        <span className="text-chart-2 font-medium">20%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-chart-2 rounded-full w-[20%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-muted-foreground">
                      1,247 votes
                    </span>
                    <Button size="sm" variant="outline">
                      Vote Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Everything you need to create engaging polls
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              From simple yes/no questions to complex multi-choice surveys, our
              platform makes polling effortless and insightful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  <Vote className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">
                  Create Polls Instantly
                </h3>
                <p className="text-muted-foreground text-pretty">
                  Build beautiful polls in seconds with our intuitive
                  drag-and-drop interface. Add images, customize options, and
                  set voting rules effortlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Vote Instantly</h3>
                <p className="text-muted-foreground text-pretty">
                  Participate in polls with a single click. Real-time updates
                  show results as they happen, creating an engaging voting
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-chart-2/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-chart-2/20 transition-colors">
                  <BarChart3 className="h-8 w-8 text-chart-2" />
                </div>
                <h3 className="text-xl font-semibold">View Live Results</h3>
                <p className="text-muted-foreground text-pretty">
                  Watch results update in real-time with beautiful charts and
                  analytics. Export data and gain insights from comprehensive
                  voting patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">10K+</div>
              <div className="text-muted-foreground">Polls Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">50K+</div>
              <div className="text-muted-foreground">Votes Cast</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-chart-2">2K+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our users are saying about their polling experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-pretty">
                  "This polling platform transformed how we gather feedback from
                  our team. The real-time results are incredibly helpful for
                  making quick decisions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-accent">SM</span>
                  </div>
                  <div>
                    <div className="font-medium">Sarah Miller</div>
                    <div className="text-sm text-muted-foreground">
                      Product Manager
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-pretty">
                  "Simple, intuitive, and powerful. We use it for everything
                  from team lunch decisions to important strategic planning
                  sessions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-secondary">
                      JD
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">John Davis</div>
                    <div className="text-sm text-muted-foreground">
                      Team Lead
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-pretty">
                  "The analytics dashboard gives us insights we never had
                  before. It's become an essential tool for our community
                  engagement."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-chart-2/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-chart-2">AL</span>
                  </div>
                  <div>
                    <div className="font-medium">Alex Lee</div>
                    <div className="text-sm text-muted-foreground">
                      Community Manager
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-accent to-secondary">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">
            Join thousands of users in shaping the conversation!
          </h2>
          <p className="text-xl text-white/90 text-pretty max-w-2xl mx-auto">
            Start creating engaging polls today and discover what your audience
            really thinks. No setup fees, no hidden costs – just powerful
            polling made simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link href="/signup">Sign Up Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Link href="/login">Already have an account?</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
