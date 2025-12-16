module.exports = function(eleventyConfig) {
  // Pass through static files
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create a collection of blog posts sorted by date
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/*.md").sort((a, b) => {
      return b.date - a.date; // Sort by date, newest first
    });
  });

  // Date formatting filter
  eleventyConfig.addFilter("formatDate", function(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  });

  // Short date filter
  eleventyConfig.addFilter("shortDate", function(date) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleDateString('en-US', options);
  });

  // HTML date string filter (for datetime attributes)
  eleventyConfig.addFilter("htmlDateString", function(date) {
    return new Date(date).toISOString().split('T')[0];
  });

  // Reading time filter
  eleventyConfig.addFilter("readingTime", function(content) {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  });

  // Excerpt filter - get first paragraph
  eleventyConfig.addFilter("excerpt", function(content) {
    const excerpt = content.split("\n\n")[0];
    return excerpt.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
  });

  // Limit filter for arrays
  eleventyConfig.addFilter("limit", function(arr, limit) {
    return arr.slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
