// Part 1 Exercises (use Copilot inline suggestions)
//function to calculate the factorial of a number
// Exercise 1: Comment-Driven Development
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Exercise 2: Array Operations
// Filter even num
const  numlist = [1, 2, 3, 4, 5];

const evenNumbers = numlist.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Exercise 3: Function from Signature
function reverseString(str) {
    return str.split('').reverse().join('');
}


// Exercise 4: Process User Data 

/**
 * Processes an array of user objects and filters adult users.
 * @param {Array<{name: string, email: string, age: number}>} users - An array of user objects to process
 * @returns {Array<{name: string, email: string}>} An array of user objects containing only name and email for users aged 18 or older
 */
    const processUserData = (users = []) => {
        if (!Array.isArray(users)) {
            throw new TypeError('processUserData expects an array of user objects');
        }

    const result = [];
    const warnings = [];

    users.forEach((user, idx) => {
        if (!user || typeof user !== 'object') {
            warnings.push(`Item at index ${idx} is not an object`);
            return;
        }

        const { name, email, age } = user;

        if (typeof name !== 'string' || typeof email !== 'string' || typeof age !== 'number' || Number.isNaN(age)) {
            warnings.push(
                `Invalid user at index ${idx}: ` +
                `name(${typeof name}), email(${typeof email}), age(${typeof age})`
            );
            return;
        }

        if (age >= 18) {
            result.push({ name, email });
        }
    });

    if (warnings.length) {
        // Surface validation issues without breaking normal flow
        console.warn('processUserData validation warnings:', warnings);
    }

    return result;
}