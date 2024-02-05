var xhr = new XMLHttpRequest();
var url = 'health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles; 
    var articlesDiv = document.getElementById("articles");

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
};

xhr.send();


var xhrNews = new XMLHttpRequest();
var newsURL = './news_articles.json';

xhrNews.open('GET', newsURL, true);

xhrNews.responseType = 'json';

xhrNews.onload = function() {
    var articles = xhrNews.response.articles;
    var newsDiv = document.getElementById('news-articles');

    articles.forEach(function(article) {
        var newsArticleDiv = document.createElement('div');
        newsArticleDiv.classList.add('articles')

        var title = document.createElement('h2');
        title.textContent = article.title;

        var category = document.createElement("span");
        category.innerHTML = `<b>Category</b>: ${article.category}<br>`;

        var author = document.createElement("span");
        author.innerHTML = `<b>Author</b>: ${article.author}`;
        
        var publishedDate = document.createElement("span");
        publishedDate.innerHTML = `<br> <b>Date</b>: ${article.published_at}`;

        var description = document.createElement("p");
        description.textContent = article.description;

        
        newsDiv.appendChild(title);
        newsDiv.appendChild(category);
        newsDiv.appendChild(author);
        newsDiv.appendChild(publishedDate);
        newsDiv.appendChild(description);
    })
    
}

xhrNews.send();