// ===========================
// Asynchronous Function Example
// ===========================
function add(a, b, callback) {
    let result; // Simulate a long-running addition operation
    setTimeout(() => {
        result = a + b;
        callback(result);
    }, 2000); // Simulate a 2-second delay
}

function handleResult(result) {
    console.log('Result:', result);
}

// Menggunakan fungsi add
add(3, 5, handleResult);
add(5, 10, handleResult);
// Output: Addition result: 15  


// ===========================
// promises Example 
// ===========================
function addAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(new Error('Both arguments must be numbers'));
                return;
            } else {
                resolve(a + b);
            }
        }, 1500); // Simulate a 1.5-second delay
    });
}
function handleAsyncResult(result) {
    console.log('Async Result:', result);
}


// Menggunakan fungsi promise di dalam promise

addAsync(2, 5)
    .then(result1 => {
        console.log('result1 :', result1);
        return addAsync(8, 10);
    })
    .then(result2 => {
        console.log('result2 :', result2);
        return addAsync(3, 7);
    })
    .then(result3 => {
        console.log('result3 :', result3);
    })
    .catch(error => console.error('Error:', error));

// Menggunakan await di dalam then (tidak umum, tapi bisa dengan async function di then)
addAsync(2, 5)
    .then(async result1 => {
        console.log('result1 :', result1);
        const result2 = await addAsync(8, 10);
        console.log('result2 :', result2);
        const result3 = await addAsync(3, 7);
        console.log('result3 :', result3);
    })
    .catch(error => console.error('Error:', error));
