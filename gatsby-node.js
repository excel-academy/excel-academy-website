/* eslint-disable no-console */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise(async (resolve, reject) => {
    const markdownQuery = `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    `;
    const markdownResults = await graphql(markdownQuery);
    if (markdownResults.errors) {
      markdownResults.errors.forEach(e => console.error(e.toString()));
      return reject(markdownResults.errors);
    }

    const pages = markdownResults.data.allMarkdownRemark.edges;
    pages.forEach((edge) => {
      const { id, fields, frontmatter } = edge.node;
      if (frontmatter.templateKey) {
        createPage({
          path: fields.slug,
          tags: frontmatter.tags,
          component: path.resolve(`src/templates/${String(frontmatter.templateKey)}.js`),
          // additional data can be passed via context
          context: {
            id,
          },
        });
      }
    });

    return resolve();
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // create the slug field using the helper method.
  // This will be used by graphql and subsequently to create the page.
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
