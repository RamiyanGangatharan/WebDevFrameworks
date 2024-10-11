---
layout: layout/mylayout.ejs
title: bubble Sort
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

<h1 class="text-center display-1">Bubble Sort</h1>

<br>

![image](/img/bubbleAlgorithm.png)

<br>


**Bubble Sort** is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing adjacent elements, and swapping them if they are in the wrong order. This process continues until the list is completely sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list (or the start) after each pass.

The algorithm repeatedly compares pairs of adjacent elements in the list and swaps them if the first element is greater than the second. After each full pass through the list, the largest unsorted element is guaranteed to be in its final position. This process is repeated for the remaining unsorted elements until no swaps are needed, indicating the list is sorted.

Although **Bubble Sort** is simple to implement and understand, it is not very efficient for large datasets. In the worst-case scenario (when the list is sorted in reverse), it has a time complexity of **O(n²)**, where *n* is the number of elements in the list. This quadratic time complexity makes Bubble Sort inefficient for large lists, but it is still useful for educational purposes and small datasets where simplicity is more important than speed.

One advantage of Bubble Sort is that it operates in place, meaning it does not require extra memory for another array. However, other more efficient algorithms like **Merge Sort** or **Quick Sort** are usually preferred for larger or more complex sorting tasks.

</div>