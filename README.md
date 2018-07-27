# RSS Feed-reader testing

You can see this app working at https://rhovell.github.io/feed-reader/

This app has a Jasmine testing suite build environment which allows you to build with confidence, knowing that you can code without breaking your app. It helps to avoid disasters, and saves you hundreds of hours of app testing!

This particular module was designed to test against the functionality of a RSS feed blog.
There are 8 current specs that the app is being tested against (listed below), that ensure that the app runs how it should.
If you choose to install this app (detailed below), you can use the Jasmine test suite to ensure any changes you make, do not interfere with the background coding.

## Tests Included

### RSS Feeds
- are defined
- have URL
- have name

### The Menu
- menu should be hidden by default
- should show the menu on menu-icon click
- should hide menu on menu-icon click or feed item click

### Initial Entries
- should have at least one feed entry

### New Feed Selection
- should load new items as they are added to the feed

## Installation

Download the zip file, or clone this repository to your home folder. Load the index.html file in your browser.
You should have a working blog, complete with Udacity blog posts, and a Jasmine testing suite at the bottom of the page.

If you are interested in testing the feeds, alter the `feedreader.js` file, reload your browser and see what Jasmine says. You can go back and fix the code to correct the errors presented in Jasmine, and then proceed to add further testing suites as you add more features to your app.
If you are interested in editing the feed to include your own RSS feed, you will need to change the URL that the `loadFeed()` function is pointing to in the `app.js` file. Make sure to change the URL's of the items within the `allFeeds` array in this file too. These should point to specific items within your feed.
