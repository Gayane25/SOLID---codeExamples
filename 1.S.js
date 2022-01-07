//Single Responsibility Principle

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }
  update(text) {
    this.text = this.text;
    this.modified = true;
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news;
  }
  html() {
    return `
    <div class = "news">
    <h1>${this.news.title}</h1>
    <p>${this.news.text}</p>
    </div>
    
    `;
  }
  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified,
      },
      null,
      1
    );
  }
  xML() {
    return `
      <news>
      <title>${this.news.title}</title>
      <text>${this.news.title}</text>
      </news>
      `;
  }
}

const printer = new NewsPrinter(new News('Pashinian', 'new constitution'));
console.log(printer.html());
console.log(printer.xML());
console.log(printer.json());
