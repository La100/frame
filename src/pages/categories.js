import Link from 'next/link';
import { Helmet } from 'react-helmet';

import useSite from 'hooks/use-site';

import { WebpageJsonLd } from 'lib/json-ld';
import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import { getAllCategories, categoryPathBySlug } from 'lib/categories';
export default function Categories({ categories }) {
  const { metadata = {} } = useSite();
  const { title: siteTitle } = metadata;
  const title = 'Kategoria';
  const slug = 'kategoria';
  let metaDescription = `Read ${categories.length} categories at ${siteTitle}.`;

  return (
    <Layout>
      <Helmet>
        <title>Categories</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>

      <WebpageJsonLd title={title} description={metaDescription} siteTitle={siteTitle} slug={slug} />

      <Header>
        <Container>
          <h1>Categories</h1>
        </Container>
      </Header>

      <Section>
        <Container>
         
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
            {categories.map((category) => {
              return (
                <li key={category.slug}>
                  <Link href={categoryPathBySlug(category.slug)}>
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { categories } = await getAllCategories();

  return {
    props: {
      categories,
    },
  };
}
