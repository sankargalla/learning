var xhr = new XMLHttpRequest();
var url = './news_articles.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;

        var author = document.createElement('h3');
        author.textContent = article.author;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var url = document.createElement('a');
        url.href = article.url;
        url.textContent = 'Click here for more details'
  
        var publishedAt = document.createElement('h3');
        publishedAt.textContent = article.publishedAt;
  
        var content = document.createElement('p');
        content.textContent = article.content;
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(author);
        articleDiv.appendChild(description);
        articleDiv.appendChild(url);
        articleDiv.appendChild(publishedAt);
        articleDiv.appendChild(content);
  
        articlesDiv.appendChild(articleDiv);
      });

      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');
      articleDiv.appendChild(title);

}
xhr.send();