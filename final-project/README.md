<mark>**Note that this document order from FP4 -> FP1**</mark>

---

# WAVE TOOL & RESPONSIVE INFORMATION:

https://docs.google.com/document/d/1pwYisxkvaYPfV7Yc-udsD7If2fT_lmpFBDfpt2FDe70/edit?usp=sharing


# **FP4 \- Final Project Writeup**


## Part 1: Website Description

Welcome to my virtual gallery - a space where people can see what I do when I’m not studying the human experience. While my professional portfolio has shifted away from art, I wanted to create a digital space where the pieces can be shared and displayed. Within this site, you’ll find collections of my work that invite you to explore, interact, and immerse yourself in each one. 
Each collection tells a story - the medium that was used to create it, the inspiration behind it, the context, etc. I’ve included insights into my creative process, artistic decisions, and techniques behind each work. I hope that this conveys my intentions to the audience. The pages feature interactive elements throughout, including a generative art animation on the homepage, which I included as an homage to my time in undergrad, where I spend time creating various generative art pieces. Like any physical gallery, this virtual gallery is open to all. The page is able to be viewed by anyone ranging from art enthusiasts to casual viewers. There is not a specific target audience for this website, but I would say that the primary audience will likely be friends and industry professionals. 


## Part 2: User Interaction

There are 5 pages that users can navigate to:

Homepage

- The page should automatically load onto this page. 
- You can navigate back to this page by clicking on - ‘Works’ and ‘by Niki’ within the navigation.
  
Hue & You 

- You can click on any part of the Hue & You card on the homepage to get to this page. 
- Within this page, users can hover over each artwork to see its name. 
- Within the color choices section, you can hover over the different color options to see which artwork each description is referring to. 
- You can click on ‘Fauvism,’ and it will take you to a page that goes into the history of the art style.

Reveries 

- You can click on any part of the Reveries card on the homepage to get to this page. 
- Within this page, users can hover over each artwork to see its name. 
- The words “glitter,” “velvet,” and “lace” have a hover animation set to them. Hover over each word to see which artwork the description is referring to.
  
In a Silent Room 

- You can click on any part of the In a Silent Room card on the homepage to get to this page. 
- You can click on ‘JMW Turner, the famous British painter,’ ’and it will take you to a page that goes into the history of the art style. 
  
About Me 

- You can navigate to this page by clicking on About Me and within the navigation.
- You can click on the bubbles to see which tools and software I love to use!


## Part 3: External Tool

- The landing page has generative animations I built using **p5.js**, a reference to my background in Processing and my interest in code-driven art.
- I chose this tool due to its flexibility that allowed me to create something fully customizable to my vision.
- Each colorful brushstroke emerges from the left edge of the screen at a random y, and moves across the page in fluid waves. I achieved this by generating shapes that leave trails (using the line() property) as they move, creating a new “painting” every time the user reloads the page.
- The result is fun and intriguing for the viewer to watch, adding a layer of interactivity to the site. I purposefully kept the page’s primary design minimal and sketch-like in black and white, letting the brushstrokes peek through from below, as if they’re slowly painting the entire page. 

## Part 4: Design Iteration

My final design evolved quite a bit from the early prototypes. I initially played with different fonts and colors from each gallery page, but as I was building the site something felt off. The pages seemed to be very disconnected from each other, and it didn’t feel like a cohesive website. Instead of distinct styles, I created a versatile background that ties everything together visually. I also deepened the content - originally the collection pages just had basic details like medium, context, and the images, but I realized I wanted to correctly demonstrate the story behind each collection. These changes helped me create an over identity for the site that has a consistent feel throughout every page. 

## Part 5: Implementation Challenge

The biggest challenge I faced was nailing down the design, as presentation is everything in an art gallery, it took me a while to find an aesthetic I liked. Another hurdle I had was getting the animations to look exactly the way I had envisioned, in terms of the rough texture, the color, the fade to gray, etc. 

## Part 6: Generative AI Use and Reflection

I utilized ChatGPT for troubleshooting GitHub issues and debugging code errors, while I leveraged Claude specifically for implementing new code features and writing some core functionality. These tools had separate uses that they were better for. 

I actually used GenAI less than I had initially planned, partly due to my change in design and partly because it didn’t actually get me to where I needed some of the time. At the start of my project, I primarily used it as a research tool to explore the various libraries I had mentioned in my FP2 write-up before ultimately deciding to use p5.js. When developing the animation system, which was my most prevalent use of GenAI, I collaborated with Claude specifically for implementing the mathematical calculations needed for the wave-like trail effect that creates the “paint” across the screen. While Claude helped with technical implementation and animation integration, I managed creative control - for instance, when the AI suggested modifying existing shapes, I instead pursued my own vision by suggesting a trail effect using a line behind the shape, which ended up proving to be more effective for the final design. I was able to integrate some aspects of what the tool suggested, but I couldn’t use all of it. 

While I had initially planned to leverage AI extensively, I discovered that many debugging issues became easier to solve independently and without using a tool as there were more pages of code working together. AI seemed to be more valuable for specific technical challenges, particularly with implementing complex trigonometry for the animations that I wouldn’t have been able to solve alone and  finding a tiny typo within the 500+ lines of css code. However, I did encounter notable limitations - the tools required extremely precise prompts to provide useful responses, and its suggested implementations weren’t always optimal, requiring me to try various things and double check responses. There was not a single time where I was able to just copy and paste code in and have it be exactly what I was looking for. This experience taught me that AI is best used as a targeted tool for specific challenges rather than as a comprehensive development solution. 


### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | No | No | No | Yes | Yes (Git Errors) |
| Tool1 | Productivity | 0 | 0 | 0 | 5 | 6 |
| Claude| Usage | No | Yes | Yes | No | No |
| Tool2 | Productivity | 0 | 4 | 5 | 0 | 0 |


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: ChatGPT helped me debug and solve git issues. These were pretty basic problems.
  2. Tool2: Claude helped me some specific tasks I asked for it to do.
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. Tool1: N/A
  2. Tool2: I didn't expect to have to guide the AI tools as much as I did. In the end I came up with the implementation, and the tool seemed like a sounding board at times. 
* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. Tool1: It did not because I didn't ask it to do anything that would affect my design.
  2. Tool2: It did not, I changed my design based on aesthetics, and didn't ask the tool what it thought about any of that. 

> Use patterns
* I accepted the generations when …  For example, 
  1. Tool1: This tool fixed issues in my code.
  2. Tool2: This tool helped me make a feature I already had better, or when it helped me integrate a new feature like my animations.
* I critiqued/evaluated the generated suggestions by … For example, 
  1. Tool1: N/A
  2. Tool2: This tool suggested to do brushstroke animations I should create shapes that look like that, but I came up with a way that looked much better aesthetically. 


> Pros and cons of using GenAI tools
* Pros
  1. Efficiency - can help you spot any errors
  2. Solve complexities - can help you with math that is needed in your code
* Cons
  1. It needs to be babysat almost, you have to go through multiple interactions with the tool before you get to what you actually need. 
  2. Many times your ideas are better than the tool. 


### Usage Log

ChatGPT: Git/Filepath help

https://chatgpt.com/share/675937b0-5368-8010-a7ac-bd9eab3d49e0

Claude: 

[Note: Claude does not have an option to share a link to a chat, so I am screenshotting them in]

Brushstroke animation: Math and Wave implementation

<img width="634" alt="Screenshot 2024-12-11 at 1 55 24 AM" src="https://github.com/user-attachments/assets/c557334b-e477-4528-8342-029f182d47b3">

<img width="656" alt="Screenshot 2024-12-11 at 1 54 19 AM" src="https://github.com/user-attachments/assets/9e4eccb9-b307-4807-83e8-d06d97766ad8">

Just for fun - here is what the animations looked like before I had the idea to make a trail using line()!

<img width="1139" alt="Screenshot 2024-11-20 at 8 23 31 PM" src="https://github.com/user-attachments/assets/38bd58d1-e4dc-407a-a2da-3a338b0fe744">

This is what I had asked Claude, because I wasn't sure how to turn this into looking like paint on the screen. Before this, Claude had reccomended a way for me to make the shape look like a brushstroke, which looked really bad.  

<img width="679" alt="Screenshot 2024-12-11 at 1 48 11 AM" src="https://github.com/user-attachments/assets/3301af20-41aa-4425-a555-948b793a9bde">

I also used Claude to help me shorten alt text for the WAVE tool.

<img width="720" alt="Screenshot 2024-12-11 at 1 41 50 AM" src="https://github.com/user-attachments/assets/b2520f09-36f3-46eb-94c3-fd1c70c6d282">

I was having issues for a while, where my hyperlinks weren't opening into a new tab. I asked Claude for the proper way to implement this to see where I went wrong, and it had been a simple spelling mistake!

<img width="710" alt="Screenshot 2024-12-11 at 1 41 27 AM" src="https://github.com/user-attachments/assets/48c56345-fa67-413c-a252-026ae871f8ec">


---

# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- I have decided to change my design, and keep the original background of the collection pieces the same. 
- I got rid of some plan of interactivity and added different ones. 
- Create a clear, cohesive concept.

## Generative AI Use Plan Updates

- I am only using Claude and ChatGPT. 
- I will be using it to help me do my animations.

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

My project is an art exhibition designed to showcase my personal artwork that is both engaging for viewers and flexible for future updates. This digital gallery will offer viewers an immersive experience, as each ‘collection page’ will explore background stories and provide some additional resources that add context and depth. I want to create a platform that is dynamic and grows with my work, providing me with a way to display my artwork in a way that’s not exactly like the static nature of a portfolio.

## High-Fi Prototypes

### *Prototype 1*

<img width="97" alt="Screenshot 2024-11-04 at 10 31 45 PM" src="https://github.com/user-attachments/assets/d5ed7a2b-8ea5-48af-bdfb-33becf83f1d9">

Description: 

This prototype screen serves as the landing page. The functionality on this page allows users to navigate to various art collection pages or the contact page. To create a cohesive design that unites the different art styles within each collection, I opted for a sketch-style aesthetic, which adds consistency to the page. 

Feedback: 

For this page I wanted to understand how users interact with and explore the art collection section, and how they may go to the art collection page. I would also like to know what users appreciate about the page and how I may enhance the design for clarity. 


### *Prototype 2*

<img width="98" alt="Screenshot 2024-11-04 at 10 31 58 PM" src="https://github.com/user-attachments/assets/ece3b89b-b7e0-4bed-9cab-e6523ec3b8a6">

### *Interactivity*


https://github.com/user-attachments/assets/af0b5ff5-5ed4-45ba-b764-20ab4e79bbbc


Description: 

This prototype screen shows an art collection detail page. This page provides viewers with a description of the background behind the collection, giving them some context. Additionally, each page is themed to match the collection’s style - for example, if a collection is colorful, that detail page will have vibrant, colorful backgrounds, creating a more immersive experience, and replicating an exhibition style theme. 

Feedback: 

For this page, I would like to get feedback on how users expect to navigate back to the landing page and how they view images within the grid. I would also like to know if there are any elements that they would like to have included. 

## Usability Test

After creating my first prototype iterations, I did a usability test for my interactive art gallery. I conducted a Think Aloud Protocol and semi-structured interview, where I received crucial feedback that shaped my designs and provided me with valuable ideas for design updates. 
Within the landing page, both participants noted that they appreciated the gallery’s “sketch style.” One participant mentioned that they believed there was a sense of mystery and intrigue that was created using this style. Both participants mentioned that they would want more context or personality on the landing page, either through a description or a quirky addition to the header. Due to this, I changed the header to ‘Works of Progress’ and added ‘What I do when I'm not designing the human experience.’ This tells the viewer about who I am and what I do outside of the artwork, tying it into my academic and professional life. One participant suggested that they would appreciate some sort of context about each project, but I decided not to adjust my design to incorporate this feedback. I believe that it took away from the intention on this page, so I decided to include this information on my collection details page instead. 
A recurring suggestion was to incorporate color somehow onto the page, so I had an idea to create a cursor effect that mimics a digital drawing tool, enhancing the interactivity and user experience. 
Within the collection detail page, participants felt that the images should be laid out in a gallery style rather than in a structured grid. I decided to incorporate this feedback and create a more interesting layout. Additionally, one participant felt that the background color was too dark and lowered the visibility and accessibility of the page. Due to this, I replaced the background on this page with a lighter one to better showcase the artwork. As I mentioned before, I also added information about the medium of collection, the context of the collection, and used a hover state to show the titles of the individual paintings. 

## Updated Designs

<img width="96" alt="Screenshot 2024-11-04 at 10 55 47 PM" src="https://github.com/user-attachments/assets/7afed4a2-cf88-4089-8bce-f1c0a9ee2d0a">

<img width="207" alt="Screenshot 2024-11-04 at 10 56 24 PM" src="https://github.com/user-attachments/assets/c6634a42-1dd8-48e6-a162-1acb699efdf7">

<img width="211" alt="Screenshot 2024-11-04 at 10 56 39 PM" src="https://github.com/user-attachments/assets/a5bbb011-86bb-4621-8baf-9cb74a533607">

These are the updated designs. I edited the designs to incorporate user feedback. Collection thumbnails and titles are farther apart, to make it clear to viewers that they are separate. Additionally, I moved the first sketch higher on the page in order to hint at more content on the screen. I also added a bit of information about myself to the title, and changed the text to make it more engaging and personal. On the collection detail page, I brightened up the background color of art gallery page to make the aesthetics better. I added the type of medium and made the description more concise. I also added a hover state that shows user title of the individual paintings.


User Interaction in Prototype:

- Users can click into art gallery pages using the landing page. 
- Users can go back to homepage by clicking ‘Home’ and ‘by Nikita’
- Users can hover over the artwork to see it’s title/other information 
- On certain pages the artwork layout will be interactive. 

<img width="665" alt="Screenshot 2024-11-04 at 11 02 17 PM" src="https://github.com/user-attachments/assets/2d0d3ae0-6563-44f7-ad29-de591ee78aff">

User Interaction Using Code:
- The landing page will have animations.
- The user’s cursor will have an interactive element.

<img width="211" alt="Screenshot 2024-11-04 at 11 00 58 PM" src="https://github.com/user-attachments/assets/12b8fd5e-d9d2-4503-9737-d2567be35d88">

This is the visual for the cursor trail feature that I might implement. 

## Feedback Summary

During the lab we did “speed dating” style feedback sessions where I received valuable feedback that has guided my next design decisions.
Within the landing page, I received feedback that stated that my collection sections may be a bit too close to each other, and it was suggested that I space them apart a bit more in order to enhance clarity. Additionally, one peer mentioned that I should move my first collection section higher up on the page a bit to show the viewer a “peek” of it, which tells them to scroll down. I plan to incorporate both of these pieces of feedback for my final design. A participant appreciated the animation of the brush strokes, but suggested that I create an interactive element within the sketches. Inspired by this, I proposed a subtle hover effect on each page, where under the user’s cursor, each black and white sketch would show the colored/actual version of the image, creating a pixel coloring book feel. However, after speaking to the TA about my idea, I have decided that this will be a “nice to have” element due to the timeline of the project. 
One participant noted that normally I use the name ‘Niki’ in my day to day life, and suggested that I change the name on the page to this for a more approachable and personal touch, which I agree with. 
Within the collection details page, two peers commented that the ‘medium’ and ‘context’ aspects of the page seem like buttons to users, which is misleading. Due to this, I plan to redesign these in order to make them look less clickable and more like section headers. One reviewer expressed concern in consistency within the separate pages, as the idea behind each gallery page is to be a separate experience. To answer this, I decided to standardize the header, titles, and design of the medium and context section on each collection page. 

## Milestones

During the first week, I would like to finalize the design based on feedback from usability tests and lab sessions. There are many elements within the feedback that I would like to incorporate and see if it’s feasible or not. Once the designs are done, I will begin coding and create the basic framework for all the pages. I want to ensure that I have established the structural layout and included the initial connections between pages. This will serve as my foundation for the website. 
In the second week, my focus will be on building out two of the collection detail pages, ensuring that I include images, descriptions, and any styling elements that pertain to that particular page. I will also include navigation elements that will allow me to travel smoothly between pages, increasing its functionality. 
In the third week, I want to add any remaining collection detail pages and begin working on animation and interactive elements to make the pages more dynamic. I will begin by starting the brush stroke animations. I will also research how I may add in gallery animation elements to the collection pages. 
In the next week, I will continue to refine interactions and animations across the site, focusing mainly on collection detail pages. I want to ensure that all interactive components are functioning smoothly. I would also like to finalize any missing design elements on this page, aiming for a polished look. 
During the final week, I would like to use this as a buffer time to address any issues that may have arisen or fallen behind schedule. I’ll use this period for any last-minute adjustments and finishing touches. If everything is on track, schedule-wise, I can also use this time to add any extra elements such as cursor animations and hover effects to further enhance interactivity of the gallery. 
This timeline will allow me to stay organized and provides me with some extra time that may be needed due to unforeseen circumstances. 
 

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [ ] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
  - [X] Review feedback from lab sessions
  - [ ] Finalize designs
  - [ ] Create basic framework of webpage
        
- [ ] Week 11 Nov 11 \- Nov 15:
  - [ ] FP3 due
  - [ ] Finish framework of two collection detail pages.
  - [ ] Add in content for two collection detail pages.
  - [ ] Implement navigation interaction between the pages.
     
- [ ] Week 12 Nov 18 \- Nov 22:
  - [ ] Finish remaining collection detail pages.
  - [ ] Start working on animations and interactivity.
         
- [ ] Week 13 Nov 25 \- Nov 29:
  - [ ] Continue refining interactions and animations across the site.
  - [ ] Ensure that all interactive components function smoothly.
  - [ ] Finalize any missing content elements on collection detail pages.
  - [ ] 80% polished webpage.
  - [ ] Thanksgiving
        
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due
  - [ ] Address any issues that arise/elements not done due to falling behind schedule.
  - [ ] Finalize last minute adjustments and finishing touches.
  - [ ] Ensure that design works for multiple screens.
  - [ ] If time permits (not necessary for final), add in extra elements such as cursor animations or hover effects.  

### *Libraries and Other Components*

Brushstroke Animation: p5.js or Processing.js
Carousel and Gallery Layouts: Swiper.js 
(Maybe) Cursor Trail Animation and Hover Animations: GSAP, Hover.css, p5.js

- These are all subject to change if I find better libraries to use as I am coding.

## Generative AI Use Plan 

I will be using GenAI tools as assets to aid me in creating a robust, interactive version of my gallery project. It will help me streamline and create content for the collection detail pages. However, I want to ensure that I use these tools without compromising the artistic style and the true meaning behind each of the artworks. Additionally, I will use GenAI tools in order to explore potential libraries and features, as well as learn how I may implement them in different parts of my website. I am committed to using these tools to aid me in efficiency while ensuring that I am handling the core tasks myself. To ensure best practices, I will check with my TA to ensure that all of this AI usage is allowed. 

### *Tool Use*

* ChatGPT
  
I will use ChatGPT to generate concise descriptions for each gallery page. I want to give users background information on the collections or individual pieces. By using this tool to craft this part of the site, I will be able to ensure that I am maintaining consistency across descriptions without spending too much time on each. 

I will also use ChatGPT to guide me as I explore libraries and frameworks for my site’s interactive elements. For example, on the landing page, I have brushstroke animations that I am a bit unsure of how to implement. ChatGPT can guide me to the correct resources, helping me to broaden my knowledge and options. 
  
* GitHub Copilot
  
I will use copilot to increase my efficiency when coding. This tool will offer me suggestions for certain, simple parts of the website and will correct any syntax errors. This will ensure that I can focus on completing the website rather than spending large amounts of time on debugging simple mistakes. It will also be helpful in setting up initial structures and basic code. 

I will not use copilot to simply write my code for me. I want to ensure that the code comes from my own understanding and design choices. Although it will be a tool that will provide me with support, it will not craft the bigger elements within my code. 

* Figma

I will use Figma’s generative features like Smart Animate to preview animations, navigation interactions, and other elements on the page. This tool allows me to quickly test visual effects prior to implementing it into the code.

I will use Figma’s generative features to create background gradients and fill visuals to tell a thematic story within the collection pages.  

I will not use Figma’s generative system to complete the designs for me, as I would like to ensure that they are personal and display my experience as a human computer interaction designer. 

### *Responsible Use*

To ensure that I am using these tools responsibly, I won’t rely on AI to write code or create any artwork for the art gallery. As an artist, there is a large amount of stigma surrounding using generative tools to create artwork or visuals, and I would like to ensure that any artwork that I use is my original work. Additionally, rather than directly using anything that the generative tools give me, I will use its outputs to inspire my work, and I will double check all outputs for relevance and accuracy. 

---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Music Map*
<img width="576" alt="Screenshot 2024-10-27 at 11 36 46 PM" src="https://github.com/user-attachments/assets/4e687ae3-6cf2-4be5-8c31-c6ccfd1434d9">
<img width="125" alt="Screenshot 2024-10-28 at 11 41 51 PM" src="https://github.com/user-attachments/assets/0705ca87-96a5-4b76-9393-f005663225c4">

### *Art Exhibition*
<img width="328" alt="Screenshot 2024-10-28 at 11 01 03 PM" src="https://github.com/user-attachments/assets/27796265-1a4b-4c91-be64-52db35416e03">
<img width="343" alt="Screenshot 2024-10-28 at 11 01 18 PM" src="https://github.com/user-attachments/assets/f39be422-ceea-48b3-aef1-8b9b67b68020">

### *Indian Classical Dance Gallery*
<img width="932" alt="Screenshot 2024-10-28 at 11 00 07 PM" src="https://github.com/user-attachments/assets/4ea3e32e-ba70-41bd-b7e2-cc609c385b70">


### *Idea 1*

Music Map:

- What is the basic idea of your final project?

A collaborative platform for users to anonymously share songs that evoke memories of specific locations.

- How do you plan to make your design interactive and engaging?

The design of the site would be similar to the Unsent Project. However, on this page, users can search a certain location   and see all the results.
Use p5 library to create visuals that respond to user interaction on each “card,” like hovering or selecting locations.

- How do you plan to make your design accessible?

The information will be presented using clear, legible text. The design of the cards will be easy to read. The navigation will also be simple. 
I can use a library that allows me to incorporate text-to-speech. 

- What information do you specifically want to convey and include on your website?

The website will have location-based song entries with a description that users input. It allows users to search names of cities and find music that others have added that reminds them of that specific place. The entries & searches are all anonymous. 


### *Idea 2*

Art Exhibition

- What is the basic idea of your final project?

Create a personal webpage showcasing my artwork, while making a website that is art in itself.

- How do you plan to make your design interactive and engaging?

I will use p5 and Processing to add dynamic, generative elements to each page, such as animations and visuals that respond to user input. 

- How do you plan to make your design accessible?

I will incorporate clear navigation, readable text, alt descriptions for any visual images. 
If possible, I may also make sure that some of the elements can be accessed using the arrow keys. 

- What information do you specifically want to convey and include on your website?

I want to convey the inspiration and personal stories behind each artwork in a way that is fun and interactive for those seeing it. My artwork is currently displayed in a very plain, static way on my main portfolio. 


### *Idea 3*

Indian Classical Dance Gallery

- What is the basic idea of your final project?

An interactive website that introduces users to Indian classical dance. 
Show users elements like a gallery, sound bites, costumes, practices, etc. 

- How do you plan to make your design interactive and engaging?

I will use the p5 library and Processing to create animations and visual elements, such as sound visualizations, dance movements, and color visualizations. 
Additionally, I want to make it interactive by using parallax scrolling.

- How do you plan to make your design accessible?

I will ensure that any images I input have alt text. Any text on the page will be legible. I will also be using high contrast visuals.

- What information do you specifically want to convey and include on your website?

I would like to show users the beauty and history of Indian classical dance, and go in depth into aspects that are more unknown, such as fundamentals, hand gestures, expressions, costuming, etc. I would also like to explain the cultural significance of each element. 


## Feedback Summary

The concept of a Music Map was generally well-received. Two critiquers mentioned that it has a cool, engaging design style. They appreciated the “post-it note” style design inspiration as well as the idea behind the Unsent Project. This creates a casual, accessible experience that is easy to read and use, while allowing users to share personal experiences and song suggestions. The tone should be reflected in the interface design as well, focusing on simplicity over formality. A concern I had was that the idea may be too complicated to implement into code. To make it easier, it was suggested to “dumb down” the concept by not requiring exact location tagging, but instead allowing users to manually input names of locations by typing or using a drop down. One critiquer mentioned that error prevention is key here - adding options to delete or edit notes in the case of accidental submission would be useful. Additionally, someone else mentioned that dropdowns would help prevent misspellings. However, this may be more complicated, as it would require a location database. In regards to filtering data and responses, someone suggested that it may be beneficial to allow users to filter by genre of music in addition to the location search. A few critiquers felt that a map view would be crucial, and suggested using the VegaLite framework to incorporate that in a creative way. Overall, this idea was liked and found to be creative. 
The Art Exhibition overall received positive feedback, especially regarding the interactive nature of the website. A few were confused about where this page would be located, but understood once I explained that it would be linked within my main portfolio. The ideas should be organized in a certain way that allows for a cohesive experience for the viewer, such as by themes, collections, or even color. One suggestion I received was to create a dynamic layout, like a collage, or a 3D (Z-axis) approach, instead of a card-by-card format, which felt too static. It was suggested thinking of this like a digital exhibit, focusing on intentional layouts. Additionally, animations could enhance the experience but should be subtle enough to avoid overwhelming viewers. This would allow for personal experimentation as my work evolves. It was also suggested that I create this in the mindset of a game designer, where users are able to use arrow keys to interact with the elements on the screen. Overall, this idea was received positively, and was the most favored. This idea is also one that I would be able to build on in the future, and incorporate easily into my existing portfolio. 
I didn’t receive much feedback for the Dance Gallery project idea, as I focused more time during the critique session on the other ideas. The idea, focused on educating people about Bharatanatyam, was seen as potentially too time-consuming for the value it would add. Most feedback suggested that it might be the least engaging of the three, and could be challenging to create content for. 

## Feedback Digestion

Based on the feedback I received during the lab, I decided to narrow my ideas down to two and reflect on which aspects of the critique I would incorporate. After considering the feedback for the dance gallery idea, I decided not to move forward with this option. 
Within the Music Map, I plan on incorporating several key suggestions to improve both functionality and design. First, the “post-it note” inspiration from the Unsent Project was widely appreciated, and will be incorporated into my final design if I choose this idea. This design style keeps the interface simple, making it easy to navigate. Additionally, it creates an inviting interface that encourages personal sharing. Addressing concerns about complexity, I have decided to incorporate the suggestions given to me within my process. I agree with my critiquers that it would be a good idea to omit the location tagging aspect and instead allow users to simply type location in or select from a dropdown menu. To prevent any errors, I will also add options to delete any submissions to account for accidental entries. One critiquer suggested that I should allow users to filter by genre of music. However, I will not be incorporating this feedback, as it takes away from the main intention of the webpage and adds unnecessary complexity. A critique I received a few times was that a map view of all user responses would be crucial. This is feedback that I am considering incorporating, however, it is going to depend on difficulty and timelines. Additionally, I’m unsure if this would add a “social-media” style element to the page which strays from the original idea of the site. 
For the Art Exhibition, it was suggested that I organize the artwork in a specific way. I have decided to incorporate that feedback and order the artwork based on individual collections. Each art “collection” will have its own page. This will allow me to create a site that can be constantly updated as I create new work in the future. Furthery, I will be presenting the artwork in a dynamic fashion, creating an experience for the user. I’m still unsure of how I will be doing this, but I will ensure that the elements do not seem boring and static on the screen using interesting layouts and animations. I will keep in mind as I design this that I need to ensure not to overwhelm people with the visual elements. From the critique I also received feedback I might incorporate, but am not sure about. It was also suggested that I create this in the mindset of a game designer, where users are able to use arrow keys to interact with the elements on the screen. Once I design the layout and prototype the user interactions, I will be able to determine whether this is a route I should take or not. 


