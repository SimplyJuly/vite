<script setup>
import CardDisplay from "../components/CardDisplay.vue";
import { ref } from "vue";

const skills = ref([
  {
    img: "/skills/VueLogo.jpeg",
    title: "Vue.js",
    description: "\"Front end JavaScript library for building user interfaces and single-page applications\" - Wikipedia",
    toggle: false,
  },
  {
    img: "/skills/SQLLogo.png",
    title: "SQL",
    description: "\"Structured query language (SQL) is a programming language for storing and processing information in a relational database. \" - AWS",
    toggle: false,
  },
  {
    img: "/skills/PostmanLogo.png",
    title: "Postman",
    description: "\"Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration...\" - Postman",
    toggle: false,
  },
  {
    img: "/skills/tailwindcss.png",
    title: "Tailwind CSS",
    description: "\"Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.\" - tailwindcss",
    toggle: false,
  },
  {
    img: "/skills/nextjs.png",
    title: "NextJS",
    description: "\"Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.\" - Next.js",
    toggle: false,
  },
  {
    img: "/skills/Java.png",
    title: "Java",
    description: "\"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.\" - Wikipedia",
    toggle: false,
  },
  {
    img: "/skills/react.png",
    title: "React",
    description: "\"React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.\" - React",
    toggle: false,
  },
  {
    img: "/skills/Javascript.webp",
    title: "Javascript",
    description: "\"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. \" - Wikipedia",
    toggle: false,
  },
  {
    img: "/skills/css.png",
    title: "CSS",
    description: "\"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.\" - Wikipedia",
    toggle: false,
  },
  {
    img: "/skills/typescript.jpeg",
    title: "Typescript",
    description: "\"TypeScript is JavaScript with syntax for types. TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.\" - Typescript",
    toggle: false,
  },
  {
    img: "/skills/c++.jpeg",
    title: "C++",
    description: "\"C++ is a cross-platform language that can be used to create high-performance applications... C++ gives programmers a high level of control over system resources and memory.\" - W3 Schools",
    toggle: false,
  },
  {
    img: "/skills/DBeaver.png",
    title: "DBeaver",
    description: "\"DBeaver Community is a free cross-platform database tool for developers, database administrators, analysts, and everyone working with data. It supports all popular SQL databases like MySQL, MariaDB, PostgreSQL, and more.\" - DBeaver",
    toggle: false,
  },
  {
    img: "/skills/Spring.jpeg",
    title: "Spring",
    description: "\"The Spring Framework is an application framework and inversion of control container for the Java platform\" - Wikipedia",
    toggle: false,
  },
]);
</script>

<template>
  <v-row class="shiftRight">
    <v-col>
      <CardDisplay :cardData="skills" />
    </v-col>
  </v-row>
</template>

<style>
</style>
