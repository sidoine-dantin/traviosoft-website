import type { SiteContent } from '../types';
import { nav, footer, common, visuals } from './base';
import { home } from './home';
import { jobs } from './jobs';
import { pricing, example, demo, switching, faqPage, about, resources } from './pages';
import { articles } from './articles';
import { glossary } from './glossary';

const content: SiteContent = {
  locale: 'en', nav, footer, common, visuals, home, jobs,
  pricing, example, demo, switching, faqPage, about, resources, articles, glossary
};
export default content;
