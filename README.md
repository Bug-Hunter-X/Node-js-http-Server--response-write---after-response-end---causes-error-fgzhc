# Node.js HTTP Server Bug: Response.write() after Response.end()

This repository demonstrates a common error in Node.js HTTP servers: attempting to write to the response after it has already ended using `response.end()`. This leads to an error that might not be immediately obvious.

## The Bug

The `bug.js` file contains a simple HTTP server.  However, it includes a `setTimeout` function that tries to write to the response after `response.end()` has already been called. This results in an error because the response stream has been closed.

## The Solution

The `bugSolution.js` file corrects this issue by removing the attempt to write after ending the response. The solution ensures that all writing to the response happens before calling `response.end()`.