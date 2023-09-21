# NodeJS Basics

This project contains tasks for learning to the basics of NodeJS.

## Tasks To Complete

+ [x] 0. **Executing basic javascript with Node JS**<br/>[0-console.js](0-console.js) contains a module that exports a function named `displayMessage` that prints in `STDOUT` the string argument.

+ [x] 1. **Using Process stdin**<br/>[1-stdin.js](1-stdin.js) contains a script that will be executed through the command line with the following requirements:
  + It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line).
  + The user should be able to input their name on a new line.
  + The program should display `Your name is: INPUT`.
  + When the user ends the program, it should display `This important software is now closing` (followed by a new line).

+ [x] 2. **Reading a file synchronously with Node JS**<br/>[2-read_file.js](2-read_file.js) contains a module that exports a function `countStudents` with the following requirements:
  + Create a function named `countStudents`. It should accept a path in argument.
  + The script should attempt to read the database file synchronously.
  + The database file has the same format as [database.csv](database.csv).
  + If the database is not available, it should throw an error with the text `Cannot load the database`.
  + If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
  + It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 3. **Reading a file asynchronously with Node JS**<br/>[3-read_file_async.js](3-read_file_async.js) contains a module that exports a function `countStudents` with the following requirements:
  + Create a function named `countStudents`. It should accept a path in argument (same as in [2-read_file.js](2-read_file.js)).
  + The script should attempt to read the database file asynchronously.
  + The database file has the same format as [database.csv](database.csv).
  + The function should return a Promise.
  + If the database is not available, it should throw an error with the text `Cannot load the database`.
  + If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`.
  + It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 4. **Create a small HTTP server using Node's HTTP module**<br/>[4-http.js](4-http.js) contains a script that creates and exports a small HTTP server using the `http` module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + Displays `Hello Holberton School!` in the page body for any endpoint as plain text.

+ [x] 5. **Create a more complex HTTP server using Node's HTTP module**<br/>[5-http.js](5-http.js) contains a script that creates and exports a small HTTP server using the `http` module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + It should return plain text.
  + When the URL path is `/`, it should display `Hello Holberton School!` in the page body.
  + When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file [3-read_file_async.js](3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 6. **Create a small HTTP server using Express**<br/>[6-http_express.js](6-http_express.js) contains a script that creates and exports a small HTTP server using the Express module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + Displays `Hello Holberton School!` in the page body for the endpoint `/`.

+ [x] 7. **Create a more complex HTTP server using Express**<br/>[7-http_express.js](7-http_express.js) contains a script creates and exports a small HTTP server using the Express module with the following requirements:
  + It should be assigned to the variable `app`, which must be exported.
  + HTTP server should listen on port 1245.
  + It should return plain text.
  + When the URL path is `/`, it should display Hello Holberton School! in the page body.
  + When the URL path is `/students`, it should display This is the list of our students followed by the same content as the file [3-read_file_async.js](3-read_file_async.js) (with and without the database) - the name of the database must be passed as argument of the file.
  + CSV file can contain empty lines (at the end) - and they are not a valid student!

+ [x] 8. **Organize a complex HTTP server using Express**<br />Writing every part of a server within a single file is not sustainable. Create a full server in a directory named [`full_server`](full_server) with the requirements listed below.<br />Since you have used ES6 and Babel in the past projects, let's use `babel-node` to allow to use ES6 functions like `import` or `export`.
  + **8.1 Organize the structure of the server**
    + Create 2 directories within the [full_server](full_server) folder:
      + [controllers](full_server/controllers/).
      + [routes](full_server/routes/).
    + Create a file [full_server/utils.js](full_server/utils.js) with a function named readDatabase that accepts a file path as an argument:
      + It should read the database asynchronously.
      + It should return a promise.
      + When the file is not accessible, it should reject the promise with the error.
      + When the file can be read, it should return an object of arrays of the firstname of students per field.
  
