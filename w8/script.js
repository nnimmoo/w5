function expo(number, quality, callback) {
    function power(num, pow) {
        if (pow === 0) return 1;
        if (pow === 1) return num; 
        return num * power(num, pow - 1); 
    }
    const result = power(number, quality);
    callback(result);
}

// Example usage:
expo(5, 3, (result) => console.log(`5 to the power of 3 is ${result}`)); 


async function deepCopy(obj) {
    return new Promise((resolve, reject) => {
        if (typeof obj !== 'object' || obj === null) {
            reject(new Error('Input must be an object.'));
        } else {
            const copy = JSON.parse(JSON.stringify(obj));
            resolve(copy);
        }
    });
}

// Example usage:
const original = { a: 1, b: { c: 2 } };
deepCopy(original)
    .then((copiedObj) => console.log('Copied object:', copiedObj))
    .catch((error) => console.error(error.message));


const url = "https://jsonplaceholder.typicode.com/posts";


fetch(url)
  .then(response => {
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); 
  })
  .then(data => {
   
    for (const post of data) {
      
      const postDiv = document.createElement('div');
      const postTitle = document.createElement('h2');
      const postBody = document.createElement('p');

      postTitle.textContent = post.title;
      postBody.textContent = post.body;

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postBody);

      document.body.appendChild(postDiv);
    }
  })
  .catch(error => {
    console.error('Fetching data failed:', error);
  });
