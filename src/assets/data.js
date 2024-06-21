const data = [
  {
    question: "What is the purpose of the 'useCallback' hook in React?",
    answers: [
      "To memoize a callback function and prevent unnecessary re-renders",
      "To create a new component instance",
      "To manage the state of a component",
      "To handle side effects in a component",
    ],
    correctAnswer: 0,
  },
  {
    question: "How does the 'useMemo' hook differ from 'useCallback' in React?",
    answers: [
      "They serve the same purpose and are interchangeable",
      "useMemo memoizes the result of a function, while useCallback memoizes the function itself",
      "useMemo is used for performance optimization, while useCallback is used for state management",
      "useMemo is used for side effects, while useCallback is used for rendering",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the 'useReducer' hook in React?",
    answers: [
      "To manage complex state changes in a component",
      "To handle side effects in a component",
      "To create a new component instance",
      "To memoize a callback function and prevent unnecessary re-renders",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the 'Context API' in React, and how does it differ from using props drilling?",
    answers: [
      "The Context API is a way to share data between components without having to pass props down the component tree",
      "The Context API is a way to manage the state of a component",
      "The Context API is a way to handle side effects in a component",
      "The Context API is a way to create a new component instance",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the purpose of the 'React.memo' higher-order component?",
    answers: [
      "To memoize the result of a function component and prevent unnecessary re-renders",
      "To handle side effects in a component",
      "To manage the state of a component",
      "To create a new component instance",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the 'Suspense' feature in React, and how can it be used?",
    answers: [
      "Suspense is a way to handle loading states and error handling in a React application",
      "Suspense is a way to create a new component instance",
      "Suspense is a way to memoize the result of a function component",
      "Suspense is a way to manage the state of a component",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the purpose of the 'React.lazy' feature, and how does it differ from traditional code splitting?",
    answers: [
      "React.lazy allows for dynamic imports of components, enabling lazy loading and improving initial load times",
      "React.lazy is a way to handle side effects in a component",
      "React.lazy is a way to manage the state of a component",
      "React.lazy is a way to create a new component instance",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What are 'Higher-Order Components' (HOCs) in React, and how can they be used for code reuse?",
    answers: [
      "HOCs are functions that take a component as input and return a new component with additional functionality",
      "HOCs are a way to handle side effects in a component",
      "HOCs are a way to manage the state of a component",
      "HOCs are a way to create a new component instance",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the purpose of the 'React.forwardRef' API, and how can it be used?",
    answers: [
      "React.forwardRef allows you to pass a ref through a component, enabling the ref to be used on a child component",
      "React.forwardRef is a way to handle side effects in a component",
      "React.forwardRef is a way to manage the state of a component",
      "React.forwardRef is a way to create a new component instance",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "What is the 'render props' pattern in React, and how can it be used for code reuse?",
    answers: [
      "The render props pattern is a way to share functionality between components by passing a function as a prop",
      "The render props pattern is a way to handle side effects in a component",
      "The render props pattern is a way to manage the state of a component",
      "The render props pattern is a way to create a new component instance",
    ],
    correctAnswer: 0,
  },
];

export default data;
