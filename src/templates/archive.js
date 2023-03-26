import { Helmet } from 'react-helmet';
import Kategorie from 'components/komponenty/Kategorie';
import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Link from 'next/link';
import { getAllCategories, categoryPathBySlug } from 'lib/categories';
import Section from 'components/Section';

import PostCard from 'components/PostCard';
import Pagination from 'components/Pagination/Pagination';

import React from 'react';


const DEFAULT_POST_OPTIONS = {};

export default function TemplateArchive({
  categories,
  title = 'Archive',
  Title,
  posts,
  postOptions = DEFAULT_POST_OPTIONS,
  slug,
  metadata,
  pagination,

  
}) {
  const { metadata: siteMetadata = {} } = useSite();

  if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
    metadata.title = `${title} - ${siteMetadata.title}`;
    metadata.og.title = metadata.title;
    metadata.twitter.title = metadata.title;
  }

  const helmetSettings = helmetSettingsFromMetadata(metadata);

  return (
    <Layout>
      <Helmet {...helmetSettings} />

      <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />

    

      
    <div className='flex flex-row px-2 mt-[8rem] '>
      <div > <ul >
            {categories.map((category) => {
              return (
                <li key={category.slug}>
                  <Link href={categoryPathBySlug(category.slug)}>
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul></div>
  
         <div >
          {Array.isArray(posts) && (
            <>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {posts.map((post) => {
                  return (
                    <li key={post.slug}>
                      <PostCard post={post} options={postOptions} />
                    </li>
                  );
                })}
              </ul>
              {pagination && (
                <Pagination
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              )}
            </>
          )}
          |</div>
          </div>
     
    </Layout>
  );
}
