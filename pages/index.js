import React from 'react';
import Layout from '@theme/Layout';
import DocCardList from '@theme/DocCardList';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const homepageCategoryCards = [
  {
    type: 'category',
    label: 'Products & Use Cases',
    href: '/docs/products-and-use-cases/use-cases', // We need to link to the first item in the category...
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
    label: 'Learning Hub',
    href: '/docs/learning-hub/understanding-scion',
    description: 'Learn the fundamentals of Anapaya products and SCION technology.',
  },
  {
    type: 'category',
    label: 'Resources',
    href: '/docs/resources/api',
    description: 'API references, CLI documentation, and more.',
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
