## About This Project

PhoenixHacks is an 24-hour [Hackathon](https://en.wikipedia.org/wiki/Hackathon) hosted at [Florida Polytechnic University](https://en.wikipedia.org/wiki/Florida_Polytechnic_University).

## How It's Made

These following features are the requirements we laid out for the live site.

- **Countdown Timer** - A JavaScript interval that calculates the remaining time every second.
- **Announcements** - A real-time view of the discord announcements channel accomplished using sockets, the PhoenixHacks API, and a discord bot.
- **Important Links** - (Required Links) Discord Invite & Devpost.
- **Helpful Resources** - (Optional Links) GitHub Awesomes and helpful resources.
- **Wi-Fi Information**
- **Easy to Follow & Updated Schedule** - Conditional rendering combined with event filters.
- **Maps** - A top down view to help hackers find their way around.
- **A fitting theme and easy to navigate layout** -

### Countdown Timer

![img](https://jwmcgettigan.com/assets/projects/phoenixhacks-live/PhoenixHacksTimer.png)

This feature is essentially this [MangoHacks live site timer](https://github.com/MangoHacks/mango2019-live/blob/master/src/Components/Header.js) with modified formatting.

### Schedule

![img](https://jwmcgettigan.com/assets/projects/phoenixhacks-live/PhoenixHacksSchedule.png)

This feature was made from scratch with design inspiration from [TreeHacks live site schedule](https://github.com/TreeHacks/live-schedule).

All of the event data is stored in an array as JavaScript objects in an [events.js](https://github.com/PhoenixHacks/2020-live-web/blob/master/src/services/events.js) file.

Here is an example of an event's data:

```json
{
    "name": "Ice Breaker",
    "date": "2020-01-25",
    "time": {
        "start": "12:00:00",
        "end": "13:00:00",    
    },
    "tags": ["logistics"],
    "location": "Commons",
    "description": "Meet new people and find a team."
}
```

A future goal is to have the events data be accessible through the PhoenixHacks API for better modularity and easier modifications.

### Announcements

![img](https://jwmcgettigan.com/assets/projects/phoenixhacks-live/PhoenixHacksAnnouncements.png)

This feature is a real-time view of the discord announcements channel accomplished using sockets, the PhoenixHacks API, and a discord bot.

![img](https://jwmcgettigan.com/assets/projects/phoenixhacks-live/PhoenixHacksDiagram.svg)

This diagram shows the dataflow of messages from the ***announcements\*** channel on the PhoenixHacks Discord server all the way to the user's Announcements component of the web app.

The Discord bot (which was promptly named PhoenixBot) was made using [discord.js](https://discord.js.org/).

The socket management was done using [socket.io](https://socket.io/).

For the sake of convenience, PhoenixBot and the socket.io socket were hosted on the same server as a Heroku app at: https://phoenixhacks-api.herokuapp.com/

The reason that it was hosted on Heroku and not on a service that would allow the use of [api.phoenixhacks.com](http://api.phoenixhacks.com/) was because it was the only service that we found at the time that allowed the continuous use of a socket server, for free, without any problems.