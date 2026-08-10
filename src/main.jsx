import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const paths = [
  {
    id: "mobile",
    label: "Mobile apps",
    question: "Can he ship app features?",
    headline: "I can build mobile products people can actually use.",
    summary:
      "Production React Native work, app architecture, UX details, performance improvements, and full-cycle feature delivery.",
    image: "/assets/generated/mobile-desk.webp",
    proof: [
      "Chief mobile app developer at Wise Technologies, 2024 - now",
      "Built and improved React Native applications, including QR4U",
      "Designed mobile architecture and created new features from scratch",
      "Worked on production-ready applications, not only school prototypes",
    ],
    evidence: [
      ["Wise Technologies", "2024 - now", "Led React Native application work in a real company environment."],
      ["QR4U", "2024", "Mobile app project listed in my CV as production work."],
      ["Responsibilities", "current role", "Architecture, feature design, UX optimization, performance, and launch work."],
    ],
    tools: ["React Native", "JavaScript", "UX/UI", "Git", "Product thinking"],
    route: ["Understand the user", "Design the flow", "Build the feature", "Polish and ship"],
  },
  {
    id: "programming",
    label: "Programming",
    question: "Can he solve technical problems?",
    headline: "I can move between languages, platforms, and problem types.",
    summary:
      "My strongest technical base is practical: write the code, test the idea, debug the weird part, and keep improving.",
    image: "/assets/generated/mobile-desk.webp",
    proof: [
      "Python, JavaScript, C++, C#, Java, React Native, and Git",
      "Production mobile work while studying computer engineering",
      "Teaching Python strengthened my fundamentals and explanation skills",
      "Embedded projects made me comfortable with code that controls real hardware",
    ],
    evidence: [
      ["Wise Technologies", "2024 - now", "React Native and JavaScript in production mobile development."],
      ["Vegova workshops", "2024 - 2025", "C++ fundamentals, Arduino, ESP32, and debugging with students."],
      ["Python instructor", "2024", "Prepared lessons and taught programming basics to 9th grade students."],
    ],
    tools: ["Python", "JavaScript", "C++", "C#", "Java", "Git"],
    route: ["Understand the problem", "Pick the simplest approach", "Build a testable version", "Debug and improve"],
  },
  {
    id: "product",
    label: "Product",
    question: "Can he think beyond code?",
    headline: "I can connect technical work to what the user needs.",
    summary:
      "I do not want to only make features exist. I care about why they matter, how they feel, and whether the final thing is clear.",
    image: "/assets/generated/mobile-desk.webp",
    proof: [
      "Handled ideation, architecture, feature design, UX optimization, and launch work",
      "Built mobile app features from scratch instead of only editing small tasks",
      "Competition work trained me to turn ideas into clear value quickly",
      "UX/UI is part of my skill set, not an afterthought",
    ],
    evidence: [
      ["Wise Technologies", "2024 - now", "Worked across ideation, architecture, feature design, UX, and launch."],
      ["Business Week", "1st place", "Won by combining business thinking, presentation, and execution."],
      ["NASA Space Apps", "winner", "Turned a concept into a clear project under time pressure."],
    ],
    tools: ["Product thinking", "UX/UI", "User flows", "Feature design", "Prioritization"],
    route: ["Find the need", "Shape the feature", "Make it simple", "Ship something useful"],
  },
  {
    id: "hardware",
    label: "Hardware",
    question: "Can he work beyond screens?",
    headline: "I understand software when it touches the physical world.",
    summary:
      "Embedded systems, sensors, microcontrollers, telemetry, and hardware projects where debugging is very real.",
    image: "/assets/generated/hardware-bench.webp",
    proof: [
      "CanSat Slovenia 2nd place with the VegaSAT team",
      "Arduino, ESP32, Raspberry Pi, C++, sensors, and breadboard prototyping",
      "Taught embedded systems workshops at Vegova Ljubljana",
      "Built software + hardware projects including BeeSmart and sensor monitoring work",
    ],
    evidence: [
      ["VegaSAT", "CanSat 2024", "National 2nd place project involving embedded systems and telemetry."],
      ["Vegova", "2024 - 2025", "Led Arduino and ESP32 workshops with hands-on hardware projects."],
      ["BeeSmart", "2025", "Software + hardware project listed in my selected projects."],
    ],
    tools: ["C++", "Arduino", "ESP32", "Raspberry Pi", "Sensors"],
    route: ["Wire the prototype", "Read the signal", "Debug the system", "Explain the result"],
  },
  {
    id: "developer",
    label: "Developer",
    question: "Can he own delivery?",
    headline: "I can take responsibility for the build, not just the task.",
    summary:
      "I am useful when the work needs ownership: figuring out what has to happen, building it, improving it, and delivering.",
    image: "/assets/generated/mobile-desk.webp",
    proof: [
      "Led development of React Native applications at Wise Technologies",
      "Improved app performance and created features from scratch",
      "Delivered production-ready applications",
      "Balanced product, UX, architecture, and implementation decisions",
    ],
    evidence: [
      ["Chief mobile app developer", "Wise Technologies", "Owned development work, not only isolated tickets."],
      ["QR4U", "2024", "Production-ready React Native application work."],
      ["Sensor Monitoring app", "2024 - 2025", "Project experience connecting application logic with real-world data."],
    ],
    tools: ["Ownership", "Architecture", "Performance", "Delivery", "Iteration"],
    route: ["Clarify the goal", "Own the technical path", "Build carefully", "Deliver and refine"],
  },
  {
    id: "teacher",
    label: "Teacher",
    question: "Can he explain hard things?",
    headline: "I can make technical ideas easier for people to understand.",
    summary:
      "Teaching Python and embedded systems trained me to simplify, guide, listen, and keep people moving.",
    image: "/assets/generated/teaching-workshop.webp",
    proof: [
      "Python instructor for 9th grade students",
      "Embedded systems instructor for Arduino and ESP32 workshops",
      "Guided students through hands-on debugging and practical projects",
      "Prepared lessons, demonstrations, and practical exercises",
    ],
    evidence: [
      ["Python instructor", "Vegova, 2024", "Taught 9th grade students and prepared lessons/demonstrations."],
      ["Embedded systems instructor", "Vegova, 2024 - 2025", "Led workshops on Arduino, ESP32, and C++ fundamentals."],
      ["Hands-on guidance", "workshops", "Helped students troubleshoot code and complete practical projects."],
    ],
    tools: ["Python", "C++", "Communication", "Workshops", "Patience"],
    route: ["Break it down", "Demo it clearly", "Let people try", "Help them debug"],
  },
  {
    id: "leader",
    label: "Leader",
    question: "Can he take responsibility?",
    headline: "I can organize people, pressure, and moving parts.",
    summary:
      "I have led project work, coordinated large groups, and stayed useful when the situation is not perfectly defined.",
    image: "/assets/generated/teaching-workshop.webp",
    proof: [
      "Organized Ribniski pasijon with 150+ team members",
      "NASA Space Apps winner and Business Week 1st place",
      "Used to presenting, coordinating, and making practical decisions",
      "Led workshops and guided groups through technical projects",
    ],
    evidence: [
      ["Ribniski pasijon", "2025", "Coordinated 150+ team members in a visible public project."],
      ["NASA Space Apps", "winner", "Worked in a team under pressure and reached a winning result."],
      ["Vegova workshops", "2024 - 2025", "Led groups through practical technical learning."],
    ],
    tools: ["Leadership", "Planning", "Presentations", "Teamwork", "Ownership"],
    route: ["See the goal", "Split the work", "Communicate clearly", "Keep momentum"],
  },
  {
    id: "organizer",
    label: "Organizer",
    question: "Can he manage moving parts?",
    headline: "I can keep people, timing, and details moving together.",
    summary:
      "Some work is not just technical. It is planning, aligning people, handling pressure, and making sure the day actually works.",
    image: "/assets/generated/teaching-workshop.webp",
    proof: [
      "Coordinated 150+ team members for Ribniski pasijon",
      "Worked across communication, planning, and event execution",
      "Handled responsibility in a visible local project",
      "Teaching experience made group guidance natural",
    ],
    evidence: [
      ["Ribniski pasijon", "2025", "Large-scale coordination with 150+ team members."],
      ["Event leadership", "2025", "Planning, alignment, and execution in a real public setting."],
      ["Teaching", "Vegova", "Repeated practice guiding groups, giving instructions, and keeping progress moving."],
    ],
    tools: ["Coordination", "Planning", "People", "Responsibility", "Calm under pressure"],
    route: ["Map the moving parts", "Assign responsibility", "Communicate often", "Keep the system steady"],
  },
  {
    id: "communicator",
    label: "Talking",
    question: "Can he talk to people?",
    headline: "I can translate between technical and non-technical people.",
    summary:
      "Presenting, teaching, competitions, and organizing taught me to make ideas clear without making them smaller.",
    image: "/assets/generated/mobile-desk.webp",
    proof: [
      "Presented competition projects under time pressure",
      "Strengthened communication through teaching and workshops",
      "English and German, with experience explaining technical ideas simply",
      "Worked with both technical and non-technical people",
    ],
    evidence: [
      ["Python + embedded teaching", "2024 - 2025", "Explained technical ideas to students with different starting levels."],
      ["NASA Space Apps", "2024", "Presented a project clearly enough to win."],
      ["Ribniski pasijon", "2025", "Communication across a large group where clarity mattered."],
    ],
    tools: ["Presentations", "English", "German", "Listening", "Storytelling"],
    route: ["Ask better questions", "Find the simple version", "Show the value", "Align next steps"],
  },
  {
    id: "presenter",
    label: "Presenting",
    question: "Can he sell the idea clearly?",
    headline: "I can make an idea understandable in the room.",
    summary:
      "Competitions, teaching, and project work trained me to explain what matters quickly and keep attention on the useful part.",
    image: "/assets/generated/teaching-workshop.webp",
    proof: [
      "NASA Space Apps winner with a pitch-ready project",
      "Business Week 1st place, outperforming student teams",
      "Prepared lessons and demonstrations as an instructor",
      "Comfortable explaining projects, tradeoffs, and results",
    ],
    evidence: [
      ["Business Week", "1st place", "Presented and executed better than the other student teams."],
      ["NASA Space Apps", "winner", "Built and communicated a project in a competitive setting."],
      ["Instructor work", "Vegova", "Prepared live explanations, demos, and learning material."],
    ],
    tools: ["Presentations", "Storytelling", "Demos", "Clarity", "Confidence"],
    route: ["Know the audience", "Find the simple hook", "Show the proof", "Make the next step obvious"],
  },
  {
    id: "competitor",
    label: "Competitions",
    question: "Can he perform under pressure?",
    headline: "I can build and communicate when the clock is running.",
    summary:
      "Competitions are useful proof because they compress everything: teamwork, decisions, building, presenting, and pressure.",
    image: "/assets/generated/hardware-bench.webp",
    proof: [
      "NASA Space Apps winner",
      "CanSat Slovenia 2nd place",
      "Business Week 1st place",
      "ZOTKS logic competition experience",
    ],
    evidence: [
      ["NASA Space Apps", "2024", "Winner with Space Farmers."],
      ["CanSat Slovenia", "2024", "2nd place with the VegaSAT team."],
      ["Business Week", "1st place", "Outperformed all student teams."],
    ],
    tools: ["Pressure", "Teamwork", "Fast decisions", "Problem solving", "Pitching"],
    route: ["Frame the challenge", "Choose a direction", "Build fast", "Present clearly"],
  },
  {
    id: "learner",
    label: "Learning",
    question: "Can he grow fast?",
    headline: "I learn quickly because I keep building in different spaces.",
    summary:
      "My work jumps between mobile apps, electronics, competitions, teaching, and events. That range makes me adaptable.",
    image: "/assets/generated/hardware-bench.webp",
    proof: [
      "Computer Engineering at Vegova Ljubljana, 2024 - present",
      "Production work while still studying",
      "Multiple long-term software and hardware projects",
      "Moved between apps, embedded systems, teaching, competitions, and organization",
    ],
    evidence: [
      ["Vegova Ljubljana", "2024 - present", "Computer Engineering education while already working professionally."],
      ["Wise Technologies", "2024 - now", "Production role taken on early in my career."],
      ["Project range", "2024 - 2025", "QR4U, Sensor Monitoring app, BeeSmart, VegaSAT, and Space Farmers."],
    ],
    tools: ["Curiosity", "Problem solving", "Machine learning basics", "Research", "Self-direction"],
    route: ["Learn the domain", "Prototype fast", "Ask for feedback", "Improve the system"],
  },
  {
    id: "creative",
    label: "Creative",
    question: "Can he bring ideas?",
    headline: "I can bring taste, imagination, and practical execution together.",
    summary:
      "My best work sits between technical skill and creative thinking: apps, hardware, UX, competitions, and ideas that need shaping.",
    image: "/assets/generated/mobile-desk.webp",
    proof: [
      "NASA Space Apps winner for creative real-world problem solving",
      "Business Week 1st place with business and presentation thinking",
      "UX/UI, product thinking, and project concept work",
      "Enjoys the early sketch/prototype phase where ideas become concrete",
    ],
    evidence: [
      ["Space Farmers", "NASA Space Apps", "Creative competition project with a real-world problem-solving angle."],
      ["Business Week", "1st place", "Combined idea, business logic, and presentation."],
      ["Mobile app work", "Wise Technologies", "UX optimization and feature design in production app work."],
    ],
    tools: ["UX/UI", "Ideation", "Prototyping", "Design thinking", "Taste"],
    route: ["Explore ideas", "Sketch the experience", "Prototype the strongest option", "Make it feel simple"],
  },
];

const quickStats = [
  ["2024 - now", "Wise Technologies"],
  ["150+", "team members coordinated"],
  ["1st", "NASA Space Apps + Business Week"],
  ["2nd", "CanSat Slovenia"],
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [selectedId, setSelectedId] = useState(paths[0].id);
  const selected = useMemo(
    () => paths.find((path) => path.id === selectedId) ?? paths[0],
    [selectedId]
  );

  useReveal();

  return (
    <>
      <header className="site-header">
        <a href="#top">Luka Kljun</a>
        <a href="mailto:lukakljun5@gmail.com">Contact</a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy" data-reveal>
            <p className="label">Portfolio guide</p>
            <h1>Choose what you want Luka to prove.</h1>
          </div>
          <div className="hero-side" data-reveal>
            <p>
              I am not only a programmer. I build, teach, present, organize, learn
              fast, and work across software and hardware.
            </p>
            <p>
              Pick the qualification that matters for the job and the page will show
              the strongest proof first.
            </p>
          </div>
        </section>

        <section className="stats" aria-label="Quick facts" data-reveal>
          {quickStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="guide" aria-label="Qualification guide">
          <aside className="chooser" data-reveal>
            <p className="label">Choose a path</p>
            <div className="path-list" role="tablist" aria-label="Qualification paths">
              {paths.map((path) => (
                <button
                  className={selected.id === path.id ? "is-active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={selected.id === path.id}
                  key={path.id}
                  onClick={() => setSelectedId(path.id)}
                >
                  <span>{path.label}</span>
                  <small>{path.question}</small>
                </button>
              ))}
            </div>
          </aside>

          <article className="path-detail" key={selected.id}>
            <figure>
              <img src={selected.image} alt="" />
            </figure>
            <div className="detail-copy">
              <p className="label">{selected.label}</p>
              <h2>{selected.headline}</h2>
              <p>{selected.summary}</p>
            </div>

            <div className="proof-grid">
              <section>
                <p className="label">Proof</p>
                <ul>
                  {selected.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <p className="label">How I work</p>
                <ol>
                  {selected.route.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            </div>

            <section className="evidence-board">
              <p className="label">Actual evidence</p>
              <div>
                {selected.evidence.map(([title, meta, text]) => (
                  <article key={`${selected.id}-${title}-${meta}`}>
                    <span>{meta}</span>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </section>

            <div className="tool-row" aria-label={`${selected.label} tools`}>
              {selected.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="all-round" data-reveal>
          <p className="label">Full profile</p>
          <h2>
            The useful part is the combination: technical enough to build, social
            enough to explain, organized enough to lead, curious enough to keep growing.
          </h2>
        </section>

        <footer className="contact" data-reveal>
          <p className="label">Contact</p>
          <h2>Let us talk about the role.</h2>
          <address>
            <a href="mailto:lukakljun5@gmail.com">lukakljun5@gmail.com</a>
            <a href="tel:+38640514345">+386 40 514 345</a>
            <span>Ribnica, Slovenia</span>
          </address>
        </footer>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
