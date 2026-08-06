import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as StepsComponents from 'fumadocs-ui/components/steps';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import * as AccordionComponents from 'fumadocs-ui/components/accordion';
import * as TypeTableComponents from 'fumadocs-ui/components/type-table';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ...StepsComponents,
    ...TabsComponents,
    ...AccordionComponents,
    ...TypeTableComponents,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
