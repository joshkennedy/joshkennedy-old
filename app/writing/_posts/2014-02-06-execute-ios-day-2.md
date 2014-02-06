---
layout: post
title:  "Execute iOS: Day 2"
categories: writing
comments: true
---
Today marks another step in my journey towards iOS fluency. As explained in [the previous post](http://joshkennedy.me/writing/execute-ios-day-1), I'm learning iOS by designing and building my very own app while following along with the good fellows at [Execute iOS](http://executeios.com). 

I spent some time yesterday flushing out my idea, and I'm pretty pleased with the result so far. The basic pitch is that it's a clean, efficient way to track your expenses and see a summary on a daily, weekly, and monthly basis. 

There are a number of apps out there that provide all kinds of syncing and graphs and whatnot, but I wanted something simple that allows me to add an expense, categorize it, and see how much I've spent so far for a certain time frame. 

I haven't finalized a name just yet, so for now I'm calling it Ledgr and this is what it looks like:

![Execute iOS](http://cl.ly/Tl5N/apps-in-three.jpg)

I spent a lot of time removing features and interactions that would a) be too complicated for a n00b like me to execute quickly, and b) confuse and clutter the UX, no matter how cool they sounded. I want this app to be fast and instruction-free. 

### Some challenges ahead

Despite trying to keep the app simple, the very nature of it will stretch my resourcefulness in regards to implementing more complicated features. I refer to complexity in terms of code, not interface. I tried to design the app in such a way as to reduce the amount of customized elements, but I had to make some decisions that would provide a more holistic experience. Alas, this means I'll need to build a custom calculator (yikes) and the sliding drawer menu. 

Many of these libraries have already been created by the fantastic open source community at large, but I'm determined not to drop in any old plugin without understanding what it's doing and how it works.

I've already had a peek at some fantastic resources like [cocoapods.org](cocoapods.org) which has a plethora of amazing libraries, so I'm not worried that one of these custom elements will prevent me from completing my goal.

### Next steps

Now that this baby has been designed, the next step will be to construct the shell - that means code! This is probably the most daunting step for me, because it means that I'm actually doing this. I hope to have, by the end of the day today, a basic husk of an app running. 

<hr>

I've been encouraged by the positive response so far, and I'm eager to dive into this process. In the next few posts I'll be sharing my thoughts and feelings as I wade into Xcode, as well as sharing victories and failures along the way. I hope you'll join me. Until next time. 