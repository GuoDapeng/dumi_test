// .dumi/global.ts
import { Prism } from 'prism-react-renderer';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-kotlin');
require('prismjs/components/prism-csharp');
