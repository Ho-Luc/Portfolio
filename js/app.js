var projectsArray = [];

function GenerateProjects(opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.repoUrl = opts.repoUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

GenerateProjects.prototype.toHtml = function () {
  var $newProject = $('article.template').clone();

  $newProject.find('header > h1').html(this.title);
  $newProject.find('.site-url').html('<a href="' + this.url + '">' + 'Site Deployment' + '</a>');
  $newProject.find('.repo-url').html('<a href="' + this.repoUrl + '">' + 'Project Repo' + '</a>');
  $newProject.find('.project-body').html(this.body);
  $newProject.find('.publish-date').html('Publication date: ' + this.publishedOn);

  $('article').removeClass('template');

  return $newProject;
};

projects.forEach(function(ele) {
  projectsArray.push(new GenerateProjects(ele));
});

projectsArray.forEach(function(a) {
  $('#project-articles').append(a.toHtml());
});
