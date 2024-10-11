---
layout: layout/mylayout.ejs
title: Big O Notation
---

<style>
    .content-container { margin: 0 auto; max-width: 8.5in; padding: 20px; text-align: justify; } 
    .content-container p { margin-bottom: 15px; } 
    .content-container h3 { text-align: center; margin-bottom: 20px; } 
    .content-container img {
        width: 100%;    
        height: auto;   
        display: block;   
        margin: 0 auto;   
    }
</style>

<div class="content-container">


# Big O Notatation

<br>

### What is this notation?

According to [Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation), 
*"Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. Big O is a member of a family of notations invented by German mathematicians Paul Bachmann, Edmund Landau, and others, collectively called Bachmann–Landau notation or asymptotic notation. The letter O was chosen by Bachmann to stand for Ordnung, meaning the order of approximation. In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows. In analytic number theory, big O notation is often used to express a bound on the difference between an arithmetical function and a better understood approximation; a famous example of such a difference is the remainder term in the prime number theorem. Big O notation is also used in many other fields to provide similar estimates. Big O notation characterizes functions according to their growth rates: different functions with the same asymptotic growth rate may be represented using the same O notation. The letter O is used because the growth rate of a function is also referred to as the order of the function. A description of a function in terms of big O notation usually only provides an upper bound on the growth rate of the function. Associated with big O notation are several related notations, using the symbols o, Ω, ω, and Θ, to describe other kinds of bounds on asymptotic growth rates."*

#### Common Examples of *Bachman-Landau Notation* (Big O)

Source: [Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation)

- **O(1)** — Constant Time  
  Operations take the same amount of time regardless of input size.  
  **Example**: Accessing an element in an array by its index.

<br>
  
- **O(log log *n*)** — Double Logarithmic Time  
  Typically found in advanced search algorithms.  
  **Example**: Interpolation Search

<br>

- **O(log *n*)** — Logarithmic Time  
  The time grows logarithmically as the input size increases.  
  **Example**: Binary Search

<br>

- **O(*n*)** — Linear Time  
  The time grows directly proportional to the input size.  
  **Example**: Searching through an unsorted array

<br>

- **O(*n* log *n*) = O(log *n*!**) — Quasilinear Time  
  Common in divide-and-conquer algorithms.  
  **Examples**: 
    - Merge Sort
    - Heap Sort
    - Fast Fourier Transform

<br>

- **O(*n*²)** — Quadratic Time  
  Common in inefficient sorting algorithms where every element is compared to every other element.  
  **Examples**:
    - Bubble Sort
    - Selection Sort
    - Insertion Sort

</div>