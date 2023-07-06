var n = 28, remainder, sumOfDigits = 0;
while(n)
{
    remainder = n % 10;
    sumOfDigits = sumOfDigits + remainder;
    n = Math.floor(n/10);
}
console.log(sumOfDigits);