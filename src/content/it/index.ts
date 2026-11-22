import type { SiteContent } from '../types';
import { nav, footer, common, visuals } from './base';
import { home } from './home';
import { jobs } from './jobs';
import { ai } from './ai';
import { pricing, demo, switching, faqPage, about, resources } from './pages';
import { articles } from './articles';
import { glossary } from './glossary';

const content: SiteContent = {
  locale: 'it', nav, footer, common, visuals, home, jobs, ai,
  pricing, demo, switching, faqPage, about, resources, articles, glossary
};
export default content;
