#include <stdio.h>
int main() {
    int n, i;
    float sum = 0, num, average;

    printf("Enter the total numbers: ");
    scanf("%d", &n);

    printf("Enter %d numbers:\n", n);
    for (i = 0; i < n; i++) {
        scanf("%f", &num);
        sum += num;
    }

    average = sum / n;

    printf("The average is: %.2f\n", average);

    return 0;
}
