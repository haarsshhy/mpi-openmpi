//sudo apt update
//sudo apt install openmpi-bin openmpi-common libopenmpi-dev


//Simple mpi problem
/*#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv); // Initialize MPI environment

    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size); // Number of processes

    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank); // Rank of this process

    char processor_name[MPI_MAX_PROCESSOR_NAME];
    int name_len;
    MPI_Get_processor_name(processor_name, &name_len);

    printf("Hello from processor %s, rank %d out of %d processors\n",
           processor_name, world_rank, world_size);

    MPI_Finalize(); // Finalize MPI
    return 0;
} */

//mpicc mpi_hello.c -o mpi_hello
//mpirun -np 4 ./mpi_hello


//Parallel two sum
/*#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    MPI_Init(&argc, &argv);

    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    int n = 100; // sum 0..99
    int local_sum = 0;

    // Divide work among processes
    for (int i = rank; i < n; i += size)
        local_sum += i;

    int total_sum = 0;
    MPI_Reduce(&local_sum, &total_sum, 1, MPI_INT, MPI_SUM, 0, MPI_COMM_WORLD);

    if (rank == 0)
        printf("Total sum = %d\n", total_sum);

    MPI_Finalize();
    return 0;
}
*/

//mpicc parallel_sum.c -o parallel_sum

//mpirun -np 4 ./parallel_sum


// app.js
// This is a small example app file for demonstration purposes.
// Comments here will show on GitHub when you push.

console.log("Welcome to the small demo app!");

// Function to add two numbers
function addNumbers(a, b) {
    // This function simply returns the sum of a and b
    return a + b;
}

// Function to display a message
function greetUser(name) {
    // Print a greeting message to the console
    console.log(`Hello, ${name}!`);
}

// Example usage
const result = addNumbers(5, 7); // Should be 12
console.log("Sum of 5 and 7 is:", result);

greetUser("Harsith"); // Prints greeting

// End of app.js
