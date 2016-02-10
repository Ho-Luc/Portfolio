function GenerateProjects(opts) {
  this.title = opts.title;
  this.url = opts.url;
  this.repoUrl = opts.repoUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

GenerateProjects.all = [];

GenerateProjects.prototype.toHtml = function () {
  var template = Handlebars.compile($('#project-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'Published ' + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

GenerateProjects.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  rawData.forEach(function(ele) {
    GenerateProjects.all.push(new GenerateProjects(ele));
  });
};

GenerateProjects.fetchAll = function() {
  if(localStorage.rawData) {
    $.ajax({
      type: 'HEAD',
      url: 'data/projects.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
        } else {
          GenerateProjects.loadAll(JSON.parse(localStorage.rawData));
          projectView.initIndexPage();
        }
      }
    });
  } else {
    $.getJSON('data/projects.json', function(data) {
      localStorage.setItem('rawData', JSON.stringify(data));
    });
    $.ajax({
      type: 'HEAD',
      url: 'data/projects.json',
      success: function(data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
        } else {
          GenerateProjects.loadAll(JSON.parse(localStorage.rawData));
          projectView.initIndexPage();
        }
      }
    });
    GenerateProjects.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  }
};
