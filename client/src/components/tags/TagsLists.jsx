import React from "react";
import styled from "styled-components";
import TagsItem from "./TagsItem";

const TagsListsContainer = styled.div`
  width: 106.3rem;
  height: 100%;
  margin-left: 2.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const tagList = [
  {
    tagId: 1,
    tagName: "javascript",
    content:
      "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all labels that are relevant to your question; e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc. ",
  },
  {
    tagId: 2,
    tagName: "python",
    content:
      "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax. Please note that Python 2 is officially out of support as of 2020-01-01. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant (e.g. Jython, PyPy) or library (e.g. Pandas, NumPy), please include it in the tags.",
  },
  {
    tagId: 3,
    tagName: "java",
    content:
      "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself. This tag is frequently used alongside other tags for libraries and/or frameworks used by Java developers.",
  },
  {
    tagId: 4,
    tagName: "c#",
    content:
      "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all labels that are relevant to your question; e.g., [node.js], [jQuery], [JSON], [ReactJS], [angular], [ember.js], [vue.js], [typescript], [svelte], etc. ",
  },
  {
    tagId: 5,
    tagName: "html",
    content:
      "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser. Questions regarding HTML should include a minimal reproducible example and some idea of what you're trying to achieve. This tag is rarely used alone and is often paired with [CSS] and [JavaScript]. ",
  },
  {
    tagId: 6,
    tagName: "css",
    content:
      "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colors, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media. ",
  },
  {
    tagId: 7,
    tagName: "node.js",
    content:
      "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client as well as on the server side and therefore benefit from the re-usability of code and the lack of context switching. ",
  },
  {
    tagId: 8,
    tagName: "arrays",
    content:
      "An array is an ordered linear data structure consisting of a collection of elements (values, variables, or references), each identified by one or more indexes. When asking about specific variants of arrays, use these related tags instead: [vector], [arraylist], [matrix]. When using this tag, in a question that is specific to a programming language, tag the question with the programming language being used. ",
  },
  {
    tagId: 9,
    tagName: "json",
    content:
      "JSON (JavaScript Object Notation) is a serializable data interchange format that is a machine and human readable. Do not use this tag for native JavaScript objects or JavaScript object literals. Before you ask a question, validate your JSON using a JSON validator such as JSONLint (https://jsonlint.com). ",
  },
  {
    tagId: 10,
    tagName: "c++",
    content:
      "C++ is a general-purpose programming language. Initially, it was designed as an extension to C and has a similar syntax, but it is now a completely different language. Use this tag for questions about code (to be) compiled with a C++ compiler. Use a version-specific tag for questions related to a specific standard revision [C++11], [C++14], [C++17], [C++20], or [C++23], etc. ",
  },
  {
    tagId: 11,
    tagName: "jquery",
    content:
      "jQuery is a JavaScript library. Consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library that facilitates Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. A question tagged jQuery should be related to jQuery, so jQuery should be used by the code in question, and at least jQuery usage-related elements must be in the question. ",
  },
  {
    tagId: 12,
    tagName: "mysql",
    content:
      "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs that all use their own dialects of SQL to manage the data. ",
  },
  {
    tagId: 13,
    tagName: "sql",
    content:
      "Structured Query Language (SQL) is a language for querying databases. Questions should include code examples, table structure, sample data, and a tag for the DBMS implementation (e.g. MySQL, PostgreSQL, Oracle, MS SQL Server, IBM DB2, etc.) being used. If your question relates solely to a specific DBMS (uses specific extensions/features), use that DBMS's tag instead. Answers to questions tagged with SQL should use ISO/IEC standard SQL. ",
  },
  {
    tagId: 14,
    tagName: "swift",
    content:
      "Swift is a general-purpose programming language developed by Apple Inc first released in 2014 for its platforms and Linux. Swift is open-source. Use the tag only for questions about language features or requiring code in Swift. Use the tags [ios], [ipados], [macos], [watch-os], [tvos], [swiftui], [cocoa-touch], and [cocoa] for (language-agnostic) questions about the platforms or frameworks.",
  },
  {
    tagId: 15,
    tagName: "linux",
    content:
      "NOTICE: All Linux questions must be related to programming; those that aren't will be closed. Use this tag only if your question relates to programming using Linux APIs or Linux-specific behavior, not just because you happen to run your code on Linux. If you need Linux support, you can try https://unix.stackexchange.com or the specific Linux distribution's Stack Exchange site like https://askubuntu.com or https://elementaryos.stackexchange.com/",
  },
  {
    tagId: 16,
    tagName: "angular",
    content:
      "Questions about Angular (not to be confused with AngularJS), the web framework from Google. Use this tag for Angular questions which are not specific to an individual version. For the older AngularJS (1.x) web framework, use the AngularJS tag.",
  },
  {
    tagId: 17,
    tagName: "django",
    content:
      "Django is an open-source server-side web application framework written in Python. It is designed to reduce the effort required to create complex data-driven websites and web applications, with a special focus on less code, no-redundancy and being more explicit than implicit. ",
  },
  {
    tagId: 18,
    tagName: "typescript",
    content:
      "TypeScript is a typed superset of JavaScript that transpiles to plain JavaScript. It adds optional types, classes, interfaces, and modules to JavaScript. This tag is for questions specific to TypeScript. It is not used for general JavaScript questions.",
  },
  {
    tagId: 19,
    tagName: "spring",
    content:
      "The Spring Framework is an open-source framework for application development on the Java platform. At its core is rich support for component-based architectures, and it currently has over twenty highly integrated modules.",
  },
  {
    tagId: 20,
    tagName: "database",
    content:
      "A database is an organized collection of data. It is the collection of schemas, tables, queries, reports, views, and other objects. The data are typically organized to model aspects of reality in a way that supports processes requiring information. Use this tag if you have questions about designing a database. If it is about a particular database management system, (e.g., MySQL), please use that tag instead.",
  },
  
];
const TagsLists = () => {
  return (
    <TagsListsContainer>
      {tagList?.map((item) => (
        <TagsItem tag={item} key={item.tagId} />
      ))}
    </TagsListsContainer>
  );
};

export default TagsLists;
