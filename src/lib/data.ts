import type { LucideIcon } from 'lucide-react';
import { Code, Rocket, BrainCircuit, PenTool, Lightbulb } from 'lucide-react';

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Topic = {
  id: string;
  name: string;
  icon: LucideIcon;
};

export type Answer = {
  id: string;
  questionId: string;
  author: User;
  body: string;
  upvotes: number;
  createdAt: Date;
};

export type Question = {
  id: string;
  title: string;
  body: string;
  author: User;
  topic: Topic;
  answers: Answer[];
  createdAt: Date;
};

const users: User[] = [
  { id: 'user-1', name: 'Alex Turing', avatarUrl: 'https://picsum.photos/seed/1/40/40' },
  { id: 'user-2', name: 'Brenda Hopper', avatarUrl: 'https://picsum.photos/seed/2/40/40' },
  { id: 'user-3', name: 'Casey Lovelace', avatarUrl: 'https://picsum.photos/seed/3/40/40' },
  { id: 'user-4', name: 'Devin Hamilton', avatarUrl: 'https://picsum.photos/seed/4/40/40' },
];

const topics: Topic[] = [
  { id: 'topic-1', name: 'Programming', icon: Code },
  { id: 'topic-2', name: 'Science', icon: Rocket },
  { id: 'topic-3', name: 'Technology', icon: BrainCircuit },
  { id: 'topic-4', name: 'Design', icon: PenTool },
  { id: 'topic-5', name: 'Ideas', icon: Lightbulb },
];

const questions: Question[] = [
  {
    id: 'q-1',
    title: 'How to effectively use server components in Next.js 14?',
    body: 'I\'m trying to wrap my head around React Server Components (RSCs) in Next.js. What are the best practices for fetching data, managing state, and deciding when to use a client component? Any examples for a moderately complex application would be greatly appreciated.',
    author: users[0],
    topic: topics[0],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    answers: [
      {
        id: 'a-1-1',
        questionId: 'q-1',
        author: users[1],
        body: 'The key is to do as much as possible on the server. Fetch data directly in your server components. Only use client components ("use client") for interactive UI elements that need state or event listeners. Pass data from server to client components as props.',
        upvotes: 28,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 1.5),
      },
      {
        id: 'a-1-2',
        questionId: 'q-1',
        author: users[2],
        body: 'One powerful pattern is to keep your data-fetching logic in Server Components and then pass that data down to smaller, interactive Client Components. This minimizes the client-side JavaScript bundle. Also, for mutations, Server Actions are a game-changer. You can define functions on the server that can be called directly from your client components.',
        upvotes: 42,
        createdAt: new Date(Date.now() - 1000 * 60 * 30),
      },
       {
        id: 'a-1-3',
        questionId: 'q-1',
        author: users[3],
        body: 'Great points above. Also, remember that you can import Server Components into Client Components, but only as children or props. This lets you compose server-rendered content within client-side interactivity, like in a modal or tab.',
        upvotes: 15,
        createdAt: new Date(Date.now() - 1000 * 60 * 15),
      },
    ],
  },
  {
    id: 'q-2',
    title: 'What are the ethical implications of advanced AI?',
    body: 'As AI models become more powerful and integrated into society, what are the most pressing ethical concerns we should be addressing? This could be related to bias, job displacement, autonomy, or other unforeseen consequences.',
    author: users[2],
    topic: topics[2],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    answers: [
      {
        id: 'a-2-1',
        questionId: 'q-2',
        author: users[3],
        body: 'Algorithmic bias is a huge one. If the training data reflects existing societal biases, the AI will amplify them. This is especially dangerous in areas like hiring, loan applications, and criminal justice. We need robust auditing and diverse datasets to mitigate this.',
        upvotes: 56,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1),
      },
       {
        id: 'a-2-2',
        questionId: 'q-2',
        author: users[0],
        body: 'I agree with the point on bias. Another major concern is accountability. When an autonomous AI system makes a critical error, who is responsible? The developer, the owner, the user? We lack clear legal frameworks for this, creating a dangerous gray area.',
        upvotes: 31,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
      },
    ],
  },
  {
    id: 'q-3',
    title: 'Best way to create a design system from scratch?',
    body: 'My team is starting a new project and we want to build a scalable and maintainable design system. What are the first steps? Should we focus on tokens, components, or documentation first? What tools are recommended (e.g., Storybook, Figma)?',
    author: users[1],
    topic: topics[3],
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5),
    answers: [],
  },
];


// Simulate API calls
export const getQuestions = async (): Promise<Question[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return questions.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const getQuestionById = async (id: string): Promise<Question | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return questions.find(q => q.id === id);
}

export const getTopics = async (): Promise<Topic[]> => {
    await new Promise(resolve => setTimeout(resolve, 100));
    return topics;
};

export const getAnswersForQuestion = async (questionId: string): Promise<Answer[]> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    const question = questions.find(q => q.id === questionId);
    return question ? question.answers.sort((a, b) => b.upvotes - a.upvotes) : [];
}
