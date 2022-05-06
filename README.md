# React Suspended

A React application riddled with security vulnerabilities so you can learn how not to write insecure code.

## How to run me?

### Local installation

For a local installation, make sure you have the following dependencies installed:
1. Node.js v14 (other versions don't work)
2. npm

### Docker installation

Easiest method is to run the React app through a containerized image.
The `docker-compose.yml` file also mounts the `./src` directory to the container so you can easily edit source files on the host, and enjoy the fast development experience of hot reloading.

To run the containerized version, run the following command:

```sh
docker-compose up
```

---

Modern frontend frameworks like React are well thought of in their application security design and that’s great. However, there is still plenty of room for developers to make mistakes and use insecure APIs, vulnerable components, or generally do the wrong thing that turns user input into a Cross-site Scripting vulnerability (XSS). Let me show you how React applications get hacked in the real world with React Suspended educational experience.

# License

- Copyright 2020 Creative Tim (https://www.creative-tim.com/?ref=blkdsr-readme)
- Copyright 2021 Liran Tal (liran.tal@gmail.com)
- Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

## Derivative work

This codebase makes use of derivative work created by [Creative Tim](https://www.creative-tim.com), in particular their open source website design # [Blk• Design  System React](https://demos.creative-tim.com/blk-design-system-react). I used their work because it provided me with a realistic and functional React application, completely designed too, which allowed me to speed up my work on the security aspects.

# Author

Liran Tal <liran.tal@gmail.com>
