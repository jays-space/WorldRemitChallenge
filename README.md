# WorldRemitChallenge

## Install instructions

-Run `npm install`

-Run `pod install` in the `ios` folder.

-To start the app run `npm run ios`

## Overview

### Design and Architecture

My preference is to use typescript in projects. I tried to setout the app in features as opposed to screens, i.e.: should there be more services to be added, I would introduce modules that would contain all logic for a given set of features interacting with a specific slice of the app. Each module would contain the types, utils, business logic etc for the given slice.

Outside of services/modules are folders that contain globally used logic.

I opted to employ Context API to manage global state. This was in an attempt to save time.

Implementing aliases helped in readability.

I implemented a flavour ot the Atomic design system: atomic => integrated => templates.To begin to add more consistency in the styles, I used some theme files and added a bit of platform specific styles where needed.

### Unable to do due to time constraints
 - Tests 
 - Redux and Redux-Saga for state management and side effects 
 - Introduced a more modular file structure to bushiness logic
 - Factorizing the "follow" and "block" business logic 
 - More theming and Responsive design implementation
 - Added some logic to prepare for native bridging + commented out example

### What could have been done differently
I think focused on getting as best an architecture and testing lib as possible. Yet I feel I spent a little too much time on the former in an attempt to get this over the line in as 'good' a condition as possible. By the time I got to testing, I had little time left. 

My current pursuit is to work toward a TDD driven approach to engineering applications. I am working to this end in improving my skills as an engineer.
