// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import DocCardList from '@theme/DocCardList';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// This is a simplified example; you'd need to ensure these paths and descriptions are correct
const homepageCategoryCards = [
  {
    type: 'category',
    label: 'Products & Use Cases',
    href: '/docs/products-and-use-cases/products', // We need to link to the first item in the category...
    description: 'Discover our product suite and how it can be deployed.',
  },
    {
    type: 'category',
    label: 'Technical Documentation',
    href: '/docs/technical-documentation/anapaya-appliance',
    description: 'In-depth guides for engineers and operators.',
  },
  {
    type: 'category',
    label: 'Understanding SCION',
    href: '/docs/understanding-scion/core-concepts',
    description: 'Learn the fundamentals of SCION technology.',
  },
  {
    type: 'category',
    label: 'Glossary & FAQ',
    href: '/docs/glossary-and-faq/glossary',
    description: 'Find answers to common questions and terms used.',
  },

];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className="container" style={{padding: '2rem 0'}}>
          <h1>Welcome to the Anapaya Knowledge Base</h1>
          <p>Explore our documentation:</p>
          <DocCardList items={homepageCategoryCards} />
        </div>
      </main>
    </Layout>
  );
}
