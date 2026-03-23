'use client';

import { useState } from 'react';
import {
  Heart,
  Pill,
  Apple,
  Scissors,
  Brain,
  MessageCircle,
  X,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Dog,
  Cat,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/90">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">PetCare</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#pets" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pet Care
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#footer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
                Caring for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Furry Friends</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Comprehensive pet care solutions designed with love and expertise. From health checkups to nutrition advice, we're here for every stage of your furry friend's journey.
              </p>
              <Button
                size="lg"
                className="w-fit bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 rounded-[3rem] bg-gradient-to-br from-accent/20 to-primary/10 shadow-xl flex items-center justify-center overflow-hidden border-2 border-accent/30">
                <div className="flex gap-8">
                  <Dog className="h-32 w-32 text-primary animate-bounce" style={{ animationDelay: '0s' }} />
                  <Cat className="h-32 w-32 text-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid Section */}
      <section id="services" className="px-4 py-20 sm:px-6 sm:py-32 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everything your pet needs to thrive with expert care and personalized attention
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Pill, title: 'Health Checkup', description: 'Regular health exams and vaccination management' },
              { icon: Apple, title: 'Nutrition Advice', description: 'Customized meal plans for optimal health' },
              { icon: Scissors, title: 'Grooming', description: 'Professional grooming and styling services' },
              { icon: Brain, title: 'Behavioral Training', description: 'Expert behavior modification and training' },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="group cursor-pointer border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 rounded-3xl"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/30 group-hover:from-primary/20 group-hover:to-primary/30 transition-all">
                    <Icon className="h-7 w-7 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pet Profiles Section */}
      <section id="pets" className="px-4 py-20 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Pet Care Guides</h2>
            <p className="text-muted-foreground text-lg">Specialized care information for dogs and cats</p>
          </div>

          <div className="flex justify-center">
            <Tabs defaultValue="dogs" className="w-full max-w-3xl">
              <TabsList className="grid w-full grid-cols-2 bg-white border border-border rounded-2xl p-1">
                <TabsTrigger value="dogs" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white flex gap-2">
                  <Dog className="h-4 w-4" />
                  <span>Dog Care</span>
                </TabsTrigger>
                <TabsTrigger value="cats" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white flex gap-2">
                  <Cat className="h-4 w-4" />
                  <span>Cat Care</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dogs" className="mt-8 space-y-6">
                <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-3xl shadow-lg">
                  <h3 className="mb-6 text-2xl font-bold text-foreground">Dog Care Essentials</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Daily Exercise: 30-60 minutes of physical activity keeps dogs healthy and happy</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Nutrition: High-quality dog food with proper protein and nutrients</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Grooming: Regular brushing and nail trims every 4-6 weeks</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Training: Continuous positive reinforcement for behavioral management</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="cats" className="mt-8 space-y-6">
                <Card className="border-0 bg-gradient-to-br from-accent/10 to-primary/5 p-8 rounded-3xl shadow-lg">
                  <h3 className="mb-6 text-2xl font-bold text-foreground">Cat Care Essentials</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Indoor Environment: Safe space with climbing areas and hiding spots</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Nutrition: Balanced diet rich in protein and taurine</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Grooming: Regular brushing to prevent matting and reduce shedding</span>
                    </li>
                    <li className="flex gap-3 text-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Playtime: Interactive toys and daily enrichment activities</span>
                    </li>
                  </ul>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="px-4 py-20 sm:px-6 sm:py-32 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Pet Wellness Tips</h2>
            <p className="text-muted-foreground text-lg">Latest articles on pet health and nutrition</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Nutrition Guide',
                excerpt: 'Learn about balanced diets and the best foods for your pet\'s health and longevity',
                date: 'March 15, 2024',
                icon: Apple,
              },
              {
                title: 'Exercise Routine',
                excerpt: 'Discover ways to keep your pet active and healthy throughout the year',
                date: 'March 12, 2024',
                icon: Heart,
              },
              {
                title: 'Dental Health',
                excerpt: 'Tips for maintaining excellent dental hygiene for your furry friend',
                date: 'March 10, 2024',
                icon: BookOpen,
              },
            ].map((article, idx) => {
              const IconComponent = article.icon;
              return (
                <Card
                  key={idx}
                  className="group cursor-pointer border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 rounded-3xl"
                >
                  <div className="mb-4 h-40 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-primary group-hover:text-primary/80 transition-colors" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">{article.excerpt}</p>
                  <p className="text-xs text-muted-foreground/70">{article.date}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-border bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/90">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-foreground">PetCare</span>
              </div>
              <p className="text-sm text-muted-foreground">Caring for your furry friends with love and expertise</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#pets" className="hover:text-primary transition-colors">Pet Care</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:hello@petcare.com" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Emergency</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
              <div className="space-y-3">
                <Input
                  placeholder="Your email"
                  type="email"
                  className="rounded-xl border-border bg-white text-sm"
                />
                <Button className="w-full bg-gradient-to-r from-primary to-primary/90 text-white hover:shadow-lg transition-all">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 PetCare. All rights reserved. Created with love for pet lovers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Widget */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent/90 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          aria-label="Open Pet Assistant chat"
        >
          <MessageCircle className="h-7 w-7" />
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex w-80 sm:w-96 flex-col rounded-3xl bg-white shadow-2xl overflow-hidden h-96 border-2 border-accent/10">
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-accent to-accent/90 p-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <h3 className="font-semibold text-white">Pet Assistant</h3>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="rounded-full p-1 hover:bg-accent/80 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Botpress Chatbot iframe */}
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/03/04/16/20260304161012-EMCM8OJX.json"
            className="flex-1 w-full border-0"
            title="Pet Care Chat Assistant"
          />
        </div>
      )}
    </main>
  );
}
