import { Award, Calendar, Code, Mail, Users } from "lucide-react";
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
        <div className="space-y-6">
          <div className="glass p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-mono text-primary mb-3">Innovation and Creativity (40%)</h3>
            <p className="text-muted-foreground">
              Assessment focuses on solution novelty and ingenuity. High value placed on innovative approaches 
              leveraging emerging technologies and cross-disciplinary methodologies. Solutions demonstrating 
              transformative potential will receive special consideration.
            </p>
          </div>

          <div className="glass p-6 rounded-lg border border-secondary/20">
            <h3 className="text-xl font-mono text-secondary mb-3">Impact and SDG Relevance (30%)</h3>
            <p className="text-muted-foreground">
              Evaluation based on alignment with selected SDGs and potential for solving critical global 
              challenges. Priority given to scalable and sustainable solutions that effectively address 
              root causes of chosen SDG issues.
            </p>
          </div>

          <div className="glass p-6 rounded-lg border border-accent/20">
            <h3 className="text-xl font-mono text-accent mb-3">Feasibility and Implementation (20%)</h3>
            <p className="text-muted-foreground">
              Focus on practical implementation and technical feasibility. Solutions should demonstrate clear 
              deployment pathways and realistic scaling strategies in real-world contexts.
            </p>
          </div>

          <div className="glass p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-mono text-primary mb-3">Risk Assessment (10%)</h3>
            <p className="text-muted-foreground">
              Evaluation of security, privacy, and ethical considerations. Solutions must demonstrate robust 
              risk mitigation strategies and adaptability to evolving challenges.
            </p>
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
    </main>
    </div>
  );
};

export default Index;
