export interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  speaker: string;
  venue: string;
  rsvp: number;
  description: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "React Summit 2026",
    category: "Frontend",
    date: "10 August 2026",
    speaker: "Ali Khan",
    venue: "Lahore Expo Center",
    rsvp: 120,
    description:
      "Learn the latest features of React, Next.js, and modern frontend development.",
  },

  {
    id: 2,
    title: "AI Innovation Conference",
    category: "AI",
    date: "18 August 2026",
    speaker: "Sarah Ahmed",
    venue: "Islamabad Convention Center",
    rsvp: 220,
    description:
      "Explore Artificial Intelligence, Machine Learning, and Large Language Models.",
  },

  {
    id: 3,
    title: "DevOps World Meetup",
    category: "DevOps",
    date: "25 August 2026",
    speaker: "Usman Tariq",
    venue: "Karachi Tech Hub",
    rsvp: 95,
    description:
      "Learn Docker, Kubernetes, CI/CD pipelines, and cloud deployment.",
  },

  {
    id: 4,
    title: "JavaScript Community Meetup",
    category: "Frontend",
    date: "30 August 2026",
    speaker: "Hassan Raza",
    venue: "Peshawar Software House",
    rsvp: 150,
    description:
      "Discuss JavaScript ES2025 features and best development practices.",
  },
];