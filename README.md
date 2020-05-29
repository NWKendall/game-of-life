## Features * fixes:
1. Correct resize bug
2. clear crash bug ✅
3. wrap / nowrap function
4. Testing
5. color pallette
6. grid size limitation in functions
7. skip generations
8. hashlife
9. different languages (python)
10. aging property linkeing to colors


## Turing Completeness

Requirements:
- do everything a Turing machine can do!
- conditional branching
- must have sufficient amount of memory

 ```
"The ability to read and write a pattern of 0s and 1s is powerful enough to compute anything that CAN be computed."
``` 
[-- Computerphile, Professor Brailsford](https://www.youtube.com/watch?v=RPQD7-AOjMI)

- considered Type-0 Grammar/language (Recursively enumerable) in Chomsky's heirarchy of languages

### Charles Babbage
- realized that to perform any computation, must have conditional branching
    - which implicitly implies "`go to...`" that various information needs to be stored. 
    - `If Here, go there, else, go here...`
----

## Cellular Automata
- program that operates in 2d grid
- simple set of rules tat govern realtionship between a cell and it's neighbours 
- will produce generations of grid
    -   don't want to mutate existing grid as that would compound errors across generations
    - new grid will become current (rinse repeat)
- TL:DR:
    ```
    complex behavior can be derived from simple rules
    ```
- IRL - used in biology and chemistry to simulate models for research
    - [Research Paper](https://www.sciencedirect.com/science/article/pii/089571779090010K)
    - population simulation (grass, rabbits, foxes)