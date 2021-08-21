import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
import * as path from 'path'; // add path which will be needed for file write
import * as fs from 'fs'; // import file system object
let routes = ['/','/developers','/faq','/team','/enterprise','/research','/press','/pebble','/advanced','/for-investors','/ucam','/policy','/blog']

const dest = path.resolve('./dist', 'sitemap.xml');

const hostname = 'https://iotex.io/';

const sitemap = buildSitemap(hostname, routes);
fs.writeFileSync(dest, sitemap.toString())
