var projectsArray = [];

function GenerateProjects(opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.repoUrl = opts.repoUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

GenerateProjects.prototype.toHtml = function () {
  var template = Handlebars.compile($('#project-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'Published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

projects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projects.forEach(function(ele) {
  projectsArray.push(new GenerateProjects(ele));
});

projectsArray.forEach(function(a) {
  $('#project-articles').append(a.toHtml());
});
