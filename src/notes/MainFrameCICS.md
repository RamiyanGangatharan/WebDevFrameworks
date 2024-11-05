---
layout: layout/mylayout.ejs
title: CICS Notes
---

# Mainframes II CICS Notes

*CICS is basically a menu system you can implement that need special code and JCL to run*

## Online Processing

### What is it

- it is like an amazon ordering process like you ordering a package and the process of it being shipped to you
- it resembles a conversation between two entities, for example a conversation between two people
- information is process as soon as it is received
- bi-directional communication

- Batch processing is when you take data and process it with an output (asynchronous) like programs in mainframe I.
- Online transaction/process is when you query a process then have that access data then it relaying the data back to the client like a REST API in a way. the online process is like a data "broker"


## What CICS Controls:

### Data Access and Storage
- DASD: mainframe name for hard drive --> Direct Access Storage Device
- VSAM: Virtual Storage Access Managemrnt

### CICS / Transaction Server
- Manages all of it including the application from the user

### Networking / Communications
- VTAM/BTAM/CTAM = a network AKA Ethernet

## BMS
- Basic Mapping Support
  - is an interface for CICS and is a program that you can use to manage CICS in a way
  - it is an interface between apps, terminals, and printers
  - Symbolic Maps: code in your editor with fields and variables
  - Physical Maps: a specified map that the device will use as a display
- The Basics:
  - 3 Macros
    - DFHMSD - Create a map set
    - DFHMDI - Create a partition
    - DFHMDF - Create a field within the partition
      - All fields must exist within a map set (a collection of maps) position

- BMS Rules
  - blank lines and tabs are not allowed
  - all macros and thier operands (exept INITIAL) must be UPPERCASE
  - start column: 1
  - end column: 71
  - continuation column: 72
    - must place character in line 72 to continue line
    - continues line must start in column 16 or beyond 
  - the label for each BMS must start with StartCol and must be seperated from the macro name an operands by one

### Syntax

```cbl
<!-- Declarations -->
    MENSYYY DFHMSD TYPE=&SYSPARM,MODE=INOUT,TERM=ALL,
    LANG=COBOL,TIOAPFX=YES,CTRL=FREEKB,BASE=MAPS

<!-- This starts in line one column 1 -->
    MENMYYY DFHMDI SIZE=(24,80), LINE=1,COLUMN=1

```

- "S" in MENSYYY is for map set declarations
- "M: in MENMYYY is for map set partitions

### How to display a text field with an initial value
```cbl
TITLE DFHMDF POS=(3,30),LENGTH=20,ATTRB=(ASKIP,BRT),
COLOR=NEUTRAL,INITIAL='MAIN MENU'
```

ASKIP is a declaration of a field that is not editable
- in this case the column starts at 30 and ends at 49 as index starts at 0
  - 30 + 20 = 50 

### Input fields
1. The editable portion of the screen
   1. ATTRB=(UNPROT,FSET,IC) does:
      1. ```CHOICE MDHMDF POS(16,32),LENGTH=1,ATTRB=(UNPROT,FSET,IC)```
   2. The stopper field to prevent the rest of the screen from being editable (text limits)
      1. ```DFHMDF POS(16,34),LENGTH=1,ATTRB(ASKIP,NORM)```
         1. This line limits the user to 1 character in the input field
         2. The reason you go up from 32 to 34 is because there is supposed to be a hidden extra character for the mainframe to use for its purposes.
- make sure BMS code is in logical order as the screen renderes from top left to bottom right row by row (it runs like JCL in order from top to bottom). it will not error out but will give a warning.
  - for example, when you mention the coordinates (3,30) then code below it an element at (2,44), it will run but complain it is not in logical order and when you look at the code again you will be confused on what order the GUI code comes from.
- to link a BMS file to tie the GUI to the COBOL, you must use the `COPY` command and add a `LINKAGE` section

## CICS Logon
- ENTER "CICS" instead of "L TSO" in Vista
- F3 or CTRL + SHIFT + F3 = Exit
- Clear to clear the screen (Add macro)

## CICS Transactions
- `CEDA DISPLAY` gives you a menu
- `CEMT SET PROG(UUMEND09) NEWCOPY` will let you create a new copy of the program
## CICS Logoff
- `CESF GOODNIGHT` to logoff CICS


## Assignment 4 

- DEMO is in DCMAFD02.CICS.*
- details and commands about a4 are in the powerpoint
- these use different JCL's from other assignments as it is now considered a CICS program
- all the commands are in the instructions (do not worry)