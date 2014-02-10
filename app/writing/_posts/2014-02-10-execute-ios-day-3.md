---
layout: post
title:  "Execute iOS: Day 3"
categories: writing
comments: true
---
My [Execute iOS](http://executeios.com) journey continues with a brief update. I spent time on Thursday and Friday diving into Xcode. I'd used it before to run some demo apps and for mobile usability testing, but this was my first knee-deep shuffle through the process of starting a project.

After the initial project setup, file naming and whatnot, I spent some time fiddling with the menus, panels, and themes. As the computer I use at work is a beautiful 27" iMac, the default settings made me feel like an old man hunched over his keyboard, jabbing at keys to see where the cursor was. I settled on a theme from [a sweet little repo on Github](https://github.com/tursunovic/xcode-themes) and my eyes are now much happier.

Then came the time to begin coding. I stared at the screen for a small eternity, trying to remember where to begin. It's been so long since I've felt this lost in a code editor that I was tempted to talk myself out of the whole thing right there. I slept on it Thursday night and woke up Friday determined to get at least something up and running. 

I began following the videos a bit, basically copying what Sam and Josh were coding but changing the variables and whatnot along the way to match my project's requirements. While Ledgr will share some similarities to the Execute app in terms of structure (they both consist of lists of items), there the resemblance stops. Instead of the timing attributes, I'll need to mess around with currencies. I'll need to assign each entry to a category of some kind. I'll also need to calculate entries on a per-category basis as well as on a date-range basis. Should be fun.

After a few hours of following along with the video, I now have entries persisting and the ability to delete entries. The edit button has three states - the first is when the button hasn't been selected, the second is an active edit state, and the third is a non-active-but-previously-active state. Of course this won't be the case in production, but I enjoy the fact that I can now determine the difference between those states.

Here's a look at what I have so far:

![My app thus far](http://cdn.dropmark.com/55997/6df41b971d32c0979e34ba2351aa05156c689f2f/whammy.gif)

The next step will be where I break from the instructional videos and venture into the Great Unknown of the Documentation. I'll be adding the amounts/currencies to each entry and then adding up the totals.

The game is afoot. Stay tuned.