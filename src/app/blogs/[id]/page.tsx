"use client"
import Header from '@/components/Header';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaRegComment } from "react-icons/fa";
import { BsPencil, BsSend, BsTrash } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { client } from '@/sanity/lib/client';
import AOS from "aos"
import "aos/dist/aos.css"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Footer from '@/components/Footer';



const blogs = [
    {   
        id : "1",
        title : "Does your heart ever scream, ‘Pack your bags and let’s go!’?",
        content : `If you’ve ever caught yourself daydreaming about far-off places—where mountains kiss the sky, oceans shimmer in the sunlight, and cultures intertwine in the most beautiful ways—then you’re not alone. Travel isn’t just about visiting new places; it’s about discovering a new side of yourself with every step you take. Whether you’re a seasoned traveler or a wanderlust newbie, the world is brimming with adventures that promise to leave you with memories to cherish forever.

                                 The Journey Begins with a Single Step

        We all know the feeling. That rush of excitement when you first hear about a new destination. Maybe it’s the allure of exploring the ancient ruins of a faraway civilization, or the thrill of discovering uncharted beaches that only a few have set foot on. Whatever it is, travel has a unique way of calling you. But the first step is always the hardest—deciding where to go.

        Choosing the perfect destination can be overwhelming, with endless options to explore. Some prefer the serenity of remote getaways, while others seek the buzz of bustling cities with rich histories and vibrant cultures. For some, it’s about relaxing on a sandy beach; for others, it’s about hiking through the rugged peaks of a majestic mountain range. But no matter the choice, the journey is always worth it.

                            Experiencing Cultures

        One of the most beautiful aspects of traveling is immersing yourself in different cultures. Each place has its own stories, traditions, and ways of life, and when you travel, you get to experience it all. From tasting authentic cuisine to learning the local language or taking part in traditional ceremonies, the experiences you gain are unforgettable.

        For example, while wandering through the streets of Paris, you’ll notice the rhythm of life in cafés, where locals gather over coffee, sharing stories. In Tokyo, the bustling cityscape is balanced by tranquil tea ceremonies, inviting you to slow down and reflect. And if you ever find yourself in Morocco, the vibrant souks (markets) will fill your senses with the scent of spices, the sound of bargaining, and the colorful sights of handmade crafts. Every place offers something new to learn, something magical to discover.

                             Hidden Gems

        While the world is full of popular tourist spots, there’s a special kind of magic that lies in exploring lesser-known destinations—places that aren't flooded with tourists but offer some of the most authentic experiences. These hidden gems often hold the stories of the land that have remained unchanged for centuries.

        For example, instead of heading to the overcrowded beaches of the Maldives, why not explore the beautiful coastal towns of Mozambique? Or instead of staying in the bustling streets of Barcelona, take a trip to the peaceful villages in the Spanish Pyrenees, where you can experience life like the locals do. It’s in these quiet corners of the world that you can truly disconnect from the hustle and bustle of everyday life and reconnect with nature, culture, and yourself.

                            Travel Tips and Hacks

        Traveling doesn’t always have to be expensive or stressful. There are plenty of ways to make your trip more enjoyable and affordable. A little planning goes a long way, and some smart travel hacks can save you a lot of time and money.

        Use Local Transportation: Instead of relying on expensive taxis or rideshare apps, explore local buses, trains, or even bike rentals. It’s cheaper and gives you a chance to see the city through the eyes of a local.

        Pack Light: Avoid checking in luggage, as this can save you both time and money. Plus, traveling light allows you to move freely and explore without the burden of heavy bags.

        Book in Advance: For popular attractions, booking tickets online in advance can help you skip long queues and save time.

        Travel Off-Season: Traveling during the off-peak season can mean fewer crowds, better deals on accommodations, and more opportunities to enjoy your destination at your own pace.

                           Making Memories

        At the end of the day, travel isn’t just about ticking off items on a bucket list or snapping the perfect photo for Instagram. It’s about the memories you create along the way. Whether it's sitting by a campfire in the wilderness, sharing stories with fellow travelers, or watching the sunset from a mountaintop, travel has a way of teaching us about life, love, and the world around us.

        When you return home, you’re not the same person you were before the trip. You bring back more than just souvenirs—you bring back a fresh perspective, a deeper understanding of the world, and a collection of stories that will last a lifetime.

                           The Call to Adventure

        So, what are you waiting for? The world is vast, and your next adventure awaits. Whether it’s exploring the ancient ruins of Rome, walking through the rainforests of Costa Rica, or experiencing the magic of a Northern Lights display in Iceland, the possibilities are endless. Don’t just dream about it—go out and experience it.

        As the famous traveler Saint Augustine once said, “The world is a book, and those who do not travel read only one page.” So, pack your bags, step outside your comfort zone, and begin the next chapter of your story. The adventure of a lifetime is just around the corner. 🌍✈️`,
        image : "/travel.jpg",
        published : "Fiza Rafakat",
        Date : "December 24,2024"
    },
    {     
        id : "2",
        title : "Into the Wild: My Unexpected Forest Adventure!",
        content : `Ever wondered what it’s like to wander into a forest and forget where you came from? Well, buckle up, because I did just that — and trust me, it was the wildest decision I’ve ever made!

                  Picture this: you step into a forest where every tree looks like it’s straight out of a fantasy movie. The leaves crunch underfoot like you're in an old-school video game, and the air smells like... freedom. I mean, who wouldn’t want to trade their busy routine for a couple of hours with a bunch of trees and critters, right?

                  The moment I set foot on the forest trail, I was hooked. Suddenly, my usual “I’m too busy” attitude was replaced with “I’m totally embracing this!” The forest was alive — buzzing with mystery. Who knew that a random leaf falling could feel like the most epic thing happening in the universe? And the birds? Oh, they were like the forest's own DJ, dropping beats of chirps and whistles.

                  But then came the real fun — the actual exploring. Imagine running into a stream that looks like it’s straight out of an adventure movie. I mean, it sparkled. Literally. The water was so clear you could see fish doing backflips (okay, maybe not, but you get the vibe). And those trees? Some of them were massive, like they had a gym membership since the dawn of time.

                  I even found myself on a mini treasure hunt as I stumbled upon an ancient rock covered in moss. Was it a magical artifact? Maybe. Was I imagining things? Definitely. But who cares when you’re out there pretending you’re Indiana Jones?

                  All I know is, the forest turned out to be way more than just trees. It was a playground, a living, breathing adventure that made me forget all my worries. So, if you’re tired of your daily routine, grab your shoes, ditch the city noise, and let the forest remind you that the world still has a lot of surprises left!`,
                  image : "/forest.jpg",
                  published : "Fiza Rafakat",
                  Date : "December 22,2024"
    },
    {  
        id : "3",
        image : "/winterTravel.jpg",
        Date : "December 26,2024",
        published : "Fiza Rafakat",
        title : "Chill Adventures: Embrace the Magic of Winter Travel!",
        content : `Ready to swap your flip-flops for snow boots and trade your summer tan for a winter glow? Winter travel isn’t just about icy winds and frosty mornings — it’s about diving headfirst into a season full of magic, adventure, and cozy moments you’ll never forget.

             Imagine this: you’re hiking through a serene, snow-covered forest, the only sound being the crunch of snow beneath your feet, and your breath misting in the crisp air. The whole world feels still, like a winter fairy tale waiting to be explored. Whether you're carving down snowy slopes, discovering hidden trails, or enjoying a peaceful walk through nature's frosty embrace, winter is full of thrilling experiences.

             But it’s not all about adventure — it’s also about the bliss of cozy retreats. Picture yourself in a charming mountain cabin, wrapped in a warm blanket, sipping hot cocoa by the fire. Nothing beats the comfort of being surrounded by snow while enjoying all the little moments that make winter unforgettable.

             And let’s talk food! Imagine savoring hearty stews, freshly baked pastries, and sipping on spiced apple cider after a day in the snow. Winter destinations are all about comfort, warmth, and indulging in the delicious flavors of the season.

             So, whether you're seeking adrenaline, tranquility, or simply a change of scenery, winter travel offers something for everyone. Pack your warmest layers, embrace the chill, and get ready for an adventure that will leave you feeling rejuvenated and full of joy!`
    },
    {
      id : "4",
      image : "/AI-future.jpg",
      Date : "December 27,2024",
      published : "Fiza Rafakat",
      title : "Why We Think AI Will Solve All Our Problems (But It’s Just a Joke)",
      content : `Ah, Artificial Intelligence – the shiny, new promised savior of humanity. We’ve all seen the headlines: "AI is here to revolutionize everything!" It’s the futuristic tech that’s going to cure diseases, write poetry, and maybe even figure out how to fold a fitted sheet. But let’s be real – AI might be smart, but it’s not quite the magic genie we imagined.

1. AI Will Solve All Our Problems… Except for the Wi-Fi

First, let’s talk about AI’s supposed superpower: fixing our problems. You think, “Surely AI can fix my Wi-Fi, right?” But nope, even the world’s most advanced AI can’t help when you’re staring at a router that’s blinking like a Christmas tree and wondering if it’s just really into the holidays. The Wi-Fi drops, and AI just stares back at you with its "I’m processing" face, as if it’s not aware that your Zoom call is turning into a pixelated nightmare.

2. AI Will Write My Emails (But Not Like I Thought)

We all know that one perfect email template for every situation – and AI promises to write emails for you, saving time and energy. But the reality? AI writes an email that sounds like it’s trying to sell you a timeshare. You ask it to be polite and professional, and it ends up calling your boss “bro” while suggesting a new business idea called "Extreme Lawn Mowing." Yeah, AI, that's not quite what we meant.

3. The Future of Self-Driving Cars (Or "The Future of Panic Attacks")

Remember when AI self-driving cars were supposed to be our salvation? No more traffic, no more parking tickets – just smooth, stress-free travel. But what happens when your AI-driven car decides it wants to go on a joyride and gets stuck at a red light for 10 minutes? Or when it takes a wrong turn and ends up in a very questionable neighborhood? At least AI’s driving skills make you appreciate good ol' human road rage.

4. AI Will Be Our Creative Genius (As Long As It Doesn’t Misinterpret "Creative")

AI’s ability to generate art, music, and poetry is impressive. But let’s face it, the art AI creates might not be exactly what you imagined. You ask it for "a beautiful landscape," and you get a neon green giraffe riding a unicorn through a storm of spaghetti. It’s creative, sure, but... not quite in the way you’d hoped. AI is that friend who, when asked for a great idea, throws out something so wild that you’re just like, “Well, it’s definitely something.”

5. The AI That Predicts Your Future (And Just Wants You to Buy More Stuff)

AI’s predictive powers are mind-blowing. But for some reason, when AI predicts your future, it always seems to involve the need to buy something. “Hey, based on your recent searches, I think you need a new blender!” No, AI, I don’t. I’m just trying to figure out how to stop procrastinating. But thanks for the suggestion. Your predictive powers could use a little fine-tuning.

6. AI Will Be Our New Best Friend (Until It Doesn't Get Your Jokes)

AI might be able to analyze your tone, understand context, and even crack a joke. But when it’s your turn to make a joke, don’t expect it to laugh along. You say, "Why did the computer go to therapy?" and AI replies, “I'm not sure what you're asking. Did you mean, ‘Why did the router break down?’” AI’s like that one friend who tries to get your humor, but can’t quite land the punchline. Cute, but awkward.

In conclusion, while AI is definitely making strides in some pretty amazing areas, let’s not put all our hopes in the robot basket just yet. It might be able to do some cool stuff, but when it comes to solving all of humanity’s problems, we’ve got to admit: it’s still figuring out the basics. So, next time AI tells you it's going to revolutionize your life, just remember: sometimes it’s not going to get your email tone or figure out why the Wi-Fi’s down.
`
    },
    {
      id : "5",
      image : "/tech.jpeg",
      Date : "December 27,2024",
      published : "Fiza Rafakat",
      title : "Tech in 2050: What We Think Will Happen vs. What Actually Will",
      content : `When we look to the future, it's easy to imagine a world full of flying cars, smart homes that cook dinner for you, and robots that do all the things we really don’t want to do—like folding laundry (seriously, AI, why haven’t you nailed this yet?). But as we move forward, the future doesn’t always look like the Jetsons. Let's take a lighthearted look at what we thought tech in 2050 would be like—and what we can realistically expect.
What We Thought Would Happen: Flying Cars Everywhere! 🚗✈️

Remember when we were promised flying cars in 2020? We were all ready to ditch the morning traffic jams and soar above the clouds in our shiny new hovercrafts. But instead, we got electric scooters and the occasional drone delivering our online orders.

Reality Check: While electric flying cars might be in the works (we're talking a very slow work in progress), they’re still a long way from replacing our beloved sedans. Sorry folks, but it looks like your commute will continue to involve road rage rather than sky rage.
What We Thought Would Happen: Personal Robots at Our Service 🤖

By 2050, we imagined personal robots that could cook, clean, take care of our pets, and even listen to our problems while making us tea. These robots would be as common as microwaves—every home would have one. We’d sit back, relax, and let the robots do the heavy lifting.

Reality Check: We’re still waiting for a robot that can fold laundry without turning it into a wrinkled mess. Sure, smart assistants like Alexa and Google Home can turn off the lights and order pizza for us, but they still don’t understand that we really don’t want pineapple on our pizza. Maybe in 2050, they’ll finally get the message.
What We Thought Would Happen: Virtual Reality Workplaces 🕶️

Remember the promise of a virtual office where we’d just pop on our VR headsets and attend meetings without leaving our couch? Imagine collaborating in a virtual world where our avatars interact with each other, and we never have to look at a traffic jam again!

Reality Check: Okay, VR meetings are a thing now—but let’s be honest, we’d rather not attend them in our pajamas. As much as we’ve embraced remote work, we’re still dealing with Zoom fatigue. But hey, at least no one can see us if we zone out and scroll through memes during a meeting, right?
What We Thought Would Happen: Immortality Through Tech 🧬

In 2050, we were promised that technology would unlock the secret to immortality. We’d upload our minds into the cloud, transfer our consciousness into new bodies, or perhaps even make a deal with some futuristic AI overlord to extend our lives indefinitely. Surely, this would be the era of endless youth!

Reality Check: While technology has made significant strides in healthcare (hello, medical robots and AI doctors), we’re still nowhere near uploading our brains to the cloud. If anything, we’re more likely to see a world of skincare routines and wellness apps that try to slow down the aging process, rather than halt it entirely.
What We Thought Would Happen: Smart Cities, Everywhere 🏙️

We were promised smart cities where everything was connected, where our traffic lights, garbage bins, and even street lamps would be smart enough to talk to each other. These cities would run like well-oiled machines, offering seamless connectivity and improving our lives. Traffic would flow perfectly, trash would never pile up, and our phones would literally tell us when to cross the street.

Reality Check: Well, the smart cities are slowly becoming a reality… sort of. We’ve got smart streetlights, Wi-Fi hotspots, and apps that can help you find a parking spot (when they’re actually working). But, instead of perfect cities, we’ve got the occasional city that’s still debating whether or not to fix that pothole that’s been there for a decade.

The Verdict: While tech in 2050 may not look exactly like we thought it would, one thing’s for sure—we're still on an exciting path toward some mind-blowing innovations. Flying cars, AI butlers, and holographic meetings might be taking longer than expected, but they’re definitely not out of reach. And in the meantime, we’ll keep enjoying the wonders of smart thermostats and the occasional robot vacuum that almost—but not quite—manages to clean the whole house.

So, will 2050 be the year tech solves all our problems? Maybe, maybe not. But it’s definitely going to be fun to watch! Just don’t be surprised if we’re still waiting for that robot to do our laundry.`

    },
    {
      id : "6",
      image : "/cookies.jpeg",
      title : "The Sweet Tale of Cookies in Next.js 🍪 (No, You Can’t Eat These!)",
      content : `Once upon a time on the internet, there lived magical little creatures called cookies. Now, don’t get excited—they’re not chocolate chip, not even oatmeal raisin. These cookies are tiny bits of data stored in your browser. They have one job: to help websites remember who you are. Let’s dive in and explore cookies, their behavior, and their role in Next.js, but I promise, this won’t be boring—maybe slightly crunchy.

What Are Cookies, Anyway? 🤔

Imagine you walk into your favorite café ☕, and the barista remembers your name, your favorite latte, and the fact that you love a slice of pie on Fridays 🍰. That’s what cookies do for websites!

They remember who you are (session cookies) 🧑‍💻.

They keep track of what you’ve done (e.g., what’s in your shopping cart 🛒).

Sometimes, they even try to spy on you for ads (third-party cookies—ugh, those nosy little things 👀).


In Next.js, cookies can be set on the server or client side. They’re like tiny messengers 📬 that keep the conversation going between you and the website.

Cookie Consent Banners: "Do You Accept My Proposal?" 💬

You’ve seen it—a website pops up and practically begs: "Hi, can we please store cookies on your device? Pretty please? With GDPR sprinkles on top 🍩?"

This is because privacy laws like GDPR (in Europe 🌍) and CCPA (in California 🇺🇸) decided that cookies can’t snoop on you without your permission. Websites now have to ask for your consent before dropping their crumbly goodness onto your browser 🍪.

Why does this matter?

If you say "Yes", the website can track your activity (like a well-meaning but clingy friend 🤗).

If you say "No", no cookies will track you, but some features might stop working—like a sad café forgetting your pie on Friday 😢.


Notification Permissions: The Pushy Cousin of Cookies 📨

You’re happily scrolling, and suddenly, BAM—a browser pop-up asks: "Allow us to send you notifications?" Translation: "Can we be that annoying friend who texts you at 2 AM? 📱"

These aren’t cookies but push notifications. If you say "Allow", the website can send updates straight to your browser—news alerts 📰, sale reminders 🛍️, or a desperate cry for attention 📣.

If you click "Block", no hard feelings—they’ll just cry silently in the corner 😔.

Why This All Matters (Besides Making You Laugh 😂)

Cookies help websites remember you 🤖.

Cookie consent banners keep the law happy ⚖️.

Notification permissions let websites slide into your browser’s DMs 📩.


So, the next time a website asks if it can store cookies, think about whether you want a loyal barista ☕ or just some peace and quiet 🧘. And remember, in Next.js, cookies are your trusty sidekicks 🦸‍♂️—if you know how to use them!

Now, how many cookies do you have stored in your browser? Probably enough to share with Santa 🎅.`,
Date : "December 26,2024",
published : "Fiza Rafakat",
    }, 
    {
   content : `Alright, grab your spy glasses 🕶️ and trench coats 🧥 because we’re about to dive into the mysterious world of APIs—which, believe it or not, are the real MVPs of the internet 🌐. If the internet were a heist movie 🎥, APIs would be the clever agent sneaking behind the scenes to make sure everything runs smoothly. Let’s break it down so even your grandma 👵 can say, “Hey, I know what an API is!” (Okay, maybe not that cool, but close enough).

So, What Is an API?

Imagine you’re at a restaurant 🍽️. You, my friend, are the hungry customer 😋. The menu is all the things you could order—data, information, or some other magic ✨. Now, the waiter (that’s your API 🧑‍🍳) comes to take your order. You tell the waiter what you want, and poof ✨, they go into the kitchen (the server 🍳) to fetch it. When the waiter returns, you get your food—data served fresh! 🥗

API = Waiter = Communication between You and the Kitchen (Server)

The API doesn’t make the food 🍔 (or process data), but it knows exactly who to ask and how to bring it back to you. Pretty cool, right? 😎

How Does an API Work?

Here’s how this whole spy operation 🕵️‍♂️ works step by step:

1. You (The Customer): You walk in and ask for something specific (like “Can I get a list of the latest movies? 🎬”).
2. The Waiter (API): The waiter takes your order (your request) and heads to the kitchen 🚶‍♂️.
3. The Kitchen (Server): The kitchen looks through their ingredients (data) 🧑‍🍳 and prepares your request.
4. The Waiter (API) Returns: The waiter comes back with exactly what you asked for (the response)—maybe a nice hot movie list 🍿 served with a side of trailers 🎥.

API’s Fancy Lingo:

Request: This is like you ordering from the menu 📃. You tell the API, “I need a list of all my favorite songs 🎵.”

Response: The API comes back with your order—like, “Here’s your playlist! 🎶” (sometimes with extra toppings if you’re lucky 🍒).

Endpoint: This is the place on the menu where the API picks up your request—think of it like the secret window 🪟 where all orders are taken.

API Types: The Special Agents of the Internet

Let’s meet the crew of special agents 🤵:

1. REST API (The Chill, Cool Agent) 🕶️
REST is simple and laid-back. You make clean requests (usually in URLs 🌐), and it gets the job done.
Example:
You: "Hey REST, can you get me the weather for today? ☀️"
REST: "Sure thing, here’s your forecast! 🌦️"

2. GraphQL (The Data Genius) 🧠
GraphQL only fetches what you need—no extra baggage! 🎯
Example:
You: "GraphQL, give me the current weather but just the temperature 🌡️."
GraphQL: "Done! No wind speed for you today! 🍃"

3. WebSocket (The Party Animal) 🎉
WebSocket loves real-time conversations 🕺. Perfect for live updates like stock prices 📈 or chats 💬.
Example:
You: "WebSocket, tell me if there's a new stock price! 💵"
WebSocket: BZZZZZZZ! "Stock price updated! 📊"

Why Do You Need an API?

It’s simple—without APIs, the internet would be chaos 😱, like trying to run a heist without a getaway car 🚗. Websites and apps wouldn’t talk to each other or fetch data. APIs are the connectors 🔌 that keep everything working like a well-oiled machine ⚙️.

API Example in Real Life (Because We All Love Pizza 🍕)

Let’s say you want to order a pizza online 📱:

1. You (The Customer): Open your pizza app 🍕.

2. API (The Waiter): You select your pizza 🍕 and place the order.

3. Pizza Restaurant (Server): The restaurant confirms your pizza is ready and sends the info back 🍴.

4. API (The Waiter): The waiter brings you a notification 📩: “Your pizza is on its way!” 🚚

In Conclusion:

So, next time you hear “API,” just picture a super-efficient waiter in a tuxedo 🤵‍♂️, running around fetching data 📦 and making sure your app or website gets what it needs without you lifting a finger ✋. APIs keep the digital world spinning 🌍, like the secret agents of the internet 💻. And remember, they don’t make the data, but they sure know where to find it! 🕵️‍♀️

Now, go enjoy your pizza 🍕 and data 📊—delivered fast and fresh by your trusty API agent! 🚀
`,
   id : "7",
   title : "What’s an API? The Secret Agent of the Internet 🕵️‍♂️",
   Date : "December 26,2024",
   published : "Fiza Rafakat",
   image : "/api.jpeg"
    },
    {
   id : "8",
   title : "What’s a CDN? (The Internet’s Pizza Delivery Guy 🍕)",
   content : `Alright, buckle up, because we’re about to make one of the nerdiest internet concepts as fun as ordering a pizza! 🍕 A CDN (Content Delivery Network) is like the ultimate pizza delivery system for your website content—fast, efficient, and always ready to serve piping hot data to users.So, What Is a CDN?

Imagine you run a pizza chain 🍕, and your only kitchen is in New York 🗽. Someone in Karachi orders a pizza. By the time it gets there, it’s cold, soggy, and might as well be a frisbee 🥏. That’s what happens when your website hosts content (like images, videos, or scripts) from a single server—it’s sloooow 🐌 for users far away.

Enter the CDN 🌍, the superhero delivery network 🦸‍♂️ with multiple kitchens (a.k.a. servers) spread across the globe 🌎. Now, no matter where your user is—Karachi, Tokyo 🗼, or Timbuktu—they get their pizza (or web content) from the nearest kitchen, hot and fresh 🔥.

How Does a CDN Work?

Let’s break it down like a pizza order 🍕:

1. Your Website (The Pizza Chef 👨‍🍳):
You upload your content—images, videos, stylesheets—to a CDN. This is like prepping all the ingredients for your pizzas 🍅🧀.

2. CDN Servers (The Branches 🏬):
The CDN copies your content and stores it in multiple locations worldwide 🌍. These are called edge servers (fancy word for local pizza outlets 🍕).

3. The User (The Hungry Customer 😋):
When someone visits your website, they don’t wait for the content to travel across the world 🌏. The CDN delivers it from the nearest server, faster than you can say “extra cheese 🧀.”

Why Do You Need a CDN?

You wouldn’t run a pizza business with just one kitchen, right? 🍕 The same goes for websites! Here’s why CDNs are lifesavers:

Speed 🚀: Faster loading times make users happy 😊 (and less likely to rage-quit your site 😤).
Global Reach 🌍: Users worldwide get the same experience, no matter where they are 🌏.
Traffic Management 🛠️: If one server gets overloaded, another one takes over, so your site doesn’t crash 💥.
Security 🔒: CDNs can block bad guys (like hackers 🕵️‍♂️ and bots 🤖) before they even reach your website.

Funny Example

Let’s say your website is hosting a cat video 🐱 (because the internet loves cats). Without a CDN, a user in Australia 🦘 requests the video, and it travels all the way from your server in the U.S.—slow and laggy 🐢. With a CDN, the video gets served from a nearby server in Sydney 🏙️. The result? A happy user 😄 watching that cat do a backflip 🤸‍♀️ without buffering.

CDN in Real Life

Some big players in the CDN world are Cloudflare 🌩️, Akamai 🌟, and Amazon CloudFront 🛒. These companies ensure that your website is faster than your friend grabbing the last slice of pizza 🍕.

In Conclusion:

A CDN is the internet’s pizza delivery service 🚚. It keeps things fast ⚡, reliable 🔄, and deliciously smooth 🥰 for your users. And just like pizza 🍕, once you start using it, you’ll wonder how you ever lived without it. Hungry for more details? Let me know! 😉`,
   Date : "December 26,2024",
   published : "Fiza Rafakat",
   image : "/CDN-img.jpeg"
    },
    {
  id :"9",
  title :"Why Procrastination is the Secret to Unlocking Your Inner Genius",
  content : `Ah, procrastination – the art of putting things off until the last possible second. We all know it, we’ve all been there, and let’s face it, we’re all experts at it. From leaving a project to the last minute to repeatedly clicking "snooze" on your alarm, procrastination is like that comfortable old hoodie that we just can’t quit. But what if we told you procrastination is secretly a superpower that can unleash your inner genius?

Here’s a radical thought: maybe procrastination is not as much of an enemy as it’s cracked up to be. Instead of fighting it, let’s understand why it might actually work in your favor!
1. The Pressure Cooker Effect 🕰️

Procrastination is like a pressure cooker. You throw everything inside, close the lid, and wait for it to build up. Eventually, the pressure becomes too much, and the brilliance bursts out in the form of last-minute creativity. Need proof? Think about the time you wrote that essay in one night and somehow ended up getting an A. Who else could pull that off other than the procrastination experts? You get the job done – and sometimes, it’s the best work you’ve ever done.
2. The Power of Reflection 🔍

When you put things off, your subconscious goes to work. You might be avoiding the task, but your brain is still running in the background, thinking about it. This delayed process leads to some of the best ideas. You see, procrastinators don’t just sit around doing nothing; we’re actually letting our minds wander into that creative zone that helps us come up with better solutions than if we rushed the task right away.
3. The Motivation of a Deadline ⏳

There’s something magical about deadlines. They create a sense of urgency and trigger your "let’s get this done" mode. The closer the deadline gets, the faster your brain goes into full throttle. Procrastination thrives in this environment. So, instead of seeing procrastination as a negative, consider it a catalyst that helps you perform better under pressure.
4. The Secret to Finding Hidden Gems 💎

Procrastination allows you to avoid perfectionism. When you rush to finish something, you’re less likely to be bogged down by tiny details. Instead, you end up focusing on the core of the project, uncovering creative solutions that might not have appeared if you had been obsessing over the minor stuff. So, procrastination might actually help you focus on what really matters—those hidden gems of ideas.
5. The Thrill of Last-Minute Inspiration ⚡

Let’s not forget the adrenaline rush of working on something at the eleventh hour. It’s like being in a movie montage where everything falls into place, and the clock is ticking down. The intensity brings out the best in us. Procrastination, in this case, becomes your trusty sidekick, pushing you to think fast and act even faster, all while the clock is ticking.
How to Embrace Procrastination (Without Feeling Guilty)

    Accept Your Procrastinator Nature: Don’t fight it. Procrastination is a part of who you are, and it’s okay. Embrace it as a tool that helps you think creatively.

    Give Yourself Deadlines: If you love the rush, set mini-deadlines throughout your project to replicate that last-minute energy.

    Take Breaks: Instead of mindlessly scrolling through social media, allow yourself to daydream or let your mind wander. You might come up with your best ideas when you’re not trying to be productive.

    Know When to Stop Procrastinating: While procrastination can be a helpful motivator, don’t let it consume you. Recognize when it’s time to buckle down and get serious about the task.

In Conclusion:

Procrastination isn’t a curse; it’s a mindset shift. It’s about learning to let go of the pressure, giving yourself space to breathe, and allowing your mind the freedom to create. So the next time you’re putting off a task, don’t panic. Relax. You’re actually just giving your genius a little more time to catch up with you.

After all, some of the best things in life—whether it’s a last-minute idea or a sudden burst of creativity—come when you least expect them.`,
  Date : "December 26,2024",
  published : "Fiza Rafakat",
  image : "/procrastination.png"
    }
    
]

interface Comment {
  showActions: undefined | boolean;
  _id: string;
  _type: string;
  name: string;
  email: string;
  comment: string;
  createdAt: string;
  blogId: string; // Ensure blogId is always a string
}

const Page = () => {

  useEffect(()=>{
    AOS.init({
       easing : "ease-out-back",
       duration : 1200,
       delay : 100 ,
       mirror : true ,
       anchorPlacement : "bottom-bottom",
       offset : 160,
    }) ;
    AOS.refresh()
    },[])

  const { id } = useParams();

  const Blog = blogs.find((blog) => blog.id === id); 

  // Comment Work 
  const [comments, setComments] = useState<Comment[]>([]); 
  const [newComment, setNewComment] = useState(''); 
  const [editCommentId, setEditCommentId] = useState<string | null>(null);
  const [editedComment, setEditedComment] = useState(''); 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [popupCommentId, setPopupCommentId] = useState<string | null>(null);
  const [inputEmail, setInputEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchComments = async () => {
      const data = await client.fetch(
      `  *[_type == "comment" && blogId == $blogId]{
          _id,
          name,
          email,
          comment,
          createdAt,
          blogId
        }`,
        { blogId: id }
      );
  
      // Sanitize the data if needed
      const formattedData = data.map((comment: Comment) => ({
        ...comment,
        blogId: comment.blogId as string, 
      }));
  
      setComments(formattedData); 
    };
  
    fetchComments();
  }, [id]);


  if (!Blog) {
    return <p>Blog not found!</p>;
  }

  // Add Comment
  const handleAddComment = async () => {
    if (email && newComment.trim()) {
      try {
        const commentData = {
          _type: 'comment',
          name: name || 'Anonymous',
          email: email || 'example@email.com',
          comment: newComment,
          blogId: id,
          createdAt: new Date().toISOString(),
        };

        // Send data to your backend or API to create the comment
        const result = await client.create(commentData);

        console.log('New comment created:', result); // Inspect the result structure

        // Fetch Comments again after adding
        const fetchComments = async () => {
          const data = await client.fetch(
            `*[_type == "comment" && blogId == $blogId]{
              _id,
              name,
              email,
              comment,
              createdAt,
              blogId
            }`,
            { blogId: id }
          );
          
          const formattedData = data.map((comment: { blogId: Comment ; }) => ({
            ...comment,
            blogId: comment.blogId,
          }));

          setComments(formattedData);
        };

        fetchComments(); // Refetch comments
        setNewComment(''); // Clear the input field after adding the comment

      } catch (error) {
        console.error('Error adding comment:', error);
      }
    } else {
      console.error("Comment or email is missing!");
    }
  };
    
// Handle deleting a comment
const handleDeleteComment = async (id: string) => {
    try {
      // Delete comment from Sanity
      await client.delete(id);

      // Remove the deleted comment from the state
      setComments(comments.filter((comment) => comment._id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
};

// Handle editing a comment
const handleEditComment = (commentId: React.SetStateAction<string | null>, commentText: React.SetStateAction<string>) => {
      setEditCommentId(commentId);
      setEditedComment(commentText);
};

// FOr Checking who can edit or delete 
const handleVerifyEmail = (comment: Comment) => {
  setPopupVisible(true);
  setPopupCommentId(comment._id);
  setInputEmail(""); // Reset email input field
  setErrorMessage(""); // Clear any previous error
};

const verifyEmail = () => {
  const selectedComment = comments.find((c) => c._id === popupCommentId);

  // Check if selectedComment is undefined before accessing its properties
  if (!selectedComment) {
    setErrorMessage("Comment not found, please try again.");
    return; // Exit early if the comment is not found
  }
  // setPopupVisible(false);
  if (selectedComment.email === inputEmail.trim()) {
    // Update the comment actions to show edit/delete options
    setComments((prev) =>
  prev.map((c) =>
    c._id === popupCommentId
      ? { ...c, showActions: true }
      : { ...c, showActions: c.showActions ?? false } // Default to false if not set
  )
);

    setPopupVisible(false);
  } else {
    setErrorMessage("Hey, you can only edit or delete your own comment!");
  }
};

const handleSaveEditedComment = async () => {
  if (editCommentId) {
    try {
      // Update the edited comment in Sanity
      const updatedComment = await client
        .patch(editCommentId)
        .set({ comment: editedComment })
        .commit();

      // Ensure that _type is added to the updated comment data
      const updatedCommentData: Comment = {
        _id: updatedComment._id,
        _type: 'comment', // You can set this manually to match your Sanity schema
        name: updatedComment.name,
        email: updatedComment.email,
        comment: updatedComment.comment,
        createdAt: updatedComment.createdAt,
        blogId: updatedComment.blogId,
        showActions: undefined
      };

      // Update the state with the new comment
      setComments(
        comments.map((comment) =>
          comment._id === editCommentId ? updatedCommentData : comment
        )
      );

      // Reset edit states
      setEditCommentId(null);
      setEditedComment('');
    } catch (error) {
      console.error('Error saving edited comment:', error);
    }
  }
};


return (
<div className="bg-[#f3f1f6]">
     <div>
     <Header />
      <div className="md:w-[600px] sm:w-[500px] min-[500px]:w-[450px] min-[400px]:w-[380px] min-[300px]:w-[280px] w-[200px] mx-auto  sm:mt-8 mt-5 md:mt-12 text-gray-900 mb-16">
        <h2 className="text-center sm:text-3xl text-2xl font-bold ">{Blog.title}</h2>
        <div className="md:my-5 my-3">
          <img src={Blog.image} alt={Blog.title} className='w-full md:h-[350px] sm:h-[320px] min-[450px]:h-[300px] h-[250px]' data-aos="zoom-in" />
        </div>
        <div>
          <p style={{ whiteSpace: 'pre-line', lineHeight: '1.5em' }}>{Blog.content}</p>
          <div className="my-5 space-y-1 sm:text-lg italic ">
            <p>
              Written By{' '}
              <span className="text-gray-800 underline font-medium underline-offset-2">
                {Blog.published}
              </span>
            </p>
            <p>
              Published On{' '}
              <span className="text-gray-800 underline font-medium underline-offset-2">
                {Blog.Date}
              </span>
            </p>
       </div>
    <div className="comment w-full border border-[#113946]/30 shadow-[#113946]/50 shadow-md rounded-xl p-5 ">
            <div className="flex justify-between">
              <p className="text-lg font-semibold tracking-wide">Comments</p>
              <p className="flex items-center gap-2 text-lg">
                <FaRegComment className="size-6 text-[#113946]" />
                <span className="text-lg">{comments.length}</span>
              </p>
     </div>
             {/* Comment Section */}
            <div className="mt-5 flex flex-col gap-4 ">
          <div className='flex justify-around w-[95%] gap-4'>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-200 border-gray-100 border placeholder:text-gray-600 min-[400px]:text-base text-sm w-full min-[400px]:px-4 px-2 py-2 min-[400px]:rounded-xl rounded-md outline-none focus:border-[#113946] focus:border "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="focus:border-[#113946] border-gray-100 border focus:border bg-gray-200 w-full placeholder:text-gray-600 min-[400px]:text-base text-sm min-[400px]:px-4 px-2 py-2 min-[400px]:rounded-xl rounded-md outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
         <div className='flex gap-4 items-center'>
         <textarea
            placeholder="Add a Comment"
            className="focus:border-[#113946] border-gray-100 border focus:border placeholder:text-gray-600  bg-gray-200 w-[90%] min-[400px]:text-base text-sm min-[400px]:px-4 px-2 py-2 min-[400px]:rounded-xl rounded-md outline-none"
            value={newComment} rows={5} cols={10}
            onChange={(e) => setNewComment(e.target.value)}
          />
              <BsSend
                className={`min-[500px]:size-8 size-6  cursor-pointer ${newComment.trim() ? 'text-[#113946]' : 'text-gray-500'}`}
                onClick={handleAddComment}
              />
         </div>
            </div>

          {/* Displaying Comments */}

          <div className="mt-5 space-y-4 relative">
  {comments.map((comment) => (
    <div
      key={comment._id}
      className="flex justify-between flex-col items-start border-b pb-2 text-gray-800 relative italic tracking-wide"
    >
       <Sheet>
      {editCommentId === comment._id ? (
        <div className="flex flex-col items-center h-[200px] w-full">
          <textarea
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            className="border-none bg-gray-200 px-3 py-1 rounded-lg w-[90%] h-full  outline-none"
          />
          <button
            onClick={handleSaveEditedComment}
            className="flex justify-center gap-2 items-center text-green-600"
          >
            <IoMdCheckmark className='text-[1.5rem]' /> Save
          </button>
        </div>
      ) : (
        <>
          {/* Profile Picture with Initial */}
          <div className="flex max-[300px]:flex-col flex-row max-[300px]:items-center items-start justify-start sm:gap-3 gap-1">
            <div className="flex-none w-10 h-10 max-[400px]:w-8 max-[400px]:h-8 flex items-center justify-center rounded-full bg-[#113946]  text-white font-bold">
              {comment.name.charAt(0).toUpperCase()}
            </div>
            <div className='w-[90%] bg-gray-200 rounded-xl shadow-md px-5 py-3 max-[400px]:px-2 max-[400px]:py-2'>
            <h3 className='text-lg max-[300px]:text-base font-semibold'>{comment.name}</h3>
            <p className="flex-1 max-[400px]:text-sm">{comment.comment}</p>
            </div>
          </div>

          {/* Conditionally render Edit/Delete after email verification */}
          {comment.showActions ? (
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => handleEditComment(comment._id, comment.comment)}
                className="text-[#113946] text-[1.5rem]"
              >
                <BsPencil />
              </button>
              <button
                onClick={() => handleDeleteComment(comment._id)}
                className="text-red-500 text-[1.5rem]"
              >
                <BsTrash />
              </button>
            </div>
          ) : (
           <div className='absolute top-2 right-2 max-[300px]:top-12 max-[300px]:right-0'>
             <div
              onClick={() => handleVerifyEmail(comment)}
              className="text-[#113946] "
            >
           <SheetTrigger ><IoMdMore className='text-[1.5rem]'/></SheetTrigger>
            </div>
           </div>
          )}
        </>
      )}

      {/* Email verification popup */}
      {popupVisible && (
        <div className="">
          <SheetContent side="bottom">
            <SheetHeader className='flex flex-col items-center '>
              <SheetTitle className='font-bold text-lg text-gray-900'>Verify Your Email</SheetTitle>
              <SheetDescription>
                Enter your email to verify and gain access to editing and deleting.
              </SheetDescription>
            </SheetHeader>

              {/* Email Input Form */}
              <div className="grid gap-4 py-4">
                <div className="flex flex-col items-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-lg w-72 outline-none mb-3"
                  />
                  {errorMessage && (
                    <p className="text-sm text-red-500 mb-3">{errorMessage}</p>
                  )}
                  <button
                    onClick={verifyEmail}
                    className="bg-[#113946] text-white px-6 py-2 rounded-lg hover:bg-[#0c252e]"
                  >
                    Verify Email
                  </button>
                </div>
              </div>
            </SheetContent>
        </div>
      )}
    </Sheet>
    </div>
  ))}
</div>
      </div>
    </div>
  </div>
     </div>

     <Footer />

</div>
  );
};
export default Page;