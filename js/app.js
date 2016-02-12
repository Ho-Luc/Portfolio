(function(module) {
  function GenerateProjects(opts) {
    Object.keys(opts).forEach(function(a, idx, keys) {
      this[a] = opts[a];
    }, this);
    //The code below, is there for studying purposes (need to ask TA's) to understand how keys work//
    // this.title = opts.title;
    // this.url = opts.url;
    // this.repoUrl = opts.repoUrl;
    // this.publishedOn = opts.publishedOn;
    // this.body = opts.body;
    // this.img = opts.img;
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
    GenerateProjects.all = rawData.map(function(ele) {
      return new GenerateProjects(ele);
    });
  };

  GenerateProjects.fetchAll = function(viewInit) {
    if(localStorage.rawData) {
      GenerateProjects.loadAll(JSON.parse(localStorage.rawData));
      viewInit();
    } else {
      $.getJSON('data/projects.json', function(rawData) {
        GenerateProjects.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        viewInit();
      });
    }
  };

  module.GenerateProjects = GenerateProjects;
}(window));
