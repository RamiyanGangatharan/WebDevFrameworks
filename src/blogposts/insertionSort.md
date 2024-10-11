---
layout: layout/mylayout.ejs
title: Insert Sort
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

# Insertion Sort

According to [GeeksforGeeks](https://www.geeksforgeeks.org/heap-sort/), "*Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.*"

## Advantages of Insertion Sort:
- Simple and easy to implement.
- Stable sorting algorithm.
- Efficient for small lists and nearly sorted lists.
- Space-efficient as it is an in-place algorithm.
- Adoptive. the number of inversions is directly proportional to number of swaps. For example, no swapping happens for a sorted array and it takes O(n) time only.

## Disadvantages of Insertion Sort:
- Inefficient for large lists.
  - Not as efficient as other sorting algorithms (e.g., merge sort, quick sort) for most cases.

</div>