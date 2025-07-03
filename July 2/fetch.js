let res = fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        
    },
    body: JSON.stringify({ name: "John", age: 30 })
  });



let a = await res.then((resolved_value) =>  resolved_value.json());
console.log(a);


// Promise - pending state and resolved/rejected state