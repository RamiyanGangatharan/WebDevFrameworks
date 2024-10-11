---
layout: layout/mylayout.ejs
title: Heap Sort
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

# Heap Sort

According to [GeeksforGeeks](https://www.geeksforgeeks.org/heap-sort/), "*heap sort is a comparison-based sorting technique based on Binary Heap Data Structure. It can be seen as an optimization over selection sort where we first find the max (or min) element and swap it with the last (or first). We repeat the same process for the remaining elements. In Heap Sort, we use Binary Heap so that we can quickly find and move the max element in O(Log n) instead of O(n) and hence achieve the O(n Log n) time complexity.*"

## Advantages of Heap Sort
- Efficient Time Complexity: Heap Sort has a time complexity of O(n log n) in all cases. This makes it efficient for sorting large datasets. 
  - The log n factor comes from the height of the binary heap, and it ensures that the algorithm maintains good performance even with a large number of elements.
- Memory Usage: Memory usage can be minimal (by writing an iterative heapify() instead of a recursive one). 
  - So apart from what is necessary to hold the initial list of items to be sorted, it needs no additional memory space to work
- Simplicity: It is simpler to understand than other equally efficient sorting algorithms because it does not use advanced computer science concepts such as recursion.

## Disadvantages of Heap Sort
- Costly: Heap sort is costly as the constants are higher compared to merge sort even if the time complexity is O(n Log n) for both.
- Unstable: Heap sort is unstable. It might rearrange the relative order.
Inefficient: Heap Sort is not very efficient because of the high constants in the time complexity.

</div>