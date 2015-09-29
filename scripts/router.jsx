var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var SmallApp = require('./components/SmallApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var StoriesPage = require('./components/stories/StoriesPage.react.jsx');
var StoryPage = require('./components/stories/StoryPage.react.jsx');
var StoryNewPage = require('./components/stories/StoryNewPage.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');


module.exports = (
    <Route name="app" path="/" handler={SmallApp}>
        <Route name="login" path="/login" handler={LoginPage} />
        <Route name="signup" path="/signup" handler={SignupPage} />
        <Route name="stories" path="/stories" handler={StoriesPage} />
        <Route name="new-story" path="/story/new" handler={StoryNewPage} />
        <Route name="story" path="/story/:storyId" handler={StoryPage} />
    </Route>
);
