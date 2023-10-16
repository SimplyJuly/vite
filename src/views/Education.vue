<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const courses = ref([
    {title: 'Data Com. and Networking - COMP-SCI 320',
    description: 'This course examines the fundamental aspects of data communications and computer networks. Students will learn the concepts of layered models, communication protocols, digital transmission and encoding techniques, multiplexing techniques, error detection and correction concepts, the data link layer and its associated protocols, LAN architectures, switching techniques, major Internet protocols and standards, internetworking, addressing, and routing concepts. By the end of the course, students will be familiar with all networking concepts and technologies and will be able to size and implement different types of networking architectures. Part of the course will be devoted to the use of opensource software tools, such as Cisco Packet Tracer and Wireshark, to experiment with network architectures and analyze network traffic.'},
    {title: 'Progrm Lang:Desgn & Imp - COMP-SCI 441', 
    description: 'This course covers programming language paradigms (object-oriented programming, functional programming, declarative programming, and scripting) and design tradeoffs in terms of binding, visibility, scope, lifetime, type-checking, concurrency/parallelism, and abstraction. It also covers programming language specification, grammar, lexical analysis, exception handling, and runtime considerations'},
    {title: 'Special Topics (Web Development) - COMP-SCI 490WD' , 
    description: 'Covers several technologies that allow creating dynamic web applications:  HTML, CSS, MySQL, JavaScript and a framework.  Projects will involve problem solving skills and analytical thinking and grading will be based not only on correctness, but also on style, documentation and efficiency.'},
    {title: 'Intro Artificial Intell - COMP-SCI 461', 
    description: 'This course provides  an overview of the field of artificial intelligence.  Topics include guided and unguided search, adversarial search, generation and use of heuristics, logic programming, probabilistic reasoning, and neural networks. Application areas studied include game playing, automated proofs, expert systems, and data mining.'},
    {title: 'Intro to Philosophy - PHILOS 210', 
    description: 'An introduction to many of the central problems of philosophy. The various dimensions of philosophy are examined as it related to our relationships with each other, our understanding of our world and our understanding of ourselves. Connections between classical philosophers and contemporary issues are explored as philosophy is considered as a deeply personal and also as a social phenomenon.'},
    {title: 'Intro to Algorithms & Complex - COMP-SCI 404', 
    description: 'A rigorous review of asymptotic analysis techniques and algorithms: from design strategy (such as greedy, divide-and-conquer, and dynamic programming) to problem areas (such as searching, sorting, shortest path, spanning trees, transitive closures, and other graph algorithms, string algorithms) arriving at classical algorithms with supporting data structures for efficient implementation. Throughout, the asymptotic complexity is studied in worst case, best case, and average case for time and/or space, using appropriate analysis techniques (recurrence relations, amortization). Introduction to the basic concepts of complexity theory and NP-complete theory.'},
    {title: 'Java Program Application - COMP-SCI 349', 
    description: 'The course covers the syntax and semantics of the Java programming language along with the use of essential class libraries. These topics will be taught in the context of application development. Students will learn how to write small to medium sized Java applications and applets. Specific topics covered include: essential classes in the Java API, interfaces, inheritance, exceptions, graphical user interface components, layout managers, events, I/O classes, Applets, data base access, and multithreading. Other topics will be covered as time permits.'},
    {title: 'Intro Operating Systems - COMP-SCI 431', 
    description: 'This course covers concurrency and control of asynchronous processes, deadlocks, memory management, processor and disk scheduling, x86 assembly language, parallel processing, security, protection, and file system organization in operating systems.'},
    {title: 'Applied Probability - COMP-SCI 394R', 
    description: 'Basic concepts of probability theory. Counting and measuring. Probability, conditional probability and independence. Discrete, continuous, joint random variables. Functions of random variables. Sums of independent random variables and transform methods. Random number generation and random event generation. Law of large numbers, central limit theorem, inequalities. Their applications to computer science and electrical and computer engineering areas are stressed.'},
    {title: 'Data Structures - COMP-SCI 303', 
    description: 'Linear and hierarchical data structures, including stacks, queues, lists, trees, priority queues, advanced tree structures, hashing tables, dictionaries and disjoint-set. Abstractions and strategies for efficient implementations will be discussed. Linear and hierarchical algorithms will be studied as well as recursion and various searching and sorting algorithms. Programming concepts include Object Orientation, concurrency and parallel programming. Several in-depth projects in C++ will be required.'},
    {title: 'Intro Cmptr Architecture & Org - COMP-SCI 281R', 
    description: 'Digital Logic and Data Representation, process architecture and instruction sequencing, memory hierarchy and bus-interfaces and functional organization. '},
    {title: 'Ethical Issues-Comp/Eng - ANCH 308', 
    description: 'Societal and ethical obligations of computer science, IT, and electrical/computer engineering practice. Topics include ethical obligations of professional practice, electronic privacy, intellectual property, software and system security and reliability, and whistle-blowing. This course teaches the principles of ethical analysis and how technology, law, and ethics interact in society, to help the graduate confront and deal with the ethical challenges that arise in professional practice'},
    {title: 'Discrete Structures II - COMP-SCI 291', 
    description: 'Recurrence relations and their use in the analysis of algorithms. Graphs, trees, and network flow models. Introduction to Finite state machines, grammars, and automata.'},
    {title: 'Linear Algebra I - MATH 300', 
    description: 'This course introduces a branch of algebra developed from the theory of finding simultaneous solutions of a collection of linear equations, emphasizing fundamental concepts, calculations, and applications. Topics include matrix algebra, real vector spaces, linear transformations, determinants, the study of eigenvalues and eigenvectors, and the exploration of orthogonality and other applications.'},
    {title: 'Elementary Statistics - STAT 235', 
    description: 'An introduction to descriptive and inferential statistics. Organization and presentation of data, averages and variations, elementary probability, random variables, special discrete distributions, normal distributions, sampling distributions, point estimation, confidence intervals, and hypothesis testing. '},
    {title: 'Discourse III - DISC 300', 
    description: 'Students will put the knowledge and skills learned in Discourse I and II into practical use by engaging in a service-learning project that is interdisciplinary and intercultural. Students will use strategies of critical discourse analysis and critical language awareness to target the appropriate audience/recipients for their research  project, to develop innovative and rhetorically effective texts, and to reflect on their project’s purpose, methods, and consequences.'},
    {title: 'Problem Solving/Program Lab II - COMP-SCI 201L', 
    description: 'Programming exercises and demonstrations to reinforce concepts learned in COMP-SCI 201R and provide additional practice in C++ programming. '},
    {title: 'Physics For Scientists and Eng - PHYSICS 250', 
    description: 'Introduction to electricity and magnetism, light and optics and modern physics. Four hours lecture and two hours laboratory per week. '},
    {title: 'Discrete Structures I - COMP-SCI 191', 
    description: 'Mathematical logic, sets, relations, functions, mathematical induction, algebraic structures with emphasis on computing applications. '},
    {title: 'Problm Slvng & Prgmg II - COMP-SCI 201R', 
    description: 'Problem solving and programming using classes and objects. Algorithm efficiency, abstract data types, searching and sorting, templates, pointers, linked lists, stacks and queues implemented in C++.'},
    {title: 'Applied Engineering Analysis I - E&C-ENGR 241', 
    description: 'Partial differentiation, multiple integrals, first and second order ordinary differential equations, partial fractions, and Laplace transform solution of Ordinary Differential Equations'},
    {title: 'Calculus II - MATH 220', 
    description: 'Techniques of integration, applications of the definite integral, improper integrals, sequences and series, power series. Taylor series and convergence, analytic geometry in calculus.'},
    {title: 'Physics For Scientists and Eng - PHYSICS 240', 
    description: 'Introduction to mechanics, wave motion and sound and heat and thermodynamics. '},
    {title: 'Exper General Chem I - CHEM 211L', 
    description: 'Introduction to the laboratory techniques used in studying the chemical properties of substances.  Some quantitative techniques are included. '},
    {title: 'General Chemistry I - CHEM 211', 
    description: 'Stoichiometry, gas laws, thermochemistry, atomic structure, molecular shapes and bonding theories. Recommended preparation: working knowledge of College Algebra.'},
    {title: 'Calculus I - MATH 210', 
    description: 'Functions and graphs, rational, trigonometric, exponential functions, composite and inverse functions, limits and continuity, differentiation and its applications, integration and its applications.'},
])
</script>

<template>
    <v-row class="shiftRight">
        <v-col>
            <div class="header">
                <h1>
                    Computer Science - Bachelors of Science
                </h1>
                <h3>
                    Courses taken:
                </h3>
            </div>
            <v-card v-for="course in courses" 
            :title="course.title"
            :key="course.title"
            :text="course.description">
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>
@import '/src/style.css';
</style>