
import { Award, Calendar, Code, Mail, Users, Lightbulb, Target } from "lucide-react";
import Header from "@/components/Header";
import Section from "@/components/Section";

const Index = () => {
  return (
    <div className="min-h-screen pb-20">
      <Header />

      <main className="container mx-auto pt-28 space-y-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold glow animate-fade-in">
            Innovate for Impact
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Join us in building solutions that matter. A 12-hour journey of coding,
            creativity, and impact.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="glass p-3 rounded-lg border border-primary/20 font-mono">
              <span className="text-primary mr-2">Date:</span> March 13th, 2025
            </div>
            <div className="glass p-3 rounded-lg border border-secondary/20 font-mono">
              <span className="text-secondary mr-2">Venue:</span> MG Auditorium
            </div>
          </div>
        </div>

        <Section title="Rules & Guidelines" icon={<Code className="h-6 w-6" />}>
          <ul className="list-disc list-inside space-y-2">
            <li>Teams of 2-4 members</li>
            <li>All code must be written during the hackathon</li>
            <li>Open source libraries and APIs are allowed</li>
            <li>Projects must address one of the provided 9 SDG goals</li>
          </ul>
        </Section>

        <Section title="Schedule & Deadlines" icon={<Calendar className="h-6 w-6" />}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="py-2 px-3 text-left text-primary font-mono">Time</th>
                  <th className="py-2 px-3 text-left text-primary font-mono">Activity</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">08:00 - 08:30 AM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">Entry & On-Spot Registration</span>
                    <p className="text-sm">Check-in, welcome kits, breakfast/snacks</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">08:30 - 09:00 AM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">Opening Ceremony</span>
                    <p className="text-sm">Intro, rules, judging criteria</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">09:00 - 12:40 PM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">Hacking Begins 🚀 (Part 1)</span>
                    <p className="text-sm">Development phase, mentors available</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">12:40 - 01:30 PM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">1st Round of Evaluation (by Vnest) 🏅</span>
                    <p className="text-sm">Internal feedback</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">01:00 - 02:00 PM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">Lunch Break 🍽️</span>
                    <p className="text-sm">Refresh & recharge</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">02:00 - 06:00 PM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">Hacking Continues (Final Sprint) 🚀</span>
                    <p className="text-sm">Implement feedback, refine project</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">06:00 - 07:00 PM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">2nd Round of Evaluation (by External Judges) 🏆</span>
                    <p className="text-sm">Final project assessment</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">07:00 - 07:30 PM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">Video Preparation & Networking</span>
                    <p className="text-sm">See submission instructions for more info</p>
                  </td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-3 font-mono">07:30 - 08:00 PM</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold text-foreground">Valedictory Ceremony 🎤</span>
                    <p className="text-sm">Winner announcements, networking, and group photos</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Judging Criteria" icon={<Award className="h-6 w-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-mono text-primary mb-2">Innovation & Uniqueness (25%)</h3>
              <p className="text-sm text-muted-foreground">
                How original and creative is the idea compared to existing solutions?
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-secondary/20">
              <h3 className="text-xl font-mono text-secondary mb-2">Impact & Alignment with SDGs (25%)</h3>
              <p className="text-sm text-muted-foreground">
                How well does the solution address a Sustainable Development Goal (SDG) and create a meaningful impact?
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-accent/20">
              <h3 className="text-xl font-mono text-accent mb-2">Feasibility & Scalability (20%)</h3>
              <p className="text-sm text-muted-foreground">
                Can the solution be practically implemented and scaled to a larger audience or market?
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-mono text-primary mb-2">Tech & Deployment Viability (15%)</h3>
              <p className="text-sm text-muted-foreground">
                How well is the technology stack chosen for implementation, and is the deployment realistic?
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-secondary/20 md:col-span-2 mx-auto max-w-md">
              <h3 className="text-xl font-mono text-secondary mb-2">Cost-effectiveness & Economic Viability (15%)</h3>
              <p className="text-sm text-muted-foreground">
                Is the solution affordable to develop, sustain, and scale while maintaining efficiency?
              </p>
            </div>
          </div>
        </Section>

        <Section title="Submission Instructions" icon={<Target className="h-6 w-6" />}>
          <div className="glass p-6 rounded-lg border border-secondary/20">
            <ul className="space-y-3 text-muted-foreground">
              <li><span className="text-secondary font-semibold">GitHub Repository:</span> Submit your project code via a public GitHub repository, including a detailed README file.</li>
              <li><span className="text-secondary font-semibold">Demo Video:</span> Create a 3-5 minute demo video explaining your project and its functionality. Share the video on your Instagram story and tag the DevOps and VNest pages.</li>
              <li><span className="text-secondary font-semibold">Presentation:</span> Prepare a 6-slide presentation following the sample template. You can access it <a href="https://docs.google.com/presentation/d/1ClvHZ55X8BDx6QvgBuej7fh7zJpUBCGpTjHchpY4PLo/edit?usp=sharing" target="_blank" className="text-primary">here</a>.</li>
              <li><span className="text-secondary font-semibold">Submission Portal:</span> Upload all materials (GitHub link and presentation) to the hackathon submission portal via the Google Form.</li>
            </ul>
          </div>
        </Section>

        <Section title="Event Coordinators" icon={<Mail className="h-6 w-6" />}>
          <div className="space-y-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-mono text-primary mb-4">Faculty Coordinators</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Dr. Saurav Gupta</p>
                <p>Dr. Jayanthi R</p>
                <p>Dr. Rishikeshan CA</p>
              </div>
            </div>

            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-mono text-primary mb-4">Student Coordinators</h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded bg-primary/10 border border-primary/20">
                  <span className="font-semibold">Sakshi Bansal</span>
                  <a href="tel:+918168040827" className="font-mono text-primary hover:text-primary/80 transition-colors">
                    +91 8168040827
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded bg-primary/10 border border-primary/20">
                  <span className="font-semibold">Pratik Anand</span>
                  <a href="tel:+917903956084" className="font-mono text-primary hover:text-primary/80 transition-colors">
                    +91 7903956084
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="SDG Goals" icon={<Lightbulb className="h-6 w-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-mono text-primary mb-2">SDG 3: Good Health and Well-being</h3>
              <p className="text-sm text-muted-foreground">
                Ensure healthy lives and promote well-being for all at all ages.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-mono text-secondary mb-2">SDG 4: Quality Education</h3>
              <p className="text-sm text-muted-foreground">
                Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-accent/20">
              <h3 className="text-lg font-mono text-accent mb-2">SDG 7: Affordable and Clean Energy</h3>
              <p className="text-sm text-muted-foreground">
                Ensure access to affordable, reliable, sustainable, and modern energy for all.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-mono text-primary mb-2">SDG 8: Decent Work and Economic Growth</h3>
              <p className="text-sm text-muted-foreground">
                Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-mono text-secondary mb-2">SDG 9: Industry, Innovation, and Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-accent/20">
              <h3 className="text-lg font-mono text-accent mb-2">SDG 10: Reduced Inequalities</h3>
              <p className="text-sm text-muted-foreground">
                Reduce inequality within and among countries.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-mono text-primary mb-2">SDG 11: Sustainable Cities and Communities</h3>
              <p className="text-sm text-muted-foreground">
                Make cities and human settlements inclusive, safe, resilient, and sustainable.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-secondary/20">
              <h3 className="text-lg font-mono text-secondary mb-2">SDG 13: Climate Action</h3>
              <p className="text-sm text-muted-foreground">
                Take urgent action to combat climate change and its impacts.
              </p>
            </div>

            <div className="glass p-5 rounded-lg border border-accent/20 md:col-span-2 mx-auto max-w-md">
              <h3 className="text-lg font-mono text-accent mb-2">SDG 17: Partnerships for the Goals</h3>
              <p className="text-sm text-muted-foreground">
                Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.
              </p>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Index;
