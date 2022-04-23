export const database = {
    authorName: "Kate Libby",
    aboutAuthor: "Penetration Tester at Ellingson Mineral Company. Experience developing and delivering custom gibson hacking payloads via the well known metasploit framework.",
    twitterLink: "https://www.twitter.com/katelibby",
    // twitterLink: "<img src=x onError=alert(1) >",
    // @TODO to enable XSS from a url link uncomment this link
    // instead of the original:
    // twitterLink: "javascript:alert(1)",
    // twitterLink: "JAVAscript:alert(1)",
    // twitterLink: "\x19javascript:alert(1)",
    testimonial: {
        cite: "https://github.com/kate/libby",
        text: "trust me, it's the best package you'll ever use!"
        // @TODO to enable XSS uncomment the lines below:
        // dangerouslySetInnerHTML: {
        //     __html: "<h1>hello</h1>"
        // },
        // text: null
    },
    packageManifest: {
        "name": "gibson-explorer",
        "version": "0.0.0-development",
        "description": "cruise the gibson to find the garbage file",
        "bin": {
          "gibson": "./bin/gibson.js",
        },
        "scripts": {
          "lint": "standard && eslint . --ignore-path .gitignore && yarn run lint:lockfile",
          "lint:lockfile": "lockfile-lint --path yarn.lock --type yarn --validate-https --allowed-hosts npm yarn",
          "test": "jest",
          "start": "node hack-the-planet.js"
        },
        "author": {
          "name": "Kate Libby",
          "email": "katelibby@ellingson.com"
        },
        "license": "Apache-2.0",
        "repository": {
          "type": "git",
          "url": "git+https://github.com/katelibby/gibson-explorer.git"
        }
    },
    // @TODO show how we can inject xss to JSONPretty 
    // through a faulty use of dangerouslySetInnerHTML:
    // packageManifest: `<img src=x onError=alert(1) >`
    authorScreenshotURL: 'https://miro.medium.com/max/1838/0*bljFeVNLqEFudixU.png',
    // @TODO no issues with this, just an alt text string
    authorScreenshotDescription: 'loremipsum',
    // @TODO 1. here we have an XSS because we are not sanitizing the code
    // with a sanitization function. Take it from this fix: https://github.com/chenckang/react-json-pretty/commit/66526b92568d5468994a58bbfdc0822e33b7ade5
    // and try again
    // authorScreenshotDescription: '/><img src=x onError=alert(1)',
    // @TODO 2. here we *still* have an XSS because what we are sanitizing
    // is for HTML element context, and not for attribute context
    // authorScreenshotDescription: 'a onload=alert(1)',
};
