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

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    //Making sure URL is filled in.
    it('Urls are defined', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });

    // Testing for RSS feed names.
    it('Names are defined and filled in', function() {
      for (x = 0; allFeeds.length > x; x++) {
        expect(allFeeds[x].name).toBeDefined();
        expect(allFeeds[x].name).not.toBe('');
      }
    });

  });

  /* TODO: Write a new test suite named "The menu" */
  describe('The Menu', function() {

    //Quick test to see if the menu-hidden class is applied to the body on page load.
    var bodyState = $("body").hasClass("menu-hidden");
    it('Make sure body has Menu-Hidden Class', function() {
      expect(bodyState).toBe(true);
    });

    //A test setup on the menu button to make sure the menu hides itself properly after multiple clicks.
    var menuLink = document.querySelector(".menu-icon-link");

    it('Make sure menu displays when clicked', function() {
      menuLink.click();
      expect($("body").hasClass("menu-hidden")).toBe(false);
      menuLink.click();
      expect($("body").hasClass("menu-hidden")).toBe(true);
    });
  });


  describe('Initial Entries', function() {

    //Making sure the feed has at least one entry by checking for child elements of the .feed element.
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('Make sure feed has at least one entry', function() {
      expect($('.feed > .entry-link > .entry').length).toBeGreaterThan(0);
    });
  });

  //Async test was based on a blog post by 'https://volaresystems.com/blog/post/2014/12/09/Testing-async-calls-with-Jasmine'
  describe('New Feed Selection', function() {

    // This test checks to make sure the feed has changed and added content after its loaded.
    var unloadedFeed = document.querySelector('.feed').innerHTML;
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    var loadedFeed;
    it('Make sure feed content has changed', function() {
      loadedFeed = document.querySelector('.feed').innerHTML;
      expect(unloadedFeed).not.toBe(loadedFeed);
    });
  });
});
