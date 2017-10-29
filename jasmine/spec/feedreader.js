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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('Urls are defined', function() {
           for (x = 0; allFeeds.length > x; x++){
           expect(allFeeds[x].url).toBeDefined();
         }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Names are defined and filled in', function() {
           for (x = 0; allFeeds.length > x; x++){
             expect(allFeeds[x].name).toBeDefined();
             expect(allFeeds[x].name).not.toBe('');
           }
         });

    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function(){

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('Make sure body has Menu-Hidden Class', function(){
           expect(document.body.className).toContain('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          var menuLink = document.querySelector(".menu-icon-link");

          it('Make sure menu displays when clicked', function(){
            menuLink.click();
            expect(document.body.className).not.toContain('menu-hidden');
            menuLink.click();
            expect(document.body.className).toContain('menu-hidden');
          });
          });

    /* TODO: Write a new test suite named "Initial Entries" */
describe('Initial Entries', function(){

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
           loadFeed(0, done);
         });

         it('Make sure feed has at least one entry',function(){
           expect(document.getElementsByClassName('entry').length).toBeGreaterThan(0);
         });
       });

    /* TODO: Write a new test suite named "New Feed Selection" */
    //Async test was based on a blog post by 'https://volaresystems.com/blog/post/2014/12/09/Testing-async-calls-with-Jasmine'
describe('New Feed Selection', function(){

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var currentFeed;
         beforeEach(function(done){
           currentFeed = document.querySelector('.feed').innerHTML;
           loadFeed(0, done);
           done();
         });

         var loadedFeed;
         it('Make sure feed content has changed',function(){
           loadedFeed = document.querySelector('.feed').innerHTML;
           expect(currentFeed).not.toMatch(loadedFeed);
         });
         });
});
