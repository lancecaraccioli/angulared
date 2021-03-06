module.exports = {
  'root': './src/app',
  'path': {
    'bower_components': '<%= source.root %>/bower_components'
  },
  'html': {
    'bower_components': ['<%= source.path.bower_components %>/**/*.html'],
    'window': ['<%= source.root %>/**/*.html']
  },
  'scripts': {

    'bower_components': [
      '<%= source.path.bower_components %>/**/jquery.min.js',
      '<%= source.path.bower_components %>/**/angular.min.js',
      '<%= source.path.bower_components %>/**/!(bootstrap|sizzle).min.js'
    ],
    'background': ['<%= source.root %>/background.js'],
    'ours': [
      '<%= source.root %>/app.js',
      '<%= source.root %>/**/info-service.js',
      '<%= source.root %>/!(bower_components)*/navbar.js',
      '<%= source.root %>/!(bower_components)*/theme.js',
      '<%= source.root %>/!(bower_components)*/showcase.js',
      '<%= source.root %>/!(bower_components)*/*service.js',
      '<%= source.root %>/!(bower_components)*/*controller.js'
    ],
    'app': [
      '<%= source.scripts.bower_components %>',
      '<%= source.scripts.ours %>'
    ],
    'tests': [
      '<%= source.root %>/**/*_test.js'
    ]

  },
  'styles': {
    'window': ['<%= source.root %>/**/*.scss']
  },
  'images': {
    'window': ['<%= source.root %>/**/*.{gif,jpg,png}']
  }
};
