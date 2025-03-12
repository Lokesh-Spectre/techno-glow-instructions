
import { Award, Calendar, Code, Info, Mail, Users } from "lucide-react";
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
            Join us in building solutions that matter. A 48-hour journey of coding,
            creativity, and impact.
          </p>
        </div>

        <Section title="Rules & Guidelines" icon={<Code className="h-6 w-6" />}>
          <ul className="list-disc list-inside space-y-2">
            <li>Teams of 2-4 members</li>
            <li>All code must be written during the hackathon</li>
            <li>Open source libraries and APIs are allowed</li>
            <li>Projects must address one of the provided challenges</li>
          </ul>
        </Section>

        <Section title="Schedule & Deadlines" icon={<Calendar className="h-6 w-6" />}>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-mono text-primary mb-2">Day 1</h3>
              <p>10:00 AM - Opening Ceremony</p>
              <p>11:00 AM - Team Formation</p>
              <p>12:00 PM - Hacking Begins</p>
            </div>
            <div>
              <h3 className="text-xl font-mono text-primary mb-2">Day 2</h3>
              <p>12:00 PM - Project Submissions</p>
              <p>2:00 PM - Presentations</p>
              <p>4:00 PM - Awards Ceremony</p>
            </div>
          </div>
        </Section>

        <Section title="Judging Criteria" icon={<Award className="h-6 w-6" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass p-4 rounded-lg">
              <h3 className="text-primary font-mono mb-2">Innovation (30%)</h3>
              <p>Originality and creativity of the solution</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <h3 className="text-primary font-mono mb-2">Impact (30%)</h3>
              <p>Potential to create meaningful change</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <h3 className="text-primary font-mono mb-2">Technical (20%)</h3>
              <p>Implementation and technical complexity</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <h3 className="text-primary font-mono mb-2">Design (20%)</h3>
              <p>User experience and interface design</p>
            </div>
          </div>
        </Section>

        <Section title="Team Formation" icon={<Users className="h-6 w-6" />}>
          <div className="space-y-4">
            <p>
              Form teams of 2-4 members. If you don't have a team, join our team
              formation session where you can meet other participants and form teams
              based on shared interests and complementary skills.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="font-mono">Team registration deadline: October 15, 2024</p>
            </div>
          </div>
        </Section>

        <Section title="FAQs" icon={<Info className="h-6 w-6" />}>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                What should I bring?
              </h3>
              <p>Laptop, charger, and your creativity!</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Is it free to participate?
              </h3>
              <p>Yes, participation is completely free.</p>
            </div>
          </div>
        </Section>

        <Section title="Contact & Support" icon={<Mail className="h-6 w-6" />}>
          <div className="space-y-4">
            <p>
              Need help? Reach out to our support team:
            </p>
            <div className="font-mono text-primary">
              support@cloudops-hackathon.com
            </div>
            <p>
              Join our Discord community for real-time support and updates.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Index;
