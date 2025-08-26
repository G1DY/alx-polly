import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-white to-gray-100">
      {/* Header / Navbar */}
      <header className="w-full border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-bold text-primary">Pollify</h1>
          <nav className="flex gap-4">
            <Button variant="ghost">Login</Button>
            <Button variant="default">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Create. Share. Vote.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          The easiest way to create polls, collect opinions, and make decisions
          with your community.
        </p>
        <div className="mt-6 flex gap-4">
          <Button size="lg">Create a Poll</Button>
          <Button size="lg" variant="outline">
            Browse Polls
          </Button>
        </div>
      </section>

      {/* Features Preview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 mb-16 px-6 container">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Easy Poll Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Spin up polls in seconds with a clean and intuitive interface.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Share Anywhere</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Share polls with friends, teams, or entire communities instantly.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Real-time Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Watch results update live as votes come in.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pollify. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
