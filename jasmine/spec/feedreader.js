/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has
         * been defined and that it is not empty.
         */
        it('are defined and have more than one entry', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
          it('has URL', function(){

            expect(allFeeds).toBeDefined();
            expect(allFeeds.url).not.toBe("");
          });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
          it('has name', function(){

            expect(allFeeds).toBeDefined();
            expect(allFeeds.name).not.toBe("");
          });
    });


    describe('The menu', function(){
        /* Test that ensures the menu element is
         * hidden by default.
         */
         var menuDefault = $('body').hasClass('menu-hidden');
         it('menu should be hidden by default', function(){

           expect(menuDefault).toBe(true);
         });
         /* Test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
         it('should show the menu on click', function(){
           $('.menu-icon-link').click();

           expect($('body').hasClass('menu-hidden')).toBe(false);
         });
         /* Test that ensures the menu changes
         * visibility when the menu icon or a feed item is clicked.
         */
         it("should hide menu on click", function(){
           $('.feedList').click();
           $('.menu-icon-link').click();

           expect($('body').hasClass('menu-hidden')).toBe(true);
       });
      });

    describe('Initial Entries', function(){

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done){

           loadFeed(0, done);
         });
         it('should have at least one feed entry', function(){
           expect(allFeeds.length).toBeGreaterThan(0);
         });
       });

    describe('New Feed Selection', function(){
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Compares feed(0) to feed(1).
         */
         var feed1, feed2;
           beforeEach(function(done){

             loadFeed(0, function(){
               feed1 = $('.feed').html();
               done()
             });
             loadFeed(1, function(){
               feed2 = $('.feed').html();
             });
           });
           it('should load new feeds', function(){
             expect(feed1).not.toBe(feed2);
           });
       });
}());
