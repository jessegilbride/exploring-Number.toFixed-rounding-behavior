# Exploring JavaScript's Number.toFixed() Rounding Behavior

_This is not necessarily complete and is a basic one-off/'doodle' project done in an afternoon. It is not meant to be extensive or used as a teaching tool, but if you find value in it, I'm glad._ :)

## Takeaways

> The JavaScript/ECMAScript spec specifies to use the IEEE-754 standard in representing (double) float numbers. 

> The JavaScript engine converts a number to a 64-bit binary number that represents an exponential (in scientific notation; 1 bit for the positive/negative sign, 11 bits for the exponent power, and 52 bits to represent the digits [aka "mantissa"]).

> Some numbers cannot be perfectly converted to binary without inaccuracy because of rounding errors, so the calculation itself contains those errors.


## Usage

* Enter a number into the function call (at the bottom), run the file and view console output of the report.

* It's best/useful to do the comparison with one less decimal place (2nd arg) than the supplied decimal (3rd arg).

* Each cycle checks whether there's a calculation difference between the current cycle and the prior one, reporting a running tally of how many differences are 'same' or 'different' (which is a bit confusing, I know). The point of which is that if the decimal-to-binary conversions were perfect, there would be no differences to tally at all.

* Two approaches are compared: `after_toFixed` (just the `toFixed()` method) and `after_trunc` (utilizing `Math.trunc()` in a different way).


## Function inputs
input | meaning | default (if no value provided)
----- | -----   | -----
`n`                 | quantity of numbers to generate | 2
`decimalPrecision`  | how many decimals to apply with `.toFixed()` | 1 
`decimalToRound`    | what decimal to apply for rounding comparison | 0.55


## Useful Resources

[Avoiding Problems with Decimal Math in JavaScript](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html)

[What Every JavaScript Developer Should Know About Floating Points](https://modernweb.com/what-every-javascript-developer-should-know-about-floating-points/)

[Imprecise Calculations in JS](https://javascript.info/number#imprecise-calculations)

[The Floating-Point Guide - What Every Programmer Should Know About Floating-Point Arithmetic](https://floating-point-gui.de/)

[The IEEE 754 Format (emory.edu)](http://mathcenter.oxford.emory.edu/site/cs170/ieee754/)

[IEEE 754 Floating Point Numbers](https://tutorialspoint.dev/computer-science/computer-organization-and-architecture/ieee-standard-754-floating-point-numbers)

[IEEE 754 (Wikipedia)](https://en.wikipedia.org/wiki/IEEE_754)

