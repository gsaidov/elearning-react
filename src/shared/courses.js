import calculus from "./calculus.jpg";
import javascript from "./javascript.png";
import python from "./python.jpg";
import machine_learning from "./machine-learning.jpg";
export const COURSES = [
  {
    id: 0,
    name: "Single Variable Calculus",
    // image: "./assets/calculus.jpg",
    image: calculus,
    instructor: "Gulom Saidov",
    level: "Beginner",
    description:
      "This course covers the main ideas of single-variable Calculus with conceptual understanding and its applications.",
    about:
      "The focus and themes of the Introduction to Calculus course address the most important foundations for applications of mathematics in science, engineering and commerce. The course emphasises the key ideas and historical motivation for calculus, while at the same time striking a balance between theory and application, leading to a mastery of key threshold concepts in foundational mathematics.",
    syllabus: [
      {
        id: 0,
        name: "Precalculus",
        description:
          "This module begins by looking at the different kinds of numbers that fall on the real number line, decimal expansions and approximations, then continues with an exploration of manipulation of equations and inequalities, of sign diagrams and the use of the Cartesian plane.",
      },
      {
        id: 1,
        name: "Functions",
        description:
          "This module introduces the notion of a function which captures precisely ways in which different quantities or measurements are linked together. The module covers quadratic, cubic and general power and polynomial functions; exponential and logarithmic functions; and trigonometric functions related to the mathematics of periodic behaviour. We create new functions using composition and inversion and look at how to move backwards and forwards between quantities algebraically, as well as visually, with transformations in the xy-plane.",
      },
      {
        id: 2,
        name: "Introducing the differential calculus",
        description:
          "This module introduces techniques of differential calculus. We look at average rates of change which become instantaneous, as time intervals become vanishingly small, leading to the notion of a derivative. We then explore techniques involving differentials that exploit tangent lines. The module introduces Leibniz notation and shows how to use it to get information easily about the derivative of a function and how to apply it.",
      },
      {
        id: 3,
        name: "Properties and applications of the derivative",
        description:
          "This module continues the development of differential calculus by introducing the first and second derivatives of a function. We use sign diagrams of the first and second derivatives and from this, develop a systematic protocol for curve sketching. The module also introduces rules for finding derivatives of complicated functions built from simpler functions, using the Chain Rule, the Product Rule, and the Quotient Rule, and how to exploit information about the derivative to solve difficult optimisation problems.",
      },
    ],
  },
  {
    id: 1,
    name: "Advanced Javascript",
    image: javascript,
    instructor: "Andrei Ng",
    level: "Advanced",
    description:
      "The course covers the core concepts in theory of Javascript and extended with practical coding exercises.",
    about:
      "The focus and themes of the Introduction to Calculus course address the most important foundations for applications of mathematics in science, engineering and commerce. The course emphasises the key ideas and historical motivation for calculus, while at the same time striking a balance between theory and application, leading to a mastery of key threshold concepts in foundational mathematics.",
    syllabus: [
      {
        id: 0,
        name: "Precalculus",
        description:
          "This module begins by looking at the different kinds of numbers that fall on the real number line, decimal expansions and approximations, then continues with an exploration of manipulation of equations and inequalities, of sign diagrams and the use of the Cartesian plane.",
      },
      {
        id: 1,
        name: "Functions",
        description:
          "This module introduces the notion of a function which captures precisely ways in which different quantities or measurements are linked together. The module covers quadratic, cubic and general power and polynomial functions; exponential and logarithmic functions; and trigonometric functions related to the mathematics of periodic behaviour. We create new functions using composition and inversion and look at how to move backwards and forwards between quantities algebraically, as well as visually, with transformations in the xy-plane.",
      },
      {
        id: 2,
        name: "Introducing the differential calculus",
        description:
          "This module introduces techniques of differential calculus. We look at average rates of change which become instantaneous, as time intervals become vanishingly small, leading to the notion of a derivative. We then explore techniques involving differentials that exploit tangent lines. The module introduces Leibniz notation and shows how to use it to get information easily about the derivative of a function and how to apply it.",
      },
      {
        id: 3,
        name: "Properties and applications of the derivative",
        description:
          "This module continues the development of differential calculus by introducing the first and second derivatives of a function. We use sign diagrams of the first and second derivatives and from this, develop a systematic protocol for curve sketching. The module also introduces rules for finding derivatives of complicated functions built from simpler functions, using the Chain Rule, the Product Rule, and the Quotient Rule, and how to exploit information about the derivative to solve difficult optimisation problems.",
      },
    ],
  },
  {
    id: 2,
    name: "Python",
    image: python,
    instructor: "Mike Brown",
    level: "Beginner",
    description:
      "This Python course teaches the basics of how to construct a program from instructions in Python and build a simple application.",
    about:
      "This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook “Python for Everybody”.  Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.",
    syllabus: [
      {
        id: 0,
        name: "Precalculus",
        description:
          "This module begins by looking at the different kinds of numbers that fall on the real number line, decimal expansions and approximations, then continues with an exploration of manipulation of equations and inequalities, of sign diagrams and the use of the Cartesian plane.",
      },
      {
        id: 1,
        name: "Functions",
        description:
          "This module introduces the notion of a function which captures precisely ways in which different quantities or measurements are linked together. The module covers quadratic, cubic and general power and polynomial functions; exponential and logarithmic functions; and trigonometric functions related to the mathematics of periodic behaviour. We create new functions using composition and inversion and look at how to move backwards and forwards between quantities algebraically, as well as visually, with transformations in the xy-plane.",
      },
      {
        id: 2,
        name: "Introducing the differential calculus",
        description:
          "This module introduces techniques of differential calculus. We look at average rates of change which become instantaneous, as time intervals become vanishingly small, leading to the notion of a derivative. We then explore techniques involving differentials that exploit tangent lines. The module introduces Leibniz notation and shows how to use it to get information easily about the derivative of a function and how to apply it.",
      },
      {
        id: 3,
        name: "Properties and applications of the derivative",
        description:
          "This module continues the development of differential calculus by introducing the first and second derivatives of a function. We use sign diagrams of the first and second derivatives and from this, develop a systematic protocol for curve sketching. The module also introduces rules for finding derivatives of complicated functions built from simpler functions, using the Chain Rule, the Product Rule, and the Quotient Rule, and how to exploit information about the derivative to solve difficult optimisation problems.",
      },
    ],
  },
  {
    id: 3,
    name: "Machine Learning",
    image: machine_learning,
    instructor: "Gerard Kim",
    level: "Intermediate",
    description:
      "This course provides a broad introduction to machine learning with topics in Supervised and Unsupervised Learning.",
    about:
      "The focus and themes of the Introduction to Calculus course address the most important foundations for applications of mathematics in science, engineering and commerce. The course emphasises the key ideas and historical motivation for calculus, while at the same time striking a balance between theory and application, leading to a mastery of key threshold concepts in foundational mathematics.",
    syllabus: [
      {
        id: 0,
        name: "Precalculus",
        description:
          "This module begins by looking at the different kinds of numbers that fall on the real number line, decimal expansions and approximations, then continues with an exploration of manipulation of equations and inequalities, of sign diagrams and the use of the Cartesian plane.",
      },
      {
        id: 1,
        name: "Functions",
        description:
          "This module introduces the notion of a function which captures precisely ways in which different quantities or measurements are linked together. The module covers quadratic, cubic and general power and polynomial functions; exponential and logarithmic functions; and trigonometric functions related to the mathematics of periodic behaviour. We create new functions using composition and inversion and look at how to move backwards and forwards between quantities algebraically, as well as visually, with transformations in the xy-plane.",
      },
      {
        id: 2,
        name: "Introducing the differential calculus",
        description:
          "This module introduces techniques of differential calculus. We look at average rates of change which become instantaneous, as time intervals become vanishingly small, leading to the notion of a derivative. We then explore techniques involving differentials that exploit tangent lines. The module introduces Leibniz notation and shows how to use it to get information easily about the derivative of a function and how to apply it.",
      },
      {
        id: 3,
        name: "Properties and applications of the derivative",
        description:
          "This module continues the development of differential calculus by introducing the first and second derivatives of a function. We use sign diagrams of the first and second derivatives and from this, develop a systematic protocol for curve sketching. The module also introduces rules for finding derivatives of complicated functions built from simpler functions, using the Chain Rule, the Product Rule, and the Quotient Rule, and how to exploit information about the derivative to solve difficult optimisation problems.",
      },
    ],
  },
];
