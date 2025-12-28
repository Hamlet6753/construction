module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/icons": "icons" });

  // ROOT static files
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy("src/favicon.png");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });

  eleventyConfig.addFilter("truncate", (str = "", len = 180) => {
  if (!str) return "";
  const s = String(str);
  return s.length > len ? s.slice(0, len).trim() + "…" : s;
});

  
      // ✅ Date filter for Nunjucks: {{ post.date | date("uk-UA") }}
  eleventyConfig.addFilter("date", (value, locale = "uk-UA") => {
    const d = value instanceof Date ? value : new Date(value);
    if (isNaN(d)) return value;

    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(d);
  });

  eleventyConfig.addCollection("blog", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
